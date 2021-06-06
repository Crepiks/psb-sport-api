import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePrizeDto } from './dto/create-prize.dto';
import { Prize } from 'src/entities/prize.entity';
import { PrizesRepository } from 'src/data/repositories/prizes.repository';
import { UpdatePrizeDto } from './dto/update-prize.dto';
import { FileStorageService } from 'src/file-storage/file-storage.service';

@Injectable()
export class PrizesService {
  constructor(
    private readonly prizesRepository: PrizesRepository,
    private readonly fileStorageService: FileStorageService,
  ) {}

  async findAll() {
    const prizes = await this.prizesRepository.findAll();

    return prizes;
  }

  async findOne(id: number): Promise<Prize> {
    const prize = await this.prizesRepository.detailById(id);
    if (!prize) {
      throw new NotFoundException('Prize  not found');
    }

    return prize;
  }

  async create(payload: CreatePrizeDto): Promise<Prize> {
    const prize = await this.prizesRepository.insertAndFetch(payload);

    return prize;
  }

  async update(id: number, payload: UpdatePrizeDto) {
    const prize = await this.prizesRepository.updateAndFetchById(id, payload);
    if (!prize) {
      throw new NotFoundException('Prize not found');
    }

    return prize;
  }

  async uploadImage(prizeId: number, imagePath: string): Promise<Prize> {
    let prize = await this.prizesRepository.findById(prizeId);
    if (!prize) {
      throw new NotFoundException('Prize not found');
    }

    const filePath = await this.fileStorageService.uploadImage(imagePath);
    await this.prizesRepository.insertImage(prize.id, {
      imagePath: filePath,
    });
    prize = await this.prizesRepository.detailById(prize.id);

    return prize;
  }

  async remove(id: number): Promise<void> {
    const rowsDeleted = await this.prizesRepository.deleteById(id);
    if (!rowsDeleted) {
      throw new NotFoundException('Prize not found');
    }
  }

  async removeImage(prizeId: number, imageId: number): Promise<void> {
    const prize = await this.prizesRepository.findById(prizeId);
    if (!prize) {
      throw new NotFoundException('Prize not found');
    }

    const image = await this.prizesRepository.findImageById(prize.id, imageId);
    if (!image) {
      throw new NotFoundException('Image not found');
    }

    await this.prizesRepository.deleteImageById(image.id);
    await this.fileStorageService.deleteFile(image.imagePath);
  }
}

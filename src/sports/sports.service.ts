import { Injectable, NotFoundException } from '@nestjs/common';
import { Sport } from 'src/entities/sport.entity';
import { SportsRepository } from 'src/data/repositories/sports.repository';
import { CreateSportDto } from './dto/create-sport.dto';

@Injectable()
export class SportsService {
  constructor(private readonly sportsRepository: SportsRepository) {}

  async findAll() {
    const sports = await this.sportsRepository.findAll();

    return sports;
  }

  async findOne(id: number): Promise<Sport> {
    const sport = await this.sportsRepository.detailById(id);
    if (!sport) {
      throw new NotFoundException('Sport  not found');
    }

    return sport;
  }

  async create(payload: CreateSportDto): Promise<Sport> {
    const event = await this.sportsRepository.insertAndFetch(payload);

    return event;
  }

  async remove(id: number): Promise<void> {
    const rowsDeleted = await this.sportsRepository.deleteById(id);
    if (!rowsDeleted) {
      throw new NotFoundException('Sport not found');
    }
  }
}

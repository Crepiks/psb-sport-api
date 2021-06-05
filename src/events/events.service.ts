import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from 'src/entities/event.entity';
import { EventsRepository } from 'src/data/repositories/events.repository';
import { UpdateEventDto } from './dto/update-event.dto';
import { FileStorageService } from 'src/file-storage/file-storage.service';

@Injectable()
export class EventsService {
  constructor(
    private readonly eventsRepository: EventsRepository,
    private readonly fileStorageService: FileStorageService,
  ) {}

  async findAll() {
    const events = await this.eventsRepository.findAll();

    return events;
  }

  async findOne(id: number): Promise<Event> {
    const event = await this.eventsRepository.detailById(id);
    if (!event) {
      throw new NotFoundException('Event  not found');
    }

    return event;
  }

  async create(payload: CreateEventDto): Promise<Event> {
    const event = await this.eventsRepository.insertAndFetch(payload);

    return event;
  }

  async update(id: number, payload: UpdateEventDto) {
    const event = await this.eventsRepository.updateAndFetchById(id, payload);
    if (!event) {
      throw new NotFoundException('Event not found');
    }

    return event;
  }

  async uploadImage(eventId: number, imagePath: string): Promise<Event> {
    let event = await this.eventsRepository.findById(eventId);
    if (!event) {
      throw new NotFoundException('Event not found');
    }

    const filePath = await this.fileStorageService.uploadImage(imagePath);
    await this.eventsRepository.insertImage(event.id, {
      imagePath: filePath,
    });
    event = await this.eventsRepository.detailById(event.id);

    return event;
  }

  async remove(id: number): Promise<void> {
    const rowsDeleted = await this.eventsRepository.deleteById(id);
    if (!rowsDeleted) {
      throw new NotFoundException('Event not found');
    }
  }

  async removeImage(eventId: number, imageId: number): Promise<void> {
    const event = await this.eventsRepository.findById(eventId);
    if (!event) {
      throw new NotFoundException('Event not found');
    }

    const image = await this.eventsRepository.findImageById(event.id, imageId);
    if (!image) {
      throw new NotFoundException('Image not found');
    }

    await this.eventsRepository.deleteImageById(image.id);
    await this.fileStorageService.deleteFile(image.imagePath);
  }
}

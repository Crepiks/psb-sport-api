import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from 'src/entities/event.entity';
import { EventsRepository } from 'src/data/repositories/events.repository';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
  constructor(private readonly eventsRepository: EventsRepository) {}

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

  async remove(id: number): Promise<void> {
    const rowsDeleted = await this.eventsRepository.deleteById(id);
    if (!rowsDeleted) {
      throw new NotFoundException('Event not found');
    }
  }
}

import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from 'src/entities/event.entity';
import { EventsRepository } from 'src/data/repositories/events.repository';

@Injectable()
export class EventsService {
  constructor(private readonly eventsRepository: EventsRepository) {}

  async findAll() {
    const events = await this.eventsRepository.findAll();

    return events;
  }

  async create(payload: CreateEventDto): Promise<Event> {
    const event = await this.eventsRepository.insertAndFetch(payload);

    return event;
  }
}

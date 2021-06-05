import { Injectable } from '@nestjs/common';
import { Event } from 'src/entities/event.entity';
import { CreateEventDto } from 'src/events/dto/create-event.dto';
import EventModel from '../models/event.model';
import { UpdateEventDto } from 'src/events/dto/update-event.dto';

@Injectable()
export class EventsRepository {
  async findAll() {
    return EventModel.query();
  }

  insertAndFetch(payload: CreateEventDto): Promise<Event> {
    return EventModel.query().insertAndFetch(payload);
  }

  findById(id: number): Promise<Event> {
    return EventModel.query().findById(id);
  }

  detailById(id: number): Promise<Event> {
    return EventModel.query().findById(id);
  }

  updateAndFetchById(id: number, payload: UpdateEventDto): Promise<Event> {
    return EventModel.query().patchAndFetchById(id, payload);
  }

  deleteById(id: number): Promise<number> {
    return EventModel.query().deleteById(id);
  }
}

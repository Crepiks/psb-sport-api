import { Injectable } from '@nestjs/common';
import { Event } from 'src/entities/event.entity';
import { CreateEventDto } from 'src/events/dto/create-event.dto';
import { EventImage } from 'src/entities/event-image.entity';
import EventModel from '../models/event.model';
import EventImageModel from '../models/event-image.model';
import { UpdateEventDto } from 'src/events/dto/update-event.dto';
import { InsertEventImageDto } from '../dto/insert-event-image.dto';

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

  insertImage(id: number, payload: InsertEventImageDto): Promise<EventImage> {
    return EventModel.relatedQuery('images').for(id).insertAndFetch(payload);
  }

  deleteById(id: number): Promise<number> {
    return EventModel.query().deleteById(id);
  }

  findImageById(eventId: number, imageId: number): Promise<EventImage> {
    return EventModel.relatedQuery('images').for(eventId).findById(imageId);
  }

  deleteImageById(imageId: number): Promise<number> {
    return EventImageModel.query().deleteById(imageId);
  }
}

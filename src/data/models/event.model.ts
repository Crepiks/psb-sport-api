import { Model } from 'objection';
import EventImageModel from './event-image.model';

class EventModel extends Model {
  static tableName = 'events';

  id: number;
  title: string;
  description: string;
  date: string;
  duration: number;
  createdAt: string;
  images: EventImageModel[];

  static get relationMappings() {
    const EventImage = require('./event-image.model');

    return {
      images: {
        relation: Model.HasManyRelation,
        modelClass: EventImage,
        join: {
          from: 'events.id',
          to: 'event_images.eventId',
        },
      },
    };
  }
}

module.exports = EventModel;
export default EventModel;

import { Model } from 'objection';

class EventImage extends Model {
  static tableName = 'event_images';

  id!: number;
  eventId!: number;
  imagePath!: string;
  createdAt!: string;

  static get relationMappings() {
    const Event = require('./event.model');

    return {
      event: {
        relation: Model.BelongsToOneRelation,
        modelClass: Event,
        join: {
          from: 'event_images.eventId',
          to: 'events.id',
        },
      },
    };
  }
}

module.exports = EventImage;
export default EventImage;

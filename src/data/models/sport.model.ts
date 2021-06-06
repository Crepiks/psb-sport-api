import { Model } from 'objection';

class SportModel extends Model {
  static tableName = 'sports';

  id: number;
  title: string;
  createdAt: string;

  // static get relationMappings() {
  //   const EventImage = require('./event-image.model');

  //   return {
  //     images: {
  //       relation: Model.HasManyRelation,
  //       modelClass: EventImage,
  //       join: {
  //         from: 'events.id',
  //         to: 'event_images.eventId',
  //       },
  //     },
  //   };
  // }
}

module.exports = SportModel;
export default SportModel;

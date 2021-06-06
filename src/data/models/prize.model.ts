import { Model } from 'objection';
import PrizeImageModel from './prize-image.model';

class PrizeModel extends Model {
  static tableName = 'prizes';

  id: number;
  title: string;
  description: string;
  cost: number;
  createdAt: string;
  images: PrizeImageModel[];

  static get relationMappings() {
    const EventImage = require('./event-image.model');

    return {
      images: {
        relation: Model.HasManyRelation,
        modelClass: EventImage,
        join: {
          from: 'prizes.id',
          to: 'prize_images.prizeId',
        },
      },
    };
  }
}

module.exports = PrizeModel;
export default PrizeModel;

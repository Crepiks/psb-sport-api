import { Model } from 'objection';

class PrizeImage extends Model {
  static tableName = 'prize_images';

  id!: number;
  prizeId!: number;
  imagePath!: string;
  createdAt!: string;

  static get relationMappings() {
    const Prize = require('./prize.model');

    return {
      event: {
        relation: Model.BelongsToOneRelation,
        modelClass: Prize,
        join: {
          from: 'prize_images.prizeId',
          to: 'prizes.id',
        },
      },
    };
  }
}

module.exports = PrizeImage;
export default PrizeImage;

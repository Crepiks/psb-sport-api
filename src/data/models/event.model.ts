import { Model } from 'objection';

class EventModel extends Model {
  static tableName = 'events';

  id: number;
  title: string;
  description: string;
  date: string;
  duration: number;
  createdAt: string;

  // static get relationMappings() {
  //   const Category = require('./category.model');
  //   const ProductImage = require('./product-image.model');

  //   return {
  //     category: {
  //       relation: Model.BelongsToOneRelation,
  //       modelClass: Category,
  //       join: {
  //         from: 'products.categoryId',
  //         to: 'categories.id',
  //       },
  //     },
  //     images: {
  //       relation: Model.HasManyRelation,
  //       modelClass: ProductImage,
  //       join: {
  //         from: 'products.id',
  //         to: 'product_images.productId',
  //       },
  //     },
  //   };
  // }
}

module.exports = EventModel;
export default EventModel;

import { Injectable } from '@nestjs/common';
import { Prize } from 'src/entities/prize.entity';
import { CreatePrizeDto } from 'src/prizes/dto/create-prize.dto';
import { PrizeImage } from 'src/entities/prize-image.entity';
import PrizeModel from '../models/prize.model';
import PrizeImageModel from '../models/prize-image.model';
import { UpdatePrizeDto } from 'src/prizes/dto/update-prize.dto';
import { InsertPrizeImageDto } from '../dto/insert-prize-image.dto';

@Injectable()
export class PrizesRepository {
  async findAll() {
    return PrizeModel.query();
  }

  insertAndFetch(payload: CreatePrizeDto): Promise<Prize> {
    return PrizeModel.query().insertAndFetch(payload);
  }

  findById(id: number): Promise<Prize> {
    return PrizeModel.query().findById(id);
  }

  detailById(id: number): Promise<Prize> {
    return PrizeModel.query().findById(id);
  }

  updateAndFetchById(id: number, payload: UpdatePrizeDto): Promise<Prize> {
    return PrizeModel.query().patchAndFetchById(id, payload);
  }

  insertImage(id: number, payload: InsertPrizeImageDto): Promise<PrizeImage> {
    return PrizeModel.relatedQuery('images').for(id).insertAndFetch(payload);
  }

  deleteById(id: number): Promise<number> {
    return PrizeModel.query().deleteById(id);
  }

  findImageById(eventId: number, imageId: number): Promise<PrizeImage> {
    return PrizeModel.relatedQuery('images').for(eventId).findById(imageId);
  }

  deleteImageById(imageId: number): Promise<number> {
    return PrizeImageModel.query().deleteById(imageId);
  }
}

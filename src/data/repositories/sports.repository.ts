import { Injectable } from '@nestjs/common';
import { Sport } from 'src/entities/sport.entity';
import { CreateSportDto } from 'src/sports/dto/create-sport.dto';
import SportModel from '../models/sport.model';

@Injectable()
export class SportsRepository {
  async findAll() {
    return SportModel.query();
  }

  insertAndFetch(payload: CreateSportDto): Promise<Sport> {
    return SportModel.query().insertAndFetch(payload);
  }

  findById(id: number): Promise<Sport> {
    return SportModel.query().findById(id);
  }

  detailById(id: number): Promise<Sport> {
    return SportModel.query().findById(id);
  }

  deleteById(id: number): Promise<number> {
    return SportModel.query().deleteById(id);
  }
}

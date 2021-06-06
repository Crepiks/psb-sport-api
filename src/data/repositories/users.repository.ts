import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import UserModel from '../models/user.model';

@Injectable()
export class UsersRepository {
  findAll(): Promise<User[]> {
    return UserModel.query();
  }
}

import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UsersRepository } from 'src/data/repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.findAll();
  }
}

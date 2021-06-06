import { Module } from '@nestjs/common';
import { EventsRepository } from './events.repository';
import { UsersRepository } from './users.repository';
import { SportsRepository } from './sports.repository';
import { PrizesRepository } from './prizes.repository';
@Module({
  providers: [
    EventsRepository,
    UsersRepository,
    SportsRepository,
    PrizesRepository,
  ],
  exports: [
    EventsRepository,
    UsersRepository,
    SportsRepository,
    PrizesRepository,
  ],
})
export class RepositoriesModule {}

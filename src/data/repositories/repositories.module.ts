import { Module } from '@nestjs/common';
import { EventsRepository } from './events.repository';
import { UsersRepository } from './users.repository';
import { SportsRepository } from './sports.repository';
@Module({
  providers: [EventsRepository, UsersRepository, SportsRepository],
  exports: [EventsRepository, UsersRepository, SportsRepository],
})
export class RepositoriesModule {}

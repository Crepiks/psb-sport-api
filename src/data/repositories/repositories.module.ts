import { Module } from '@nestjs/common';
import { EventsRepository } from './events.repository';
import { UsersRepository } from './users.repository';
@Module({
  providers: [EventsRepository, UsersRepository],
  exports: [EventsRepository, UsersRepository],
})
export class RepositoriesModule {}

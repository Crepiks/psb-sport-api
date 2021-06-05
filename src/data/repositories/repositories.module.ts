import { Module } from '@nestjs/common';
import { EventsRepository } from './events.repository';
@Module({
  providers: [EventsRepository],
  exports: [EventsRepository],
})
export class RepositoriesModule {}

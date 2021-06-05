import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { RepositoriesModule } from 'src/data/repositories/repositories.module';

@Module({
  imports: [RepositoriesModule],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}

import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { RepositoriesModule } from 'src/data/repositories/repositories.module';
import { FileStorageModule } from 'src/file-storage/file-storage.module';

@Module({
  imports: [RepositoriesModule, FileStorageModule],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}

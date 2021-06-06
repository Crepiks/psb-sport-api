import { Module } from '@nestjs/common';
import { PrizesService } from './prizes.service';
import { PrizesController } from './prizes.controller';
import { RepositoriesModule } from 'src/data/repositories/repositories.module';
import { FileStorageModule } from 'src/file-storage/file-storage.module';

@Module({
  imports: [RepositoriesModule, FileStorageModule],
  controllers: [PrizesController],
  providers: [PrizesService],
})
export class PrizesModule {}

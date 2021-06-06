import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { PrizesService } from './prizes.service';
import { CreatePrizeDto } from './dto/create-prize.dto';
import { UpdatePrizeDto } from './dto/update-prize.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('api/prizes')
export class PrizesController {
  constructor(private readonly prizesService: PrizesService) {}

  @Get()
  async findAll() {
    return {
      prizes: await this.prizesService.findAll(),
    };
  }

  @Post()
  async create(@Body() createPrizeDto: CreatePrizeDto) {
    return {
      event: await this.prizesService.create(createPrizeDto),
    };
  }

  @Get(':prizeId')
  async findOne(@Param('prizeId') prizeId: string) {
    return {
      event: await this.prizesService.findOne(+prizeId),
    };
  }

  @Patch(':prizeId')
  async update(
    @Param('prizeId') prizeId: string,
    @Body() updatePrizeDto: UpdatePrizeDto,
  ) {
    return {
      prize: await this.prizesService.update(+prizeId, updatePrizeDto),
    };
  }

  @Delete(':prizeId')
  remove(@Param('prizeId') prizeId: string) {
    return this.prizesService.remove(+prizeId);
  }

  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage,
    }),
  )
  @Post(':prizeId/images')
  async uploadImage(
    @UploadedFile() image: Express.Multer.File,
    @Param('prizeId') prizeId: string,
  ) {
    return {
      prize: await this.prizesService.uploadImage(+prizeId, image.path),
    };
  }

  @Delete(':prizeId/images/:imageId')
  deleteImage(
    @Param('prizeId') prizeId: string,
    @Param('imageId') imageId: string,
  ) {
    return this.prizesService.removeImage(+prizeId, +imageId);
  }
}

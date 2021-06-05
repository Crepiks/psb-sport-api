import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { EventsService } from './events.service';
import { UpdateEventDto } from './dto/update-event.dto';

@Controller('api/events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  async findAll() {
    return {
      events: await this.eventsService.findAll(),
    };
  }

  @Post()
  async create(@Body() createEventDto: CreateEventDto) {
    return {
      event: await this.eventsService.create(createEventDto),
    };
  }

  @Get(':eventId')
  async findOne(@Param('eventId') eventId: string) {
    return {
      event: await this.eventsService.findOne(+eventId),
    };
  }

  @Patch(':eventId')
  async update(
    @Param('eventId') eventId: string,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    return {
      product: await this.eventsService.update(+eventId, updateEventDto),
    };
  }

  @Delete(':eventId')
  remove(@Param('eventId') eventId: string) {
    return this.eventsService.remove(+eventId);
  }

  // @Post(':productId/images')
  // async uploadImage(
  //   @UploadedFile() image: Express.Multer.File,
  //   @Param('productId') productId: string,
  // ) {
  //   return {
  //     product: await this.productsService.uploadImage(+productId, image.path),
  //   };
  // }

  // @Delete(':productId/images/:imageId')
  // deleteImage(
  //   @Param('productId') productId: string,
  //   @Param('imageId') imageId: string,
  // ) {
  //   return this.productsService.removeImage(+productId, +imageId);
  // }
}

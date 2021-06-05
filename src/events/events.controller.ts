import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { EventsService } from './events.service';

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

  // @Patch(':productId')
  // async update(
  //   @Param('productId') productId: string,
  //   @Body() updateProductDto: UpdateProductDto,
  // ) {
  //   return {
  //     product: await this.productsService.update(+productId, updateProductDto),
  //   };
  // }

  // @Delete(':productId')
  // remove(@Param('productId') productId: string) {
  //   return this.productsService.remove(+productId);
  // }

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

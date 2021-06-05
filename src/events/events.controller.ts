import { Controller, Post, Body, Get } from '@nestjs/common';
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
}

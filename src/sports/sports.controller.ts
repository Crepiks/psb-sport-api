import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { SportsService } from './sports.service';
import { CreateSportDto } from './dto/create-sport.dto';

@Controller('api/sports')
export class SportsController {
  constructor(private readonly sportsService: SportsService) {}

  @Get()
  async findAll() {
    return {
      sports: await this.sportsService.findAll(),
    };
  }

  @Post()
  async create(@Body() createSportDto: CreateSportDto) {
    return {
      sport: await this.sportsService.create(createSportDto),
    };
  }

  @Get(':sportId')
  async findOne(@Param('sportId') sportId: string) {
    return {
      sport: await this.sportsService.findOne(+sportId),
    };
  }

  @Delete(':sportId')
  remove(@Param('sportId') sportId: string) {
    return this.sportsService.remove(+sportId);
  }
}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { EventsModule } from './events/events.module';
import { UsersModule } from './users/users.module';
import { SportsModule } from './sports/sports.module';
import { PrizesModule } from './prizes/prizes.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    EventsModule,
    UsersModule,
    SportsModule,
    PrizesModule,
  ],
})
export class AppModule {}

import { RedisModule } from 'nestjs-redis'
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageService } from './message.service';

const options = {
  url: process.env.REDIS_URL,
}

@Module({
  imports: [
    RedisModule.register(options)
  ],
  controllers: [AppController],
  providers: [AppService, MessageService],
})
export class AppModule {}

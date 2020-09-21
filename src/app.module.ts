import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageService } from './message.service';
import { MessageConsumer } from './message.consumer';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'message',
      redis: {
        host: 'redis',
        port: 6379,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, MessageService, MessageConsumer],
})
export class AppModule {}

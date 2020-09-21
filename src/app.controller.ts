import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageService } from './message.service';
import { MessageConsumer } from './message.consumer';

@Controller()
export class AppController {
  constructor(private appService: AppService, private messageService: MessageService, private messageConsumer: MessageConsumer) {}

  @Get()
  async getHello(): Promise<string> {
    return await this.messageService.add('hoge', 'body').then(() => 'added.');
  }
}

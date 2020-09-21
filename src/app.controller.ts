import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageService } from './message.service';

@Controller()
export class AppController {
  constructor(private appService: AppService, private messageService: MessageService) {}

  @Get()
  async getHello(): Promise<string> {
    return await this.messageService.add('hoge', 'body').then(() => 'added.');
  }
}

import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageService } from './message.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private appService: AppService, private messageService: MessageService) {}

  @Get()
  async getHello(@Res() res: Response): Promise<string> {
    return await this.messageService.sub('chatId', res).then(() => 'subbed.');
  }

  @Get('pub')
  async chatId(): Promise<string> {
    return await this.messageService.pub('chatId', 'body').then(() => 'PUBBED.');
  }
}

import { AppService } from './app.service';
import { MessageService } from './message.service';
import { Response } from 'express';
export declare class AppController {
    private appService;
    private messageService;
    constructor(appService: AppService, messageService: MessageService);
    getHello(res: Response): Promise<string>;
    chatId(): Promise<string>;
}

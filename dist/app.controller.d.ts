import { AppService } from './app.service';
import { MessageService } from './message.service';
export declare class AppController {
    private appService;
    private messageService;
    constructor(appService: AppService, messageService: MessageService);
    getHello(): Promise<string>;
}

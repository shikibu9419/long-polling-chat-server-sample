import { AppService } from './app.service';
import { MessageService } from './message.service';
import { MessageConsumer } from './message.consumer';
export declare class AppController {
    private appService;
    private messageService;
    private messageConsumer;
    constructor(appService: AppService, messageService: MessageService, messageConsumer: MessageConsumer);
    getHello(): Promise<string>;
}

import { Queue } from 'bull';
import { Job } from 'bull';
export declare class MessageService {
    private messageQueue;
    constructor(messageQueue: Queue);
    add(chatId: string, body: string): Promise<Job>;
}

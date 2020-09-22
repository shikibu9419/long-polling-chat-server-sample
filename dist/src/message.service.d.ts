import { RedisService } from 'nestjs-redis';
export declare class MessageService {
    private readonly redisService;
    constructor(redisService: RedisService);
    pub(chatId: string, body: string): Promise<string>;
    sub(chatId: string, res: any): Promise<void>;
}

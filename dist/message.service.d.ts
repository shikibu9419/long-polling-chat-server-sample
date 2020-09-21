import { RedisService } from 'nestjs-redis';
export declare class MessageService {
    private readonly redisService;
    constructor(redisService: RedisService);
    add(chatId: string, body: string): Promise<boolean>;
}

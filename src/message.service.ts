import { Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';

@Injectable()
export class MessageService {
  constructor(private readonly redisService: RedisService) {}

  async add(chatId: string, body: string): Promise<boolean> {
    const client = await this.redisService.getClient()
    client.set(chatId, body)
    console.log(await client.get(chatId))
    return true
  }
}

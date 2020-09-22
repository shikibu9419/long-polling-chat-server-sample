import { Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';

@Injectable()
export class MessageService {
  constructor(private readonly redisService: RedisService) {}

  async pub(chatId: string, body: string): Promise<string> {
    const client = this.redisService.getClient('sub')
    const publisher = this.redisService.getClient('pub')

    client.subscribe(chatId, (err, count) => {
      console.log('subscribed:', err, count)
      publisher.publish(chatId, body).then((value) => console.log('pubbed', value)).catch((err) => console.log('err:', err))
    })
    console.log('published', chatId, body)
    return body
  }

  async sub(chatId: string, res: any): Promise<void> {
    const client = this.redisService.getClient('sub')

    client.subscribe(chatId, () => {
      client.on('message', (channel, message) => {
        console.log('message received:', channel, message)
        res.send(message)
      })
    })
  }
}

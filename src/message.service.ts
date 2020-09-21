import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';
import { Job } from 'bull';

@Injectable()
export class MessageService {
  constructor(@InjectQueue('message') private messageQueue: Queue) {}

  async add(chatId: string, body: string): Promise<Job> {
    console.log('add')
    const job = await this.messageQueue.add({ chatId, body });
    return job
  }
}

import { Processor, Process, OnQueueActive, OnQueueWaiting } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('message')
export class MessageConsumer {

  @OnQueueWaiting()
  onWaiting(jobId: number | string) {
    console.log(`Waiting job ${jobId}`);
  }

  @OnQueueActive()
  onActive(job: Job) {
    console.log(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }
}

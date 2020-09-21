import { Job } from 'bull';
export declare class MessageConsumer {
    onWaiting(jobId: number | string): void;
    onActive(job: Job): void;
}

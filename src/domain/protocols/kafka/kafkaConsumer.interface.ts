import { EachMessagePayload } from 'kafkajs';

export interface IKafkaConsumer {
  connect(): Promise<void>;
  subscribe(topic: string): Promise<void>;
  run(eachMessage: (payload: EachMessagePayload) => Promise<void>): Promise<void>;
  disconnect(): Promise<void>;
}

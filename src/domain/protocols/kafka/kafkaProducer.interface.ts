import { RecordMetadata } from "kafkajs";

export interface IKafkaProducer {
    connect(): Promise<void>;
    sendMessage(topic: string, messages: { key?: string; value: string }[]): Promise<RecordMetadata[]>
    disconnect(): Promise<void>;
  }
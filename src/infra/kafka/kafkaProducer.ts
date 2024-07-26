import { IKafkaProducer } from '@/domain/protocols';
import kafkaClient from './kafkaClient';
import { Producer, RecordMetadata } from 'kafkajs';

class KafkaProducer implements IKafkaProducer {
    private producer: Producer;

    constructor() {
        this.producer = kafkaClient.producer();
    }

    async connect() {
        try {
            await this.producer.connect();
            console.log('Kafka producer connected');
        } catch (error: any) {
            const errorMessage = 'Error connecting Kafka producer';
            console.error(`${errorMessage}:`, error);
            throw new Error(`${errorMessage}: ${error.message}`);
        }
    }

    async sendMessage(topic: string, messages: { key?: string; value: string }[]): Promise<RecordMetadata[]> {
        try {
            const result = await this.producer.send({
                topic,
                messages,
            });
            console.log(`Message sent to topic ${topic}`, result);
            return result;
        } catch (error: any) {
            const errorMessage = `Error sending message to topic ${topic}`;
            console.error(`${errorMessage}:`, error);
            throw new Error(`${errorMessage}: ${error.message}`);
        }
    }

    async disconnect() {
        try {
            await this.producer.disconnect();
            console.log('Kafka producer disconnected');
        } catch (error: any) {
            const errorMessage = 'Error disconnecting Kafka producer';
            console.error(`${errorMessage}:`, error);
            throw new Error(`${errorMessage}: ${error.message}`);
        }
    }
}

export default KafkaProducer;

import kafkaClient from './kafkaClient';
import { Consumer, EachMessagePayload } from 'kafkajs';

class KafkaConsumer {
  private consumer: Consumer;

  constructor(groupId: string) {
    this.consumer = kafkaClient.consumer({ groupId });
  }

  async connect() {
    try {
      await this.consumer.connect();
      console.log('Kafka consumer connected');
    } catch (error: any) {
      const errorMessage = 'Error connecting Kafka consumer';
      console.error(`${errorMessage}:`, error);
      throw new Error(`${errorMessage}: ${error.message}`);
    }
  }

  async subscribe(topic: string) {
    try {
      await this.consumer.subscribe({ topic, fromBeginning: true });
      console.log(`Subscribed to topic ${topic}`);
    } catch (error: any) {
      const errorMessage = `Error subscribing to topic ${topic}`;
      console.error(`${errorMessage}:`, error);
      throw new Error(`${errorMessage}: ${error.message}`);
    }
  }

  async run(eachMessage: (payload: EachMessagePayload) => Promise<void>) {
    try {
      await this.consumer.run({
        eachMessage: async (payload: EachMessagePayload) => {
          await eachMessage(payload);
        },
      });
      console.log('Kafka consumer running');
    } catch (error: any) {
      const errorMessage = 'Error running Kafka consumer';
      console.error(`${errorMessage}:`, error);
      throw new Error(`${errorMessage}: ${error.message}`);
    }
  }

  async disconnect() {
    try {
      await this.consumer.disconnect();
      console.log('Kafka consumer disconnected');
    } catch (error: any) {
      const errorMessage = 'Error disconnecting Kafka consumer';
      console.error(`${errorMessage}:`, error);
      throw new Error(`${errorMessage}: ${error.message}`);
    }
  }
}

export default KafkaConsumer;

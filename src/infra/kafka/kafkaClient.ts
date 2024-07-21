import { Kafka } from 'kafkajs';

const kafkaClient = new Kafka({
  clientId: 'my-clientId',
  brokers: ['localhost:9093']
});

export default kafkaClient;

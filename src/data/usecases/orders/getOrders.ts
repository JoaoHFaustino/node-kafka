import { GetOrdersProtocol, IGetOrdersProtocol } from "@/domain/protocols";
import KafkaConsumer from "@/infra/kafka/kafkaConsumer";


export class GetOrders implements GetOrdersProtocol {
    private kafkaConsumer: KafkaConsumer;

    constructor() {
        this.kafkaConsumer = new KafkaConsumer("my-group-id");
    }

    async getOrders(): Promise<IGetOrdersProtocol.Result> {
        await this.kafkaConsumer.connect();
        await this.kafkaConsumer.subscribe('orders');

        const orders: IGetOrdersProtocol.Result['orders'] = [];

        await this.kafkaConsumer.run(async ({ message }) => {
            if (message.value) {
                const order = JSON.parse(message.value.toString());
                orders.push(order);
            }
        });

        // Esperar um tempo suficiente para consumir mensagens
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        await this.kafkaConsumer.disconnect();

        return {
            orders
        };
    }
}
import { generateTransactionIdHelper } from "@/domain/helpers/generateTransactionIdHelper";
import { AddOrderProtocol } from "@/domain/protocols/orders/addOrder.interface";
import KafkaProducer from "@/infra/kafka/kafkaProducer";

const producer = new KafkaProducer();

export class AddOrder implements AddOrderProtocol {
    async addOrder(params: AddOrderProtocol.Params): Promise<AddOrderProtocol.Result> {
        try {
            const { orderId, customerId, items, totalAmount, paymentMethod, status } = params;
            await producer.connect();

            const message = {
                orderId,
                customerId,
                items,
                totalAmount,
                paymentMethod,
                status,
                transactionId: generateTransactionIdHelper(),
            };

            const result = await producer.sendMessage('orders', [
                { key: params.orderId, value: JSON.stringify(message) }
            ]);

            const success = result.some(record => record.errorCode === 0);
            await producer.disconnect();

            if (success) {
                return { success: true, transactionId: message.transactionId, message: 'Message successfully sent' };
            } else {
                return { success: false, message: 'Message sending failed' };
            }
        } catch (error: any) {
            return { success: false, message: `Error during adding order: ${error.message}` };
        }
    }
}

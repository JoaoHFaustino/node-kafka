import { EKafkaErrorCodes } from "@/domain/enums/kafkaErrorCodes";
import { generateTransactionIdHelper } from "@/domain/helpers/generateTransactionIdHelper";
import { KafkaErrorMessages } from "@/domain/models/kafkaErrorMessages";
import { IAddOrder } from "@/domain/protocols/orders/addOrder.interface";
import KafkaProducer from "@/infra/kafka/kafkaProducer";

const producer = new KafkaProducer();

export class AddOrder implements IAddOrder {
    async addOrder(params: IAddOrder.Params): Promise<IAddOrder.Result> {
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

            const errorCode = result[0].errorCode as EKafkaErrorCodes
            await producer.disconnect();

            if (errorCode !== EKafkaErrorCodes.NoError) {
                const errorMessage = KafkaErrorMessages[errorCode] || 'Unknown error'
                return { success: false, message: `Message sending failed ${errorMessage}` };
            }

            return { success: true, transactionId: message.transactionId, message: 'Message successfully sent' };

        } catch (error: any) {
            return { success: false, message: `Error during adding order: ${error.message}` };
        }
    }
}

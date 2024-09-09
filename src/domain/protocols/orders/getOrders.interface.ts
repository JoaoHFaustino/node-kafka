import { EPaymentMethod, EOrderStatus } from "@/domain/enums";

export namespace IGetOrders {
    export type Result = IGetOrdersResult;
}
interface Order {
    orderId: string;
    customerId: string;
    items: Array<{
        productId: string;
        quantity: number;
    }>;
    totalAmount: number;
    paymentMethod: EPaymentMethod;
    status: EOrderStatus;
}

interface IGetOrdersResult {
    orders: Array<Order>
}



export interface IGetOrders {
    getOrders(): Promise<IGetOrders.Result>
}

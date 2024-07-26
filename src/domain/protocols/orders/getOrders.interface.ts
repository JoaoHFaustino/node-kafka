import { EPaymentMethod, EOrderStatus } from "@/domain/enums";

export namespace IGetOrdersProtocol {
    export type Result = IGetOrdersResult;
}

interface IGetOrdersResult {
    orders: Array<Order>
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


export interface GetOrdersProtocol {
    getOrders(): Promise<IGetOrdersProtocol.Result>
}

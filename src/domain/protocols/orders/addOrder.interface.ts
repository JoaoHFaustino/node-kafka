import { EPaymentMethod, EOrderStatus } from "@/domain/enums";

export namespace IAddOrder {
    export type Params = IAddOrderParams;
    export type Result = IAddOrderResult;
}

interface IAddOrderParams {
    orderId: string
    customerId: string
    items: Array<{
        productId: string
        quantity: number
    }>
    totalAmount: number
    paymentMethod: EPaymentMethod
    status: EOrderStatus
}

interface IAddOrderResult {
    success: boolean
    message: string
    transactionId?: string
}

export interface IAddOrder {
    addOrder(params: IAddOrder.Params): Promise<IAddOrder.Result>
}

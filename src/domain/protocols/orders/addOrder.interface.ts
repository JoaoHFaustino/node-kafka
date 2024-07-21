import { EPaymentMethod, EOrderStatus } from "@/domain/enums";

export namespace AddOrderProtocol {
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

export interface AddOrderProtocol {
    addOrder(params: AddOrderProtocol.Params): Promise<AddOrderProtocol.Result>
}

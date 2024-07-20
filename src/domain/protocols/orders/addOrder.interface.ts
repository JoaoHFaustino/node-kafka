import { EPaymentMethod, EOrderStatus } from "@/domain/enums";

export namespace AddOrderProtocol {
    export type Params = IAddOrderParams;
    export type Result = void;
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
    transactionId: string
    status: EOrderStatus
}

export interface AddOrderProtocol {
    addOrder(params: AddOrderProtocol.Params): Promise<AddOrderProtocol.Result>
}

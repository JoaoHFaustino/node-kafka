import { AddOrderProtocol } from "@/domain/protocols/orders/addOrder.interface";

export class AddOrder implements AddOrderProtocol {
    addOrder(params: AddOrderProtocol.Params): Promise<AddOrderProtocol.Result> {
        throw new Error("Method not implemented.");
    }
}
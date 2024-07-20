
import { Request, Response } from 'express';
import { AddOrder } from '@/data/usecases/orders/addOrder';

const addOrder = new AddOrder();

export class OrderController {
    async createOrder(req: Request, res: Response): Promise<void> {
        try {
            const orderData = req.body;
            await addOrder.addOrder(orderData);

            res.status(201).json({
                message: 'Order created successfully'
            });
        } catch (error: any) {
            res.status(500).json({
                message: 'Failed to create order',
                error: error.message
            });
        }
    }
}
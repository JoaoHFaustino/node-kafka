
import { Request, Response } from 'express';
import { AddOrder } from '@/data/usecases/orders/addOrder';

const addOrder = new AddOrder();

export class OrderController {
    async createOrder(req: Request, res: Response): Promise<void> {
        try {
            const orderData = req.body;
            const response = await addOrder.addOrder(orderData);

            if (!response.success) {
                res.status(400).json(response);
            }

            res.status(201).json(response);

        } catch (error: any) {
            res.status(500).json({
                message: 'Internal server error',
                error: error.message
            });
        }
    }
}
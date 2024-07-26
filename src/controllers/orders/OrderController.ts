import { Request, Response } from 'express';
import { AddOrder } from '@/data/usecases/orders/addOrder';
import { orderSchema } from '@/validators/order/addOrderValidation';
import { GetOrders } from '@/data/usecases/orders/getOrders';

const addOrder = new AddOrder();
const getOrders = new GetOrders();

export class OrderController {
  async createOrder(req: Request, res: Response): Promise<Response> {
    try {
      const { error } = orderSchema.validate(req.body, { abortEarly: false });

      if (error) {
        return res.status(400).json({
          message: 'Validation error',
          details: error.details.map(detail => detail.message),
        });
      }

      const orderData = req.body;
      const response = await addOrder.addOrder(orderData);

      if (!response.success) {
        return res.status(400).json(response);
      }

      return res.status(201).json(response);
    } catch (error: any) {
      return res.status(500).json({
        message: 'Internal server error',
        error: error.message,
      });
    }
  }

  async getOrders(req: Request, res: Response): Promise<Response> {
    try {
        const response = await getOrders.getOrders();
      
        return res.status(200).json(response);
    } catch (error: any) {
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message,
        });
    }
}
}
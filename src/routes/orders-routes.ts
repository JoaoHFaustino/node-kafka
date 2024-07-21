import { Router } from "express";
import { OrderController } from '@/controllers/orders/addOrderController';

const ordersRoutes = Router();
const orderController = new OrderController();

ordersRoutes.post('/orders', (req, res) => orderController.createOrder(req, res));

export default ordersRoutes;
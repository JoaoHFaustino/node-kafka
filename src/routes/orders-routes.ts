import { Router } from "express";
import { OrderController } from '@/controllers/orders/OrderController';

const ordersRoutes = Router();
const orderController = new OrderController();

ordersRoutes.post('/orders', (req, res) => orderController.createOrder(req, res));
ordersRoutes.get('/orders', (req, res) => orderController.getOrders(req, res));

export default ordersRoutes;
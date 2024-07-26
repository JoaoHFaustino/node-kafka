import Joi from 'joi';

export const orderSchema = Joi.object({
  orderId: Joi.string().required(),
  customerId: Joi.string().required(),
  items: Joi.array().items(
    Joi.object({
      productId: Joi.string().required(),
      quantity: Joi.number().integer().min(1).required(),
    })
  ).required(),
  totalAmount: Joi.number().positive().required(),
  paymentMethod: Joi.string().valid('credit_card', 'paypal', 'bank_transfer').required(),
  status: Joi.string().valid('pending', 'completed', 'cancelled').required(),
});

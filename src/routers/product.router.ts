import { Router } from 'express';
import productsController from '../controller/product.controller';
import validateProducts from '../middleware/validateProducts';

const productRouter = Router();

productRouter.post(
  '/products',
  validateProducts.validateName,
  validateProducts.validatePrice,
  validateProducts.validateUserId,
  productsController.insertProduct,
);
productRouter.get('/products', productsController.getAll);

export default productRouter;
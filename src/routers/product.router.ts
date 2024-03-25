import { Router } from 'express';
import productsController from '../controller/product.controller';

const productRouter = Router();

productRouter.post('/products', productsController.insertProduct);
productRouter.get('/products', productsController.getAll);

export default productRouter;
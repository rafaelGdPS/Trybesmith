import { Router } from 'express';
import productsController from '../controller/product.controller';

const productRouter = Router();

productRouter.post('/products', productsController.insertProduct);

export default productRouter;
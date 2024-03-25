import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';
import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';

async function insertProducts(body: ProductInputtableTypes): Promise<ServiceResponse<Product>> {
  const product = await ProductModel.create(body);
 
  return { status: 'CREATED', data: product.dataValues };
}

export default {
  insertProducts,
};
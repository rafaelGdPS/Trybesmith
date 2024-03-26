import { Model } from 'sequelize';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';
import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import UserModel from '../database/models/user.model';

async function insertProducts(body: ProductInputtableTypes): Promise<ServiceResponse<Product>> {
  const user = await UserModel.findByPk(body.userId);

  if (!user) {
    return { status: 'NOT_FOUND',
      data: 
    { message: '"userId" not found' },
    };
  }
  
  const product = await ProductModel.create(body);
 
  return { status: 'CREATED', data: product.dataValues };
}

async function getAll(): Promise<ServiceResponse<Model<Product, ProductInputtableTypes>[]>> {
  const products = await ProductModel.findAll();
  return { status: 'SUCCESSFUL', data: products };
}

export default {
  insertProducts,
  getAll,
};
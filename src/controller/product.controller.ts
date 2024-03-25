import { Request, Response } from 'express';
import productsService from '../service/products.service';
import statusCode from '../utils/mapHttp';

async function insertProduct(req: Request, res: Response): Promise<Response> {
  const { body } = req;
  const { data, status } = await productsService.insertProducts(body);

  return res.status(statusCode(status)).json(data);
}

async function getAll(_req: Request, res: Response): Promise<Response> {
  const { data, status } = await productsService.getAll();
  return res.status(statusCode(status)).json(data);
}

export default {
  insertProduct,
  getAll,
};
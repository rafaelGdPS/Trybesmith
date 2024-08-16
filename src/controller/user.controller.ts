import { Request, Response } from 'express';
import usersService from '../service/users.service';
import statusCode from '../utils/mapHttp';

async function getAll(_req: Request, res: Response): Promise<Response> {
  const { data, status } = await usersService.getAllJustSequelize();
  return res.status(statusCode(status)).json(data);
}

export default {
  getAll,
};
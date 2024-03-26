import { Request, Response } from 'express';
import loginService from '../service/login.service';
import statusCode from '../utils/mapHttp';

async function login(req: Request, res: Response): Promise<Response> {
  const { body } = req;
  const { data, status } = await loginService.login(body);

  return res.status(statusCode(status)).json(data);
}

export default {
  login,
};
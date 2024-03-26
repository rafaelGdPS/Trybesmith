import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { Login, Token } from '../types/User';
import jwtUtils from '../utils/jwt.utils';

async function login(body: Login): Promise<ServiceResponse<Token>> {
  if (!body.username || !body.password) {
    return { status: 'INVALID_DATA', data: { message: '"username" and "password" are required' } };
  }
  const user = await UserModel.findOne({ where: { username: body.username } });

  if (!user || !bcrypt.compareSync(body.password, user.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }
  const { id, username } = user.dataValues;
  const token = jwtUtils.create({ id, username });

  return { status: 'SUCCESSFUL', data: { token } };
}

export default {
  login,
};
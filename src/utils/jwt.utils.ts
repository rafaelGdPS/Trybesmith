import jwt from 'jsonwebtoken';
import { Payload } from '../types/User';

const SECRET = process.env.JWT_SECRET || 'secret';

function create(payload: Payload): string {
  const token = jwt.sign(payload, SECRET);
  return token;
}

function verify(token:string): Payload {
  const data = jwt.verify(token, SECRET) as Payload;

  return data;
}
export default {
  verify,
  create,
};

import { Product } from './Product';

export type User = {
  id: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
  products?: Product[]
  productIds?: { id: number }[];
};

export type Login = Pick<User, 'username' | 'password'>;
export type Payload = Pick<User, 'id' | 'username'>;

export type Token = {
  token: string
};
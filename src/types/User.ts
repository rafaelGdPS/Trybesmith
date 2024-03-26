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
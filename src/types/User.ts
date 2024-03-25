export type User = Omit<{
  id: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
  productIds: number;
}, 'productIds'
>; 
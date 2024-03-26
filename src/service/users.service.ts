import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/ServiceResponse';
import ProductModel from '../database/models/product.model';

type ModifyType = {
  username: string;
  productIds: number[] | undefined;
};

async function getAll(): Promise<ServiceResponse<ModifyType[]>> {
  const users = await UserModel.findAll({
    attributes: ['username'], 
    include: [{ model: ProductModel,
      as: 'products',
      attributes: ['id'],
    }],
  });

  // console.log(users);
  
  const modifyUser = users.map((user) => ({
    username: user.dataValues.username,
    productIds: user.dataValues.products?.map((product) => product.id),
    
  }));
  
  return { status: 'SUCCESSFUL', data: modifyUser };
}

export default {
  getAll,
};
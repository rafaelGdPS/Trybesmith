import { Model } from 'sequelize';
import UserModel, { UserInputtableTypes } from '../database/models/user.model';
import { ServiceResponse } from '../types/ServiceResponse';
import ProductModel from '../database/models/product.model';
import sequelize from '../database/models';
import { User } from '../types/User';

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

async function getAllJustSequelize(): Promise<ServiceResponse<Model<User, UserInputtableTypes>[]>> {
  const users = await UserModel.findAll({
    attributes: ['username',
      [sequelize.fn('JSON_ARRAYAGG', sequelize.col('productIds.id')), 'productIds'],
    ], 
    include: [{ model: ProductModel,
      as: 'productIds',
      attributes: [],
    }],
    group: ['User.id'],
    raw: true,
  });
  return { status: 'SUCCESSFUL', data: users };
}
export default {
  getAll,
  getAllJustSequelize,
};
import { Router } from 'express';
import userController from '../controller/user.controller';

const userRouter = Router();

userRouter.get('/users', userController.getAll);

export default userRouter;
import { NextFunction, Request, Response } from 'express';

const validateName = (req: Request, res: Response, next: NextFunction): Response | undefined => { 
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (typeof name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }
  if (name.length < 3) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
  next();
};

const validatePrice = (req: Request, res: Response, next: NextFunction): Response | undefined => { 
  const { price } = req.body;

  if (!price) {
    return res.status(400).json({ message: '"price" is required' });
  }
  if (typeof price !== 'string') {
    return res.status(422).json({ message: '"price" must be a string' });
  }
  if (price.length < 3) {
    return res.status(422).json({ message: '"price" length must be at least 3 characters long' });
  }
  next();
};
const validateUserId = (req: Request, res: Response, next: NextFunction): Response | undefined => { 
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: '"userId" is required' });
  }
  if (typeof userId !== 'number') {
    return res.status(422).json({ message: '"userId" must be a number' });
  }

  next();
};

export default {
  validateName,
  validatePrice,
  validateUserId,
};
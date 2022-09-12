import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { appConfig } from '../config/constants';
import { MSGs } from '../constants/index';

export const checkAuthentication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = (req.headers.authorization || '').split(' ')[1];
    const user = await jwt.verify(token, appConfig.jwtKey);
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: MSGs.UNAUTHENTICATED });
  }
};

import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../config/auth';
import { Request, Response, NextFunction } from 'express';

export default async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.idUser;

    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};

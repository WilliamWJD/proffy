import db from '../database/connection';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

import { checkPassword } from '../utils/hashBcrypts';
import authConfig from '../config/auth';

class SessionController {
  async store(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await db.select('logins.*').from('logins').where({
      email,
    });

    if (!user[0]) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await checkPassword(password, user[0].password_hash))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const idUser = user[0].id;

    return res.json({
      user: { id: user[0].id, email: user[0].email },
      token: jwt.sign({ idUser }, authConfig.secret, {
        expiresIn: authConfig.expireIn,
      }),
    });
  }
}

export default new SessionController();

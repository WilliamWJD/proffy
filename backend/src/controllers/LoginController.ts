import db from '../database/connection';
import { Request, Response } from 'express';
import { hashGenerator } from '../utils/hashBcrypts';

class LoginController {
  async store(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const password_hash = await hashGenerator(password);

    try {
      await db('logins').insert({
        name,
        email,
        password_hash,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: 'Error on create to user!' });
    }

    return res.status(200).json({});
  }
}

export default new LoginController();

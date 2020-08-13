import { Request, Response } from 'express';
import crypto from 'crypto';

import db from '../database/connection';
import Mail from '../lib/mail';

class ForgotPasswordController {
  async store(req: Request, res: Response) {
    //VERIFICA SE O E-MAIL  EXISTE NA BASE
    const { email } = req.body;

    const checkUser = await db.select('logins.*').from('logins').where({
      email,
    });

    const { id, name } = checkUser[0];

    if (!checkUser[0]) {
      return res.status(401).json({ error: 'User not found' });
    }

    const token = crypto.randomBytes(20).toString('hex');
    const now = new Date();
    now.setHours(now.getHours() + 1);

    await db('logins').where('id', '=', id).update({
      passwordRestToken: token,
      passwordResetExpires: now,
    });

    await Mail.sendMail({
      to: email,
      subject: 'E-mail de recuperação de senha',
      text: `Olá ${name} você esqueceu sua senha ? não se preocupe, utilize esse token: ${token} para estar alterando sua senha.`,
    });

    return res.send();
  }

  async resetPassword(req: Request, res: Response) {}
}

export default new ForgotPasswordController();

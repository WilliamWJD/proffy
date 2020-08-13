import { Request, Response } from 'express';
import db from '../database/connection';
import Mail from '../lib/mail';
import { hashGenerator } from '../utils/hashBcrypts';

class ForgotPasswordController {
  async store(req: Request, res: Response) {
    //VERIFICA SE O E-MAIL  EXISTE NA BASE
    const { email } = req.body;

    const checkUser = await db.select('logins.*').from('logins').where({
      email,
    });

    const { name } = checkUser[0];

    if (!checkUser[0]) {
      return res.status(401).json({ error: 'User not found' });
    }

    await Mail.sendMail({
      to: email,
      subject: 'E-mail de recuperação de senha',
      text: `Olá ${name} essa é sua senha provisória, não se esqueça de estar alterando ela em configurações de perfil.`,
    });

    return res.json({});
  }
}

export default new ForgotPasswordController();

require('dotenv').config();

export default {
  host: 'smtp.mailtrap.io',
  port: 2525,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.PASS,
  },
  default: {
    from: 'contato <contato@contato.com.br>',
  },
};

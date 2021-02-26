import { createTransport, getTestMessageUrl } from 'nodemailer';
import mailgunTransport from 'nodemailer-mailgun-transport';
import { forgotPassword } from '../templates/forgot-password';

// TODO - IMPLEMENT MAILGUN FOR EMAIL

const transport = createTransport(
  {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'elfrieda38@ethereal.email',
      pass: 'yKpqT64Y5E9B2zUmpp',
    },
  }

  // mailgunTransport({
  // host: process.env.MAIL_HOST,
  // port: process.env.MAIL_PORT,
  // domain: process.env.MAILGUN_DOMAIN,
  // apiKey: process.env.MAILGUN_API_KEY,
  // auth: {
  //   user: process.env.MAIL_USER,
  //   pass: process.env.MAIL_PASS,
  // },
  // })
);

export const forgotPasswordEmail = async (token, to) => {
  // if (!templatePath) {
  //   console.error('No template path provided');
  // }
  const options = {
    subject: 'test',
    to: to,
    from: process.env.MAILGUN_FROM,
    html: forgotPassword(
      // `${name.replace(/\b\w/g, (l) => l.toUpperCase())}`,
      token
    ),
  };

  await transport.sendMail(options);
};

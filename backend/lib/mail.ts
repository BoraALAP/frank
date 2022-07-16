import "dotenv/config";
import { createTransport, getTestMessageUrl } from "nodemailer";
import mailgunTransport from "nodemailer-mailgun-transport";
import { forgotPassword } from "../templates/forgot-password";
import { contactUsFormCustomer } from "../templates/contactUsFormCustomer";
import { createAccount } from "../templates/createAccount";
import { contactUsFormClient } from "../templates/contactUsFormClient";

// TODO - IMPLEMENT MAILGUN FOR EMAIL

const transport = createTransport(
  // {
  //   host: 'smtp.ethereal.email',
  //   port: 587,
  //   auth: {
  //     user: 'eladio.wilkinson@ethereal.email',
  //     pass: 'TA48HbZU4Tb8a3qT52',
  //   },
  // }

  mailgunTransport({
    // host: process.env.MAIL_HOST,
    // port: process.env.MAIL_PORT,
    auth: {
      domain: process.env.MAILGUN_DOMAIN,
      apiKey: process.env.MAILGUN_API_KEY,
      // user: process.env.MAIL_USER,
      // pass: process.env.MAIL_PASS,
    },
  })
);

export const forgotPasswordEmail = async (token, to) => {
  const options = {
    subject: "test",
    to,
    from: process.env.MAILGUN_FROM,
    html: forgotPassword(token),
  };

  await transport.sendMail(options);
};

export const createAccountEmail = async (info) => {
  const options = {
    subject: `New account created via ${info.email}`,
    to: process.env.RECEIVER,
    from: process.env.MAILGUN_FROM,
    html: createAccount(info),
  };
  await transport.sendMail(options);
};

export const contactUsFormEmail = async (info) => {
  const client = {
    subject: `Contact Us Form from ${info.email}`,
    to: process.env.RECEIVER,
    from: process.env.MAILGUN_FROM,
    html: contactUsFormClient(info),
  };

  const customer = {
    subject: "Contact Us Form for you",
    to: info.email,
    from: process.env.MAILGUN_FROM,
    html: contactUsFormCustomer(info),
  };

  await transport.sendMail(client);
  await transport.sendMail(customer);
};

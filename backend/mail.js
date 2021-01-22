const { emailSender } = require('@keystonejs/email');

const jsxEmailSender = emailSender.jsx({
  root: `${__dirname}/emailTemplate`,
  transport: 'mailgun',
});

const sendEmail = async(templatePath,props) => {
  if (!templatePath) {
    console.error('No template path provided');
  }

  const options = {
    subject: 'Your password has been updated',
    to: props.recipientEmail,
    from: process.env.MAILGUN_FROM,
    domain: process.env.MAILGUN_DOMAIN,
    apiKey: process.env.MAILGUN_API_KEY,
  };

  await jsxEmailSender(templatePath).send(props, options);
};

module.exports = {
  sendEmail,
};

// const nodemailer = require("nodemailer")
// require("dotenv").config();

// const transport = nodemailer.createTransport({
//   host: process.env.MAIL_HOST,
//   port: process.env.MAIL_PORT,
//   debug: true,
//   auth: {
//     user: process.env.MAIL_USER,
//     pass: process.env.MAIL_PASS,
//   },
//   tls:{
//     rejectUnauthorized:false
//   }
// });

// exports.transport = transport

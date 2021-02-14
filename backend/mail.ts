import { emailSender } from '@keystonejs/email';

const jsxEmailSender = emailSender.jsx({
  root: `${__dirname}/emailTemplate`,
  transport: 'mailgun',
});

export const sendEmail = async(templatePath,props) => {
  if (!templatePath) {
    console.error('No template path provided');
  }
  const options = {
    subject: props.subject,
    to: props.recipientEmail,
    from: process.env.MAILGUN_FROM,
    domain: process.env.MAILGUN_DOMAIN,
    apiKey: process.env.MAILGUN_API_KEY,
  };

  await jsxEmailSender(templatePath).send(props, options);
};



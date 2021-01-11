const nodemailer = require("nodemailer")

var transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

 const makeANiceEmail = text => `
  <div className="email" style="

  ">
  <h2>Hello There</h2>
  <p>${text}</p>
  </div>
`

exports.transport = transport
exports.makeANiceEmail = makeANiceEmail

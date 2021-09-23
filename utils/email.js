const nodemailer = require('nodemailer');

const sendEmail = async options => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    port: 465,
    secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });
  // 2) Define the email options
  const mailOptions = {
    from: 'k3yboardhero@gmail.com',
    to: options.email,
    subject: options.subject,
    text: options.message
    // html:
  };

  // 3) Actually send the email
  const result = await transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log('ERR', err);
    }
    console.log(data);
  });
  return result;
};

module.exports = sendEmail;

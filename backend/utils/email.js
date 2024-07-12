const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

sendEmail = asyncHandler(async (data, req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.Mail_Id,
      pass: process.env.Mail_Password,
    },
  });

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    let info = await transporter.sendMail({
      from: process.env.MAIL_ID, // sender address
      to: data.to, // list of receivers
      subject: data.subject, // Subject line
      html: `
            <html>
              <head>
                <style>
                  /* Define your CSS styles here */
                  body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f0f0;
                    padding: 20px;
                  }
                  .email-container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                  }
                  .header {
                    text-align: center;
                    margin-bottom: 20px;
                  }
                  .header img {
                    max-width: 200px;
                    height: auto;
                  }
                  .content {
                    margin-bottom: 20px;
                  }
                </style>
              </head>
              <body>
                <div class="email-container">
                  <div class="header">
                    <img src="https://www.caritasuni.edu.ng/assets/images/logo-header-1-116x128.png" alt="Caritas University Header">
                  </div>
                  <div class="content">
                    <p>Thank you for registering with School Direction Platform.</p>
                  </div>
                </div>
              </body>
            </html>
          `,
    });

    // Handle any further logic here...
    console.log("Email sent:", info.response);
  }

  // Additional logic for handling forgot password functionality can go here...

  // You can also call the main function to send an email when this middleware is invoked.
  await main();
});

module.exports = sendEmail;

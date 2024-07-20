const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

sendEmail = asyncHandler(async (data, req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.Mail_Id,
      pass: process.env.Mail_Password,
    },
  });

  async function main() {
    let info = await transporter.sendMail({
      from: process.env.MAIL_ID,
      to: data.to,
      subject: data.subject,
      html: `
        <html>
          <head>
            <style>
              /* Define your CSS styles here */
              body {
                font-family: Arial, sans-serif;
                background-color: #f0f0f0;
                padding: 20px;
                background-image: url('https://leadership.ng/wp-content/uploads/2023/02/Ministries-Of-Works.png');
                background-size: cover;
                background-repeat: no-repeat;
                background-attachment: fixed; /* Ensures the background image stays fixed */
              }
              .email-container {
                max-width: 600px;
                margin: 0 auto;
                background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
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
                <img src="https://fmw.gov.ng/themes/front_end_themes_01/images/general_images/SealNigerianPresident.png" alt="Caritas University Header">
              </div>
              <div class="content">
                <p>I am writing to confirm and endorse Mr. Uchenna Okezie as a reference for his application with your esteemed department. Having worked closely with Mr. Okezie in the Department of Admin/Finance, Ministry of Work, Owerri, I am pleased to provide this recommendation based on his outstanding performance and contributions.I have attached a recommendation letter for your review. Best regards.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log("Email sent:", info.response);
  }

  await main();
});

module.exports = sendEmail;

import nodemailer from "nodemailer";


export async function sendEmail(email: string, url: string, action = 'confirm') {

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: process.env.GMAIL_USER,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      accessToken: process.env.GOOGLE_ACCESS_TOKEN
    }
  });

  const html = action === 'confirm'
    ? `<p>Confirm your account: <a href=${url}>${url}</a></p>`
    : `<p>Reset your password: <a href=${url}>${url}</a></p>`

  const mailOptions = {
    from: '"Cauldrom Application" <cauldrom@gmail.com>',
    to: email,
    subject: "Cauldrom Application",
    text: 'Confirm your account',
    html
  };

  await transporter.sendMail(mailOptions);
}
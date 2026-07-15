const nodemailer = require("nodemailer");

const createTransporter = async () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("Email credentials missing!");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    connectionTimeout: 30000,
    greetingTimeout: 30000,
    socketTimeout: 30000,
  });

  await transporter.verify();
  console.log("✅ Gmail SMTP Connected");

  return transporter;
};

const sendEmail = async ({ to, subject, html, from, replyTo }) => {
  const transporter = await createTransporter();

  const info = await transporter.sendMail({
    from: from || process.env.EMAIL_FROM,
    to,
    subject,
    html,
    replyTo: replyTo || process.env.EMAIL_FROM,
  });

  console.log("✅ Email Sent:", info.messageId);

  return {
    success: true,
    messageId: info.messageId,
  };
};

const createContactEmailTemplate = ({ name, email, subject, message }) => {
  return {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM,
    replyTo: email,
    subject: `📩 Portfolio Contact: ${subject}`,
    html: `
      <h2>📩 New Portfolio Contact</h2>

      <p><b>Name:</b> ${name}</p>

      <p><b>Email:</b> ${email}</p>

      <p><b>Subject:</b> ${subject}</p>

      <p><b>Message:</b></p>

      <p>${message}</p>

      <hr>

      <p>Reply directly to: ${email}</p>
    `,
  };
};

module.exports = {
  sendEmail,
  createContactEmailTemplate,
};
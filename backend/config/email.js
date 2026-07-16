const nodemailer = require("nodemailer");

const createTransporter = async () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("❌ Email credentials missing! Set EMAIL_USER and EMAIL_PASS");
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp.gmail.com",
    port: Number(process.env.EMAIL_PORT) || 465,
    secure: process.env.EMAIL_SECURE !== "false", // true for port 465
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    family: 4, // ✅ IPv4 force (Render ke liye MUST HAVE)
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
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          h2 { color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px; }
          .field { margin: 15px 0; }
          .label { font-weight: bold; color: #555; }
          .value { color: #333; margin-top: 5px; padding: 10px; background: #f8f9fa; border-radius: 5px; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #777; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>📩 New Portfolio Contact</h2>
          
          <div class="field">
            <div class="label">👤 Name</div>
            <div class="value">${name}</div>
          </div>
          
          <div class="field">
            <div class="label">📧 Email</div>
            <div class="value">${email}</div>
          </div>
          
          <div class="field">
            <div class="label">📝 Subject</div>
            <div class="value">${subject}</div>
          </div>
          
          <div class="field">
            <div class="label">💬 Message</div>
            <div class="value">${message}</div>
          </div>
          
          <div class="footer">
            <p>Reply directly to: <a href="mailto:${email}">${email}</a></p>
            <p>Sent from Portfolio Website</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };
};

module.exports = {
  sendEmail,
  createContactEmailTemplate,
};
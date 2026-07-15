const express = require("express");
const router = express.Router();

const { contactLimiter } = require("../middleware/rateLimiter");
const { 
  sendEmail, 
  createContactEmailTemplate
} = require("../config/email");

// POST /api/contact
router.post("/", 
  contactLimiter,
  async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      // Basic validation
      if (!name || !email || !subject || !message) {
        return res.status(400).json({
          success: false,
          message: "All fields are required"
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          message: "Please provide a valid email address"
        });
      }

      console.log(`📨 New message from ${name} (${email})`);

      // Send email to admin
      const adminEmailData = createContactEmailTemplate({ 
        name, 
        email, 
        subject, 
        message 
      });
      
      await sendEmail(adminEmailData);
      console.log("✅ Admin email sent");

      res.status(200).json({
        success: true,
        message: "✅ Message sent successfully! Thank you for reaching out."
      });

    } catch (error) {
      console.error("❌ Contact form error:", error);
      res.status(500).json({
        success: false,
        message: error.message || "❌ Failed to send message. Please try again later."
      });
    }
  }
);

module.exports = router;
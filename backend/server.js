require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const nodemailer = require("nodemailer");
const path = require("path");

const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5000;

// ==============================
// Allowed Origins
// ==============================

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://my-portfolio-lyart-six-80.vercel.app",
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null,
  process.env.RENDER_URL || "https://your-backend.onrender.com",
].filter(Boolean);

// ==============================
// CORS - ✅ FIXED (No app.options)
// ==============================

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("❌ Blocked Origin:", origin);

      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ❌ DELETE THIS LINE - app.options("/*", cors()); is NOT needed

// ==============================
// Middleware
// ==============================

app.use(helmet());
app.use(compression());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// ==============================
// Routes
// ==============================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 Portfolio Backend Running on Render!",
    time: new Date(),
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date(),
  });
});

app.get("/test-env", (req, res) => {
  res.json({
    NODE_ENV: process.env.NODE_ENV,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS_EXISTS: !!process.env.EMAIL_PASS,
    EMAIL_TO: process.env.EMAIL_TO,
  });
});

app.get("/test-smtp", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      connectionTimeout: 30000,
      greetingTimeout: 30000,
      socketTimeout: 30000,
    });

    await transporter.verify();

    res.json({
      success: true,
      message: "✅ SMTP Connected Successfully!",
    });
  } catch (err) {
    console.error("SMTP Error:", err);
    res.status(500).json({
      success: false,
      error: err.message,
      code: err.code,
    });
  }
});

app.use("/api/contact", contactRoutes);

// ==============================
// Serve Frontend (Production - Optional)
// ==============================

if (process.env.NODE_ENV === "production") {
  // Frontend build folder serve karo
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // SPA routing - saare non-API requests frontend pe bhejo
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

// ==============================
// 404 & Error Handler
// ==============================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err);
  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// ==============================
// Start Server
// ==============================

app.listen(PORT, () => {
  console.log("═══════════════════════════════════");
  console.log(`🚀 Server Running on Port ${PORT}`);
  console.log(`📧 Email: ${process.env.EMAIL_USER}`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV}`);
  console.log("═══════════════════════════════════");
});
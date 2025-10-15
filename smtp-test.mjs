// smtp-test.mjs
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,               // try 465; if fails, use 587
  secure: true,           // true for 465, false for 587
  auth: {
    user: "info@dholeranirmangroup.com",
    pass: "Bolero@1266",
  },
});

transporter.verify()
  .then(() => console.log("✅ SMTP connection OK"))
  .catch(err => console.error("❌ SMTP connection failed:", err));

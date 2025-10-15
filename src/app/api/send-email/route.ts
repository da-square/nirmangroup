import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message || !phone) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Dholera Nirman Group Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `Enquiry From Dholera Nirman Group "${name}"`,
      text: `
From:
Customer Name: ${name}
Customer Email: ${email}
Customer Phone No.: ${phone}

Message Body: ${message}

--
This is a notification that a contact form was submitted on your website (Dholera Nirman Group https://www.dholeranirmangroup.com).
      `,
      html: `
        <p><strong>From:</strong></p>
        <p>Customer Name: ${name}</p>
        <p>Customer Email: ${email}</p>
        <p>Customer Phone No.: ${phone}</p>
        <br/>
        <p><strong>Message Body:</strong></p>
        <p>${message}</p>
        <hr/>
        <p>
        This is a notification that a contact form was submitted on your website 
        (Dholera Nirman Group <a href="https://www.dholeranirmangroup.com" target="_blank">https://www.dholeranirmangroup.com</a>).
        </p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

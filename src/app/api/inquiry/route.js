import fs from "node:fs";
import path from "node:path";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { buildInquiryEmail } from "./email";

const LOGO_CID = "rewaldo-logo";
const LOGO_PATH = path.join(process.cwd(), "public", "logo.png");

const REQUIRED_FIELDS = [
  "businessName",
  "firstName",
  "lastName",
  "phone",
  "businessEmail",
  "locationsCount",
  "city",
];

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: bots fill every field, real users never see this one.
  if (data.company_website) {
    return NextResponse.json({ ok: true });
  }

  const missing = REQUIRED_FIELDS.filter((field) => !String(data[field] || "").trim());
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: "Please fill in all required fields." },
      { status: 400 },
    );
  }

  const {
    businessName,
    firstName,
    lastName,
    phone,
    businessEmail,
    locationsCount,
    city,
    facebookUrl,
    message,
  } = data;

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    console.error("Missing GMAIL_USER / GMAIL_APP_PASSWORD environment variables.");
    return NextResponse.json(
      { ok: false, error: "Inquiry form is not configured yet. Please try again later." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  const { html, text } = buildInquiryEmail({
    businessName,
    firstName,
    lastName,
    phone,
    businessEmail,
    locationsCount,
    city,
    facebookUrl,
    message,
    logoCid: LOGO_CID,
  });

  try {
    await transporter.sendMail({
      from: `"${businessName} (via Rewaldo)" <${gmailUser}>`,
      to: process.env.INQUIRY_RECIPIENT_EMAIL || gmailUser,
      replyTo: businessEmail,
      subject: `New merchant inquiry — ${businessName}`,
      text,
      html,
      attachments: [
        {
          filename: "logo.png",
          path: LOGO_PATH,
          cid: LOGO_CID,
        },
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to send merchant inquiry email:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send your inquiry. Please try again later." },
      { status: 500 },
    );
  }
}

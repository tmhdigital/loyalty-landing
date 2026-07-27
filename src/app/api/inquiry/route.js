import { Resend } from "resend";
import { NextResponse } from "next/server";
import { buildInquiryEmail } from "./email";

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

  const resendApiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.INQUIRY_RECIPIENT_EMAIL;

  if (!resendApiKey || !recipient) {
    console.error("Missing RESEND_API_KEY / INQUIRY_RECIPIENT_EMAIL environment variables.");
    return NextResponse.json(
      { ok: false, error: "Inquiry form is not configured yet. Please try again later." },
      { status: 500 },
    );
  }

  const LOGO_CID = "rewaldo-logo";
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

  // Pull the logo from this app's own public/ folder — via fetch (not fs),
  // so it works the same whether running under Node or Cloudflare Workers.
  const origin = new URL(request.url).origin;
  const logoResponse = await fetch(`${origin}/logo.png`);
  const logoBuffer = Buffer.from(await logoResponse.arrayBuffer());

  const resend = new Resend(resendApiKey);

  const { error } = await resend.emails.send({
    from: process.env.INQUIRY_FROM_EMAIL || "Rewaldo <onboarding@resend.dev>",
    to: recipient,
    replyTo: businessEmail,
    subject: `New merchant inquiry — ${businessName}`,
    html,
    text,
    attachments: [
      {
        filename: "logo.png",
        content: logoBuffer,
        contentId: LOGO_CID,
      },
    ],
  });

  if (error) {
    console.error("Failed to send merchant inquiry email:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send your inquiry. Please try again later." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}

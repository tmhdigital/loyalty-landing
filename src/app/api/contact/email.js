const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const row = (label, valueHtml) => `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #E5E7EB;font-size:13px;color:#6B7280;font-weight:600;width:170px;vertical-align:top;">${label}</td>
        <td style="padding:10px 0;border-bottom:1px solid #E5E7EB;font-size:14px;color:#1E1E1E;vertical-align:top;">${valueHtml}</td>
      </tr>`;

export const buildContactEmail = ({
  firstName,
  lastName,
  email,
  subject,
  message,
  logoCid,
}) => {
  const safe = {
    firstName: escapeHtml(firstName),
    contact: escapeHtml(`${firstName} ${lastName}`),
    email: escapeHtml(email),
    subject: escapeHtml(subject),
    message: escapeHtml(message).replace(/\n/g, "<br />"),
  };

  const rows = [
    row("From", safe.contact),
    row(
      "Email",
      `<a href="mailto:${safe.email}" style="color:#3FAE6A;text-decoration:none;">${safe.email}</a>`,
    ),
  ].join("");

  const html = `
<div style="background:#F4F6F5;padding:32px 16px;font-family:'Poppins',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#FFFFFF;border-radius:20px;overflow:hidden;border:1px solid #E5E7EB;">
    <tr>
      <td style="padding:32px 40px 24px;">
        <div style="text-align:center;margin-bottom:20px;">
          <img src="cid:${logoCid}" alt="Rewaldo" height="32" style="height:32px;width:auto;" />
        </div>
        <p style="margin:0 0 8px;font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#3FAE6A;">New contact message</p>
        <h1 style="margin:0;font-size:22px;line-height:1.3;font-weight:700;color:#181818;">${safe.subject}</h1>
      </td>
    </tr>
    <tr>
      <td style="padding:0 40px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:24px 40px 8px;">
        <p style="margin:0 0 8px;font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#6B7280;">Message</p>
        <div style="background:#FAFBFA;border:1px solid #E5E7EB;border-radius:14px;padding:16px 18px;font-size:14px;line-height:1.6;color:#1E1E1E;">${safe.message}</div>
      </td>
    </tr>
    <tr>
      <td style="padding:28px 40px 32px; text-align:center;">
        <a href="mailto:${safe.email}" style="display:inline-block;background:#3FAE6A;color:#FFFFFF;text-decoration:none;font-size:14px;font-weight:600;padding:12px 26px;border-radius:200px;">Reply to ${safe.firstName}</a>
      </td>
    </tr>
    <tr>
      <td style="padding:18px 40px;background:#181818;">
        <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.6);">Submitted via the "Contact us" form on rewaldo.com</p>
      </td>
    </tr>
  </table>
</div>`;

  const text = [
    `New contact message — ${subject}`,
    "",
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
  ].join("\n");

  return { html, text };
};

import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InquirySchema = z.object({
  name: z.string().min(2).max(120),
  phone: z.string().min(6).max(30),
  email: z.string().email(),
  eventType: z.string().min(1).max(60),
  date: z.string().max(40).optional().default(""),
  guests: z.string().max(20).optional().default(""),
  requirements: z.string().max(2000).optional().default(""),
  message: z.string().max(2000).optional().default(""),
});

const RECIPIENT = "nemidigitalagency@gmail.com";

function encodeBase64Url(str: string): string {
  // Use Buffer for proper UTF-8 handling in the Worker runtime
  const b64 = Buffer.from(str, "utf-8").toString("base64");
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function buildRawEmail(opts: {
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
}): string {
  const boundary = "===silver_estate_" + Math.random().toString(36).slice(2);
  const lines = [
    `To: ${opts.to}`,
    `Reply-To: ${opts.replyTo}`,
    `Subject: ${opts.subject}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: 7bit",
    "",
    opts.text,
    "",
    `--${boundary}`,
    'Content-Type: text/html; charset="UTF-8"',
    "Content-Transfer-Encoding: 7bit",
    "",
    opts.html,
    "",
    `--${boundary}--`,
    "",
  ];
  return encodeBase64Url(lines.join("\r\n"));
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => InquirySchema.parse(data))
  .handler(async ({ data }) => {
    const lovableKey = process.env.LOVABLE_API_KEY;
    const gmailKey = process.env.GOOGLE_MAIL_API_KEY;

    console.log("[Silver Estate inquiry]", {
      receivedAt: new Date().toISOString(),
      ...data,
    });

    if (!lovableKey || !gmailKey) {
      console.error("[Silver Estate] Missing email credentials");
      return { ok: true as const };
    }

    const subject = `New Wedding Inquiry — ${data.name} (${data.eventType})`;
    const text = [
      `New inquiry from Silver Estate Resort website`,
      ``,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Event Type: ${data.eventType}`,
      `Preferred Date: ${data.date || "—"}`,
      `Guests: ${data.guests || "—"}`,
      ``,
      `Requirements:`,
      data.requirements || "—",
      ``,
      `Message:`,
      data.message || "—",
    ].join("\n");

    const html = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
  <div style="background:#0a0a0a;color:#D4AF37;padding:24px;text-align:center">
    <h1 style="margin:0;font-family:Georgia,serif;font-weight:400">Silver Estate Resort</h1>
    <p style="margin:6px 0 0;letter-spacing:2px;font-size:12px;color:#f8f5ee">NEW WEDDING INQUIRY</p>
  </div>
  <div style="padding:24px;background:#F8F5EE">
    <table style="width:100%;border-collapse:collapse;font-size:14px">
      <tr><td style="padding:8px 0;color:#666">Name</td><td style="padding:8px 0;font-weight:600">${escapeHtml(data.name)}</td></tr>
      <tr><td style="padding:8px 0;color:#666">Phone</td><td style="padding:8px 0;font-weight:600">${escapeHtml(data.phone)}</td></tr>
      <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0;font-weight:600">${escapeHtml(data.email)}</td></tr>
      <tr><td style="padding:8px 0;color:#666">Event Type</td><td style="padding:8px 0;font-weight:600">${escapeHtml(data.eventType)}</td></tr>
      <tr><td style="padding:8px 0;color:#666">Preferred Date</td><td style="padding:8px 0;font-weight:600">${escapeHtml(data.date || "—")}</td></tr>
      <tr><td style="padding:8px 0;color:#666">Guests</td><td style="padding:8px 0;font-weight:600">${escapeHtml(data.guests || "—")}</td></tr>
    </table>
    <h3 style="margin:20px 0 8px;font-family:Georgia,serif">Requirements</h3>
    <p style="white-space:pre-wrap;margin:0">${escapeHtml(data.requirements || "—")}</p>
    <h3 style="margin:20px 0 8px;font-family:Georgia,serif">Message</h3>
    <p style="white-space:pre-wrap;margin:0">${escapeHtml(data.message || "—")}</p>
  </div>
  <div style="background:#0a0a0a;color:#999;padding:16px;text-align:center;font-size:11px">
    Submitted ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
  </div>
</div>`.trim();

    const raw = buildRawEmail({
      to: RECIPIENT,
      replyTo: `${data.name} <${data.email}>`,
      subject,
      text,
      html,
    });

    try {
      const res = await fetch(
        "https://connector-gateway.lovable.dev/google_mail/gmail/v1/users/me/messages/send",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${lovableKey}`,
            "X-Connection-Api-Key": gmailKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ raw }),
        },
      );

      if (!res.ok) {
        const body = await res.text();
        console.error("[Silver Estate] Gmail send failed", res.status, body);
      } else {
        console.log("[Silver Estate] Inquiry email sent to", RECIPIENT);
      }
    } catch (err) {
      console.error("[Silver Estate] Gmail send error", err);
    }

    return { ok: true as const };
  });

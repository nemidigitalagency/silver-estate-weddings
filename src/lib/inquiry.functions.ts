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

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => InquirySchema.parse(data))
  .handler(async ({ data }) => {
    // Inquiry logged server-side. To deliver via email, enable Lovable Cloud
    // + email domain and replace this with an email send.
    console.log("[Silver Estate inquiry]", {
      receivedAt: new Date().toISOString(),
      ...data,
    });
    return { ok: true as const };
  });

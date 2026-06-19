import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { submitInquiry } from "@/lib/inquiry.functions";
import { EVENT_TYPES, SITE } from "@/lib/site";
import heroNight from "@/assets/hero-night.jpg.asset.json";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Booking & Inquiry — Silver Estate Resort, Tikamgarh" },
      { name: "description", content: "Begin your inquiry with Silver Estate Resort. Our wedding concierge will respond within 24 hours with availability and packages." },
      { property: "og:title", content: "Booking & Inquiry — Silver Estate Resort" },
      { property: "og:description", content: "Begin your celebration with our wedding concierge." },
    ],
  }),
  component: BookingPage,
});

type FormState = {
  name: string; phone: string; email: string;
  eventType: string; date: string; guests: string;
  requirements: string; message: string;
};

const initial: FormState = {
  name: "", phone: "", email: "", eventType: "",
  date: "", guests: "", requirements: "", message: "",
};

function BookingPage() {
  const submit = useServerFn(submitInquiry);
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading"); setErrorMsg("");
    try {
      await submit({ data: form });
      setStatus("success");
      setForm(initial);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Booking & Inquiry"
        title="Begin Your Celebration"
        subtitle="Share your moment — our wedding concierge will respond within 24 hours."
        image={heroNight.url}
      />

      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-3xl px-6">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card border border-gold/40 rounded-sm p-12 text-center shadow-luxe"
            >
              <CheckCircle2 className="h-14 w-14 text-gold mx-auto" strokeWidth={1.3} />
              <h2 className="mt-6 font-display text-3xl md:text-4xl text-foreground">Thank you</h2>
              <div className="gold-divider mx-auto mt-5" />
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Thank you for contacting Silver Estate Resort. Our management team will
                be in touch with you shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 px-6 py-3 text-[11px] tracking-[0.28em] uppercase border border-foreground/30 hover:border-gold hover:text-gold transition rounded-sm"
              >
                Submit Another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="bg-card border border-border rounded-sm p-8 md:p-12 shadow-luxe">
              <h2 className="font-display text-3xl text-foreground">Inquiry Form</h2>
              <div className="gold-divider mt-4" />
              <p className="mt-4 text-sm text-muted-foreground">
                Fields marked * are required. We'll get back via call, WhatsApp or email.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <Field label="Full Name *"><input required value={form.name} onChange={onChange("name")} className={inputCls} placeholder="Your full name" /></Field>
                <Field label="Mobile Number *"><input required type="tel" value={form.phone} onChange={onChange("phone")} className={inputCls} placeholder="+91" /></Field>
                <Field label="Email *"><input required type="email" value={form.email} onChange={onChange("email")} className={inputCls} placeholder="you@example.com" /></Field>
                <Field label="Event Type *">
                  <select required value={form.eventType} onChange={onChange("eventType")} className={inputCls}>
                    <option value="">Select an event</option>
                    {EVENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </Field>
                <Field label="Preferred Date"><input type="date" value={form.date} onChange={onChange("date")} className={inputCls} /></Field>
                <Field label="Number of Guests"><input type="number" min={1} value={form.guests} onChange={onChange("guests")} className={inputCls} placeholder="e.g. 300" /></Field>
                <div className="md:col-span-2">
                  <Field label="Special Requirements">
                    <textarea rows={3} value={form.requirements} onChange={onChange("requirements")} className={inputCls} placeholder="Décor theme, dietary needs, room blocks..." />
                  </Field>
                </div>
                <div className="md:col-span-2">
                  <Field label="Message">
                    <textarea rows={4} value={form.message} onChange={onChange("message")} className={inputCls} placeholder="Tell us about your celebration" />
                  </Field>
                </div>
              </div>

              {status === "error" && (
                <p className="mt-5 text-sm text-destructive">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-8 w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-[11px] tracking-[0.32em] uppercase bg-gradient-gold text-onyx rounded-sm shadow-gold disabled:opacity-60"
              >
                {status === "loading" ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending</> : "Submit Inquiry"}
              </button>

              <p className="mt-6 text-center text-xs text-muted-foreground">
                Or contact us directly · <a href={`tel:${SITE.phoneRaw}`} className="text-gold-dark hover:text-gold">{SITE.phone}</a> · <a href={`mailto:${SITE.email}`} className="text-gold-dark hover:text-gold">{SITE.email}</a>
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

const inputCls =
  "w-full px-4 py-3 bg-background border border-input rounded-sm text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 transition";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.28em] uppercase text-foreground/70 mb-2">{label}</span>
      {children}
    </label>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/site";
import exterior from "@/assets/exterior.jpg.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Silver Estate Resort, Tikamgarh" },
      { name: "description", content: "Get in touch with Silver Estate Resort — call, WhatsApp, email or visit our estate in Tikamgarh, Madhya Pradesh." },
      { property: "og:title", content: "Contact — Silver Estate Resort" },
      { property: "og:description", content: "Reach our wedding concierge in Tikamgarh, MP." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const cards = [
    { icon: Phone, label: "Call", value: SITE.phone, href: `tel:${SITE.phoneRaw}` },
    { icon: MessageCircle, label: "WhatsApp", value: SITE.phone, href: SITE.whatsapp },
    { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: Instagram, label: "Instagram", value: SITE.instagramHandle, href: SITE.instagram },
  ];
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Silver Estate"
        subtitle="Speak with our wedding concierge, or visit the estate in person."
        image={exterior.url}
      />

      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.label === "Instagram" || c.label === "WhatsApp" ? "_blank" : undefined}
                rel="noreferrer"
                className="group p-8 bg-card border border-border rounded-sm hover:border-gold hover:shadow-luxe transition text-center"
              >
                <div className="h-12 w-12 mx-auto rounded-full bg-gradient-gold flex items-center justify-center">
                  <c.icon className="h-5 w-5 text-onyx" strokeWidth={1.6} />
                </div>
                <div className="mt-4 text-[10px] tracking-[0.32em] uppercase text-muted-foreground">{c.label}</div>
                <div className="mt-2 text-sm text-foreground group-hover:text-gold-dark transition break-all">{c.value}</div>
              </a>
            ))}
          </div>

          <div className="mt-16 grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <span className="text-gold-dark text-[11px] tracking-[0.4em] uppercase">Visit Us</span>
              <h2 className="mt-3 font-display text-4xl text-foreground">The Estate</h2>
              <div className="gold-divider mt-5" />
              <p className="mt-5 text-muted-foreground leading-relaxed">{SITE.location}</p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(SITE.mapsQuery)}`}
                target="_blank" rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-gold-dark hover:text-gold"
              >
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
            </div>
            <div className="lg:col-span-3 rounded-sm overflow-hidden border border-border shadow-luxe">
              <iframe
                title="Silver Estate Resort map"
                className="w-full h-[400px] block"
                src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

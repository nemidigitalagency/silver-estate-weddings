import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { WEDDING_SERVICES } from "@/lib/site";
import heroNight from "@/assets/hero-night.jpg.asset.json";

export const Route = createFileRoute("/weddings")({
  head: () => ({
    meta: [
      { title: "Weddings & Events — Silver Estate Resort" },
      { name: "description", content: "Destination weddings, royal celebrations, Haldi, Mehendi, Sangeet, receptions and corporate events at Silver Estate Resort, Tikamgarh." },
      { property: "og:title", content: "Weddings & Events at Silver Estate Resort" },
      { property: "og:description", content: "Destination weddings & grand celebrations in Tikamgarh, MP." },
      { property: "og:image", content: heroNight.url },
    ],
  }),
  component: WeddingsPage,
});

function WeddingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Weddings & Events"
        title="Celebrations of a Lifetime"
        subtitle="A canvas for every Indian celebration — staged with quiet luxury and grand attention."
        image={heroNight.url}
      />

      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Our Specialties"
            title="Every occasion. Curated to perfection."
            subtitle="From the smallest ring ceremony to the grandest baraat, our team handles every detail."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WEDDING_SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className="group p-8 bg-card border border-border hover:border-gold transition rounded-sm hover:shadow-luxe"
              >
                <div className="text-gold-dark text-[10px] tracking-[0.32em] uppercase">0{(i + 1).toString().padStart(2, "0")}</div>
                <h3 className="mt-3 font-display text-2xl text-foreground group-hover:text-gold-dark transition">{s.title}</h3>
                <div className="gold-divider mt-4" />
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-onyx py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-script text-gold text-3xl">Bespoke Planning</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-ivory">From first vision to final farewell</h2>
          <div className="gold-divider mx-auto mt-7" />
          <p className="mt-7 text-ivory/75 leading-relaxed">
            Décor, catering, music, lighting, photography liaison, guest stays and
            ritual coordination — all handled by your dedicated Silver Estate concierge.
          </p>
          <Link to="/booking" className="mt-9 inline-block px-8 py-4 text-[11px] tracking-[0.32em] uppercase bg-gradient-gold text-onyx rounded-sm shadow-gold">
            Begin Your Inquiry
          </Link>
        </div>
      </section>
    </>
  );
}

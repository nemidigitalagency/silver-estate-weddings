import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Heart, Sparkles, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import exterior from "@/assets/exterior.jpg.asset.json";
import heroNight from "@/assets/hero-night.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Silver Estate Resort, Tikamgarh" },
      { name: "description", content: "Discover the story of Silver Estate Resort, Tikamgarh — a heirloom wedding property crafted for grand celebrations and unhurried luxury." },
      { property: "og:title", content: "About Silver Estate Resort" },
      { property: "og:description", content: "A heirloom wedding property in the heart of Bundelkhand." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Hospitality", desc: "We treat every guest as family — the cornerstone of our service philosophy." },
  { icon: Award, title: "Excellence", desc: "Pristine grounds, gourmet kitchens and palatial suites maintained to global standards." },
  { icon: Sparkles, title: "Craft", desc: "Bespoke décor, curated menus and cinematic lighting for every celebration." },
  { icon: Users, title: "Concierge", desc: "A dedicated wedding planner walks beside you from the first call to the farewell." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Estate"
        title="A Heirloom in Tikamgarh"
        subtitle="Where Bundelkhand hospitality meets contemporary luxury."
        image={exterior.url}
      />

      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="font-script text-gold text-3xl">Our Story</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-foreground leading-tight">
            Built for grand moments, refined for quiet ones.
          </h2>
          <div className="gold-divider mx-auto mt-7" />
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            Silver Estate Resort was founded with a singular promise — to give every couple,
            every family and every guest a setting worthy of their most important moments.
            For years we have been the chosen destination for grand weddings, royal celebrations
            and corporate gatherings across Madhya Pradesh.
          </p>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From candle-lit mandaps under open skies to chandelier-lit banquets indoors,
            our estate has been the canvas for countless love stories. Every blade of grass,
            every plated course and every detail of décor is curated with intention.
          </p>
        </div>
      </section>

      <section className="bg-onyx py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="Our Values" title="The Silver Estate hallmark" light />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="glass-dark p-8 rounded-sm text-center"
              >
                <v.icon className="h-9 w-9 text-gold mx-auto" strokeWidth={1.2} />
                <h3 className="mt-5 font-display text-2xl text-ivory">{v.title}</h3>
                <p className="mt-3 text-sm text-ivory/70 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
            src={heroNight.url} alt="Resort at night"
            className="w-full aspect-[4/5] object-cover shadow-luxe"
          />
          <div>
            <span className="text-gold-dark text-[11px] tracking-[0.4em] uppercase">The Property</span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-foreground">An estate, not just a venue</h2>
            <div className="gold-divider mt-6" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Sprawling lawns, an indoor banquet, a poolside lounge, multiple décor zones and
              palatial accommodations — Silver Estate offers every backdrop your celebration
              could need, all on a single, discreet property.
            </p>
            <Link to="/booking" className="mt-8 inline-block px-7 py-3.5 text-[11px] tracking-[0.28em] uppercase bg-gradient-gold text-onyx rounded-sm shadow-gold">
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

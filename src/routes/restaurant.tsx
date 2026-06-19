import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Utensils, ChefHat, Wine, Coffee } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import pool from "@/assets/pool.jpg.asset.json";
import heroNight from "@/assets/hero-night.jpg.asset.json";

export const Route = createFileRoute("/restaurant")({
  head: () => ({
    meta: [
      { title: "Restaurant — Silver Estate Resort, Tikamgarh" },
      { name: "description", content: "Multi-cuisine restaurant and wedding catering at Silver Estate Resort — regal Bundelkhandi thalis, live counters and gourmet plated dining." },
      { property: "og:title", content: "Restaurant — Silver Estate Resort" },
      { property: "og:description", content: "Multi-cuisine kitchens & wedding catering." },
    ],
  }),
  component: RestaurantPage,
});

const cuisines = [
  { icon: ChefHat, title: "Indian Royale", desc: "Bundelkhandi, Mughlai and North Indian classics — handcrafted by master chefs." },
  { icon: Utensils, title: "Multi-Cuisine", desc: "Continental, Chinese, Italian and Pan-Asian curated for diverse guest lists." },
  { icon: Wine, title: "Live Counters", desc: "Chaat, kebabs, pasta, dosa, dessert stations and bespoke action stations." },
  { icon: Coffee, title: "All-Day Lounge", desc: "Coffee, teas, mocktails and light bites between the celebrations." },
];

function RestaurantPage() {
  return (
    <>
      <PageHero
        eyebrow="The Restaurant"
        title="A Gourmet Kitchen, In Residence"
        subtitle="Heritage flavours, contemporary plating, generous hospitality."
        image={pool.url}
      />

      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="Our Kitchens" title="Cuisine that becomes the conversation" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {cuisines.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="p-8 bg-card border border-border rounded-sm hover:border-gold transition"
              >
                <c.icon className="h-8 w-8 text-gold" strokeWidth={1.2} />
                <h3 className="mt-4 font-display text-xl text-foreground">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <img src={heroNight.url} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-onyx/80" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="font-script text-gold text-3xl">Wedding Catering</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-ivory">
            Custom menus for every celebration
          </h2>
          <div className="gold-divider mx-auto mt-7" />
          <p className="mt-7 text-ivory/80 leading-relaxed">
            Tasting sessions, dietary curation, regional specialities and live action counters —
            crafted to your guest list and theme.
          </p>
          <Link to="/booking" className="mt-9 inline-block px-8 py-4 text-[11px] tracking-[0.32em] uppercase bg-gradient-gold text-onyx rounded-sm shadow-gold">
            Plan Your Menu
          </Link>
        </div>
      </section>
    </>
  );
}

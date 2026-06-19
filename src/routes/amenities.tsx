import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Waves, Baby, Car, Zap, Wind, Wifi, Building2, Trees,
  Music, Theater, Sparkles, Utensils, Mic2, ChefHat, Shield, ConciergeBell,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import pool from "@/assets/pool.jpg.asset.json";
import { AMENITIES } from "@/lib/site";

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title: "Amenities — Silver Estate Resort, Tikamgarh" },
      { name: "description", content: "Swimming pool, banquet halls, garden lawns, catering, decoration, stage setup and full event services at Silver Estate Resort." },
      { property: "og:title", content: "Amenities — Silver Estate Resort" },
      { property: "og:description", content: "Everything your celebration needs, on a single estate." },
      { property: "og:image", content: pool.url },
    ],
  }),
  component: AmenitiesPage,
});

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  "Swimming Pool": Waves,
  "Kids Play Area": Baby,
  "Parking": Car,
  "Power Backup": Zap,
  "AC Rooms": Wind,
  "WiFi": Wifi,
  "Conference Hall": Building2,
  "Garden Lawn": Trees,
  "DJ Area": Music,
  "Stage Setup": Theater,
  "Decoration Services": Sparkles,
  "Catering": Utensils,
  "Live Music": Mic2,
  "Premium Food": ChefHat,
  "Security Staff": Shield,
  "Reception Services": ConciergeBell,
};

function AmenitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Amenities & Services"
        title="Everything You Need, On Estate"
        subtitle="A complete celebration ecosystem — from décor to dining, security to stagecraft."
        image={pool.url}
      />

      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="On-Property" title="Sixteen reasons to celebrate with us" />
          <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {AMENITIES.map((a, i) => {
              const Icon = iconMap[a] ?? Sparkles;
              return (
                <motion.div
                  key={a}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 8) * 0.05 }}
                  className="group flex flex-col items-center justify-center text-center p-6 bg-card border border-border rounded-sm hover:border-gold hover:shadow-luxe transition-all hover:-translate-y-1"
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center">
                    <Icon className="h-5 w-5 text-onyx" strokeWidth={1.6} />
                  </div>
                  <div className="mt-4 text-sm tracking-wide text-foreground font-medium">{a}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BedDouble, Wifi, Wind, Coffee, Bath, Tv } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import room from "@/assets/room.jpg.asset.json";
import exterior from "@/assets/exterior.jpg.asset.json";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Suites — Silver Estate Resort, Tikamgarh" },
      { name: "description", content: "Deluxe and Premium rooms at Silver Estate Resort — appointed for couples, families and out-of-town wedding guests." },
      { property: "og:title", content: "Rooms & Suites — Silver Estate Resort" },
      { property: "og:description", content: "Deluxe and Premium rooms appointed for refined stays." },
      { property: "og:image", content: room.url },
    ],
  }),
  component: RoomsPage,
});

const rooms = [
  {
    name: "Deluxe Room",
    img: room.url,
    desc: "Plush twin or king bedding, marble bath and warm woodwork — designed for restful nights between the festivities.",
    features: ["King / Twin beds", "Air conditioning", "High-speed WiFi", "LED Television", "Tea & coffee setup", "Marble bathroom"],
  },
  {
    name: "Premium Room",
    img: exterior.url,
    desc: "Spacious suite layouts with seating areas, premium linens and elevated finishes — ideal for the bride, groom and close family.",
    features: ["Suite layout", "Lounge seating", "Premium linens", "Rain shower", "In-room dining", "Garden / pool views"],
  },
];

const amenityIcons = [BedDouble, Wifi, Wind, Coffee, Bath, Tv];

function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Stay With Us"
        title="Rooms & Suites"
        subtitle="Stay steps away from your celebration — in suites built for rest, ritual and quiet luxury."
        image={room.url}
      />

      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-7xl px-6 space-y-24">
          {rooms.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 right-8 bottom-8 border border-gold/40" />
                <img src={r.img} alt={r.name} className="relative w-full aspect-[4/3] object-cover shadow-luxe" />
              </div>
              <div>
                <span className="text-gold-dark text-[11px] tracking-[0.4em] uppercase">0{i + 1}</span>
                <h2 className="mt-3 font-display text-4xl md:text-5xl text-foreground">{r.name}</h2>
                <div className="gold-divider mt-5" />
                <p className="mt-6 text-muted-foreground leading-relaxed">{r.desc}</p>
                <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-foreground/85">
                  {r.features.map((f, idx) => {
                    const Icon = amenityIcons[idx % amenityIcons.length];
                    return (
                      <li key={f} className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-gold" strokeWidth={1.4} /> {f}
                      </li>
                    );
                  })}
                </ul>
                <Link to="/booking" className="mt-8 inline-block px-7 py-3.5 text-[11px] tracking-[0.28em] uppercase bg-gradient-gold text-onyx rounded-sm shadow-gold">
                  Enquire for Stay
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-onyx py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-script text-gold text-2xl">Please note</p>
          <h3 className="mt-3 font-display text-2xl md:text-3xl text-ivory">
            Rooms are inquiry-based only
          </h3>
          <div className="gold-divider mx-auto mt-5" />
          <p className="mt-5 text-ivory/70">
            We do not offer direct online room booking. Please reach out and our team will
            confirm availability, tariffs and packages personally.
          </p>
        </div>
      </section>
    </>
  );
}

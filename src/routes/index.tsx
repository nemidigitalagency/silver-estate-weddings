import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Award, Sparkles, Crown, Utensils, BedDouble, MapPin,
  Instagram, ArrowRight, Phone, Heart, Music, Camera,
} from "lucide-react";

import { CinematicHero } from "@/components/CinematicHero";
import { SectionTitle } from "@/components/SectionTitle";
import { SITE, WEDDING_SERVICES } from "@/lib/site";
import heroNight from "@/assets/hero-night.jpg.asset.json";
import exterior from "@/assets/exterior.jpg.asset.json";
import room from "@/assets/room.jpg.asset.json";
import pool from "@/assets/pool.jpg.asset.json";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Silver Estate Resort — Luxury Wedding Destination in Tikamgarh, MP" },
      { name: "description", content: "The perfect destination for grand weddings, royal celebrations, luxury stays and corporate events at Silver Estate Resort, Tikamgarh." },
      { property: "og:title", content: "Silver Estate Resort — Luxury Wedding Destination" },
      { property: "og:description", content: "The perfect destination for grand weddings in Tikamgarh, Madhya Pradesh." },
      { property: "og:image", content: heroNight.url },
      { name: "twitter:image", content: heroNight.url },
    ],
  }),
  component: HomePage,
});

const experiences = [
  { icon: Crown, title: "Royal Weddings", desc: "Regal mandaps, palatial décor and timeless rituals staged for the modern couple." },
  { icon: Heart, title: "Intimate Ceremonies", desc: "Engagements, Haldi, Mehendi and Sangeet curated with quiet luxury." },
  { icon: Music, title: "Grand Receptions", desc: "Ballroom-scale receptions with live music, plated dining and cinematic lighting." },
  { icon: Camera, title: "Memory Crafting", desc: "Photogenic spaces, golden-hour terraces and pool-side sets across the property." },
];

const whyUs = [
  { stat: "20+", label: "Acres of Manicured Grounds" },
  { stat: "1,500+", label: "Guest Seating Capacity" },
  { stat: "10K+", label: "Weddings & Events Hosted" },
  { stat: "5★", label: "Hospitality Standards" },
];

function HomePage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".parallax-img").forEach((el) => {
        gsap.to(el, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <CinematicHero />

      {/* Intro */}
      <section className="relative bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="text-gold-dark text-[11px] tracking-[0.4em] uppercase">An Heirloom Property</span>
          <h2 className="mt-5 font-display text-4xl md:text-6xl text-foreground leading-tight">
            Where every celebration becomes <span className="font-script text-gold">a lifetime memory</span>
          </h2>
          <div className="gold-divider mx-auto mt-8" />
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Nestled in the heart of Tikamgarh, Silver Estate Resort is a discreet sanctuary
            built for weddings of grandeur, royal occasions and unhurried luxury stays.
            From candle-lit mandaps to pool-side soirées, every corner of the estate is
            staged for moments worth remembering.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/weddings" className="px-7 py-3.5 text-[11px] tracking-[0.28em] uppercase bg-gradient-gold text-onyx rounded-sm shadow-gold">
              Explore Weddings
            </Link>
            <Link to="/about" className="px-7 py-3.5 text-[11px] tracking-[0.28em] uppercase border border-foreground/30 text-foreground hover:border-gold hover:text-gold transition rounded-sm">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Wedding Experiences */}
      <section className="relative bg-onyx py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-radial-gold)" }} />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Wedding Experiences"
            title="Celebrations crafted, never replicated"
            subtitle="Every gathering at Silver Estate is staged with bespoke décor, gourmet menus and a dedicated wedding concierge."
            light
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {experiences.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group glass-dark p-8 rounded-sm hover:border-gold/40 transition-all hover:-translate-y-1"
              >
                <e.icon className="h-8 w-8 text-gold" strokeWidth={1.2} />
                <h3 className="mt-5 font-display text-2xl text-ivory">{e.title}</h3>
                <p className="mt-3 text-sm text-ivory/65 leading-relaxed">{e.desc}</p>
                <Link to="/weddings" className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-gold group-hover:gap-3 transition-all">
                  Discover <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
            <span className="text-gold-dark text-[11px] tracking-[0.4em] uppercase">Why Silver Estate</span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-foreground leading-tight">
              The hallmark of a flawless celebration
            </h2>
            <div className="gold-divider mt-6" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              From the moment your guests arrive to the final farewell, every detail is
              orchestrated by a team that treats your day as their own. We blend old-world
              hospitality with modern luxury — pristine grounds, gourmet kitchens, palatial
              suites and discreet service.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {whyUs.map((w) => (
                <div key={w.label} className="border-l-2 border-gold pl-4">
                  <div className="font-display text-4xl text-gradient-gold">{w.stat}</div>
                  <div className="mt-1 text-xs tracking-[0.18em] uppercase text-muted-foreground">{w.label}</div>
                </div>
              ))}
            </div>
            <Link to="/about" className="mt-10 inline-flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase text-gold-dark hover:text-gold transition">
              <Award className="h-4 w-4" /> Discover Our Estate
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative">
            <div className="absolute -top-6 -left-6 right-12 bottom-12 border border-gold/40" />
            <img src={exterior.url} alt="Silver Estate Resort exterior" className="relative w-full aspect-[4/5] object-cover shadow-luxe" />
            <div className="absolute -bottom-6 -right-6 glass-dark px-6 py-4 rounded-sm">
              <div className="text-[10px] tracking-[0.32em] uppercase text-gold">Tikamgarh</div>
              <div className="font-display text-ivory text-xl mt-1">Madhya Pradesh</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Venue Showcase */}
      <section className="bg-onyx py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="The Estate"
            title="A venue worthy of your moment"
            subtitle="From open-sky lawns to grand ballrooms, choose the canvas for your celebration."
            light
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { img: heroNight.url, title: "Grand Wedding Lawn", desc: "Floral mandap & open-sky baraat space." },
              { img: pool.url, title: "Pool-Side Soirée", desc: "Cinematic poolside cocktails & sangeet." },
              { img: exterior.url, title: "Royal Banquet", desc: "Indoor ballroom with chandelier seating." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-sm"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={v.img} alt={v.title} className="parallax-img h-[115%] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold">0{i + 1}</div>
                  <h3 className="mt-2 font-display text-2xl text-ivory">{v.title}</h3>
                  <p className="mt-2 text-sm text-ivory/70">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms & Stay */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
            src={room.url} alt="Deluxe room" className="w-full aspect-[4/3] object-cover shadow-luxe order-2 lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <span className="text-gold-dark text-[11px] tracking-[0.4em] uppercase">Rooms & Stay</span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-foreground">
              Suites that feel like a private estate
            </h2>
            <div className="gold-divider mt-6" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Deluxe and Premium rooms appointed with plush bedding, marble baths and quiet
              luxury. Ideal for the bride, groom and out-of-town guests who deserve to stay
              effortlessly close to the celebration.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-foreground/80">
              {["King-size bedding", "Air conditioning", "High-speed WiFi", "In-room dining", "Marble bathrooms", "24×7 concierge"].map((f) => (
                <li key={f} className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5 text-gold" /> {f}</li>
              ))}
            </ul>
            <Link to="/rooms" className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 text-[11px] tracking-[0.28em] uppercase bg-gradient-gold text-onyx rounded-sm shadow-gold">
              <BedDouble className="h-4 w-4" /> View Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Restaurant */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-onyx text-ivory">
        <img src={pool.url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx via-onyx/80 to-onyx" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Utensils className="h-9 w-9 text-gold mx-auto" strokeWidth={1.2} />
          <h2 className="mt-6 font-display text-4xl md:text-5xl">A gourmet kitchen, in residence</h2>
          <div className="gold-divider mx-auto mt-6" />
          <p className="mt-6 text-ivory/75 leading-relaxed">
            From regal Bundelkhandi thalis to multi-cuisine wedding buffets and live-action
            counters, our master chefs craft menus that become talking points long after
            the last guest leaves.
          </p>
          <Link to="/restaurant" className="mt-9 inline-block px-8 py-4 text-[11px] tracking-[0.32em] uppercase border border-gold text-gold hover:bg-gold hover:text-onyx transition rounded-sm">
            The Restaurant
          </Link>
        </div>
      </section>

      {/* Instagram */}
      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Instagram className="h-7 w-7 text-gold mx-auto" strokeWidth={1.4} />
          <h2 className="mt-4 font-display text-3xl md:text-4xl text-foreground">Follow our story</h2>
          <a href={SITE.instagram} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm tracking-[0.22em] uppercase text-gold-dark hover:text-gold transition">
            {SITE.instagramHandle}
          </a>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[heroNight.url, room.url, pool.url, exterior.url].map((src, i) => (
              <a key={i} href={SITE.instagram} target="_blank" rel="noreferrer" className="group relative aspect-square overflow-hidden">
                <img src={src} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/50 transition flex items-center justify-center">
                  <Instagram className="h-7 w-7 text-ivory opacity-0 group-hover:opacity-100 transition" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-onyx py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-gold text-[11px] tracking-[0.4em] uppercase">Location</span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-ivory">Find us in Tikamgarh</h2>
            <div className="gold-divider mt-6" />
            <p className="mt-6 text-ivory/75 leading-relaxed">
              Beautifully placed in {SITE.location}. Easy access from Jhansi, Khajuraho,
              Sagar and Gwalior — making it a natural destination for couples and guests
              travelling from across central India.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-3 text-ivory/85 hover:text-gold"><Phone className="h-4 w-4 text-gold" /> {SITE.phone}</a>
              <a href={`https://maps.google.com/?q=${encodeURIComponent(SITE.mapsQuery)}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-ivory/85 hover:text-gold"><MapPin className="h-4 w-4 text-gold" /> {SITE.location}</a>
            </div>
          </div>
          <div className="rounded-sm overflow-hidden border border-gold/30 shadow-luxe">
            <iframe
              title="Silver Estate Resort map"
              className="w-full h-[360px] block grayscale-[40%]"
              src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden bg-ivory">
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)", opacity: 0.4 }} />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="font-script text-gold text-3xl">Begin Your Celebration</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl text-foreground leading-tight">
            Reserve the estate for<br />your moment.
          </h2>
          <div className="gold-divider mx-auto mt-7" />
          <p className="mt-7 text-muted-foreground max-w-xl mx-auto">
            Our wedding concierge will respond within 24 hours with availability,
            personalised packages and a private tour.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="px-8 py-4 text-[11px] tracking-[0.32em] uppercase bg-gradient-gold text-onyx rounded-sm shadow-gold hover:-translate-y-0.5 transition">
              Book an Event
            </Link>
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="px-8 py-4 text-[11px] tracking-[0.32em] uppercase border border-foreground/30 hover:border-gold hover:text-gold transition rounded-sm">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

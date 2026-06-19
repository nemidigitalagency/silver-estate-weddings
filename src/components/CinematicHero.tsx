import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroNight from "@/assets/hero-night.jpg.asset.json";
import exterior from "@/assets/exterior.jpg.asset.json";
import { SITE } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

export function CinematicHero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      // Image 1 zooms + fades, image 2 reveals
      gsap.to(".hero-img-1", {
        scale: 1.25,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.fromTo(
        ".hero-img-2",
        { scale: 1.15, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "30% top",
            end: "bottom top",
            scrub: true,
          },
        },
      );
      gsap.to(".hero-content", {
        y: -60,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "60% top",
          scrub: true,
        },
      });
      gsap.to(".hero-overlay", {
        opacity: 0.92,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Initial entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { opacity: 0, y: 20, duration: 1 })
        .from(".hero-title-line", { opacity: 0, y: 40, stagger: 0.12, duration: 1.2 }, "-=0.6")
        .from(".hero-divider", { scaleX: 0, duration: 1 }, "-=0.6")
        .from(".hero-sub", { opacity: 0, y: 20, duration: 1 }, "-=0.6")
        .from(".hero-cta", { opacity: 0, y: 20, stagger: 0.15, duration: 0.9 }, "-=0.5")
        .from(".hero-scroll", { opacity: 0, duration: 1 }, "-=0.4");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative h-[200vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Image layers */}
        <img
          src={heroNight.url}
          alt="Silver Estate Resort at night, decorated for a wedding"
          className="hero-img-1 absolute inset-0 h-full w-full object-cover"
        />
        <img
          src={exterior.url}
          alt="Silver Estate Resort exterior"
          className="hero-img-2 absolute inset-0 h-full w-full object-cover opacity-0"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/45 via-onyx/35 to-onyx/85" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
        <div className="hero-overlay absolute inset-0 bg-onyx opacity-0" />

        {/* Decorative gold beams */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, oklch(0.85 0.13 88 / 0.18), transparent 70%)" }} />

        {/* Content */}
        <div className="hero-content relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <div className="hero-eyebrow flex items-center gap-4 text-gold text-[10px] md:text-xs tracking-[0.5em] uppercase">
            <span className="h-px w-10 bg-gold/60" />
            Tikamgarh · Madhya Pradesh
            <span className="h-px w-10 bg-gold/60" />
          </div>

          <h1 className="mt-7 font-display text-ivory leading-[0.95]">
            <span className="hero-title-line block text-5xl sm:text-6xl md:text-8xl tracking-[0.04em]">
              SILVER ESTATE
            </span>
            <span className="hero-title-line block font-script text-gold text-5xl sm:text-6xl md:text-7xl mt-2 md:mt-3">
              Resort
            </span>
          </h1>

          <div className="hero-divider gold-divider mt-8 origin-center" style={{ width: 140 }} />

          <p className="hero-sub mt-7 max-w-xl text-ivory/85 text-base md:text-lg font-light">
            {SITE.tagline}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/booking"
              className="hero-cta group relative px-8 py-4 text-[11px] tracking-[0.32em] uppercase bg-gradient-gold text-onyx font-medium rounded-sm shadow-gold hover:shadow-luxe transition-all hover:-translate-y-0.5"
            >
              Book an Event
            </Link>
            <Link
              to="/contact"
              className="hero-cta px-8 py-4 text-[11px] tracking-[0.32em] uppercase text-ivory border border-ivory/40 hover:border-gold hover:text-gold rounded-sm transition-all hover:-translate-y-0.5 backdrop-blur-sm"
            >
              Schedule a Visit
            </Link>
          </div>

          <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-ivory/60">
            <span className="text-[9px] tracking-[0.5em] uppercase">Scroll</span>
            <span className="h-12 w-px bg-gradient-to-b from-gold to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

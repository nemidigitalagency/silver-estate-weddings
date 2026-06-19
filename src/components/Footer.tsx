import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-onyx text-ivory/85 pt-20 pb-8 mt-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="[&_div]:text-ivory" />
          <p className="mt-5 text-sm leading-relaxed text-ivory/65 max-w-xs">
            A premier destination for grand weddings, royal celebrations and luxury stays in
            the heart of Bundelkhand.
          </p>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-gold hover:text-ivory transition"
          >
            <Instagram className="h-4 w-4" /> {SITE.instagramHandle}
          </a>
        </div>

        <div>
          <h4 className="text-gold tracking-[0.28em] text-xs uppercase mb-5">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-ivory/70 hover:text-gold transition">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-gold tracking-[0.28em] text-xs uppercase mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-ivory/75">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /> {SITE.location}</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /><a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" /><a href={`mailto:${SITE.email}`} className="break-all">{SITE.email}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold tracking-[0.28em] text-xs uppercase mb-5">Plan Your Event</h4>
          <p className="text-sm text-ivory/70 mb-4">
            Speak with our wedding concierge to begin crafting your moment.
          </p>
          <Link
            to="/booking"
            className="inline-block px-5 py-3 text-[11px] tracking-[0.28em] uppercase bg-gradient-gold text-onyx font-medium rounded-sm"
          >
            Begin Inquiry
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-10 mt-16 pt-6 border-t border-ivory/10 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-ivory/50">
        <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-gold">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-gold">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

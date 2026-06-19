import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[13px] tracking-[0.18em] uppercase text-foreground/80 hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-2 text-sm text-foreground/80 hover:text-gold transition">
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
          <Link
            to="/booking"
            className="px-5 py-2.5 text-[12px] tracking-[0.22em] uppercase bg-gradient-gold text-onyx font-medium rounded-sm shadow-gold hover:opacity-90 transition"
          >
            Book Event
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in">
          <nav className="flex flex-col px-6 py-6 gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm tracking-[0.2em] uppercase text-foreground/90 hover:text-gold border-b border-border/40"
                activeProps={{ className: "text-gold" }}
              >
                {n.label}
              </Link>
            ))}
            <a href={`tel:${SITE.phoneRaw}`} className="mt-4 flex items-center gap-2 text-sm text-foreground/80">
              <Phone className="h-4 w-4 text-gold" /> {SITE.phone}
            </a>
            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="mt-4 text-center px-5 py-3 text-[12px] tracking-[0.22em] uppercase bg-gradient-gold text-onyx font-medium rounded-sm"
            >
              Book Event
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

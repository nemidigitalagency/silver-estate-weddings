import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative h-[72vh] min-h-[480px] w-full overflow-hidden">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-onyx/70 via-onyx/55 to-onyx/85" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
        </>
      )}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gold text-[11px] tracking-[0.4em] uppercase mb-5"
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl text-ivory leading-[1.05]"
        >
          {title}
        </motion.h1>
        <div className="gold-divider mt-8" />
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-6 max-w-2xl text-ivory/80 text-base md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

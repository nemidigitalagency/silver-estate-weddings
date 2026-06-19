import { motion } from "framer-motion";

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${alignCls} mb-12`}
    >
      {eyebrow && (
        <span className={`text-[11px] tracking-[0.4em] uppercase mb-4 ${light ? "text-gold" : "text-gold-dark"}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-4xl md:text-5xl leading-tight ${light ? "text-ivory" : "text-foreground"}`}>
        {title}
      </h2>
      <div className={`gold-divider mt-5 ${align === "left" ? "self-start" : ""}`} />
      {subtitle && (
        <p className={`mt-5 max-w-2xl text-base ${light ? "text-ivory/75" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden>
        <defs>
          <linearGradient id="lg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#E6C66A" />
            <stop offset="100%" stopColor="#9C7A1F" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="29" fill="none" stroke="url(#lg)" strokeWidth="1.2" />
        <circle cx="32" cy="32" r="23" fill="none" stroke="url(#lg)" strokeWidth="0.8" />
        <text x="32" y="40" textAnchor="middle" fontFamily="Cormorant Garamond, serif"
              fontSize="26" fill="url(#lg)" fontStyle="italic">S</text>
      </svg>
      <div className="leading-none">
        <div className="text-[15px] font-display tracking-[0.28em] text-foreground">SILVER</div>
        <div className="text-[9px] tracking-[0.4em] text-gold mt-0.5">ESTATE RESORT</div>
      </div>
    </div>
  );
}

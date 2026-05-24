const COLUMNS = [
  { label: "Kontakt", lines: ["hallo@harmoniabalance.de"] },
  { label: "Praxis", lines: ["Beispielstraße 12", "80331 München"] },
  { label: "Web", lines: ["harmoniabalance.de"] },
  { label: "Rechtliches", lines: ["Impressum", "Datenschutz"] },
]

function ResonanceSymbol() {
  return (
    <div className="relative h-[180px] w-[180px]">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        {[10, 20, 30, 40, 50].map((r) => (
          <circle
            key={r}
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="#C9A87C"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            opacity="0.4"
          />
        ))}
        <circle cx="50" cy="50" r="2.5" fill="#C9A87C" />
      </svg>

      {[0, 1.2, 2.4, 3.6, 4.8].map((delay) => (
        <span
          key={delay}
          className="absolute left-1/2 top-1/2 h-[8px] w-[8px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-champagne"
          style={{ animation: `footerRipple 6s linear ${delay}s infinite` }}
        />
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-teal-deep px-[clamp(20px,5vw,80px)] py-[clamp(80px,10vw,120px)] text-cream">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="flex flex-col items-center text-center">
          <ResonanceSymbol />
          <span className="mx-auto mt-12 block h-px w-[60px] bg-champagne" />

          <div className="mt-8 font-serif text-[clamp(2rem,5vw,3rem)] font-light uppercase text-cream" style={{ letterSpacing: "0.16em" }}>
            Harmonia Balance<span className="text-champagne">·</span>
          </div>
          <p className="mt-4 font-serif text-xl font-light italic text-champagne">
            Im Gleichgewicht ankommen.
          </p>
        </div>

        <div className="mt-24 grid grid-cols-4 gap-10 border-t border-champagne/15 pt-12 max-[760px]:grid-cols-2 max-[420px]:grid-cols-1">
          {COLUMNS.map((col) => (
            <div key={col.label}>
              <span
                className="text-[10px] text-champagne label-mono"
                style={{ letterSpacing: "0.34em" }}
              >
                {col.label}
              </span>
              <div className="mt-4 space-y-1.5">
                {col.lines.map((line) => (
                  <p key={line} className="font-sans text-sm font-light text-cream/70">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-champagne/15 pt-8 text-center">
          <p
            className="text-[10px] text-cream/50 label-mono"
            style={{ letterSpacing: "0.34em" }}
          >
            © 2026 Harmonia Balance · Selbstzahler-Praxis · München
          </p>
        </div>
      </div>
    </footer>
  )
}

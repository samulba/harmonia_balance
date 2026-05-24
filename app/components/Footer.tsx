const COLUMNS = [
  {
    title: "Praxis",
    links: [
      { label: "Essenz", href: "#essenz" },
      { label: "Themen", href: "#themen" },
      { label: "Methodik", href: "#methodik" },
      { label: "Ablauf", href: "#ablauf" },
    ],
  },
  {
    title: "Orientierung",
    links: [
      { label: "Der Raum", href: "#praxis" },
      { label: "Fragen", href: "#faq" },
      { label: "Kontakt", href: "#kontakt" },
    ],
  },
  {
    title: "Kontakt",
    links: [
      { label: "hallo@harmoniabalance.de", href: "mailto:hallo@harmoniabalance.de" },
      { label: "+49 89 123 4567", href: "tel:+49891234567" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "#" },
      { label: "Datenschutz", href: "#" },
    ],
  },
]

function ResonanceSymbol() {
  const radii = [78, 60, 42, 24]
  return (
    <div className="relative h-[180px] w-[180px]">
      {/* Static concentric rings */}
      <svg viewBox="0 0 180 180" className="absolute inset-0 h-full w-full">
        {radii.map((r) => (
          <circle
            key={r}
            cx="90"
            cy="90"
            r={r}
            fill="none"
            stroke="#C9A87C"
            strokeWidth="1"
            opacity="0.35"
          />
        ))}
        <circle cx="90" cy="90" r="5" fill="#C9A87C" />
      </svg>

      {/* Animated ripples */}
      {[0, 3, 6].map((delay) => (
        <span
          key={delay}
          className="absolute left-1/2 top-1/2 h-full w-full rounded-full border border-champagne"
          style={{
            transform: "translate(-50%, -50%) scale(1)",
            opacity: 0,
            animation: `hbRipple 9s linear ${delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cream/10 bg-teal-deep px-6 pb-12 pt-24 sm:px-10">
      <div className="mx-auto w-full max-w-[1320px]">
        {/* Symbol + lockup */}
        <div className="flex flex-col items-center text-center">
          <ResonanceSymbol />
          <div className="mt-8 font-display">
            <span className="text-2xl tracking-[0.18em] text-cream">
              HARMONIA<span className="text-champagne">·</span>
            </span>
            <span className="ml-1 text-2xl italic font-light text-champagne">
              Balance
            </span>
          </div>
          <p
            className="mt-4 text-[0.7rem] text-cream/55 label-mono"
            style={{ letterSpacing: "0.3em" }}
          >
            Im Gleichgewicht ankommen.
          </p>
        </div>

        {/* Columns */}
        <div className="mt-20 grid grid-cols-4 gap-10 border-t border-cream/10 pt-14 max-[760px]:grid-cols-2 max-[420px]:grid-cols-1">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3
                className="text-[0.62rem] text-champagne label-mono"
                style={{ letterSpacing: "0.3em" }}
              >
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="font-body text-sm text-cream/60 transition-colors hover:text-champagne"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 sm:flex-row">
          <p
            className="text-[0.62rem] text-cream/40 label-mono"
            style={{ letterSpacing: "0.26em" }}
          >
            © 2026 Harmonia Balance · Selbstzahler-Praxis
          </p>
          <p
            className="text-[0.62rem] text-cream/40 label-mono"
            style={{ letterSpacing: "0.26em" }}
          >
            München
          </p>
        </div>
      </div>
    </footer>
  )
}

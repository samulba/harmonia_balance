"use client"

import ResonanceMedallion from "./ResonanceMedallion"

const PARTICLES = [
  { left: "10%", top: "30%", size: 4, delay: 0, duration: 9, mobile: true },
  { left: "26%", top: "62%", size: 3, delay: 2.5, duration: 11, mobile: false },
  { left: "44%", top: "22%", size: 4, delay: 5, duration: 8, mobile: true },
  { left: "68%", top: "48%", size: 5, delay: 1.5, duration: 10, mobile: false },
  { left: "82%", top: "32%", size: 3, delay: 4, duration: 9.5, mobile: true },
  { left: "92%", top: "60%", size: 4, delay: 6.5, duration: 11, mobile: false },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-teal-deep"
    >
      {/* Background image with Ken-Burns */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: "url('/images/praxis-room.png')",
            backgroundPosition: "center 35%",
            animation: "heroZoom 36s ease-in-out infinite alternate",
            willChange: "transform",
          }}
          role="img"
          aria-label="Ruhiger Praxisraum mit Sessel und Eukalyptuszweig in warmem Licht"
        />
      </div>

      {/* Gradient overlays */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,58,71,0.55) 0%, rgba(15,58,71,0.05) 45%, rgba(10,40,50,0.80) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(10,40,50,0.30) 0%, transparent 35%, transparent 65%, rgba(10,40,50,0.30) 100%)",
        }}
      />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className={`absolute rounded-full ${p.mobile ? "" : "max-[560px]:hidden"}`}
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background: "#C9A87C",
              boxShadow: "0 0 14px 3px rgba(201,168,124,0.55)",
              animation: `floatGlow ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Top bar */}
      <div className="relative z-20 grid grid-cols-[1fr_auto] items-center gap-4 px-[clamp(20px,4vw,56px)] py-8">
        <a href="#hero" className="font-serif text-cream">
          <span
            className="text-lg uppercase sm:text-xl"
            style={{ letterSpacing: "0.22em" }}
          >
            Harmonia<span className="text-champagne">·</span>
          </span>
          <span
            className="ml-1 text-lg font-light italic text-champagne sm:text-xl max-[560px]:hidden"
            style={{ letterSpacing: "0.14em" }}
          >
            Balance
          </span>
        </a>

        <div className="flex items-center gap-5 sm:gap-7">
          <a
            href="#kontakt"
            className="text-[11px] text-champagne underline decoration-1 underline-offset-4 label-mono max-[820px]:hidden"
            style={{ letterSpacing: "0.26em" }}
          >
            Erstgespräch vereinbaren
          </a>
          <button
            type="button"
            aria-label="Menü öffnen"
            className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-cream/40 text-cream transition-colors hover:border-champagne hover:text-champagne"
          >
            <span className="flex flex-col gap-[5px]">
              <span className="block h-px w-[14px] bg-current" />
              <span className="block h-px w-[14px] bg-current" />
            </span>
          </button>
        </div>
      </div>

      {/* Bottom content */}
      <div className="relative z-10 mt-auto grid grid-cols-[1fr_auto] items-end gap-10 px-[clamp(20px,4vw,56px)] pb-[clamp(60px,8vw,90px)] pt-[60px] max-[820px]:grid-cols-1 max-[820px]:items-start">
        <div>
          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-4">
            <span className="block h-px w-11 bg-champagne" />
            <span
              className="text-[11px] text-cream label-mono"
              style={{ letterSpacing: "0.34em" }}
            >
              Systemische Begleitung · München
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif leading-[0.92]">
            <span
              className="block font-normal uppercase text-cream [font-size:clamp(2.2rem,9.5vw,10rem)]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Im Gleichgewicht
            </span>
            <span
              className="block font-light italic lowercase text-shine [font-size:clamp(2.2rem,9.5vw,10rem)]"
              style={{ letterSpacing: "-0.025em" }}
            >
              ankommen.
            </span>
          </h1>

          {/* Tagline */}
          <div className="mt-7 flex items-center gap-4">
            <span className="block h-px w-[50px] shrink-0 bg-champagne" />
            <p className="max-w-[480px] font-serif text-[clamp(0.95rem,2vw,1.2rem)] font-light italic text-cream/85">
              Eine Praxis, die Zeit nimmt.
            </p>
          </div>
        </div>

        {/* Medallion */}
        <div
          className="aspect-square w-[clamp(140px,18vw,240px)] shrink-0 max-[1024px]:w-[180px] max-[820px]:ml-auto max-[820px]:w-[150px] max-[560px]:w-[120px] max-[380px]:w-[100px]"
          aria-hidden
        >
          <ResonanceMedallion />
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute inset-x-0 bottom-7 z-10 flex justify-center max-[560px]:hidden">
        <div className="flex flex-col items-center gap-3">
          <span
            className="text-[9.5px] text-cream/60 label-mono"
            style={{ letterSpacing: "0.34em" }}
          >
            Scroll
          </span>
          <span className="relative block h-9 w-px overflow-hidden bg-cream/20">
            <span
              className="absolute left-0 w-px bg-champagne"
              style={{ animation: "scrollLineDouble 2.6s ease-in-out infinite" }}
            />
          </span>
        </div>
      </div>
    </section>
  )
}

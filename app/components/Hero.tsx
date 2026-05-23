"use client"

import ResonanceMedallion from "./ResonanceMedallion"

// Deterministische Partikel-Konfiguration (keine Hydration-Mismatches)
const PARTICLES = [
  { left: "12%", bottom: "18%", size: 5, delay: 0, duration: 14 },
  { left: "28%", bottom: "8%", size: 3, delay: 3, duration: 18 },
  { left: "47%", bottom: "24%", size: 4, delay: 6, duration: 16 },
  { left: "66%", bottom: "12%", size: 6, delay: 2, duration: 20 },
  { left: "81%", bottom: "30%", size: 3, delay: 8, duration: 15 },
  { left: "92%", bottom: "16%", size: 4, delay: 5, duration: 17 },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-teal-deep"
    >
      {/* Background image with Ken-Burns. TODO: praxis-room.jpg ergänzen (Sessel/Eukalyptus, KEINE medizinischen Motive) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #0a2832 0%, #0f3a47 55%, #123e4b 100%), url('/images/praxis-room.jpg')",
            backgroundBlendMode: "multiply",
            animation: "kenBurns 36s ease-in-out infinite",
            willChange: "transform",
          }}
        />
      </div>

      {/* Gradient overlays for legibility */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,40,50,0.55) 0%, rgba(10,40,50,0.15) 35%, rgba(10,40,50,0.55) 70%, rgba(10,40,50,0.92) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(120% 80% at 30% 70%, transparent 40%, rgba(10,40,50,0.6) 100%)",
        }}
      />

      {/* Floating champagne particles */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: p.left,
              bottom: p.bottom,
              width: p.size,
              height: p.size,
              background: "#C9A87C",
              boxShadow: "0 0 12px 2px rgba(201,168,124,0.6)",
              animation: `floatParticle ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Top bar */}
      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-6 sm:px-10 sm:py-8">
        {/* Brand */}
        <a href="#hero" className="font-display text-cream">
          <span className="text-lg tracking-[0.18em] sm:text-xl">
            HARMONIA
            <span className="text-champagne">·</span>
          </span>
          <span className="ml-1 text-lg italic font-light text-champagne sm:text-xl">
            Balance
          </span>
        </a>

        {/* Right cluster */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="#kontakt"
            className="hidden text-xs text-cream/85 transition-colors hover:text-champagne label-mono sm:inline-block"
            style={{ letterSpacing: "0.26em" }}
          >
            Erstgespräch vereinbaren
          </a>
          <button
            type="button"
            aria-label="Menü öffnen"
            className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:border-champagne hover:text-champagne"
          >
            <span className="flex flex-col gap-[5px]">
              <span className="block h-px w-4 bg-current" />
              <span className="block h-px w-4 bg-current" />
            </span>
          </button>
        </div>
      </div>

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-20 sm:px-10 sm:pb-24">
        <div className="mx-auto grid w-full max-w-[1320px] grid-cols-[1fr_auto] items-end gap-10 max-[820px]:grid-cols-1 max-[820px]:items-start">
          {/* Left: eyebrow + headline + tagline */}
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="block h-px w-11 bg-champagne" />
              <span
                className="text-[0.7rem] text-champagne label-mono"
                style={{ letterSpacing: "0.3em" }}
              >
                Systemische Begleitung · München
              </span>
            </div>

            <h1 className="font-display leading-[0.92]">
              <span className="block uppercase font-normal text-cream [font-size:clamp(2.6rem,9vw,10rem)] [letter-spacing:0.02em]">
                Im Gleichgewicht
              </span>
              <span className="block italic font-light lowercase text-shine [font-size:clamp(2.6rem,9vw,10rem)]">
                ankommen.
              </span>
            </h1>

            <p className="mt-6 max-w-md font-body text-base text-cream/75 sm:text-lg">
              Eine Praxis, die Zeit nimmt.
            </p>
          </div>

          {/* Right: medallion */}
          <div className="h-[240px] w-[240px] shrink-0 max-[820px]:h-[180px] max-[820px]:w-[180px] max-[560px]:hidden">
            <ResonanceMedallion tagText="München · 2026" />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute inset-x-0 bottom-7 z-10 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <span
            className="text-[0.6rem] text-cream/60 label-mono"
            style={{ letterSpacing: "0.3em" }}
          >
            Mehr
          </span>
          <span
            className="block h-8 w-px bg-gradient-to-b from-champagne to-transparent"
            style={{ animation: "scrollBob 2.4s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  )
}

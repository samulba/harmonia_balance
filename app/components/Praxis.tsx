import { Section, Eyebrow } from "./ui"

const INFO = [
  {
    label: "Adresse",
    lines: ["Beispielstraße 12", "80331 München"],
  },
  {
    label: "Termine",
    lines: ["Mo – Fr, 09 – 18 Uhr", "Nach Vereinbarung"],
  },
  {
    label: "Anfahrt",
    lines: ["U-Bahn Marienplatz", "Wenige Minuten zu Fuß"],
  },
]

export default function Praxis() {
  return (
    <Section id="praxis" className="bg-teal-deep">
      <Eyebrow>Praxis — Raum</Eyebrow>
      <div className="grid grid-cols-[1fr_1.1fr] items-start gap-16 max-[860px]:grid-cols-1 max-[860px]:gap-12">
        <div>
          <h2 className="font-display text-cream [font-size:clamp(2.4rem,6vw,4.4rem)] leading-[1.02]">
            Der Raum.
          </h2>
          <p className="mt-6 max-w-md font-body text-[1rem] leading-relaxed text-cream/65">
            Ein ruhiger Ort im Herzen Münchens. Gedämpftes Licht, warme
            Materialien, Zeit zum Durchatmen. Ein Raum, der nichts von dir
            verlangt — außer da zu sein.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/10">
          {INFO.map((i) => (
            <div
              key={i.label}
              className="flex items-baseline justify-between gap-6 bg-teal-deep px-7 py-8 sm:px-9"
            >
              <span
                className="text-[0.65rem] text-champagne label-mono"
                style={{ letterSpacing: "0.3em" }}
              >
                {i.label}
              </span>
              <div className="text-right">
                {i.lines.map((line, idx) => (
                  <p
                    key={idx}
                    className={
                      idx === 0
                        ? "font-display text-cream [font-size:clamp(1.2rem,2vw,1.6rem)]"
                        : "mt-1 font-body text-sm text-cream/55"
                    }
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

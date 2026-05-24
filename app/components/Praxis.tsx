import { Section, Eyebrow } from "./ui"
import ScrollReveal from "./ScrollReveal"

const INFO = [
  { label: "Adresse", lines: ["Beispielstraße 12", "80331 München"] },
  { label: "Termine", lines: ["Mo–Fr 09–18 Uhr", "nach Vereinbarung"] },
  { label: "Anfahrt", lines: ["U-Bahn Marienplatz", "3 Min Fußweg"] },
]

export default function Praxis() {
  return (
    <Section id="praxis" tone="cream">
      <ScrollReveal>
        <Eyebrow>Praxis</Eyebrow>
        <h2 className="mt-7 font-serif text-[clamp(2rem,4.5vw,4rem)] font-normal leading-[1.02] text-teal">
          Der Raum.
        </h2>
        <p className="mt-6 max-w-2xl font-sans font-light leading-relaxed text-teal/75">
          Eine ruhige Praxis in zentraler Münchner Lage. Sessel, gedämpftes
          Licht, kein Wartezimmer-Druck. Du kommst an, du wirst empfangen, wir
          nehmen uns Zeit.
        </p>
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-3 gap-12 border-t border-teal/15 pt-12 max-[640px]:grid-cols-1 max-[640px]:gap-8">
        {INFO.map((b, i) => (
          <ScrollReveal key={b.label} delay={(i + 1) as 1 | 2 | 3}>
            <span
              className="text-[10px] text-champagne-deep label-mono"
              style={{ letterSpacing: "0.34em" }}
            >
              {b.label}
            </span>
            <div className="mt-3">
              {b.lines.map((line) => (
                <p
                  key={line}
                  className="font-serif text-xl leading-snug text-teal"
                >
                  {line}
                </p>
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}

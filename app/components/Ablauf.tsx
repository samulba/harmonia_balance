import { Section, Eyebrow } from "./ui"
import ScrollReveal from "./ScrollReveal"

const STEPS = [
  {
    no: "01",
    title: "Kontakt",
    body: "Du schreibst oder rufst an. Wir melden uns innerhalb von zwei Werktagen.",
  },
  {
    no: "02",
    title: "Erstgespräch",
    body: "90 Minuten in der Praxis. Wir lernen uns kennen, du erzählst, wir schauen ob es passt.",
  },
  {
    no: "03",
    title: "Begleitung",
    body: "Wenn beide weitermachen möchten, vereinbaren wir die nächsten Termine.",
  },
]

export default function Ablauf() {
  return (
    <Section id="ablauf" tone="cream">
      <ScrollReveal>
        <Eyebrow>Ablauf — 03 Schritte</Eyebrow>
        <h2 className="mt-7 max-w-3xl font-serif text-[clamp(2rem,4.5vw,4rem)] font-normal leading-[1.05] text-teal">
          So beginnen wir.
        </h2>
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-3 gap-12 max-[760px]:grid-cols-1 max-[760px]:gap-14">
        {STEPS.map((s, i) => (
          <ScrollReveal
            key={s.no}
            delay={(i + 1) as 1 | 2 | 3}
            className="relative"
          >
            {i < STEPS.length - 1 && (
              <span className="absolute left-[4.5rem] top-7 h-px w-[calc(100%-3rem)] bg-champagne/50 max-[760px]:hidden" />
            )}
            <span className="font-serif text-[4rem] font-light leading-none text-champagne">
              {s.no}
            </span>
            <h3 className="mt-4 font-serif text-[1.75rem] font-normal leading-tight text-teal">
              {s.title}
            </h3>
            <p className="mt-3 max-w-xs font-sans font-light leading-relaxed text-teal/70">
              {s.body}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}

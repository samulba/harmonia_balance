import { Section, Eyebrow } from "./ui"

const STEPS = [
  {
    no: "01",
    title: "Kontakt",
    body: "Du meldest dich kurz — per Formular, Mail oder Telefon. Ein, zwei Sätze zu deinem Anliegen genügen. Wir finden gemeinsam einen Termin.",
  },
  {
    no: "02",
    title: "Erstgespräch",
    body: "90 Minuten Zeit, um anzukommen und zu schauen, worum es geht. Ganz unverbindlich klären wir, ob die Zusammenarbeit für dich stimmig ist.",
  },
  {
    no: "03",
    title: "Begleitung",
    body: "Wenn es passt, beginnt die regelmäßige Arbeit. Tempo und Dauer bestimmst du mit — so lange, wie es dir gut tut.",
  },
]

export default function Ablauf() {
  return (
    <Section id="ablauf" className="bg-teal">
      <Eyebrow>Ablauf — 03</Eyebrow>
      <h2 className="mb-16 max-w-3xl font-display text-cream [font-size:clamp(2rem,5vw,3.6rem)] leading-[1.05]">
        Wie der Weg beginnt.
      </h2>

      <div className="grid grid-cols-3 gap-10 max-[760px]:grid-cols-1 max-[760px]:gap-12">
        {STEPS.map((s, i) => (
          <div key={s.no} className="relative">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-display text-champagne [font-size:clamp(2.4rem,4vw,3.4rem)] leading-none">
                {s.no}
              </span>
              {i < STEPS.length - 1 && (
                <span className="h-px flex-1 bg-gradient-to-r from-champagne/50 to-transparent max-[760px]:hidden" />
              )}
            </div>
            <h3 className="font-display text-cream [font-size:clamp(1.5rem,2.4vw,2rem)] leading-tight">
              {s.title}
            </h3>
            <p className="mt-4 max-w-xs font-body text-[0.95rem] leading-relaxed text-cream/65">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

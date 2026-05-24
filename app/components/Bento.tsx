import { Section, Eyebrow } from "./ui"
import ScrollReveal from "./ScrollReveal"

const TILES = [
  {
    label: "Ansatz",
    title: "Systemisch denken",
    body: "Wir schauen nicht nur auf einzelne Themen, sondern auf das Zusammenspiel von Körper, Beziehungen und Lebenssituation.",
  },
  {
    label: "Tempo",
    title: "Zeit als Methode",
    body: "Erstgespräche dauern 90 Minuten. Folgesitzungen 60. Nichts wird hineingequetscht.",
  },
  {
    label: "Rahmen",
    title: "Eine Begleiterin",
    body: "Du arbeitest durchgehend mit derselben Person. Kein wechselndes Team, keine Übergaben.",
  },
  {
    label: "Haltung",
    title: "Ohne Versprechen",
    body: "Manches braucht Zeit. Manches klärt sich schnell. Wir sagen dir ehrlich, was möglich ist.",
  },
]

export default function Bento() {
  return (
    <Section id="essenz" tone="cream">
      <div className="grid grid-cols-2 gap-6 max-[760px]:grid-cols-1">
        {TILES.map((t, i) => (
          <ScrollReveal
            key={t.label}
            delay={((i % 2) + 1) as 1 | 2}
            className="rounded-3xl border border-teal/10 bg-cream-light p-[clamp(32px,4vw,56px)] transition-colors duration-500 hover:border-champagne/40"
          >
            <span
              className="text-[11px] text-champagne-deep label-mono"
              style={{ letterSpacing: "0.32em" }}
            >
              {t.label}
            </span>
            <h3 className="mt-4 font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] font-normal leading-tight text-teal">
              {t.title}
            </h3>
            <p className="mt-4 max-w-md font-sans text-[0.98rem] font-light leading-relaxed text-teal/70">
              {t.body}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}

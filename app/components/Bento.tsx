import { Section, Eyebrow } from "./ui"

const TILES = [
  {
    label: "Ansatz",
    title: "Systemisch denken",
    body: "Wir schauen nicht auf ein isoliertes Symptom, sondern auf die Zusammenhänge — Beziehungen, Rollen, Muster. Vieles klärt sich, wenn der größere Kontext sichtbar wird.",
  },
  {
    label: "Tempo",
    title: "Zeit als Methode",
    body: "Erstgespräch 90 Minuten, Einzelsitzungen 60 Minuten. Kein Takt, keine Eile. Veränderung braucht Raum — und der ist hier eingeplant.",
  },
  {
    label: "Rahmen",
    title: "Eine Begleiterin",
    body: "Du arbeitest durchgehend mit einer Person. Keine wechselnden Ansprechpartner, kein Anfangen von vorn. Eine vertraute Begleitung über die Zeit.",
  },
  {
    label: "Haltung",
    title: "Ohne Versprechen",
    body: "Eine Selbstzahler-Praxis ohne Heilversprechen. Was du mitnimmst, entsteht in der gemeinsamen Arbeit — ehrlich, klar und auf Augenhöhe.",
  },
]

export default function Bento() {
  return (
    <Section id="essenz" className="bg-teal-deep">
      <Eyebrow>Essenz — 04</Eyebrow>
      <h2 className="mb-14 max-w-3xl font-display text-cream [font-size:clamp(2rem,5vw,3.6rem)] leading-[1.05]">
        Was diese Praxis ausmacht.
      </h2>

      <div className="grid grid-cols-2 gap-5 max-[760px]:grid-cols-1">
        {TILES.map((t) => (
          <div
            key={t.label}
            className="group rounded-2xl border border-cream/10 bg-cream/[0.02] p-8 transition-all duration-500 hover:border-champagne/40 hover:bg-cream/[0.04] sm:p-10"
          >
            <span
              className="text-[0.65rem] text-champagne label-mono"
              style={{ letterSpacing: "0.32em" }}
            >
              {t.label}
            </span>
            <h3 className="mt-5 font-display text-cream [font-size:clamp(1.6rem,3vw,2.4rem)] leading-tight">
              {t.title}
            </h3>
            <p className="mt-4 max-w-md font-body text-[0.95rem] leading-relaxed text-cream/65">
              {t.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

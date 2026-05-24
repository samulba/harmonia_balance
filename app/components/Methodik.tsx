import { Section, Eyebrow } from "./ui"

const SCHRITTE = [
  {
    no: "01",
    title: "Erstgespräch",
    meta: "90 Min",
    body: "In Ruhe ankommen, das Anliegen schildern, klären, ob es passt. Hier entsteht die Grundlage für die gemeinsame Arbeit.",
  },
  {
    no: "02",
    title: "Einzelsitzungen",
    meta: "60 Min",
    body: "Regelmäßige Termine in deinem Tempo. Jede Sitzung knüpft an die vorherige an — kontinuierlich und verlässlich.",
  },
  {
    no: "03",
    title: "Achtsamkeitsarbeit",
    meta: "Praxis",
    body: "Übungen, um im Moment präsent zu sein und Abstand zu kreisenden Gedanken zu gewinnen.",
  },
  {
    no: "04",
    title: "Atemtechniken",
    meta: "Praxis",
    body: "Einfache, alltagstaugliche Wege, über den Atem Anspannung zu regulieren und zur Ruhe zu kommen.",
  },
  {
    no: "05",
    title: "Körperwahrnehmung",
    meta: "Praxis",
    body: "Wieder ein Gespür dafür entwickeln, was der Körper signalisiert — und darauf hören lernen.",
  },
  {
    no: "06",
    title: "Ressourcenarbeit",
    meta: "Ansatz",
    body: "Stärken und Kraftquellen sichtbar machen und gezielt nutzen, statt nur auf Schwieriges zu schauen.",
  },
  {
    no: "07",
    title: "Reflexion",
    meta: "Ansatz",
    body: "Gemeinsam Muster erkennen, Perspektiven wechseln und neue Handlungsräume entdecken.",
  },
  {
    no: "08",
    title: "Begleitung über Zeit",
    meta: "Rahmen",
    body: "Veränderung braucht Wiederholung. Eine Begleitung, die mitgeht, statt einmalig zu beraten.",
  },
]

export default function Methodik() {
  return (
    <Section id="methodik" className="bg-teal-deep">
      <Eyebrow>Methodik — 08</Eyebrow>
      <h2 className="mb-14 max-w-3xl font-display text-cream [font-size:clamp(2rem,5vw,3.6rem)] leading-[1.05]">
        Wie wir arbeiten.
      </h2>

      <div className="grid grid-cols-4 gap-5 max-[980px]:grid-cols-2 max-[520px]:grid-cols-1">
        {SCHRITTE.map((s) => (
          <div
            key={s.no}
            className="flex flex-col rounded-2xl border border-cream/10 bg-cream/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-champagne/40"
          >
            <div className="flex items-center justify-between">
              <span
                className="text-[0.65rem] text-champagne label-mono"
                style={{ letterSpacing: "0.3em" }}
              >
                {s.no}
              </span>
              <span
                className="text-[0.6rem] text-cream/40 label-mono"
                style={{ letterSpacing: "0.24em" }}
              >
                {s.meta}
              </span>
            </div>
            <h3 className="mt-6 font-display text-cream [font-size:clamp(1.3rem,2vw,1.7rem)] leading-tight">
              {s.title}
            </h3>
            <p className="mt-3 font-body text-[0.88rem] leading-relaxed text-cream/60">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

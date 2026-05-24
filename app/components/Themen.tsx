import { Section, Eyebrow } from "./ui"

const THEMEN = [
  {
    no: "01",
    title: "Stress & Überlastung",
    body: "Wenn der Alltag zu viel wird und die Anspannung nicht mehr abfällt — wir schauen gemeinsam, woher der Druck kommt und was dir Entlastung verschafft.",
  },
  {
    no: "02",
    title: "Körper & Wahrnehmung",
    body: "Den eigenen Körper wieder spüren und ernst nehmen. Ein achtsamer Zugang zu dem, was Anspannung und Ruhe für dich bedeuten.",
  },
  {
    no: "03",
    title: "Lebensphasen & Übergänge",
    body: "Neuanfänge, Abschiede, Wendepunkte. Phasen, in denen vieles in Bewegung ist und Orientierung guttut.",
  },
  {
    no: "04",
    title: "Anhaltende Belastungen",
    body: "Themen, die dich länger begleiten und an denen du etwas verändern möchtest — in deinem Tempo, ohne Druck.",
  },
  {
    no: "05",
    title: "Schlaf & Erholung",
    body: "Zur Ruhe finden und Erholung wieder zulassen. Wir betrachten deine Muster rund um Anspannung, Pausen und Schlaf.",
  },
  {
    no: "06",
    title: "Selbstklärung & Orientierung",
    body: "Sortieren, was wirklich wichtig ist. Klarheit über Entscheidungen, Werte und die eigene Richtung gewinnen.",
  },
]

export default function Themen() {
  return (
    <Section id="themen" className="bg-teal">
      <Eyebrow>Themen — 06</Eyebrow>
      <h2 className="mb-14 max-w-3xl font-display text-cream [font-size:clamp(2rem,5vw,3.6rem)] leading-[1.05]">
        Womit Menschen zu uns kommen.
      </h2>

      <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/10 max-[860px]:grid-cols-2 max-[560px]:grid-cols-1">
        {THEMEN.map((t) => (
          <div
            key={t.no}
            className="group bg-teal p-8 transition-colors duration-500 hover:bg-teal-deep sm:p-10"
          >
            <span
              className="text-[0.65rem] text-champagne/70 label-mono"
              style={{ letterSpacing: "0.3em" }}
            >
              {t.no}
            </span>
            <h3 className="mt-5 font-display text-cream [font-size:clamp(1.4rem,2.4vw,1.9rem)] leading-tight">
              {t.title}
            </h3>
            <p className="mt-4 font-body text-[0.92rem] leading-relaxed text-cream/60">
              {t.body}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-2xl font-body text-sm leading-relaxed text-cream/45">
        Hinweis: Diese Begleitung ist kein Ersatz für medizinische oder
        psychotherapeutische Versorgung. Bei akuten Beschwerden wende dich bitte
        an entsprechende Fachstellen.
      </p>
    </Section>
  )
}

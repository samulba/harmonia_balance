import { Section, Eyebrow } from "./ui"
import ScrollReveal from "./ScrollReveal"

const ICON = "h-6 w-6 text-champagne"
const sp = { stroke: "currentColor", strokeWidth: 1.2, fill: "none" } as const

const THEMEN = [
  {
    title: "Stress & Überlastung",
    body: "Anhaltende Anspannung, Schlafprobleme, das Gefühl, ständig angeschaltet zu sein.",
    icon: (
      <svg viewBox="0 0 24 24" className={ICON}>
        <path
          d="M2 14c2-3 4-3 6 0s4 3 6 0 4-3 6 0"
          {...sp}
          strokeLinecap="round"
        />
        <path d="M2 9c2-3 4-3 6 0s4 3 6 0 4-3 6 0" {...sp} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Körper & Wahrnehmung",
    body: "Wenn der Körper Signale sendet, die schwer einzuordnen sind. Achtsamkeit für die eigenen Empfindungen.",
    icon: (
      <svg viewBox="0 0 24 24" className={ICON}>
        <circle cx="12" cy="12" r="9" {...sp} />
        <circle cx="12" cy="12" r="3.5" {...sp} />
      </svg>
    ),
  },
  {
    title: "Lebensphasen & Übergänge",
    body: "Berufswechsel, neue Lebensabschnitte, Trennung, Verlust — Phasen, in denen Orientierung guttut.",
    icon: (
      <svg viewBox="0 0 24 24" className={ICON}>
        <path d="M4 18 L20 6" {...sp} strokeLinecap="round" />
        <path d="M14 6 H20 V12" {...sp} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Anhaltende Belastungen",
    body: "Themen, die schon länger mitschwingen und Raum für Klärung brauchen.",
    icon: (
      <svg viewBox="0 0 24 24" className={ICON}>
        <path d="M3 16a9 9 0 0 1 18 0" {...sp} strokeLinecap="round" />
        <path d="M7 16a5 5 0 0 1 10 0" {...sp} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Schlaf & Erholung",
    body: "Den eigenen Rhythmus wiederfinden. Was Erholung wirklich bedeutet — für dich.",
    icon: (
      <svg viewBox="0 0 24 24" className={ICON}>
        <path
          d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z"
          {...sp}
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Selbstklärung & Orientierung",
    body: "Innere Sortierung. Was ist wichtig, was nicht. Was passt zu mir, was nicht mehr.",
    icon: (
      <svg viewBox="0 0 24 24" className={ICON}>
        <circle cx="6" cy="12" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="18" cy="12" r="1.4" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]

export default function Themen() {
  return (
    <Section id="themen" tone="cream-warm">
      <ScrollReveal>
        <Eyebrow>Themen — 06</Eyebrow>
        <h2 className="mt-7 max-w-3xl font-serif text-[clamp(2rem,4.5vw,4rem)] font-normal leading-[1.05] text-teal">
          Womit Menschen zu uns kommen.
        </h2>
        <p className="mt-4 max-w-xl font-sans font-light text-teal/70">
          Sechs Bereiche, in denen Menschen Klärung suchen.
        </p>
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-3 gap-x-12 gap-y-2 max-[860px]:grid-cols-2 max-[560px]:grid-cols-1">
        {THEMEN.map((t, i) => (
          <ScrollReveal
            key={t.title}
            delay={((i % 3) + 1) as 1 | 2 | 3}
            className="border-b border-teal/15 py-9"
          >
            <span className="text-champagne">{t.icon}</span>
            <h3 className="mt-6 font-serif text-2xl font-normal leading-snug text-teal">
              {t.title}
            </h3>
            <p className="mt-3 font-sans text-sm font-light leading-relaxed text-teal/70">
              {t.body}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}

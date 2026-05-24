import { Section, Eyebrow } from "./ui"
import ScrollReveal from "./ScrollReveal"

const ITEMS = [
  { no: "01", title: "Erstgespräch", body: "90 Minuten. Wir hören zu, fragen genau, schauen gemeinsam wo es klemmt." },
  { no: "02", title: "Einzelsitzungen", body: "60 Minuten. Rhythmus nach Bedarf — wöchentlich, vierzehntäglich oder seltener." },
  { no: "03", title: "Achtsamkeitsarbeit", body: "Wahrnehmen, was gerade ist. Ohne Bewertung. Ohne Eile." },
  { no: "04", title: "Atemtechniken", body: "Bewusste Atmung als Werkzeug zur Selbstregulation." },
  { no: "05", title: "Körperwahrnehmung", body: "Den Körper als Resonanzraum nutzen. Was sagt er, wenn wir hinhören?" },
  { no: "06", title: "Ressourcenarbeit", body: "Was gibt dir Kraft? Was hat dich bisher getragen? Da setzen wir an." },
  { no: "07", title: "Reflexion", body: "Strukturierte Gespräche. Klärung. Worte für Dinge finden, die vorher unklar waren." },
  { no: "08", title: "Begleitung über Zeit", body: "Manches braucht mehrere Monate. Wir gehen den Weg mit." },
]

export default function Methodik() {
  return (
    <Section id="methodik" tone="teal-deep">
      <ScrollReveal>
        <Eyebrow light>Methodik — 08</Eyebrow>
        <h2 className="mt-7 max-w-3xl font-serif text-[clamp(2rem,4.5vw,4rem)] font-normal leading-[1.05] text-cream">
          Wie wir arbeiten.
        </h2>
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-4 gap-px overflow-hidden rounded-2xl bg-champagne/15 max-[860px]:grid-cols-2 max-[520px]:grid-cols-1">
        {ITEMS.map((it) => (
          <div
            key={it.no}
            className="flex flex-col bg-teal-deep p-8 transition-colors duration-500 hover:bg-teal"
          >
            <span
              className="text-[14px] text-champagne label-mono"
              style={{ letterSpacing: "0.2em" }}
            >
              {it.no}
            </span>
            <h3 className="mt-4 font-serif text-2xl font-normal leading-tight text-cream">
              {it.title}
            </h3>
            <p className="mt-3 font-sans text-sm font-light leading-relaxed text-cream/65">
              {it.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

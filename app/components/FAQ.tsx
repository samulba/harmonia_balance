"use client"

import { useState } from "react"
import { Section, Eyebrow } from "./ui"

const ITEMS = [
  {
    q: "Bist du Ärztin?",
    a: "Nein. Ich bin keine Ärztin und keine Heilpraktikerin. Ich biete systemische Begleitung an — für Klärung, Reflexion und Orientierung. Es geht nicht um Diagnosen oder medizinische Versorgung.",
  },
  {
    q: "Was kostet eine Sitzung?",
    a: "Das Angebot richtet sich an Selbstzahler. Die genauen Konditionen für Erstgespräch (90 Min) und Einzelsitzungen (60 Min) bespreche ich gern persönlich mit dir — am einfachsten im unverbindlichen Erstkontakt.",
  },
  {
    q: "Übernimmt die Krankenkasse die Kosten?",
    a: "Nein. Da es sich um keine medizinische oder psychotherapeutische Versorgung handelt, ist dies eine reine Selbstzahler-Leistung. Eine Abrechnung über die Krankenkasse ist nicht möglich.",
  },
  {
    q: "Wie lange dauert eine Begleitung?",
    a: "Das ist sehr unterschiedlich und ganz dir überlassen. Manche kommen für wenige Sitzungen, andere über einen längeren Zeitraum. Du bestimmst Tempo und Dauer — es gibt keine Mindestlaufzeit.",
  },
  {
    q: "Arbeitest du auch mit Paaren oder Familien?",
    a: "Aktuell biete ich ausschließlich Einzelbegleitung an. So kann ich mich ganz auf dich und dein Anliegen konzentrieren.",
  },
  {
    q: "Was ist der Unterschied zur Psychotherapie?",
    a: "Psychotherapie behandelt diagnostizierte Erkrankungen und ist Ärzten und approbierten Psychotherapeuten vorbehalten. Systemische Begleitung ist kein Ersatz dafür — sie unterstützt bei Klärung, Reflexion und Orientierung im Alltag. Bei akuten Beschwerden wende dich bitte an entsprechende Fachstellen.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Section id="faq" className="bg-teal">
      <Eyebrow>Fragen — 06</Eyebrow>
      <h2 className="mb-14 max-w-3xl font-display text-cream [font-size:clamp(2rem,5vw,3.6rem)] leading-[1.05]">
        Häufige Fragen.
      </h2>

      <div className="mx-auto max-w-3xl">
        {ITEMS.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={i} className="border-b border-cream/12">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-champagne"
              >
                <span className="font-display text-cream [font-size:clamp(1.2rem,2.2vw,1.6rem)]">
                  {item.q}
                </span>
                <span
                  className={`shrink-0 text-champagne transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 4v12M4 10h12"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
              <div
                className="grid transition-all duration-400 ease-out"
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="overflow-hidden">
                  <p className="max-w-2xl pb-7 font-body text-[0.95rem] leading-relaxed text-cream/65">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

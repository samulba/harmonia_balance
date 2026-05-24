"use client"

import { useState } from "react"
import { Section, Eyebrow } from "./ui"

const ITEMS = [
  {
    q: "Bist du Ärztin oder Heilpraktikerin?",
    a: "Nein. Ich biete systemische Begleitung an — keine medizinische Behandlung und keine Heilkunde. Bei körperlichen Beschwerden geh bitte zuerst zu einer Ärztin.",
  },
  {
    q: "Was kostet eine Sitzung?",
    a: "Erstgespräch (90 Min) und Folgesitzungen (60 Min) als Selbstzahler-Praxis. Aktuelle Preise teile ich gern beim Erstkontakt mit.",
  },
  {
    q: "Übernimmt die Krankenkasse das?",
    a: "Nein, das ist eine Selbstzahler-Praxis. Private Versicherungen erstatten teilweise — bitte vorab klären.",
  },
  {
    q: "Wie lange dauert eine Begleitung?",
    a: "Das ist ganz unterschiedlich. Manche kommen für ein paar Sitzungen zur Klärung, andere für längere Phasen. Wir entscheiden gemeinsam.",
  },
  {
    q: "Arbeitest du auch mit Paaren oder Familien?",
    a: "Aktuell vor allem mit Einzelpersonen. Für Paare gerne auf Anfrage.",
  },
  {
    q: "Was ist der Unterschied zur Psychotherapie?",
    a: "Psychotherapie ist eine medizinische Heilbehandlung bei diagnostizierten Erkrankungen. Systemische Begleitung ist Klärungsarbeit, kein Heilverfahren. Bei psychischen Erkrankungen ist eine Psychotherapeutin die richtige Adresse.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Section id="faq" tone="teal-deep">
      <Eyebrow light>Häufige Fragen</Eyebrow>
      <h2 className="mt-7 font-serif text-[clamp(2rem,4.5vw,4rem)] font-normal leading-[1.05] text-cream">
        Bevor du anrufst.
      </h2>

      <div className="mt-16 max-w-3xl">
        {ITEMS.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={i} className="border-b border-champagne/20">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-champagne"
              >
                <span className="font-serif text-xl font-normal text-cream">
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
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
              <div
                className="grid transition-all duration-300 ease-out"
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="overflow-hidden">
                  <p className="max-w-2xl pb-6 font-sans font-light leading-relaxed text-cream/70">
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

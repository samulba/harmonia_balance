"use client"

import { useState } from "react"
import { Section, Eyebrow } from "./ui"

const EMAIL = "hallo@harmoniabalance.de"
const PHONE = "+49 89 123 4567"

export default function Kontakt() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Anfrage von ${name || "Website"}`)
    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\nTelefon: ${phone || "—"}\n\n${message}`
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  const inputClass =
    "w-full border-b border-cream/20 bg-transparent py-3 font-body text-cream placeholder:text-cream/35 outline-none transition-colors focus:border-champagne"

  return (
    <Section id="kontakt" className="bg-teal-deep">
      <div className="grid grid-cols-[0.9fr_1.1fr] gap-16 max-[860px]:grid-cols-1 max-[860px]:gap-12">
        {/* Left: intro + data */}
        <div>
          <Eyebrow>Kontakt</Eyebrow>
          <h2 className="font-display text-cream [font-size:clamp(2.2rem,5vw,4rem)] leading-[1.02]">
            Erzähl uns,
            <br /> was los ist.
          </h2>
          <p className="mt-6 max-w-sm font-body text-[1rem] leading-relaxed text-cream/65">
            Ein, zwei Sätze genügen. Wir melden uns und finden einen Termin für
            ein erstes, unverbindliches Gespräch.
          </p>

          <div className="mt-12 space-y-6">
            <div>
              <span
                className="text-[0.6rem] text-champagne label-mono"
                style={{ letterSpacing: "0.3em" }}
              >
                E-Mail
              </span>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-2 block font-display text-cream transition-colors hover:text-champagne [font-size:clamp(1.2rem,2vw,1.6rem)]"
              >
                {EMAIL}
              </a>
            </div>
            <div>
              <span
                className="text-[0.6rem] text-champagne label-mono"
                style={{ letterSpacing: "0.3em" }}
              >
                Telefon
              </span>
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="mt-2 block font-display text-cream transition-colors hover:text-champagne [font-size:clamp(1.2rem,2vw,1.6rem)]"
              >
                {PHONE}
              </a>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-7">
          <div className="grid grid-cols-2 gap-7 max-[480px]:grid-cols-1">
            <input
              className={inputClass}
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={inputClass}
              type="email"
              placeholder="E-Mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <input
            className={inputClass}
            type="tel"
            placeholder="Telefon (optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            className={`${inputClass} resize-none`}
            placeholder="Worum geht es?"
            rows={4}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="group mt-2 inline-flex w-fit items-center gap-3 rounded-full border border-champagne px-8 py-4 text-[0.7rem] text-champagne transition-all duration-300 hover:bg-champagne hover:text-teal-deep label-mono"
            style={{ letterSpacing: "0.26em" }}
          >
            Nachricht senden
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
          <p className="font-body text-xs leading-relaxed text-cream/40">
            Mit dem Absenden öffnet sich dein E-Mail-Programm. Deine Angaben
            werden ausschließlich zur Bearbeitung deiner Anfrage verwendet.
          </p>
        </form>
      </div>
    </Section>
  )
}

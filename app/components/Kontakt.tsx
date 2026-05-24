"use client"

import { useState } from "react"
import { Section, Eyebrow } from "./ui"

const EMAIL = "hallo@harmoniabalance.de"
const PHONE = "+49 89 123 4567"

const DATA = [
  { label: "E-Mail", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "Telefon", value: PHONE, href: "tel:+49891234567" },
  { label: "Adresse", value: "Beispielstraße 12, 80331 München", href: null },
]

export default function Kontakt() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Kontaktanfrage:", form)
    alert("Danke, wir melden uns innerhalb von 2 Werktagen.")
    setForm({ name: "", email: "", phone: "", message: "" })
  }

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const inputClass =
    "w-full rounded-md border border-teal/20 bg-transparent px-4 py-3 font-sans text-teal placeholder:text-teal/40 outline-none transition-colors focus:border-champagne"

  return (
    <Section id="kontakt" tone="cream">
      <Eyebrow>Kontakt</Eyebrow>
      <h2 className="mt-7 font-serif text-[clamp(2rem,4.5vw,4rem)] font-normal leading-[1.05] text-teal">
        Erzähl uns, was los ist.
      </h2>
      <p className="mt-6 max-w-xl font-sans font-light leading-relaxed text-teal/75">
        Kurz schreiben oder anrufen reicht. Wir melden uns innerhalb von zwei
        Werktagen — und nehmen uns dann die Zeit, die es braucht.
      </p>

      <div className="mt-16 grid grid-cols-2 gap-16 max-[820px]:grid-cols-1 max-[820px]:gap-12">
        {/* Left: contact data */}
        <div>
          {DATA.map((d) => (
            <div key={d.label} className="border-b border-teal/15 py-6 first:pt-0">
              <span
                className="text-[10px] text-champagne-deep label-mono"
                style={{ letterSpacing: "0.34em" }}
              >
                {d.label}
              </span>
              {d.href ? (
                <a
                  href={d.href}
                  className="mt-2 block font-serif text-xl text-teal transition-colors hover:text-champagne-deep"
                >
                  {d.value}
                </a>
              ) : (
                <p className="mt-2 font-serif text-xl text-teal">{d.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-5 max-[480px]:grid-cols-1">
            <input
              className={inputClass}
              type="text"
              placeholder="Name"
              required
              value={form.name}
              onChange={set("name")}
            />
            <input
              className={inputClass}
              type="email"
              placeholder="E-Mail"
              required
              value={form.email}
              onChange={set("email")}
            />
          </div>
          <input
            className={inputClass}
            type="tel"
            placeholder="Telefon (optional)"
            value={form.phone}
            onChange={set("phone")}
          />
          <textarea
            className={`${inputClass} resize-none`}
            placeholder="Nachricht"
            rows={6}
            required
            value={form.message}
            onChange={set("message")}
          />
          <button
            type="submit"
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-teal px-8 py-4 font-sans text-sm text-cream transition-colors hover:bg-teal-deep"
          >
            Nachricht senden <span aria-hidden>→</span>
          </button>
        </form>
      </div>
    </Section>
  )
}

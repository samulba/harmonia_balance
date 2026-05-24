"use client"

import { useEffect, useState } from "react"

const LINKS = [
  { label: "Methodik", href: "#methodik" },
  { label: "Praxis", href: "#praxis" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
]

export default function NavPill() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById("hero")
    if (!hero) return
    const check = () => {
      const rect = hero.getBoundingClientRect()
      setVisible(rect.bottom < -80)
    }
    window.addEventListener("scroll", check, { passive: true })
    check()
    return () => window.removeEventListener("scroll", check)
  }, [])

  return (
    <div
      className="fixed inset-x-0 top-6 z-50 flex justify-center px-4 transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(-20px)",
      }}
    >
      <nav className="flex max-w-full items-center gap-8 overflow-x-auto rounded-full border border-teal/10 bg-cream/95 px-6 py-3 shadow-lg backdrop-blur max-[560px]:gap-4 max-[560px]:px-4">
        <a
          href="#hero"
          className="shrink-0 font-serif text-base text-champagne-deep"
        >
          H<span className="text-champagne">·</span>B
        </a>
        <div className="flex items-center gap-6 max-[560px]:gap-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="shrink-0 text-[11px] text-teal transition-colors hover:text-champagne-deep label-mono max-[560px]:hidden"
              style={{ letterSpacing: "0.2em" }}
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#kontakt"
          className="shrink-0 rounded-full bg-teal px-5 py-2 text-[11px] text-cream transition-colors hover:bg-teal-deep label-mono"
          style={{ letterSpacing: "0.2em" }}
        >
          Erstgespräch
        </a>
      </nav>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"

const LINKS = [
  { label: "Essenz", href: "#essenz" },
  { label: "Themen", href: "#themen" },
  { label: "Methodik", href: "#methodik" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Praxis", href: "#praxis" },
  { label: "Fragen", href: "#faq" },
]

export default function NavPill() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const target = document.getElementById("essenz")
    if (!target) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show the pill once the user has scrolled the Essenz section into view
        setVisible(entry.boundingClientRect.top < window.innerHeight * 0.6)
      },
      { threshold: 0, rootMargin: "0px 0px -40% 0px" }
    )
    observer.observe(target)

    const onScroll = () => {
      const rect = target.getBoundingClientRect()
      setVisible(rect.top < window.innerHeight * 0.6)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <div
      className="fixed inset-x-0 top-5 z-50 flex justify-center px-4 transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(-12px)",
      }}
    >
      <nav className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-cream/15 bg-teal-deep/80 px-2 py-2 backdrop-blur-md sm:gap-2">
        <a
          href="#hero"
          className="shrink-0 px-4 font-display text-sm tracking-[0.14em] text-cream"
        >
          H<span className="text-champagne">·</span>B
        </a>
        <span className="h-4 w-px shrink-0 bg-cream/15" />
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="shrink-0 rounded-full px-3 py-1.5 text-[0.62rem] text-cream/70 transition-colors hover:bg-cream/5 hover:text-champagne label-mono"
            style={{ letterSpacing: "0.18em" }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#kontakt"
          className="ml-1 shrink-0 rounded-full bg-champagne px-4 py-1.5 text-[0.62rem] text-teal-deep transition-opacity hover:opacity-90 label-mono"
          style={{ letterSpacing: "0.18em" }}
        >
          Kontakt
        </a>
      </nav>
    </div>
  )
}

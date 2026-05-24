import type { ReactNode } from "react"

type Tone = "cream" | "cream-warm" | "teal-deep"

const toneClass: Record<Tone, string> = {
  cream: "bg-cream text-teal",
  "cream-warm": "bg-cream-warm text-teal",
  "teal-deep": "bg-teal-deep text-cream",
}

export function Section({
  id,
  tone = "cream",
  children,
  className = "",
}: {
  id?: string
  tone?: Tone
  children: ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 px-[clamp(20px,5vw,80px)] py-[clamp(80px,12vw,180px)] ${toneClass[tone]} ${className}`}
    >
      <div className="mx-auto w-full max-w-[1280px]">{children}</div>
    </section>
  )
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode
  light?: boolean
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="block h-px w-11 bg-champagne" />
      <span
        className={`text-[11px] label-mono ${
          light ? "text-champagne" : "text-champagne-deep"
        }`}
        style={{ letterSpacing: "0.34em" }}
      >
        {children}
      </span>
    </div>
  )
}

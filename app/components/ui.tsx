import type { ReactNode } from "react"

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-6 py-24 sm:px-10 sm:py-32 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1320px]">{children}</div>
    </section>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-7 flex items-center gap-4">
      <span className="block h-px w-11 bg-champagne" />
      <span
        className="text-[0.7rem] text-champagne label-mono"
        style={{ letterSpacing: "0.3em" }}
      >
        {children}
      </span>
    </div>
  )
}

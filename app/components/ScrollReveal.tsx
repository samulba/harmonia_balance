"use client"

import { useEffect, useRef, type ReactNode } from "react"

export default function ScrollReveal({
  children,
  delay,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode
  delay?: 1 | 2 | 3
  as?: "div" | "section" | "li" | "article" | "header"
  className?: string
}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const delayClass = delay ? `d-${delay}` : ""

  return (
    // @ts-expect-error — dynamic tag
    <Tag ref={ref} className={`reveal ${delayClass} ${className}`}>
      {children}
    </Tag>
  )
}

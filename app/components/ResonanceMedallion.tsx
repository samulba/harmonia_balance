"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"

/**
 * Resonance Medallion — portiert aus dem Framer-Code (v4).
 *
 * Background-Color und Backdrop-Blur werden als ZWEI getrennte Layer
 * gerendert (vermeidet das Safari-Quirk, bei dem rgba-Background + backdrop-filter
 * transparent rendert).
 *
 * Hover: Champagne-Punkte erscheinen und kreisen sanft ums Medaillon.
 */

type ResonanceMedallionProps = {
  brandText?: string
  italicText?: string
  tagText?: string
  cream?: string
  champagne?: string
  backgroundColor?: string
  backgroundOpacity?: number
  strokeWidth?: number
  rippleSpeed?: number
  rippleCount?: number
  backdropBlur?: number
  enableHover?: boolean
  particleCount?: number
  orbitSpeed?: number
  orbitRadiusFactor?: number
}

export default function ResonanceMedallion({
  brandText = "Harmonia",
  italicText = "Balance",
  tagText = "München · 2026",
  cream = "#F7F2EA",
  champagne = "#C9A87C",
  backgroundColor = "#0A2832",
  backgroundOpacity = 0.85,
  strokeWidth = 1.5,
  rippleSpeed = 10,
  rippleCount = 3,
  backdropBlur = 2,
  enableHover = true,
  particleCount = 5,
  orbitSpeed = 12,
  orbitRadiusFactor = 0.6,
}: ResonanceMedallionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const medallionRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState(240)
  const [hovered, setHovered] = useState(false)

  // Adapt to container size
  useLayoutEffect(() => {
    if (!containerRef.current) return
    const update = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const next = Math.min(rect.width, rect.height)
      if (next > 0) setSize(next)
    }
    update()
    const observer = new ResizeObserver(update)
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  const handleMouseEnter = () => enableHover && setHovered(true)
  const handleMouseLeave = () => setHovered(false)

  // Proportional sizes
  const brandFontSize = Math.max(12, size * 0.087)
  const tagFontSize = Math.max(7.5, size * 0.0375)
  const resonanceSize = Math.max(20, size * 0.15)
  const dividerWidth = Math.max(16, size * 0.125)
  const innerPadding = Math.max(12, size * 0.15)
  const innerRingInset = Math.max(4, size * 0.033)
  const marginUnit = size * 0.042
  const smallMargin = size * 0.017

  // Orbit values
  const orbitRadius = size * orbitRadiusFactor
  const particleSize = Math.max(4, size * 0.026)

  const ripples = Array.from(
    { length: rippleCount },
    (_, i) => (rippleSpeed / rippleCount) * i
  )
  const particles = Array.from(
    { length: particleCount },
    (_, i) => -(i * (orbitSpeed / particleCount))
  )

  /** Robust color → rgba converter (hex / rgb / rgba). */
  const withAlpha = (color: string, alpha: number) => {
    if (!color) return `rgba(10, 40, 50, ${alpha})`
    if (typeof color === "string" && color.indexOf("rgb") === 0) {
      const m = color.match(/rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/)
      if (m) return `rgba(${m[1]}, ${m[2]}, ${m[3]}, ${alpha})`
    }
    let c = String(color).replace("#", "")
    if (c.length === 3)
      c = c
        .split("")
        .map((ch) => ch + ch)
        .join("")
    if (c.length < 6) return `rgba(10, 40, 50, ${alpha})`
    const r = parseInt(c.substring(0, 2), 16)
    const g = parseInt(c.substring(2, 4), 16)
    const b = parseInt(c.substring(4, 6), 16)
    if (isNaN(r) || isNaN(g) || isNaN(b)) return `rgba(10, 40, 50, ${alpha})`
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        ref={medallionRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          position: "relative",
          width: size,
          height: size,
          cursor: enableHover ? "pointer" : "default",
          isolation: "isolate",
        }}
      >
        {/* Orbiting particles — show on hover */}
        {particles.map((delay, i) => (
          <div
            key={`orbit-${i}`}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: 0,
              height: 0,
              animation: `hbOrbit ${orbitSpeed}s linear infinite`,
              animationDelay: `${delay}s`,
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.7s ease-out",
              pointerEvents: "none",
              zIndex: 5,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: orbitRadius,
                width: particleSize,
                height: particleSize,
                background: champagne,
                borderRadius: "50%",
                transform: "translate(-50%, -50%)",
                boxShadow: `0 0 ${particleSize * 2.5}px ${particleSize * 0.4}px ${champagne}`,
              }}
            />
          </div>
        ))}

        {/* LAYER 1: Backdrop blur (transparent — only blurs what's behind) */}
        {backdropBlur > 0 && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              backdropFilter: `blur(${backdropBlur}px)`,
              WebkitBackdropFilter: `blur(${backdropBlur}px)`,
              zIndex: 1,
              pointerEvents: "none",
            }}
          />
        )}

        {/* LAYER 2: Solid color overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            backgroundColor: backgroundColor,
            opacity: backgroundOpacity,
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Ripples — continuous wave */}
        {ripples.map((delay, i) => (
          <div
            key={`ripple-${i}`}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100%",
              height: "100%",
              border: `${strokeWidth}px solid ${champagne}`,
              borderRadius: "50%",
              transform: "translate(-50%, -50%) scale(1)",
              opacity: 0,
              animation: `hbRipple ${rippleSpeed}s linear infinite`,
              animationDelay: `${delay}s`,
              pointerEvents: "none",
              zIndex: 3,
            }}
          />
        ))}

        {/* LAYER 3: Borders (outer cream + inner champagne) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: `1px solid ${withAlpha(cream, 0.7)}`,
            zIndex: 3,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: innerRingInset,
              border: `1px solid ${withAlpha(champagne, 0.22)}`,
              borderRadius: "50%",
            }}
          />
        </div>

        {/* LAYER 4: Content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: innerPadding,
            zIndex: 4,
            pointerEvents: "none",
          }}
        >
          {/* Mini resonance icon */}
          <svg
            viewBox="0 0 40 40"
            style={{
              width: resonanceSize,
              height: resonanceSize,
              marginBottom: size * 0.058,
              display: "block",
            }}
          >
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="none"
              stroke={champagne}
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              opacity="0.6"
            />
            <circle
              cx="20"
              cy="20"
              r="13"
              fill="none"
              stroke={champagne}
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              opacity="0.6"
            />
            <circle
              cx="20"
              cy="20"
              r="8"
              fill="none"
              stroke={champagne}
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              opacity="0.6"
            />
            <circle cx="20" cy="20" r="2.2" fill={champagne} />
          </svg>

          {/* Brand */}
          <div
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 400,
              fontSize: brandFontSize,
              color: cream,
              lineHeight: 1,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: marginUnit,
            }}
          >
            {brandText}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 300,
                color: champagne,
                display: "block",
                marginTop: smallMargin,
                letterSpacing: "0.06em",
              }}
            >
              {italicText}
            </span>
          </div>

          {/* Divider */}
          <div
            style={{
              width: dividerWidth,
              height: 1,
              background: champagne,
              margin: `${size * 0.008}px 0 ${marginUnit}px`,
            }}
          />

          {/* Tag */}
          <div
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: tagFontSize,
              letterSpacing: "0.36em",
              textTransform: "uppercase",
              color: cream,
              opacity: 0.85,
            }}
          >
            {tagText}
          </div>
        </div>
      </div>
    </div>
  )
}

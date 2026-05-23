import type { Metadata } from "next"
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
})

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-dm-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://harmoniabalance.de"),
  title: {
    default: "Harmonia Balance — Systemische Begleitung in München",
    template: "%s · Harmonia Balance",
  },
  description:
    "Systemische Begleitung in München. Eine Praxis, die Zeit nimmt — für Klärung, Reflexion und Orientierung. Selbstzahler-Praxis, kein Heilversprechen.",
  keywords: [
    "systemische Begleitung",
    "München",
    "Achtsamkeit",
    "Reflexion",
    "Selbstklärung",
    "Orientierung",
  ],
  openGraph: {
    title: "Harmonia Balance — Systemische Begleitung in München",
    description:
      "Eine Praxis, die Zeit nimmt. Systemische Begleitung für Klärung, Reflexion und Orientierung.",
    locale: "de_DE",
    type: "website",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}

import type { Metadata } from "next"
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
  title: "Harmonia Balance — Praxis für systemische Begleitung in München",
  description:
    "Eine Praxis, die Zeit nimmt. Systemische Begleitung — individuell abgestimmt, ohne Eile. In zentraler Münchner Lage.",
  openGraph: {
    title: "Harmonia Balance — Praxis für systemische Begleitung in München",
    description:
      "Eine Praxis, die Zeit nimmt. Systemische Begleitung — individuell abgestimmt, ohne Eile. In zentraler Münchner Lage.",
    type: "website",
    locale: "de_DE",
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
      <body className="bg-cream font-sans text-teal">{children}</body>
    </html>
  )
}

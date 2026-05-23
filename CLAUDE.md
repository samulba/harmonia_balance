# Harmonia Balance — Projektregeln

Praxis für **systemische Begleitung** in München. One-Pager, Next.js 15 (App Router, TypeScript, Tailwind v3).

## ⚠️ HWG-COMPLIANCE (Heilmittelwerbegesetz) — HÖCHSTE PRIORITÄT

Die Auftraggeberin ist **KEINE Ärztin und KEINE Heilpraktikerin**. Jeder Text auf der
Website, in Meta-Tags, alt-Attributen, Kommentaren und Beispieldaten muss diese Regeln
einhalten. Im Zweifel: das mildere, nicht-medizinische Wort wählen.

### VERBOTEN (niemals verwenden)
- "heilen", "Heilung", "heilend"
- "Ärztin", "Arzt", "ärztlich"
- "Diagnose", "diagnostizieren"
- "Therapie" / "therapeutisch" im medizinischen Sinn
- "Behandlung" / "behandeln" von Krankheiten
- "Patient" / "Patientin"
- konkrete Krankheitsnamen (Depression, Burnout als Diagnose, Angststörung, …)
- Heilversprechen jeder Art ("wird besser", "verschwindet", "lindert Krankheit")
- Esoterik-Sprache: "Schwingungen", "Energien", "Aura", "Chakren", "Heilenergie"

### ERLAUBT (so formulieren)
- "systemische Begleitung", "Begleitung", "begleiten"
- "Klient" / "Klientin" / Du-Form ("du")
- "Klärung", "Reflexion", "Themen", "Belastungen", "Anliegen"
- "Orientierung", "Ressourcen", "Achtsamkeit", "Wahrnehmung"
- ausdrücklich: "Selbstzahler-Praxis", "kein Heilversprechen"

### Ton
Du-Form, ruhig, klar, ohne Pathos. Keine Werbe-Superlative.

## Design-System

| Token        | Wert      |
|--------------|-----------|
| teal         | `#0F3A47` |
| teal-deep    | `#0A2832` |
| champagne    | `#C9A87C` |
| cream        | `#F7F2EA` |
| sage         | `#94A89A` |

Fonts (via `next/font/google`):
- **Cormorant Garamond** — Display (400, italic 300)
- **DM Sans** — Body (400, 500)
- **DM Mono** — Labels (500, uppercase, letter-spacing 0.26–0.36em)

Leitsätze:
- Tagline: „Im Gleichgewicht ankommen."
- Statement: „Veränderung beginnt da, wo Eile aufhört."

## Code-Konventionen
- Server Components als Default. `"use client"` nur wo nötig
  (Hero-Particles, FAQ-Accordion, Kontakt-Form, NavPill-Scroll-Trigger).
- Tailwind inline; custom CSS nur in `app/globals.css`.
- Keine externen Animations-Libraries — alles über CSS-Keyframes.
- `ResonanceMedallion` liegt in `app/components/ResonanceMedallion.tsx`.

## Assets (`/public/images/`)
- `praxis-room.jpg` — Hero (Sessel/Eukalyptus). NIEMALS Bilder mit
  Akupunktur-Nadeln / Lupe / medizinischem Gerät (HWG-Verstoß).
- `methodik-tools.jpg` — Methodik-Sektion.
- `statement-water.jpg` — Statement-Hintergrund.
- Fehlt ein Asset: Solid-Color-Platzhalter + `TODO`-Kommentar.

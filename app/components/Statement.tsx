export default function Statement() {
  return (
    <section
      id="statement"
      className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-[clamp(20px,5vw,80px)] py-[clamp(140px,18vw,240px)] text-center"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,40,50,0.80), rgba(10,40,50,0.80)), url('/images/statement-water.png')",
        }}
        role="img"
        aria-label="Ruhige, golden schimmernde Wasseroberfläche"
      />

      <blockquote className="relative z-10 mx-auto max-w-4xl">
        <p className="font-serif text-[clamp(2.4rem,6vw,5rem)] font-light italic leading-[1.15] text-cream">
          Veränderung beginnt da, wo Eile aufhört.
        </p>
        <span className="mx-auto mt-12 block h-px w-[60px] bg-champagne" />
        <p
          className="mt-6 text-[11px] text-champagne label-mono"
          style={{ letterSpacing: "0.36em" }}
        >
          — Praxis-Motto
        </p>
      </blockquote>
    </section>
  )
}

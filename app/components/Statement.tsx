export default function Statement() {
  return (
    <section
      id="statement"
      className="relative flex min-h-[70vh] items-center overflow-hidden px-6 py-32 sm:px-10"
    >
      {/* Water background (ruhiges Wasser) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(10,40,50,0.82), rgba(15,58,71,0.78)), url('/images/statement-water.png')",
        }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(100% 100% at 50% 50%, transparent 30%, rgba(10,40,50,0.7) 100%)",
        }}
      />

      <blockquote className="relative z-10 mx-auto w-full max-w-[1320px]">
        <p className="font-display italic font-light text-cream [font-size:clamp(2.4rem,6vw,5rem)] leading-[1.1]">
          Veränderung beginnt da,
          <br className="hidden sm:block" /> wo Eile aufhört.
        </p>
        <footer
          className="mt-10 text-[0.7rem] text-champagne label-mono"
          style={{ letterSpacing: "0.32em" }}
        >
          Harmonia Balance · München
        </footer>
      </blockquote>
    </section>
  )
}

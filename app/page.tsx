import NavPill from "./components/NavPill"
import Hero from "./components/Hero"
import Bento from "./components/Bento"
import Themen from "./components/Themen"
import Methodik from "./components/Methodik"
import Ablauf from "./components/Ablauf"
import Statement from "./components/Statement"
import Praxis from "./components/Praxis"
import FAQ from "./components/FAQ"
import Kontakt from "./components/Kontakt"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <NavPill />
      <main>
        <Hero />
        <Bento />
        <Themen />
        <Methodik />
        <Ablauf />
        <Statement />
        <Praxis />
        <FAQ />
        <Kontakt />
      </main>
      <Footer />
    </>
  )
}

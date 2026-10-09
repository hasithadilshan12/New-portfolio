import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Journey from "@/components/sections/Journey";
import Contact from "@/components/sections/Contact";

import Reveal from "@/components/ui/Reveal";

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        id="top"
        className="min-h-screen overflow-hidden bg-neutral-950 text-white"
      >
        {/* Hero appears immediately */}
        <Hero />

        {/* Scroll Reveal Sections */}
        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <Projects />
        </Reveal>

        <Reveal>
          <Skills />
        </Reveal>

        <Reveal>
          <Journey />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>
      </main>

      <Footer />
    </>
  );
}

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Animated grid background */}
      <div className="grid-bg" aria-hidden="true" />
      {/* Wave sweep */}
      <div className="grid-wave" aria-hidden="true">
        <div className="grid-wave-a" />
        <div className="grid-wave-b" />
      </div>
      {/* Noise layer */}
      <div className="noise" aria-hidden="true" />

      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <Projects />
          <Stack />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

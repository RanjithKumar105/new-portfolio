import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import AIConsoleSkills from "@/components/sections/AIConsoleSkills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <AIConsoleSkills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}

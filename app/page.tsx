import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
      
      <footer className="py-8 text-center text-zinc-500 border-t border-white/5 bg-zinc-950">
        <p>© {new Date().getFullYear()} Noan Likeng-Buot. Tous droits réservés.</p>
      </footer>
    </>
  );
}

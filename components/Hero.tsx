import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 text-center lg:text-left z-10">
          <p className="text-red-500 font-semibold tracking-wider uppercase text-sm md:text-base">
            Bienvenue sur mon portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            NOAN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
              LIKENG-BUOT
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-zinc-300">
            Étudiant MMI
          </h2>
          <p className="text-base md:text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Étudiant en BUT Métiers du Multimédia et de l&apos;Internet, je recherche un stage de 8 à 10 semaines dans les domaines de la communication digitale, du design graphique et de la production audiovisuelle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-4">
            <Link
              href="#contact"
              className="px-8 py-3.5 rounded-full text-base font-semibold bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-900/30 hover:shadow-red-900/50 hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Me Contacter
            </Link>
            <Link
              href="#about"
              className="px-8 py-3.5 rounded-full text-base font-semibold bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300 w-full sm:w-auto text-center"
            >
              En savoir plus
            </Link>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center h-[400px] lg:h-[600px] w-full hidden md:flex">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-red-900/30 flex items-center justify-center overflow-hidden shrink-0 group shadow-2xl shadow-red-900/20">
             <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 to-black/80 z-0 group-hover:opacity-0 transition-opacity duration-500"></div>
             <Image
               src="/profile.jpg"
               alt="Noan Likeng-Buot"
               fill
               className="object-cover z-10"
               priority
             />
             {/* Decorative rings */}
             <div className="absolute w-[120%] h-[120%] rounded-full border border-red-500/10 border-dashed animate-[spin_20s_linear_infinite] z-20 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

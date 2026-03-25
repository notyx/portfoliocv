import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-900 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Me <span className="text-red-600">Contacter</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            Je suis actuellment en recherche d'un stage de 8 à 10 semaines entre la période de Avril à Juin 2026. N'hésitez pas à me contacter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Phone */}
          <a
            href="tel:0603125160"
            className="flex flex-col items-center text-center p-8 bg-zinc-950 border border-zinc-800 rounded-2xl hover:border-red-500/50 hover:bg-zinc-900 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-red-950/30 group-hover:text-red-500 group-hover:border-red-500/30 transition-all duration-300">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Téléphone</h3>
            <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">06 03 12 51 60</p>
          </a>

          {/* Email */}
          <a
            href="mailto:nlikengbuot@gmail.com"
            className="flex flex-col items-center text-center p-8 bg-zinc-950 border border-zinc-800 rounded-2xl hover:border-red-500/50 hover:bg-zinc-900 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-red-950/30 group-hover:text-red-500 group-hover:border-red-500/30 transition-all duration-300">
              <span className="text-2xl">✉️</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Email</h3>
            <p className="text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors break-all">nlikengbuot@gmail.com</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/noanlikengbuot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center p-8 bg-zinc-950 border border-zinc-800 rounded-2xl hover:border-red-500/50 hover:bg-zinc-900 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-red-950/30 group-hover:text-red-500 group-hover:border-red-500/30 transition-all duration-300">
              <span className="text-2xl">💼</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">LinkedIn</h3>
            <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">@noanlikengbuot</p>
          </a>

          {/* Location */}
          <div className="flex flex-col items-center text-center p-8 bg-zinc-950 border border-zinc-800 rounded-2xl hover:border-red-500/50 hover:bg-zinc-900 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-red-950/30 group-hover:text-red-500 group-hover:border-red-500/30 transition-all duration-300">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Localisation</h3>
            <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">Caen, Saint-Lô</p>
          </div>
        </div>
      </div>
    </section>
  );
}

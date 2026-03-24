export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-900 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            À propos de <span className="text-red-600">Moi</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Formation & Expérience */}
          <div className="space-y-12">
            
            {/* Formation */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 flex items-center justify-center text-xl">🎓</span>
                Formation
              </h3>
              
              <div className="relative border-l border-red-900 ml-5 space-y-8 pl-8">
                <div className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-red-600 border-4 border-zinc-900"></div>
                  <h4 className="text-xl font-bold text-white">License, Métier du Multimédia</h4>
                  <p className="text-sm font-medium text-red-500 mb-2">IUT SAINT-LÔ BUT MMI / BAC +3 • JUIN 2027</p>
                  <ul className="list-disc list-inside text-zinc-400 space-y-1 text-sm mt-3">
                    <li>Conception d&apos;un site internet</li>
                    <li>Gestion de projets multimédia</li>
                    <li>Création de montage photos et vidéos</li>
                  </ul>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-zinc-700 border-4 border-zinc-900"></div>
                  <h4 className="text-xl font-bold text-white">Baccalauréat Général</h4>
                  <p className="text-sm font-medium text-zinc-500 mb-2">LYCÉE MARIE CURIE - VIRE • JUILLET 2024</p>
                  <ul className="list-disc list-inside text-zinc-400 space-y-1 text-sm mt-3">
                    <li>Spécialité LLCER Anglais / Numérique et Sciences de l&apos;Informatique</li>
                    <li>Options EPS / Mathématiques Complémentaires</li>
                    <li>Organisateur de tournois sportifs au sein du lycée</li>
                    <li>Mention Assez Bien</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Expérience */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full border border-zinc-700 bg-zinc-800 text-zinc-300 flex items-center justify-center text-xl">💼</span>
                Expérience Professionnelle
              </h3>
              
              <div className="relative border-l border-zinc-700 ml-5 space-y-8 pl-8">
                <div className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-zinc-500 border-4 border-zinc-900"></div>
                  <h4 className="text-xl font-bold text-white">Stage de 3ème, Service Informatique</h4>
                  <p className="text-sm font-medium text-zinc-500 mb-2">CENTRE HOSPITALIER AUNAY-BAYEUX • FÉVR. 2021</p>
                  <ul className="list-disc list-inside text-zinc-400 space-y-1 text-sm mt-3">
                    <li>Gestion du matériel informatique</li>
                    <li>Dépannage</li>
                    <li>Installation de matériel informatique</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Langues & Centres d'intérêts */}
          <div className="space-y-8">
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="text-red-500 text-2xl">🌍</span> Langues
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-white">Anglais</span>
                    <span className="text-red-500 font-bold">Niveau C2</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full w-[95%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-white">Espagnol</span>
                    <span className="text-red-500 font-bold">Niveau B2</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2">
                    <div className="bg-red-600/60 h-2 rounded-full w-[65%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="text-red-500 text-2xl">⭐</span> Centres d&apos;intérêts
              </h3>
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-lg">🏀</div>
                  <div>
                    <h4 className="font-semibold text-white">Sport</h4>
                    <p className="text-sm text-zinc-500">Club de Basket, 3 ans</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-lg">✈️</div>
                  <div>
                    <h4 className="font-semibold text-white">Voyages</h4>
                    <p className="text-sm text-zinc-500">Découverte de nouvelles cultures</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-lg">🎸</div>
                  <div>
                    <h4 className="font-semibold text-white">Guitariste</h4>
                    <p className="text-sm text-zinc-500">Pratique musicale</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

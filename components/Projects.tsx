import Link from "next/link";

export default function Projects() {
  const projects = [
    { title: "Projet à venir", category: "Montage Vidéo", type: "Vidéo" },
    { title: "Projet à venir", category: "Design Graphique", type: "Design" },
    { title: "Projet à venir", category: "Communication", type: "Digital" },
  ];

  return (
    <section id="projects" className="py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Mes <span className="text-red-600">Projets</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            Découvrez prochainement mes réalisations en design graphique, montage vidéo et communication digitale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-red-900/50 transition-colors duration-300">
              <div className="aspect-video bg-zinc-800 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder Image/Background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-zinc-800 group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300"></div>
                <span className="text-zinc-600 font-medium z-10 flex flex-col items-center gap-3">
                  <span className="w-12 h-12 rounded-full border border-zinc-600 flex items-center justify-center">
                    📸
                  </span>
                  Aperçu
                </span>
                {/* Red accent hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-red-500 tracking-wider uppercase mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex gap-2 mt-4">
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs font-medium border border-zinc-700">
                    {project.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/projects" className="px-8 py-3.5 rounded-full text-base font-semibold bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300 inline-flex items-center gap-2">
            Voir plus de projets
          </Link>
        </div>
      </div>
    </section>
  );
}

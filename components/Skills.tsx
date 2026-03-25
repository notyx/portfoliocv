export default function Skills() {
  const detailedSkills = [
    {
      title: "Montage Dynamique & Formats Courts",
      description: "Optimisation de la rétention d'audience pour TikTok et Shorts via un rythme soutenu, des cuts précis, du sound design immersif (wooshes, impacts) et des sous-titres animés.",
      icon: "📱"
    },
    {
      title: "Motion Design & VFX",
      description: "Création d'animations fluides sur After Effects avec une forte maîtrise de la synchronisation audio (audio-reactivity), idéal pour l'habillage de podcasts et les clips musicaux.",
      icon: "✨"
    },
    {
      title: "Post-Production Corporate",
      description: "Traitement professionnel : étalonnage colorimétrique (color grading), mixage audio soigné, et construction narrative claire pour valoriser les vidéos d'entreprise.",
      icon: "🎬"
    },
    {
      title: "Design Graphique & Édition",
      description: "Conception complète d'identités visuelles et mise en page de dossiers de présentation percutants (ex: projets type Nike Air Max DN), maîtrisant la typographie et la charte graphique.",
      icon: "🎨"
    }
  ];

  const tools = [
    { name: "Pr", fullname: "Premiere Pro", color: "text-purple-500", bg: "bg-purple-950/30", border: "border-purple-500/50" },
    { name: "Ae", fullname: "After Effects", color: "text-indigo-400", bg: "bg-indigo-950/30", border: "border-indigo-400/50" },
    { name: "Id", fullname: "InDesign", color: "text-pink-500", bg: "bg-pink-950/30", border: "border-pink-500/50" },
    { name: "Ai", fullname: "Illustrator", color: "text-orange-500", bg: "bg-orange-950/30", border: "border-orange-500/50" },
    { name: "Ps", fullname: "Photoshop", color: "text-blue-500", bg: "bg-blue-950/30", border: "border-blue-500/50" },
    { name: "Fg", fullname: "Figma", color: "text-green-400", bg: "bg-green-950/30", border: "border-green-400/50" },
  ];

  return (
    <section id="skills" className="py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Mon <span className="text-red-600">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            De la post-production au design graphique, voici les domaines dans lesquels j&apos;évolue pour donner vie à vos projets.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Detailed Skills Context */}
          <div className="flex-1 grid sm:grid-cols-2 gap-6">
            {detailedSkills.map((skill, index) => (
              <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-red-900/50 hover:bg-zinc-800/50 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-red-600/10 text-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-red-500/20">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {skill.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* Tools Panel */}
          <div className="lg:w-1/3 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl flex flex-col justify-center relative overflow-hidden">
            {/* Background glowing effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[100px] rounded-full pointer-events-none"></div>
            
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
              <span className="w-8 h-8 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center">🛠️</span>
              Outils Maîtrisés
            </h3>
            
            <div className="grid grid-cols-3 gap-6 relative z-10">
              {tools.map((tool, index) => (
                <div key={index} className="flex flex-col items-center gap-3 group">
                  <div className={`w-16 h-16 rounded-2xl border ${tool.border} ${tool.bg} flex items-center justify-center transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] shadow-black relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className={`text-2xl font-black ${tool.color}`}>{tool.name}</span>
                  </div>
                  <span className="text-xs font-semibold text-zinc-500 group-hover:text-zinc-300 transition-colors text-center">
                    {tool.fullname}
                  </span>
                </div>
              ))}
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}

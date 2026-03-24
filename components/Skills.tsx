export default function Skills() {
  const skillsList = [
    "Design graphique",
    "Montage vidéo",
    "Motion design",
    "Sens du détail",
    "Étalonnage couleur",
    "Adaptabilité"
  ];

  const tools = [
    { name: "Ai", fullname: "Illustrator", color: "text-orange-500", bg: "bg-orange-950/30", border: "border-orange-500/50" },
    { name: "Ps", fullname: "Photoshop", color: "text-blue-500", bg: "bg-blue-950/30", border: "border-blue-500/50" },
    { name: "Pr", fullname: "Premiere Pro", color: "text-purple-500", bg: "bg-purple-950/30", border: "border-purple-500/50" },
    { name: "Ae", fullname: "After Effects", color: "text-indigo-400", bg: "bg-indigo-950/30", border: "border-indigo-400/50" },
    { name: "Fg", fullname: "Figma", color: "text-green-400", bg: "bg-green-950/30", border: "border-green-400/50" },
  ];

  return (
    <section id="skills" className="py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Mes <span className="text-red-600">Compétences</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Soft Skills & Hard Skills */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center">✨</span>
              Aptitudes
            </h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {skillsList.map((skill, index) => (
                <li key={index} className="flex items-center gap-3 text-zinc-300">
                  <span className="w-2 h-2 rounded-full bg-red-600"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center">🛠️</span>
              Outils Maîtrisés
            </h3>
            <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
              {tools.map((tool, index) => (
                <div key={index} className="flex flex-col items-center gap-2 group">
                  <div className={`w-16 h-16 rounded-xl border ${tool.border} ${tool.bg} flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-lg shadow-black`}>
                    <span className={`text-2xl font-bold ${tool.color}`}>{tool.name}</span>
                  </div>
                  <span className="text-xs font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors">{tool.fullname}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

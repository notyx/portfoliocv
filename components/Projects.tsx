import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  // Sélection manuelle des projets à mettre en avant : 2 vidéos et InDesign
  const featuredSlugs = ["podcast-image", "motion-design-clip", "air-max-dn"];
  const featuredProjects = projects.filter(p => featuredSlugs.includes(p.slug));

  return (
    <section id="projects" className="py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Mes <span className="text-red-600">Projets</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations en montage vidéo, motion design et conception graphique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/projects" className="px-8 py-3.5 rounded-full text-base font-semibold bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300 inline-flex items-center gap-2">
            Voir tous mes projets
          </Link>
        </div>
      </div>
    </section>
  );
}

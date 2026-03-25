"use client";

import Navbar from "../../components/Navbar";
import Link from "next/link";
import { useState } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const filters = ["Tous", "Vidéo", "Photo", "Design"];
  
  const filteredProjects = activeFilter === "Tous" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-zinc-950 pt-32 pb-24 selection:bg-red-600 selection:text-white">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="mb-16">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-red-500 transition-colors mb-8 group">
              <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Retour à l'accueil
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Tous mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Projets</span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl">
              Parcourez l'intégralité de mon portfolio. Filtrez par catégorie pour découvrir mes réalisations audiovisuelles, reportages photographiques et créations graphiques.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            {filters.map((filter) => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter 
                    ? "bg-red-600 text-white border-red-600 shadow-lg shadow-red-900/20" 
                    : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800"
                } border`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
               <ProjectCard key={index} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-zinc-500">Aucun projet trouvé dans cette catégorie.</p>
            </div>
          )}

        </div>
      </main>
      
      <footer className="py-8 text-center text-zinc-500 border-t border-white/5 bg-zinc-950">
        <p>© {new Date().getFullYear()} Noan Likeng-Buot. Tous droits réservés.</p>
      </footer>
    </>
  );
}

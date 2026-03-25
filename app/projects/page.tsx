"use client";

import Navbar from "../../components/Navbar";
import Link from "next/link";
import { useState } from "react";

const allProjects = [
  { title: "Montage Vidéo Corporate", category: "Vidéo", date: "2023", image: "🎥", description: "Réalisation d'une vidéo de présentation pour une entreprise." },
  { title: "Shooting Photo Événementiel", category: "Photo", date: "2023", image: "📷", description: "Couverture photographique d'un événement étudiant." },
  { title: "Design UI/UX Application", category: "Design", date: "2024", image: "🎨", description: "Maquettage complet d'une application mobile innovante." },
  { title: "Court Métrage Étudiant", category: "Vidéo", date: "2024", image: "🎬", description: "Écriture, tournage et montage d'un court métrage de fiction." },
  { title: "Identité Visuelle", category: "Design", date: "2023", image: "✨", description: "Création d'un logo et de la charte graphique d'une marque." },
  { title: "Portraits Studio", category: "Photo", date: "2024", image: "📸", description: "Série de portraits réalisés en studio avec gestion d'éclairage." },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const filters = ["Tous", "Vidéo", "Photo", "Design"];
  
  const filteredProjects = activeFilter === "Tous" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeFilter);

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
              <div key={index} className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-red-900/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-900/10 cursor-pointer">
                <div className="aspect-video bg-zinc-800 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 group-hover:scale-105 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                  
                  <span className="text-5xl z-10 transform group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl">
                    {project.image}
                  </span>
                  
                  {/* Decorative glowing effects */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-800/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
                </div>
                
                <div className="p-6 relative">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold text-red-500 tracking-wider uppercase bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                      {project.category}
                    </span>
                    <span className="text-xs font-medium text-zinc-500">{project.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">{project.title}</h3>
                  <p className="text-sm text-zinc-400 line-clamp-2 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto flex items-center text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors duration-300">
                    Ouvrir le projet
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </div>
              </div>
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

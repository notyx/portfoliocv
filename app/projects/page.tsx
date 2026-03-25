"use client";

import Navbar from "../../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const allProjects = [
  { title: "Projet Podcast Imagé", category: "Vidéo", date: "2024", youtubeId: "Gr-jewnUVUM", description: "Montage réalisé par Noan Likeng-Buot. Audio Original : URBANIA." },
  { title: "Projet Perso Montage Tiktok", category: "Vidéo", date: "2024", youtubeId: "9Lvjb1p8XWA", description: "Montage dynamique au format vertical réalisé pour TikTok." },
  { title: "Projet Motion Design Clip", category: "Vidéo", date: "2024", youtubeId: "qVP1Dgc2F6o", description: "Clip en motion design. Musique utilisée : Control - Playboi Carti." },
  { title: "Projet Vidéo Entreprise", category: "Vidéo", date: "2024", youtubeId: "RXpQyMAeH1A", description: "Montage et exécution vidéo pour une entreprise." },
  { 
    title: "Air Max DN", 
    category: "Design", 
    date: "2024", 
    images: [
      "/Noan%20LIKENG-BUOT%20InDesign%20AIR%20Max%20DN%20(1)_page-0001.jpg",
      "/Noan%20LIKENG-BUOT%20InDesign%20AIR%20Max%20DN%20(1)_page-0002.jpg",
      "/Noan%20LIKENG-BUOT%20InDesign%20AIR%20Max%20DN%20(1)_page-0003.jpg"
    ], 
    description: "Conception graphique et mise en page de présentation pour la Nike Air Max DN, réalisée sous InDesign." 
  },
  { title: "Portraits Studio", category: "Photo", date: "2024", image: "📸", description: "Série de portraits réalisés en studio avec gestion d'éclairage." },
];

function ProjectCard({ project }: { project: any }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % project.images.length);
  };
  
  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  return (
    <div className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-red-900/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-900/10 flex flex-col">
      
      {project.youtubeId ? (
        <div className="aspect-video bg-zinc-950 relative overflow-hidden border-b border-zinc-800">
          <iframe 
            src={`https://www.youtube.com/embed/${project.youtubeId}`} 
            title={project.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ) : project.images && project.images.length > 0 ? (
        <div className="aspect-video bg-zinc-950 relative overflow-hidden group/slider border-b border-zinc-800">
          <Image 
            src={project.images[currentSlide]} 
            alt={`${project.title} - Slide ${currentSlide + 1}`}
            fill
            className="object-contain"
          />
          {project.images.length > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-red-600 z-10 backdrop-blur-sm shadow-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-red-600 z-10 backdrop-blur-sm shadow-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
              
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                {project.images.map((_: any, idx: number) => (
                  <div key={idx} className={`w-2 h-2 rounded-full transition-colors duration-300 ${idx === currentSlide ? 'bg-red-500 scale-110' : 'bg-white/40'}`} />
                ))}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="aspect-video bg-zinc-800 flex items-center justify-center relative overflow-hidden shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 group-hover:scale-105 transition-transform duration-700"></div>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
          
          <span className="text-5xl z-10 transform group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl">
            {project.image}
          </span>
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-800/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
        </div>
      )}
      
      <div className="p-6 relative flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-bold text-red-500 tracking-wider uppercase bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
            {project.category}
          </span>
          <span className="text-xs font-medium text-zinc-500">{project.date}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">{project.title}</h3>
        <p className="text-sm text-zinc-400 line-clamp-3 mb-6">
          {project.description}
        </p>
        
        {!project.youtubeId && !project.images && (
          <div className="mt-auto flex items-center text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors duration-300 cursor-pointer">
            Ouvrir le projet
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </div>
        )}
      </div>
    </div>
  );
}

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

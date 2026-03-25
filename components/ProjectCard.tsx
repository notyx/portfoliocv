"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.images) {
      setCurrentSlide((prev) => (prev + 1) % project.images!.length);
    }
  };
  
  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.images) {
      setCurrentSlide((prev) => (prev === 0 ? project.images!.length - 1 : prev - 1));
    }
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
              
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm pointer-events-none">
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
      
      <Link href={`/projects/${project.slug}`} className="p-6 relative flex-grow flex flex-col hover:bg-zinc-800/20 block cursor-pointer">
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-bold text-red-500 tracking-wider uppercase bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
            {project.category}
          </span>
          <span className="text-xs font-medium text-zinc-500">{project.date}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">{project.title}</h3>
        <p className="text-sm text-zinc-400 line-clamp-3 mb-6">
          {project.shortDescription}
        </p>
        
        <div className="mt-auto flex items-center text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors duration-300">
          Lire les détails
          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </div>
      </Link>
    </div>
  );
}

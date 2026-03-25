import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import Image from "next/image";

export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-zinc-950 pt-32 pb-24 selection:bg-red-600 selection:text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          
          <div className="mb-12">
            <Link href="/projects" className="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-red-500 transition-colors mb-8 group">
              <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Retour aux projets
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-red-500 tracking-wider uppercase bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                {project.category}
              </span>
              <span className="text-zinc-500 font-medium">{project.date}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              {project.title}
            </h1>
          </div>

          {/* Media Section */}
          <div className="w-full mb-16 rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-zinc-800 bg-zinc-900">
            {project.youtubeId ? (
              <div className="aspect-video relative w-full">
                <iframe 
                  src={`https://www.youtube.com/embed/${project.youtubeId}`} 
                  title={project.title}
                  className="w-full h-full border-0 absolute inset-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ) : project.images && project.images.length > 0 ? (
              <div className="flex flex-col w-full bg-zinc-950 p-4 gap-4">
                {project.images.map((img, i) => (
                  <div key={i} className="relative w-full aspect-[1/1.4] md:aspect-auto md:min-h-[800px] rounded-xl overflow-hidden shadow-lg border border-zinc-800/50">
                    <Image 
                      src={img}
                      alt={`${project.title} - Page ${i + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            ) : (
               <div className="aspect-video bg-zinc-800 flex items-center justify-center relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black"></div>
                  <span className="text-8xl z-10 drop-shadow-2xl">{project.image}</span>
               </div>
            )}
          </div>

          {/* Content Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-red-600 rounded-full"></span>
              À propos du projet
            </h2>
            <div className="prose prose-invert prose-zinc max-w-none prose-lg">
              <p className="text-zinc-300 leading-relaxed whitespace-pre-line text-lg">
                {project.content}
              </p>
            </div>
            
            <div className="mt-16 p-8 rounded-2xl bg-zinc-900 border border-zinc-800 text-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <h3 className="text-xl font-bold text-white mb-4 relative z-10">Un projet similaire vous intéresse ?</h3>
               <Link href="/#contact" className="inline-flex px-8 py-3.5 rounded-full text-base font-semibold bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-900/30 hover:shadow-red-900/50 hover:-translate-y-1 transition-all duration-300 relative z-10">
                 Me Contacter
               </Link>
            </div>
          </div>

        </div>
      </main>
      
      <footer className="py-8 text-center text-zinc-500 border-t border-white/5 bg-zinc-950">
        <p>© {new Date().getFullYear()} Noan Likeng-Buot. Tous droits réservés.</p>
      </footer>
    </>
  );
}

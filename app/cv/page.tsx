import Navbar from "../../components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mon CV | Noan Likeng-Buot",
  description: "Consultez et téléchargez mon Curriculum Vitae.",
};

export default function CVPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-zinc-950 pt-32 pb-24 selection:bg-red-600 selection:text-white flex flex-col items-center">
        <div className="container mx-auto px-6 md:px-12 w-full max-w-5xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Mon <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">CV</span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8">
              Retrouvez ci-dessous mon curriculum vitae au format PDF.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/NOAN LIKENG-BUOT (2).pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full text-base font-semibold bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-900/30 hover:shadow-red-900/50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                Ouvrir le CV
              </a>
              <a 
                href="/NOAN LIKENG-BUOT (2).pdf" 
                download
                className="px-8 py-3.5 rounded-full text-base font-semibold bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Télécharger (PDF)
              </a>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="w-full h-[80vh] bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl relative mb-12">
            <iframe 
              src="/NOAN LIKENG-BUOT (2).pdf#toolbar=0" 
              className="w-full h-full border-0"
              title="CV Noan Likeng-Buot"
            />
          </div>

          <div className="text-center">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-red-500 transition-colors group">
              <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </main>
      
      <footer className="py-8 text-center text-zinc-500 border-t border-white/5 bg-zinc-950">
        <p>© {new Date().getFullYear()} Noan Likeng-Buot. Tous droits réservés.</p>
      </footer>
    </>
  );
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  date: string;
  youtubeId?: string;
  images?: string[];
  image?: string; 
  shortDescription: string;
  content: string; 
}

export const projects: Project[] = [
  { 
    slug: "podcast-image",
    title: "Projet Podcast Imagé", 
    category: "Vidéo", 
    date: "2025", 
    youtubeId: "Gr-jewnUVUM", 
    shortDescription: "Montage réalisé par Noan Likeng-Buot. Audio Original : URBANIA.",
    content: "Dans ce projet, j'ai réalisé un montage dynamique illustrant un podcast d'URBANIA. L'objectif était de rythmer l'audio par une sélection visuelle percutante. Tu pourras écrire ici tous les détails de ton workflow de montage, tes inspirations et le contexte de réalisation." 
  },
  { 
    slug: "motion-design-clip",
    title: "Projet Motion Design Clip", 
    category: "Vidéo", 
    date: "2025", 
    youtubeId: "qVP1Dgc2F6o", 
    shortDescription: "Clip en motion design. Musique utilisée : Control - Playboi Carti.",
    content: "Un projet combinant l'esthétique du morceau Control de Playboi Carti avec des techniques immersives de motion design. Ce projet a nécessité une forte synchronisation de l'animation avec la musique (audio-reactivity)."
  },
  { 
    slug: "montage-tiktok",
    title: "Projet Perso Montage Tiktok", 
    category: "Vidéo", 
    date: "2025", 
    youtubeId: "9Lvjb1p8XWA", 
    shortDescription: "Montage dynamique au format vertical réalisé pour TikTok.",
    content: "Création de contenu adapté aux formats courts (Shorts/TikTok). J'ai mis l'accent sur la rétention de l'audience via des cuts dynamiques, des sous-titres animés et des effets sonores (wooshes, impacts)."
  },
  { 
    slug: "video-entreprise",
    title: "Projet Vidéo Entreprise", 
    category: "Vidéo", 
    date: "2025", 
    youtubeId: "RXpQyMAeH1A", 
    shortDescription: "Montage et exécution vidéo pour une entreprise.",
    content: "Réalisation d'une vidéo de présentation corporate de A à Z. De la dérushage de la captation au montage final, en passant par l'étalonnage (color-grading) et le mixage audio pour un rendu professionnel."
  },
  { 
    slug: "air-max-dn",
    title: "Air Max DN", 
    category: "Design", 
    date: "2025", 
    images: [
      "/Noan%20LIKENG-BUOT%20InDesign%20AIR%20Max%20DN%20(1)_page-0001.jpg",
      "/Noan%20LIKENG-BUOT%20InDesign%20AIR%20Max%20DN%20(1)_page-0002.jpg",
      "/Noan%20LIKENG-BUOT%20InDesign%20AIR%20Max%20DN%20(1)_page-0003.jpg"
    ], 
    shortDescription: "Conception graphique et mise en page de présentation pour la Nike Air Max DN, réalisée sous InDesign.",
    content: "Mise en page complète d'un dossier de présentation visuelle pour le célèbre modèle Air Max DN de Nike. Le focus a été mis sur le respect de la charte graphique de la marque et la typographie moderne. Réalisé via Adobe InDesign."
  },
  { 
    slug: "portraits-studio",
    title: "Portraits Studio", 
    category: "Photo", 
    date: "2025", 
    image: "📸", 
    shortDescription: "Série de portraits réalisés en studio avec gestion d'éclairage.",
    content: "Projet photographique visant à maîtriser les techniques d'éclairage studio professionnel. Travail sur la Key light, Fill light, et le Backlight pour détourer les sujets photographiés."
  },
];

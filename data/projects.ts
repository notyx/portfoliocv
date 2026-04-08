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
    content: "Dans ce projet, j'ai réalisé un montage dynamique illustrant un podcast d'URBANIA. L'objectif était de donner du rythme à l'audio par une sélection visuelle percutante."
  },
  {
    slug: "motion-design-clip",
    title: "Projet Animation Vidéo",
    category: "Vidéo",
    date: "2025",
    youtubeId: "qVP1Dgc2F6o",
    shortDescription: "Animation visuelle rythmée. Musique utilisée : Control - Playboi Carti.",
    content: "Un projet combinant l'esthétique du morceau Control de Playboi Carti avec des techniques d'animation vidéo complètes (Motion Design). Ce projet visuel a demandé beaucoup de précision pour que les images s'animent parfaitement sur le rythme de la musique."
  },
  {
    slug: "montage-tiktok",
    title: "Projet Personnel Montage Tiktok",
    category: "Vidéo",
    date: "2025",
    youtubeId: "9Lvjb1p8XWA",
    shortDescription: "Montage vidéo dynamique au format téléphone (vertical), réalisé pour TikTok.",
    content: "Création de contenu vidéo adapté aux formats courts pour les réseaux sociaux. L'objectif principal était de capter l'attention du spectateur dès les premières secondes grâce à des enchaînements d'images rapides, des sous-titres animés et un habillage sonore immersif."
  },
  {
    slug: "video-entreprise",
    title: "Projet Vidéo d'Entreprise",
    category: "Vidéo",
    date: "2025",
    youtubeId: "RXpQyMAeH1A",
    shortDescription: "Montage vidéo complet pour la présentation d'une entreprise.",
    content: "Réalisation d'une vidéo de présentation professionnelle de A à Z. Du tri minutieux des images jusqu'au montage final, en intégrant un travail profond d'ajustement des couleurs visuelles (étalonnage) et un réglage parfait du son (mixage) pour proposer un rendu irréprochable."
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
    shortDescription: "Réalisation graphique et de mise en page pour la présentation de la Nike Air Max DN.",
    content: "Mise en page complète d'un dossier de présentation visuelle pour le célèbre modèle Air Max DN de Nike. L'accent a été mis sur le strict respect de l'identité visuelle de la marque, ainsi que l'utilisation d'une typographie percutante et harmonieuse. Entièrement réalisé avec Adobe InDesign."
  },
  {
    slug: "nintendo-switch-motion-design",
    title: "Pub Fictive Nintendo Switch",
    category: "Vidéo",
    date: "2026",
    youtubeId: "DtNn6PuxVcM",
    shortDescription: "Publicité fictive d'une Nintendo Switch intégrant de nouvelles fonctionnalités. Projet axé sur le motion design.",
    content: "Ce projet consistait à réaliser une publicité sur une Nintendo Switch fictive pour travailler le motion design. De nombreuses nouveautés y ont été animées et intégrées, comme un accès à de nouvelles applications, l'apparition d'une carte SIM 5G sur la console et un nouvel écran 4K."
  },
];

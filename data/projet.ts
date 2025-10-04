// ✅ On définit un type plus complet
type Project = {
  id: string;
  name: string;
  color: string;
  img: string;
  imageMain: string;
  imageMobile?: string; // ✅ Nouvelle propriété pour l'image mobile
  playStoreImg: string;
  appStoreImg: string;
  isWeb: boolean;
  isMobile: boolean;
  goal: string;
  description: string;
  solutionLink?: string; // ✅ Nouvelle propriété pour le lien de la solution
};

export const projects: Project[] = [
  {
    id: "1",
    name: "TURBO DELIVERY",
    color: "bg-[#fdc700] ",
    img: "/assets/images/all-img/logo_turbo.png",
    imageMain: "/assets/images/all-img/tubo_system.png",
    imageMobile: "/assets/images/all-img/turbo_mobile.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    isMobile: true,
    goal: "SERVICE DE LIVRAISON EXPRESS ,Votre colis est précieux ?  Confiez-le à Turbo Delivery",
    description:
      "Chez Turbo Delivery, nous comprenons que chaque minute compte dans le monde des affaires. Notre service de livraison express est conçu pour répondre aux besoins spécifiques des professionnels qui ne peuvent pas se permettre de compromis sur la qualité et la rapidité.",
    solutionLink: "https://www.turbodeliveryapp.com/", // Exemple de lien
  },
  {
    id: "2",
    name: "CHICKEN-NATION",
    color: "bg-[#ff6201] ",
    img: "/assets/images/all-img/chiken_logo.png",
    imageMain: "/assets/images/portfolio/chicken.png",
    imageMobile: "/assets/images/all-img/chicken_mobile.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    isMobile: true,
    goal: "Favoriser l’inclusion",
    description: "string",
    solutionLink: "https://chicken-nation.vercel.app/", // Exemple de lien
  },

  {
    id: "3",
    name: "AMBASSADE DE TCHAD",
    color: "bg-blue-800 ",
    img: "/assets/images/all-img/tchad.png",
    imageMain: "/assets/images/portolios/ambassades.png",
    imageMobile: "/assets/images/all-img/turbo_mobile.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    isMobile: false,
    goal: "SERVICE DE LIVRAISON EXPRESS ,Votre colis est précieux ?  Confiez-le à Turbo Delivery",
    description:
      "Chez Turbo Delivery, nous comprenons que chaque minute compte dans le monde des affaires. Notre service de livraison express est conçu pour répondre aux besoins spécifiques des professionnels qui ne peuvent pas se permettre de compromis sur la qualité et la rapidité.",
    solutionLink: "https://www.ambatchad.ci/fr", // Exemple de lien
  },
  {
    id: "4",
    name: "WAKANGA HOLDING",
    color: "bg-[#fe8100] ",
    img: "/assets/images/all-img/wh_logo.png",
    imageMain: "/assets/images/projects/holding-main.png",
    imageMobile: "/assets/images/all-img/holding_mobile.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    isMobile: false,
    goal: "Favoriser l’inclusion financière et réduire la dépendance au cash",
    description:
      "Wacanda Pay est une solution de paiement et épargne à la consommation électronique innovante conçue pour répondre aux besoins des particuliers, commerçants et entreprises africaines.",
    solutionLink: "https://wacangaholding.example.com", // Exemple de lien
  },
  {
    id: "5",
    name: "Fernand Dedeh",
    color: "bg-orange-200",
    img: "/assets/images/all-img/fede.png",
    imageMain: "/assets/images/portolios/fdes.png",
    imageMobile: "/assets/images/all-img/osa_mobile.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    
    isMobile: false,
    goal: "string",
    description: "",
    solutionLink: "https://fdedeh.info/fr", // Exemple de lien
  },
{
    id: "6",
    name: "WAKANGA STORE",
    color: "bg-[#2a292e] ",
    img: "/assets/images/all-img/wk_logo.png",
    imageMain: "/assets/images/portolios/lhs.png",
    imageMobile: "/assets/images/all-img/mobile_ws.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: false,
    isMobile: true,
    goal: "string",
    description: "string",
    solutionLink: "https://wacangastore.example.com", // Exemple de lien
  },
  
  
];

export const projects1: Project[] = [
  
  {
    id: "7",
    name: "WAKANGA Pay",
    color: "bg-gray-600 ",
    img: "/assets/images/all-img/pay.png",
    imageMain: "/assets/images/all-img",
    imageMobile: "",
    playStoreImg: "",
    appStoreImg: "",
    isWeb: false,
    isMobile: true,
    goal: "string",
    description: "string",
    solutionLink: "https://wacangapay.example.com", // Exemple de lien
  },
  {
    id: "8",
    name: "FC OSA",
    color: "bg-[#5c0067]",
    img: "/assets/images/all-img/osa_logo.png",
    imageMain: "/assets/images/portfolios/osas.png",
    imageMobile: "/assets/images/all-img/osa_mobile.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    isMobile: true,
    goal: "string",
    description: "",
    solutionLink: "https://osa-website-alpha.vercel.app/", // Exemple de lien
  },
  {
    id: "9",
    name: "Brin service ",
    color: "bg-[#ef0a5d] ",
    img: "/assets/images/all-img/clean_logo.png",
    imageMain: "/assets/images/portfolios/brins.png",
    imageMobile: "/assets/images/all-img/clean_mobile.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    isMobile: false,
    goal: "string",
    description: "is",
    solutionLink: "https://www.brin-serviceclean.com/propos", // Exemple de lien
  },
  {
    id: "10",
    name: "CATHOLIKIA",
    color: "bg-[#FFC107]",
    img: "/assets/images/all-img/catholikia.png",
    imageMain: "/assets/images/portfolio/catholikia.png",
    imageMobile: "/assets/images/all-img/chicken_mobile.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    isMobile: false,
    goal: "Favoriser l’inclusion",
    description: "string",
    solutionLink: "https://catholikia.com/fr", // Exemple de lien
  },
  {
    id: "11",
    name: "LUXURY HOME",
    color: "bg-black",
    img: "/assets/images/portfolio/lha.png",
    imageMain: "/assets/images/portolios/lhaa.png",
    imageMobile: "/assets/images/all-img/chicken_mobile.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    isMobile: false,
    goal: "Favoriser l’inclusion",
    description: "string",
    solutionLink: "https://luxuryhomeabidjan.vercel.app/", // Exemple de lien
  },
  

  
 
];

export const groupProject: Project[][] = [projects, projects1];

// Fonction pour chercher un projet par id dans groupProject
export function findProjectById(id: string): Project | undefined {
  // Parcours chaque sous-tableau de projets
  for (const projectList of groupProject) {
    const project = projectList.find(p => p.id == id);
    console.log("Recherche du projet avec ID:", id, " - Trouvé:", project);
    if (project) return project; // Retourne le projet dès qu'il est trouvé
  }
  return undefined; // Si aucun projet trouvé
}

// Exemple d'utilisation
const myProject = findProjectById("3");
console.log(myProject);

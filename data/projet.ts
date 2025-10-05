// ✅ Type complet avec projet actif
export type Project = {
  id: string;
  name: string;
  color: string;
  img: string;
  imageMain: string;
  imageMobile?: string; // ✅ Image mobile si le projet est mobile
  playStoreImg?: string; // ✅ Icône Play Store
  appStoreImg?: string;  // ✅ Icône App Store
  isWeb: boolean;
  isMobile: boolean;
  goal: string;
  description: string;
  solutionLink?: string; // ✅ Lien web ou solution
  mobileLink?: string;   // ✅ Lien vers l'app mobile
  isActive: boolean; 
  appStoreLink?:string  ;  // ✅ Projet actif ou non
};

// Liste principale de projets
export const projects: Project[] = [
  {
    id: "1",
    name: "TURBO DELIVERY",
    color: "bg-[#fdc700]",
    img: "/assets/images/all-img/logo_turbo.png",
    imageMain: "/assets/images/all-img/tubo_system.png",
    imageMobile: "/assets/images/all-img/turbo_mobile.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    isMobile: true,
    goal: "SERVICE DE LIVRAISON EXPRESS, Votre colis est précieux ? Confiez-le à Turbo Delivery",
    description:
      "L'activité de Turbo Delivery consiste à mettre en relation des Turboys et des partenaires qui recherchent un partenaire de confiance pour leurs opérations de livraison... Le service de livraison express de Turbo Delivery est conçu pour répondre aux besoins des entreprises et des particuliers qui exigent rapidité, fiabilité et sécurité dans la livraison de leurs colis. Que ce soit pour des documents importants, des produits commerciaux ou des articles personnels, Turbo Delivery s'engage à offrir un service de qualité supérieure.",
    solutionLink: "https://play.google.com/store/apps/details?id=com.turbo.turbodeliverypro&pcampaignid=web_share",
    mobileLink: "https://apps.apple.com/ci/app/turboy/id6737685380",
    isActive: true,
  },
  {
    id: "2",
    name: "CHICKEN-NATION",
    color: "bg-[#ff6201]",
    img: "/assets/images/all-img/chiken_logo.png",
    imageMain: "/assets/images/portolios/chiken.png",
    imageMobile: "/assets/images/all-img/chicken_mobile.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    isMobile: true,
    goal: "Chicken Nation, le champion du poulet !ci, on ne rigole pas avec la qualité. Notre application mobile vous permet de commander facilement vos plats préférés et de profiter de nos offres exclusives.",
    description:
      "Chicken Nation est le fastfood  spécialisé dans le poulet 100% ivoirien. Une application dédiée pour rapprocher sa clientèle offrant la possibilité de commander et être livré ; commander et manger sur place ; commander et faire un emporter.Les bons plans exclusifs du restaurant sont sur l'application avec un superbe plan de fidélisation et un service client bien élaboré.",
    solutionLink: "https://chicken-nation.vercel.app/",
    mobileLink: " https://apps.apple.com/ci/app/chicken-nation/id6745905607",
    isActive: true,
     appStoreLink:"  https://play.google.com/store/apps/details?id=com.chickennation.app"
  },
  {
    id: "3",
    name: "AMBASSADE DE TCHAD",
    color: "bg-blue-800",
    img: "/assets/images/all-img/tchad.png",
    imageMain: "/assets/images/portolios/ambassades.png",
    imageMobile: "/assets/images/all-img/turbo_mobile.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    isMobile: false,
    goal: "L'ambassade du Tchad en Côte d'Ivoire pour se rapprocher de ses concitoyens.",
    description:
      "Cette plateforme permet de faciliter l'élaboration de tous les documents consulaires et de moderniser les interactions avec les citoyens. Elle offre des services en ligne tels que la prise de rendez-vous, le suivi des demandes de visa et la consultation des informations consulaires.",
    solutionLink: "https://www.ambatchad.ci/fr",
    isActive: true,
  },
  {
    id: "4",
    name: "WACANDA HOLDING",
    color: "bg-[#fe8100]",
    img: "/assets/images/all-img/wh_logo.png",
    imageMain: "/assets/images/portolios/holding.png",
    imageMobile: "/assets/images/all-img/holding_mobile.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    isMobile: false,
    goal: "Site web Wacanda Holding, une appication de services financiers innovants en Côte d'Ivoire.",
    description:
      "Wacanda Holding est un écosystème de services financiers innovants qui vise à transformer la manière dont les individus et les entreprises gèrent leurs finances en Côte d'Ivoire. En proposant une gamme complète de solutions, Wacanda Holding facilite l'accès aux services financiers, favorise l'inclusion économique et stimule la croissance économique durable.",
    solutionLink: "https://wacangaholding.example.com",
    isActive: false,
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
    goal: "Site web du journaliste Fernand Dedeh favorisant l'accès à l'information et la liberté d'expression.Ce site web est une plateforme d'information en ligne qui vise à fournir des nouvelles, des analyses et des opinions sur divers sujets d'actualité ivoirienne.",
    description:
      "fdedeh.infos s'inscrit dans le projet de  modernisation de la presse : Une stratégie de transformation digitale pour tous ces acteurs  . Une idée originale conçue et développée par LUNION-LAB.",
    solutionLink: "https://fdedeh.info/fr",
    isActive: true,
  },
  {
    id: "6",
    name: "WACANDA STORE",
    color: "bg-[#2a292e]",
    img: "/assets/images/all-img/wk_logo.png",
    imageMain: "/assets/images/portolios/lhs.png",
    imageMobile: "/assets/images/all-img/m",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    isMobile: true,
    goal: "Application Wacanda Store pour commander les produits Wacanda directement depuis votre téléphone.",
    description: "Application mobile pour commander les produits Wacanda directement depuis votre téléphone. Découvrez notre catalogue, passez vos commandes et suivez leur livraison en toute simplicité.",
    solutionLink: "https://wacangastore.example.com",
    mobileLink: "https://play.google.com/store/apps/details?id=com.wacanda.store",
    isActive: false,
  },
];

// Liste secondaire
export const projects1: Project[] = [
  {
    id: "7",
    name: "WACANDA Pay",
    color: "bg-gray-600",
    img: "/assets/images/all-img/pay.png",
    imageMain: "/assets/images/portolios/lhs.png",
    imageMobile: "/assets/images/all-img/mobile_ws.png",
    playStoreImg: "",
    appStoreImg: "",
    isWeb: false,
    isMobile: true,
    goal: "Application Wacanda Pay pour des paiements sécurisés et faciles.",
    description: "Application mobile pour la gestion de paiements. Effectuez des paiements sécurisés, gérez vos transactions et consultez votre historique de paiements en toute simplicité.",
    solutionLink: "https://wacangapay.example.com",
    mobileLink: "https://play.google.com/store/apps/details?id=com.wacanda.pay",
    isActive: false,
  },
  {
    id: "8",
    name: "FC OSA",
    color: "bg-[#5c0067]",
    img: "/assets/images/all-img/osa_logo.png",
    imageMain: "/assets/images/portolios/osas.png",
    imageMobile: "/assets/images/all-img/osa_mobile.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    isMobile: false,
    goal: "Site web FC OSA  une équipe de football dynamique et ambitieuse basée en Côte d'Ivoire.De la formation des jeunes talents à la compétition de haut niveau, FC OSA s'engage à promouvoir l'excellence sportive et l'esprit d'équipe.",
    description: "Le site web du FC OSA offre une vitrine complète de l'équipe, de ses joueurs, de ses matchs et de ses actualités. Il permet aux fans de rester connectés et de suivre les performances de leur équipe favorite.",
    solutionLink: "https://osa-website-alpha.vercel.app/",
    isActive: true,
  },
  {
    id: "9",
    name: "Brin service",
    color: "bg-[#ef0a5d]",
    img: "/assets/images/all-img/clean_logo.png",
    imageMain: "/assets/images/portolios/brins.png",
    imageMobile: "/assets/images/all-img/clean_mobile.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    isMobile: false,
    goal: "Service  de nettoyage à domicile Brin Service Clean pour un intérieur impeccable et sain.",
    description: "Ce site web présente les services de nettoyage offerts par Brin Service Clean, permettant aux clients de réserver facilement des prestations de nettoyage pour leur domicile ou leur bureau.",
    solutionLink: "https://www.brin-serviceclean.com/propos",
    isActive: true,
  },
  {
    id: "10",
    name: "CATHOLIKIA",
    color: "bg-[#FFC107]",
    img: "/assets/images/portolios/logo.png",
    imageMain: "/assets/images/portfolio/catholikia.png",
    imageMobile: "/assets/images/all-img/chicken_mobile.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    isMobile: false,
    goal: "Site web CATHOLIKIA, la plateforme de ressources et d'informations pour la communauté catholique en Côte d'Ivoire.",
    description: "Ce site web offre un espace dédié aux fidèles catholiques pour accéder à des contenus spirituels, des actualités religieuses et des événements communautaires. Il vise à renforcer la foi et la connexion au sein de la communauté catholique. Voulez vous savoir les dernières nouvelles de l'église catholique en Côte d'Ivoire et dans le monde ? Visitez catholikia.com",
    solutionLink: "https://catholikia.com/fr",
    isActive: true,
  },
  {
    id: "11",
    name: "LUXURY HOME",
    color: "bg-black/40",
    img: "/assets/images/portolios/lhaa_logo.png",
    imageMain: "/assets/images/portolios/luxury.png",
    imageMobile: "/assets/images/all-img/chicken_mobile.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    isMobile: false,
    goal: "Site web Luxury Home Abidjan, votre partenaire immobilier de confiance pour des propriétés de luxe en Côte d'Ivoire.",
    description: "ce site web présente une sélection exclusive de biens immobiliers haut de gamme, offrant aux clients une expérience utilisateur élégante et intuitive pour trouver leur maison de rêve ou investir dans l'immobilier de prestige.",
    solutionLink: "https://luxuryhomeabidjan.vercel.app/",
    isActive: true,
  },
];

// Tableau regroupé
export const groupProject: Project[][] = [projects, projects1];

// Fonction pour chercher un projet par id
export function findProjectById(id: string): Project | undefined {
  for (const projectList of groupProject) {
    const project = projectList.find((p) => p.id == id);
    if (project) return project;
  }
  return undefined;
}

// Exemple d'utilisation
// const myProject = findProjectById("3");
// console.log(myProject);

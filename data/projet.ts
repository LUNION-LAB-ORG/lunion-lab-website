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
  goal:string,
  description:string
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
    goal:"SERVICE DE LIVRAISON EXPRESS ,Votre colis est précieux ?  Confiez-le à Turbo Delivery",
  description:"Chez Turbo Delivery, nous comprenons que chaque minute compte dans le monde des affaires. Notre service de livraison express est conçu pour répondre aux besoins spécifiques des professionnels qui ne peuvent pas se permettre de compromis sur la qualité et la rapidité."
  },
   
  {
    id: "3",
    name: "AMBASSADE DE TCHAD",
    color: "bg-blue-800 ",
    img: "/assets/images/all-img/tchad.png",
    imageMain: "/assets/images/all-img/tubo_system.png",
    imageMobile: "/assets/images/all-img/turbo_mobile.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    isMobile: false,
    goal:"SERVICE DE LIVRAISON EXPRESS ,Votre colis est précieux ?  Confiez-le à Turbo Delivery",
  description:"Chez Turbo Delivery, nous comprenons que chaque minute compte dans le monde des affaires. Notre service de livraison express est conçu pour répondre aux besoins spécifiques des professionnels qui ne peuvent pas se permettre de compromis sur la qualité et la rapidité."
  },
   {
    id: "2",
    name: "CHICKEN-NATION",
    color: "bg-[#ff6201] ",
    img: "/assets/images/all-img/chiken_logo.png",
    imageMain: "/assets/images/projects/chicken-main.png",
    imageMobile: "/assets/images/all-img/chicken_mobile.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    isMobile: false,
    goal:"Favoriser l’inclusion",
  description:"string"
  },
  {
    id: "5",
    name: "WACANGA HOLDING",
    color: "bg-[#fe8100] ",
    img: "/assets/images/all-img/wh_logo.png",
    imageMain: "/assets/images/projects/holding-main.png",
    imageMobile: "/assets/images/all-img/holding_mobile.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    isMobile: false,
    goal:"Favoriser l’inclusion financière et réduire la dépendance au cash",
  description:"Wacanda Pay est une solution de paiement et épargne à la consommation électronique innovante conçue pour répondre aux besoins des particuliers, commerçants et entreprises africaines."
  },
  {
    id: "4",
    name: "Fernand Dedeh",
    color: "bg-orange-200",
    img: "/assets/images/all-img/fede.png",
    imageMain: "/assets/images/projects/osa-main.png",
    imageMobile: "/assets/images/all-img/osa_mobile.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    isMobile: true,
    goal:"string",
  description:""
  },
 

  {
    id: "6",
    name: "FC OSA",
    color: "bg-[#5c0067]",
    img: "/assets/images/all-img/osa_logo.png",
    imageMain: "/assets/images/projects/osa-main.png",
    imageMobile: "/assets/images/all-img/osa_mobile.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    isMobile: true,
    goal:"string",
  description:""
  },
  
  {
    id: "10",
    name: "WACANGA STORE",
    color: "bg-[#2a292e] ",
    img: "/assets/images/all-img/wk_logo.png",
    imageMain: "/assets/images/all-img/mobile",
    imageMobile:  "/assets/images/all-img/mobile_ws.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: false,
    isMobile: true,
    goal:"string",
  description:"string"
  },
  {
    id: "12",
    name: "WACANGA Pay",
    color: "bg-gray-600 ",
    img: "/assets/images/all-img/pay.png",
    imageMain: "/assets/images/all-img",
    imageMobile:  "",
    playStoreImg: "",
    appStoreImg: "",
    isWeb: false,
    isMobile: true,
    goal:"string",
  description:"string"
  },
  
];

export const projects1: Project[] = [
  {
    id: "7",
    name: "CLEANING SERVICE CLEAN",
    color: "bg-[#ef0a5d] ",
    img: "/assets/images/all-img/clean_logo.png",
    imageMain: "/assets/images/projects/cleaning-main.png",
    imageMobile: "/assets/images/all-img/clean_mobile.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    isMobile: false,
    goal:"string",
  description:"is"
  },
  {
    id: "2",
    name: "CHICKEN NATION",
    color: "bg-orange-500",
    img: "/assets/images/all-img/chiken_logo.png",
    imageMain: "/assets/images/projects/chicken-main.png",
    imageMobile: "/assets/images/all-img/chicken_mobile.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    isMobile: false,
    goal:"Favoriser l’inclusion",
  description:"string"
  },
  {
    id: "3",
    name: "CLEANING SERVICE CLEAN",
    color: "bg-pink-500",
    img: "/assets/images/all-img/clean_logo.png",
    imageMain: "/assets/images/projects/cleaning-main.png",
    imageMobile: "/assets/images/all-img/clean_mobile.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    isMobile: false,
    goal:"string",
  description:"is"
  },

 
   {
    id: "4",
    name: "FC OSA",
    color: "bg-purple-700",
    img: "/assets/images/all-img/osa_logo.png",
    imageMain: "/assets/images/projects/osa-main.png",
    imageMobile: "/assets/images/all-img/osa_mobile.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    isMobile: true,
    goal:"string",
  description:""
  },
  {
    id: "5",
    name: "WACANGA HOLDING",
    color: "bg-orange-600",
    img: "/assets/images/all-img/wh_logo.png",
    imageMain: "/assets/images/projects/holding-main.png",
    imageMobile: "/assets/images/all-img/holding_mobile.png",
    playStoreImg: "/assets/images/all-img/plays_store.png",
    appStoreImg: "/assets/images/all-img/app_store.png",
    isWeb: true,
    isMobile: false,
    goal:"Favoriser l’inclusion financière et réduire la dépendance au cash",
  description:"Wacanda Pay est une solution de paiement et épargne à la consommation électronique innovante conçue pour répondre aux besoins des particuliers, commerçants et entreprises africaines."
  },
 
  
];


export const groupProject: Project[][]=[
  projects,
  projects1
]
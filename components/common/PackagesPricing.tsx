import React from "react";
import HomeTitle from "../(public)/home/HomeTitle";
import Section from "../primitives/Section";
import Link from "next/link";

const PackagesPricing = () => {
  const phoneNumber = "+2250565508686";
  const packages = [
    {
      id: 1,
      category: "STARTER",
      price: "162.000",
      currency: "XOF",
      period: "/mois",
      description:
        "Pour les petites entreprises et les startups qui développent leur présence en ligne.",
      features: [
        "Création d'un site web vitrine",
        "Gestion des réseaux sociaux pour une plateforme (choix du client)",
        "Optimisation de base pour les moteurs de recherche (SEO)",
        "Création d'une vidéo promotionnelle de base (30 secondes)",
      ],
      buttonText: "Acheter le package",
      isPopular: false,
    },
    {
      id: 2,
      category: "BUSINESS",
      price: "375.000",
      currency: "XOF",
      period: "/mois",
      description:
        "Pour les entreprises en croissance qui ont besoin d'un délai d'exécution rapide.",
      features: [
        "Site web personnalisé avec fonctionnalités avancées (e-commerce, formulaires interactifs, etc.)",
        "Gestion de contenu pour deux plateformes de médias sociaux",
        "Stratégie de marketing numérique complète (SEO, SEA, médias sociaux)",
        "Création de contenu audiovisuel régulier (vidéos promotionnelles, témoignages clients, tutoriels)",
      ],
      buttonText: "Acheter le package",
      isPopular: true,
    },
    {
      id: 3,
      category: "CORPORATE",
      price: "597.000",
      currency: "XOF",
      period: "/mois",
      description:
        "Vous recherchez un autre domaine d'intervention ? Nous proposons également des solutions sur mesure.",
      features: [
        "Développement d'une application mobile, application web sur mesure et Projet de gestion intégré",
        "Campagnes publicitaires multi-canaux avec suivi analytique approfondi",
        "Stratégie de communication intégrée (relations publiques, gestion de crise)",
        "Production audiovisuelle professionnelle (spots publicitaires, documentaires, interviews haut de gamme)",
      ],
      buttonText: "Acheter le package",
      isPopular: false,
    },
  ];

  return (
    <div className="py-10  bg-gradient-to-br from-purple-100 via-pink-50 to-purple-200 relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-400/90 to-pink-100/30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
            <HomeTitle
              text="Choisissez nos packages"
              imageSrc={"/assets/images/vectors/vector1.svg"}
            />
          </h2>
          <p className="text-lg lg:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Explorez nos packages sur mesure pour répondre à vos besoins
            spécifiques. Trouvez la solution parfaite pour propulser votre
            entreprise vers de nouveaux sommets.
          </p>
        </div>

        {/* Grille des packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`relative font-figree mb-15 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col ${
                pkg.isPopular ? "bg-[#c2c2c2]" : "bg-white"
              }`}
            >
              {/* Badge populaire */}
              {pkg.isPopular && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-[10px] font-medium shadow-md">
                    POPULAIRE
                  </div>
                </div>
              )}

              {/* Contenu */}
              <div className="p-4 lg:p-5 flex-1">
                {/* Catégorie */}
                <div className="mb-2">
                  <div className="inline-block bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wide">
                    {pkg.category}
                  </div>
                </div>

                {/* Prix */}
                <div className="mb-2">
                  <div className="flex items-baseline">
                    <span className="text-2xl lg:text-3xl font-bold text-gray-800">
                      {pkg.price}
                    </span>
                    <span className="text-sm text-gray-500 ml-1.5">
                      {pkg.currency} {pkg.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-3 text-xs leading-snug">
                  {pkg.description}
                </p>

                {/* Liste des fonctionnalités */}
                <ul className="space-y-2 mb-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 mr-2"></div>
                      <span className="text-gray-700 text-xs leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bouton collé en bas */}
              <button
                className={`w-full py-2.5 px-4 rounded-b-2xl cursor-pointer font-medium text-sm transition-all duration-200 mt-auto hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500
        ${
          pkg.isPopular
            ? " text-gray-400 bg-gray-100  shadow-md hover:shadow-lg"
            : "bg-gray-200 text-gray-700 hover:bg-gray-200 border border-transparent hover:border-purple-300"
        }`}
              >
                <Link href={`https://wa.me/${phoneNumber} text-black`}>
                  {" "}
                  {pkg.buttonText}
                </Link>
              </button>

              {/* Effet de brillance */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Éléments décoratifs supplémentaires */}
      {/* <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/30 rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white/40 rounded-full"></div> */}
    </div>
  );
};

export default PackagesPricing;

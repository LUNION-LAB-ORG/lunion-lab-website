import React from "react";
import { SectorCard } from "./SectorCard";
import HomeTitle from "./HomeTitle";
import Section from "@/components/primitives/Section";

export default function SecteursActivites() {
  const sectors = [
    {
      title: "Secteur Public",
      description:
        "Moderniser ses processus, améliorer la prestation des services et renforcer la sécurité des données.",
      image: "/assets/images/secteurs/secteur1.png",
      bgGradient: "bg-gradient-to-br from-blue-600 to-purple-700",
    },
    {
      title: "Secteur Industriel",
      description:
        "Optimiser la production, réduire les coûts opérationnels et améliorer la qualité des produits grâce à l'automatisation et à l'analyse de données avancées.",
      image: "/assets/images/secteurs/secteur2.png",
      bgGradient: "bg-gradient-to-br from-orange-500 to-yellow-600",
    },
    {
      title: "Banque et Assurance",
      description:
        "Optimiser les opérations, améliorer l'expérience client et renforcer la sécurité des transactions financières.",
      image: "/assets/images/secteurs/secteur3.png",
      bgGradient: "bg-gradient-to-br from-green-600 to-teal-700",
    },
    {
      title: "Santé et Education",
      description:
        "Faciliter l'accès aux soins, améliorer la gestion des dossiers médicaux et optimiser les opérations hospitalières. Proposer des outils innovants pour l'apprentissage en ligne, automatiser les processus administratifs et personnaliser l'expérience éducative des élèves.",
      image: "/assets/images/secteurs/secteur4.png",
      bgGradient: "bg-gradient-to-br from-indigo-600 to-purple-700",
    },
  ];

  return (
    <Section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:p">
      <div className="max-w-5xl mx-auto">
        {/* Title with background circle */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-100 rounded-full opacity-20"></div>
          </div>
          <h1 className="relative text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-600 mb-4">
           <HomeTitle
        text="#Les Secteurs d'activités"
        imageSrc="/assets/images/vectors/vector_activity.svg"
        className="text-3xl sm:text-4xl md:text-5xl bg-primary/ "
      />
          </h1>
        </div>

        {/* Grid of sector cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {sectors.map((sector, index) => (
            <SectorCard
              key={index}
              title={sector.title}
              description={sector.description}
              image={sector.image}
              bgGradient={sector.bgGradient}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

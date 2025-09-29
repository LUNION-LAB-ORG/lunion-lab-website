"use client";

import Image from "next/image";
import HomeTitle from "./HomeTitle";

const steps = [
  {
    id: 1,
    title: "Conception",
    desc: "Créez des concepts d’interface visuellement attrayants et axés sur l’utilisateur",
    img: "/assets/images/services/service_fond1.jpg",
  },
  {
    id: 2,
    title: "Stratégie",
    desc: "Définissez les objectifs, le public cible et la structure du contenu.",
    img: "/assets/images/services/service_fond4.jpg",
  },
  {
    id: 3,
    title: "Developer",
    desc: "Créez des sites Web réactifs et fonctionnels avec un code propre",
img: "/assets/images/services/service_fond3.jpg",
  },
];

export default function ProcessusTravail() {
  return (
    <section className="relative bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          
          <HomeTitle text="Processus de travail" 
           imageSrc={"/assets/images/vectors/vector_load.svg"}
          />
        </h2>
        <p className="mt-4 text-gray-500 text-lg">
          
        </p>

        {/* Étapes */}
        <div className="relative mt-16 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
          {/* Ligne pointillée entre étapes */}
          <div className="hidden md:block absolute top-16 left-1/2 -translate-x-1/2 w-[75%] h-[2px] border-t-2 border-dashed border-gray-300 z-0"></div>

          {steps.map((step, index) => (
            <div key={step.id} className="relative  text-center z-10">
              {/* Image ronde */}
              <div className="relative w-40 h-40  mx-auto rounded-full overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src={step.img}
                  alt={step.title}
                  fill
                  className="object-cover"
                />

                {/* Numéro étape */}
                <div className="absolute bottom-1 right-1/2 border-4  -translate-x-1/2 bg-purple-600 text-white w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold shadow-md">
                  {String(step.id).padStart(2, "0")}
                </div>
              </div>

              {/* Texte */}
              <h3 className="mt-8 text-lg font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-500 text-medium max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Avion en papier (optionnel : svg animé) */}
      <div className="hidden md:block absolute right-[10%] top-40">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12L21.75 3l-4.5 18-6-6-6 6 1.5-6-4.5-6z"
          />
        </svg>
      </div>
    </section>
  );
}

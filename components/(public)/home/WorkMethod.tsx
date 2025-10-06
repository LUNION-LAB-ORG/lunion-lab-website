"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import HomeTitle from "./HomeTitle";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    number: "01",
    title: "Lunion Lab se met à votre place",
    desc: "Pour comprendre vos besoins, peurs et attentes, nous rencontrons directement les parties prenantes.",
  },
  {
    number: "02",
    title: "Lunion Lab identifie vos problèmes",
    desc: "Nous identifions vos freins en examinant chaque détail pour obtenir une vision claire de la situation. Notre objectif est de comprendre en profondeur les défis auxquels vous êtes confrontés.",
  },
  {
    number: "03",
    title: "Lunion Lab propose une solution",
    desc: "Une solution personnalisée pour répondre efficacement à vos besoins. Notre approche sur mesure garantit une résolution optimale de vos défis.",
  },
  {
    number: "04",
    title: "Lunion Lab vous accompagne",
    desc: "Un accompagnement à chaque étape de votre parcours. Notre équipe dévouée est là pour vous soutenir dans la réalisation de vos objectifs et garantir votre succès.",
  },
];

export default function WorkMethod() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div className="bg-white py-2 px-6 relative overflow-hidden">
      {/* Titre */}
      <div className="text-center mb-16">
        <div className="flex flex-col items-center text-3xl md:text-6xl gap-2 md:flex-row md:justify-center">
          <HomeTitle
            imageSrc="/assets/images/vectors/vector_job.svg"
            text=" Notre manière de travailler"
          />
        </div>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-center sm:text-left">
          Chez Lunion Lab, nous mettons l&apos;accent sur la collaboration et sur
          la réussite de votre transformation digitale.
        </p>
      </div>

      {/* Contenu */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Colonne gauche */}
        <div className="flex flex-col gap-6">
          {steps.slice(0, 2).map((step, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="bg-gray-100 rounded-xl p-6 shadow-sm"
            >
              <div
                className="font-bold bg-clip-text text-transparent mb-2 text-4xl sm:text-3xl md:text-4xl lg:text-4xl text-center md:text-left"
                style={{
                  backgroundImage:
                    "linear-gradient(3deg, rgba(236,230,242,1) 40%, rgba(0,0,0,1) 93%, rgba(0,0,0,1) 100%)",
                }}
              >
                {step.number}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center md:text-left">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center md:text-left">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Image centrale */}
        <div className="relative hidden lg:flex justify-center items-center lg:col-span-1 h-64 sm:h-80 md:h-96 md:my-10 lg:h-full">
          <Image
            src="/assets/images/all-img/img_methode.png"
            alt="Personne utilisant un téléphone"
            fill
            className="object-cover"
          />
        </div>

        {/* Colonne droite */}
        <div className="flex flex-col gap-6">
          {steps.slice(2, 4).map((step, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="bg-gray-100 rounded-xl mb-4 p-6 shadow-sm"
            >
              <div
                className="font-bold bg-clip-text text-transparent text-4xl sm:text-3xl md:text-4xl lg:text-4xl text-center md:text-left"
                style={{
                  backgroundImage:
                    "linear-gradient(3deg, rgba(236,230,242,1) 40%, rgba(0,0,0,1) 93%, rgba(0,0,0,1) 100%)",
                }}
              >
                {step.number}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center md:text-left">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center md:text-left">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import React from "react";
import HomeTitle from "./HomeTitle";
import Section from "@/components/primitives/Section";

export default function LunionLabPresentation() {
  return (
    <Section className=" bg-white  ">
      {/* Header with year */}
      <HomeTitle
        text="#2024"
        imageSrc="/assets/images/all-img/calendar_svgrepo.com.png"
        className="text-4xl sm:text-5xl md:text-6xl"
      />

      {/* Main content section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left card - Company description */}
          <div className="bg-gray-900 text-white p-4 sm:p-6 rounded-t-2xl  rounded-br-2xl shadow-xl w-full">
            <p className="text-sm sm:text-base leading-relaxed">
              <strong>LUNION-LAB</strong>, une start-up innovante créée en 2024
              et basée en Côte d'Ivoire, se spécialise dans la transformation
              digitale. Nous proposons des services complets de communication et
              de marketing numérique pour concevoir et développer des marques
              puissantes. Notre mission est de combler le fossé numérique en
              Afrique en offrant des solutions sur mesure qui répondent aux
              besoins spécifiques du marché. En tant que laboratoire de création
              numérique, nous développons des plateformes personnalisées pour
              digitaliser des secteurs clés. Nous sommes un collectif de
              créatifs inspirés, passionnés par l'art du storytelling, chacun
              avec son propre style unique.
            </p>
          </div>

          {/* Right card - Team image */}
          <div className="relative rounded-2xl overflow-hidden h-48 sm:h-56 lg:h-[330px] shadow-xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 w-full">
            <Image
              src="/assets/images/all-img/team.jpg"
              alt="team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Stats and info section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {/* Logo and team info */}
          <div className="flex flex-col md:flex-col items-center md:items-center lg:flex-row lg:items-start w-full mb-6 lg:mb-0 gap-4">
            {/* Logo */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center">
              <Image
                src={"/assets/images/all-img/symbole.png"}
                alt="logo"
                width={120}
                height={120}
              />
            </div>

            {/* Texte */}
            <div className="border-l-2 border-gray-400 pl-2 sm:pl-4 text-center md:text-center lg:text-left">
              <p className="text-gray-600 text-xs sm:text-sm">
                Une équipe jeune
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-purple-600">
                passionnée
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm">
                par l&apos;innovation et l&apos;impact social
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="text-center lg:text-left w-full mb-4 lg:mb-0 lg:ml-20">
            <p className="text-gray-600 text-sm">Avec</p>
            <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-1">
              +10
            </div>
            <p className="text-gray-600 text-sm">Projets livrés</p>
          </div>

          <div className="text-center lg:text-left w-full">
            <p className="text-gray-600 text-sm">Nous avons</p>
            <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-1">
              +10
            </div>
            <p className="text-gray-600 text-sm">Projets maison</p>
          </div>
        </div>

        {/* Bottom description sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-12">
          <div className="bg-white/60 backdrop-blur-sm p-3 sm:p-4 rounded-xl shado hover:scale-105 transition-transform duration-300 w-full">
            <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
              LUNION-LAB incarne l&apos;excellence de la satisfaction client. Depuis
              nos débuts, nous avons bâti une tradition de créativité et de
              professionnalisme, offrant des résultats exceptionnels qui
              subliment les marques que nous servons. Qu&apos;il s'agisse d'une
              identité visuelle unique ou d'un site web époustouflant, nous
              donnons vie à votre vision.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm p-3 sm:p-4 rounded-xl shado hover:scale-105 transition-transform duration-300 w-full">
            <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
              Notre mission est de combler le fossé numérique et d&apos;offrir des
              solutions innovantes répondant aux besoins spécifiques du marché
              africain. En tant que laboratoire de création de solutions
              numériques, nous développons des plateformes sur mesure pour
              digitaliser des secteurs clés.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

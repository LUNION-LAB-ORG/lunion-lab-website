"use client";

import Image from "next/image";
import { projects } from "@/data/projet";
import React from "react";
import DemarrezProjetSection from "@/components/common/DemarrezProjetSection";
// import DownloadBrochure from "@/components/common/DownloadBrochure";
import LunionLabFooter from "@/components/common/Footer copy";


interface DetailNewsProps {
  params: { id: string };
}

export default function ProjectPreview({ params }: DetailNewsProps) {
  const { id } = params; // ✅ juste accéder directement

  const detailProjet = projects.find((projet) => String(projet.id) === String(id));

  if (!detailProjet) {
    return (
      <section className="w-full flex font-figtree items-center justify-center py-16 px-6 bg-white">
        <p className="text-xl font-semibold text-gray-700">Projet non trouvé.</p>
      </section>
    );
  }

  const showDesktop = detailProjet.isWeb && detailProjet.imageMain;
  const showMobile = detailProjet.isMobile && detailProjet.imageMobile;

  return (
    <div>
      <section className="w-full flex flex-col font-figtree items-center justify-center py-16 px-6 bg-white">
        <div className="max-w-6xl w-full flex flex-col items-center">
          {/* Images principales */}
          <div
            className={`relative flex w-full items-center justify-center gap-6 ${
              showDesktop && !showMobile ? "justify-center" : ""
            }`}
          >
            {/* Desktop */}
            {showDesktop && (
              <Image
                src={detailProjet.imageMain}
                alt={`${detailProjet.name} - Desktop`}
                width={800}
                height={500}
                className="object-contain"
                priority
              />
            )}

            {/* Mobile */}
            {showMobile && (
              <Image
                src={detailProjet.imageMobile!}
                alt={`${detailProjet.name} - Mobile`}
                width={250}
                height={500}
                className={`object-contain ${
                  showDesktop ? "absolute right-[15%] bottom-0 hidden md:block" : "block"
                }`}
              />
            )}
          </div>

          {/* Boutons et badges */}
          <div className="mt-10 w-full flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Bouton visiter le site */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-md">
                {detailProjet.img && detailProjet.img !== "#" ? (
                  <Image
                    src={detailProjet.img}
                    alt={`${detailProjet.name} Logo`}
                    width={60}
                    height={60}
                    className="object-cover"
                  />
                ) : (
                  <span className="text-white font-bold text-lg">?</span>
                )}
              </div>

              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition">
                Visiter le site
              </button>
            </div>

            {/* Badges App Store et Google Play seulement si mobile */}
            {detailProjet.isMobile && (
              <div className="flex items-center gap-4">
                {detailProjet.appStoreImg && (
                  <Image
                    src={detailProjet.appStoreImg}
                    alt="Télécharger sur l'App Store"
                    width={140}
                    height={50}
                    className="object-contain"
                  />
                )}
                {detailProjet.playStoreImg && (
                  <Image
                    src={detailProjet.playStoreImg}
                    alt="Télécharger sur Google Play"
                    width={140}
                    height={50}
                    className="object-contain"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="mt-6 w-full max-w-7xl flex flex-col items-center gap-4 px-4 sm:px-6 md:px-8">
  {/* Objectif du projet */}
  <div className="w-full p-6 text-center  text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-gray-900 rounded-lg">
    <p className="text-base sm:text-lg md:text-xl">{detailProjet.goal}</p>
  </div>

  {/* Description du projet */}
  <div className="w-full p-8  bg-gray-100 rounded-lg">
    <span className="font-bold text-base sm:text-lg md:text-xl">Description du projet</span>
    <p className="text-black font-figree font-medium text-sm sm:text-base md:text-lg mt-2">
      {detailProjet.description}
    </p>
  </div>
</div>

 <DemarrezProjetSection />
      {/* <DownloadBrochure /> */}
      <LunionLabFooter />
    </div>
  );
}

import Image from "next/image";
import { findProjectById } from "@/data/projet";
import React from "react";
import DemarrezProjetSection from "@/components/common/DemarrezProjetSection";
import LunionLabFooter from "@/components/common/Footer copy";
import Link from "next/link";

interface DetailNewsProps {
  params: { id: string };
}

export default async function ProjectPreview({ params }: DetailNewsProps) {
  const { id } = params;

  const detailProjet = findProjectById(id);
  console.log("Détails du projet :", detailProjet);

  if (!detailProjet) {
    return (
      <section className="w-full flex font-figtree items-center justify-center py-16 px-6 bg-white">
        <p className="text-xl font-semibold text-gray-700">Projet non trouvé.</p>
      </section>
    );
  }

  const showDesktop = detailProjet.isWeb && detailProjet.imageMain;
  const showMobile = detailProjet.isMobile && detailProjet.imageMobile;

  const siteButtonText = detailProjet.isActive ? "Visiter le site" : "Bientôt disponible";
  const siteLink = detailProjet.isActive ? detailProjet.solutionLink : "#";
  const descriptionText = detailProjet.isActive
    ? detailProjet.description
    : "Bientôt en ligne. Nous communiquerons très bientôt sur le projet, après le lancement officiel.";

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
            {/* Bouton web */}
            {detailProjet.isWeb && (
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

                <button
                  className={`px-6 py-3 rounded-lg font-medium transition ${
                    detailProjet.isActive
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "bg-gray-400 text-gray-700 cursor-not-allowed"
                  }`}
                >
                  {detailProjet.isActive ? (
                    <Link href={`${siteLink}`}>{siteButtonText}</Link>
                  ) : (
                    siteButtonText
                  )}
                </button>
              </div>
            )}

            {/* Bouton mobile */}
            {detailProjet.isMobile && (
              <div className="flex items-center gap-3">
                <button
                  className={`px-6 py-3 rounded-lg font-medium transition ${
                    detailProjet.isActive
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-gray-400 text-gray-700 cursor-not-allowed"
                  }`}
                >
                  {detailProjet.isActive && detailProjet.mobileLink ? (
                    <Link href={detailProjet.mobileLink}>Voir la solution mobile</Link>
                  ) : (
                    "Bientôt disponible"
                  )}
                </button>
              </div>
            )}

            {/* Badges App Store et Google Play */}
            {detailProjet.isMobile && detailProjet.isActive && (
              <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-medium text-gray-700">
                  Voir l’application
                </p>
                <div className="flex items-center gap-4">
                  {detailProjet.playStoreImg && detailProjet.mobileLink && (
                    <Link href={detailProjet.mobileLink} target="_blank">
                      <Image
                        src={detailProjet.playStoreImg}
                        alt="Télécharger sur Google Play"
                        width={140}
                        height={50}
                        className="object-contain animate-bounce hover:scale-105 transition-transform"
                      />
                    </Link>
                  )}

                  {detailProjet.appStoreImg && detailProjet.appStoreLink && (
                    <Link href={detailProjet.appStoreLink} target="_blank">
                      <Image
                        src={detailProjet.appStoreImg}
                        alt="Télécharger sur l'App Store"
                        width={140}
                        height={50}
                        className="object-contain animate-bounce hover:scale-105 transition-transform"
                      />
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="mt-6 w-full max-w-7xl flex flex-col items-center gap-4 px-4 sm:px-6 md:px-8">
        {/* Objectif du projet */}
        <div className="w-full p-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-gray-900 rounded-lg">
          <p className="text-base sm:text-lg md:text-xl">{detailProjet.goal}</p>
        </div>

        {/* Description du projet */}
        <div className="w-full p-8 bg-gray-100 rounded-lg">
          <span className="font-bold text-base sm:text-lg md:text-xl">Description du projet</span>
          <p className="text-black font-figtree font-medium text-sm sm:text-base md:text-lg mt-2">
            {descriptionText}
          </p>
        </div>
      </div>

      <DemarrezProjetSection />
      <LunionLabFooter />
    </div>
  );
}

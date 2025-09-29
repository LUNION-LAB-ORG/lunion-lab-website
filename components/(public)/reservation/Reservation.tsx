"use client";

import Link from "next/link";
import Calendrier from "../ui/Calendrier";
import {setCookie} from "cookies-next/client";
import { useEffect } from "react";

export default function Reservation() {
  useEffect(() => {
    setCookie('key', 'value', {
      maxAge:60*60*24*30*2
    });
    return () => {
      
    };
  }, []);
  return (
    <section className="relative min-h-screen bg-[#704a9a] text-white flex flex-col">
      {/* Header */}
      <div className="flex justify-end p-6">
        <button className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition">
          <span className="text-lg">×</span> Fermer
        </button>
      </div>

      {/* Contenu principal */}
      <div className="flex flex-1 items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12">
          {/* Texte à gauche */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-snug">
              Voyons voir si <span className="text-white">Lunion-Lab</span> est
              la solution qui vous convient
            </h1>

            {/* Alerte info */}
            <div className="mt-8 bg-black/60 text-xs text-gray-200 rounded-xl px-4 py-3 max-w-lg">
              LUNION-LAB connaît un volume de réservations élevé : les créneaux
              sont donc limités. Pour un service plus rapide, envoyez un e-mail{" "}
              <Link
                href="mailto:support@lunion-lab.com"
                className="underline hover:text-purple-200"
              >
                support@lunion-lab.com
              </Link>{" "}
              et recevez une réponse le jour même.
            </div>

            {/* Bouton réserver */}
            <button className="mt-6 bg-purple-900 hover:bg-purple-800 transition text-white font-medium px-8 py-3 rounded-2xl w-40 text-center">
              Réserver
            </button>
          </div>

          {/* Espace calendrier */}
          <div className="flex justify-center md:justify-end items-center">
            {/* Ton composant calendrier ici */}
            <div className=" rounded-2xl p-6 w-[320px] min-h-[380px] flex items-center justify-center">
              <span className="text-white text-sm">
               
                <Calendrier />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

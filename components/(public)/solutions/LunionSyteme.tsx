"use client";

import Image from "next/image";
import { Calendar, FileText, Home, Users } from "lucide-react";

export default function LunionSysteme() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 md:p-12">
      <section className="max-w-[1400px] w-full grid grid-cols-12 gap-6 md:gap-8 items-stretch">
        {/* --- Colonne gauche (contenus) --- */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
          {/* Top row */}
          <div className="flex flex-wrap justify-center lg:justify-between gap-6">
            {/* Bloc blanc gauche */}
            <article className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-center max-w-md flex-1">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#e74c6c] text-center lg:text-left">
                Lunion Booking
              </h2>
              <p className="mt-4 text-lg md:text-2xl text-gray-600 leading-snug text-center lg:text-left">
                Révolutionnez votre gestion immobilière
              </p>
            </article>

            {/* Image maison */}
            <article className="rounded-t-2xl rounded-br-2xl overflow-hidden shadow-xl max-w-sm flex-1">
              <div className="relative w-full h-[180px] sm:h-[220px] md:h-[300px]">
                <Image
                  src="/assets/images/all-img/bulding.jpg"
                  alt="Maison"
                  fill
                  className="object-cover rounded-t-2xl"
                />
              </div>
            </article>
          </div>

          {/* --- Ligne suivante --- */}
          <div className="flex-1">
            <article className="relative bg-[#f0ad47] rounded-t-3xl rounded-br-3xl p-4 md:p-12 text-white shadow-xl h-[280px] sm:h-[300px] overflow-hidden">
              <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold leading-tight">
                Gérez efficacement vos biens, réservations et clients en un seul endroit.
              </h3>

              {/* Décors images en bas */}
              <div className="absolute bottom-2 right-0 flex gap-2 sm:gap-4 items-end p-2 md:p-0">
                {/* Image 1 */}
                <div className="relative w-20 sm:w-24 h-20 sm:h-24 translate-y-4">
                  <Image
                    src="/assets/images/all-img/doc_icone.png"
                    alt="Décor 1"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>

                {/* Image 2 */}
                <div className="relative w-20 sm:w-24 h-20 sm:h-24 translate-y-4">
                  <Image
                    src="/assets/images/all-img/cube_icone.png"
                    alt="Décor 2"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>

                {/* Image 3 */}
                <div className="relative w-20 sm:w-24 h-20 sm:h-24 translate-y-4">
                  <Image
                    src="/assets/images/all-img/agenda_icone.png"
                    alt="Décor 3"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* --- Colonne droite (dashboard image) --- */}
        <aside className="col-span-12 lg:col-span-4 flex justify-center lg:justify-end">
          <div className="hidden lg:block relative w-full max-w-[420px] h-full rounded-3xl overflow-hidden drop-shadow-2xl">
            <Image
              src="/assets/images/all-img/systeme.png"
              alt="Dashboard large"
              fill
              className="object-cover w-full h-full"
            />
          </div>
        </aside>
      </section>
    </main>
  );
}

// Composant pour les icônes avec label


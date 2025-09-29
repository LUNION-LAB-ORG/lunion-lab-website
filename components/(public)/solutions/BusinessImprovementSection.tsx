"use client";

import { Zap } from "lucide-react";
import HomeTitle from "../home/HomeTitle";

export default function BusinessImprovementSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto px-6 lg:px-6 text-center">
        {/* Titre */}
        <div className="flex justify-center items-center gap-2 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-gray-900">
            <HomeTitle
              text=" Voyez votre business amélioré"
              imageSrc="/assets/images/vectors/vector_thunder.svg"
            />
          </h2>
        </div>

        {/* Cartes statistiques */}
        <div className="flex flex-col md:gap-8 gap-6">
          {/* Carte 1 */}
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-t-[40px] rounded-br-[40px] w-full sm:w-3/4 md:w-1/2 lg:w-[30%] py-6 px-4 flex items-center justify-center gap-4 shadow-sm">
              <span className="text-2xl md:text-3xl font-semibold text-purple-600">
                +98%
              </span>
              <p className="text-gray-500 text-sm md:text-base text-left">
                Augmentation des conversions <br /> d’entreprises
              </p>
            </div>
          </div>

          {/* Carte 2 et 3 */}
          <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-6 gap-9">
            {/* Carte 2 */}
            <div className="bg-gray-100 rounded-t-[40px] rounded-br-[40px] w-full sm:w-1/2 lg:w-[30%] py-6 px-4 flex items-center justify-center gap-4 shadow-sm">
              <span className="text-2xl md:text-3xl font-semibold text-purple-600">
                -10 M
              </span>
              <p className="text-gray-500 text-sm md:text-base text-left">
                Dépenses moyennes <br /> de nos utilisateurs
              </p>
            </div>

            {/* Carte 3 */}
            <div className="bg-gradient-to-r from-purple-600 to-gray-800 text-white rounded-t-[40px] rounded-bl-[40px] w-full sm:w-1/2 lg:w-[30%] py-6 px-4 flex items-center justify-center gap-4 shadow-md">
              <span className="text-2xl md:text-3xl font-semibold">+100%</span>
              <p className="text-sm md:text-base text-left">
                Efficace dans la croissance <br /> des affaires
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

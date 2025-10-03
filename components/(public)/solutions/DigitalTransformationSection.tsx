"use client";

import Image from "next/image";
import { CheckSquare, Zap, Hand } from "lucide-react";

export default function DigitalTransformationSection() {
  return (
    <section className=" py-8">
      <div className="max-w-5xl bg-[#fafafa]   shadow rounded-2xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Texte et icônes */}
          <div>
            <p className="text-gray-700 mb-6 text-sm leading-relaxed">
              En tant qu&apos;acteur dans le domaine de la transformation digitale,
              nous comprenons les défis uniques auxquels sont confrontés les
              entreprises. Notre équipe d&apos;acteur experts passionnés est là pour vous
              aider à relever ces défis en vous fournissant des solutions
              innovantes et adaptées à vos besoins.
            </p>

            <div className="space-y-4">
              {/* Item 1 */}
              <div className="flex items-start gap-3">
                <div className="text-purple-600">
                  <CheckSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-purple-700 text-sm">
                    Réaliser leurs ambitions
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Transformer les aspirations en réussites concrètes
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-3">
                <div className="text-purple-600">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-purple-700 text-sm">
                    Innover les secteurs d’activités
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Propulser chaque entreprise au sommet de son marché
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-3">
                <div className="text-purple-600">
                  <Hand className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-purple-700 text-sm">
                    Façonner l’avenir
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Développer des technologies pour un impact durable
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[220px] md:w-[280px] lg:w-[320px]">
              <Image
                src="/assets/images/all-img/solution_statistique.png"
                alt="Dashboard mockup"
                width={320}
                height={400}
                className="rounded-2xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

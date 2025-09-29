"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Spiner from "@/components/common/Spiner";

export default function LoadingPage() {
  const router = useRouter();

  // Redirection après 5s
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 4000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center animate-fadeZoom"
      style={{ backgroundImage: "url('/assets/images/all-img/fond3.png')" }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Contenu */}
      <div className="relative z-10 flex  items-center space-y-6">
        {/* Texte dans la bulle */}
        <div className="bg-black flex justify-center text-white text-center px-6 py-8 max-w-lg  rounded-br-[2rem] rounded-t-[2rem]">
          <p className="text-sm md:text-base leading-relaxed">
            Nous nous engageons, partageons notre savoir-faire,
            fixons des objectifs et gérons chaque aspect de
            chaque projet pour y parvenir.
          </p>
        </div>

        {/* Spinner */}
        <div className="flex items-center justify-center">
          <Spiner />
        </div>
      </div>
    </section>
  );
}

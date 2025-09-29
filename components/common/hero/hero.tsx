"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full   ">
      <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[120vh] rounded-lg overflow-hidden">
        <Image
          src="/assets/images/all-img/fond.png"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay pour meilleure lisibilité du texte */}

        {/* Texte centré verticalement et horizontalement */}
        <div className="absolute top-1/3 left-8 md:left-20 max-w-lg backdrop-blur-md bg-black/10 text-white p-6 md:p-8 rounded-2xl">
          <h1 className="text-2xl md:text-4xl font-bold leading-snug">
            Une grande technologie <br />
            repose toujours sur des <br />
            relations parfaites
          </h1>
        </div>
      </div>
    </section>
  );
}

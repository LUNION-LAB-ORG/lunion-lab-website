import Image, { StaticImageData } from "next/image";
import React from "react";

type SectorCardProps = {
  image: string | StaticImageData;
  title: string;
  description: string;
  bgGradient?: string;
};

export const SectorCard: React.FC<SectorCardProps> = ({
  image,
  title,
  description,
 
}) => (
  <div className="rounded-t-2xl rounded-br-2xl overflow-hidden bg-[#242424] flex flex-col p-2 sm:p-2.5 md:p-3">
    {/* Image en haut avec taille réduite et responsive */}
    <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36 xl:h-44">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover rounded-2xl"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/10 to-transparent"></div>
    </div>

    {/* Texte en bas */}
    <div className="p-3 flex flex-col justify-center text-white flex-1">
      <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1">
        {title}
      </h3>
      <p className="text-xs sm:text-sm md:text-base leading-relaxed opacity-90">
        {description}
      </p>
    </div>
  </div>
);

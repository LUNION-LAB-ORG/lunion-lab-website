"use client";

import Image from "next/image";
import React from "react";

interface GradientTextProps {
  text: string;
  imageSrc?: string | null;
  className?: string;
  useGradient?: boolean; // pour activer/désactiver le gradient du texte
  textColor?: string; // couleur du texte
  imageClassName?: string; // nouvelle prop : customiser l'image
}

const HomeTitle: React.FC<GradientTextProps> = ({
  text,
  imageSrc,
  className,
  useGradient = true,
  textColor = "text-black",
  imageClassName = "", // valeur par défaut vide
}) => {
  return (
    <div className={`text-center ${className || ""}`}>
      <div className="inline-flex items-center relative gap-2 font-bold mb-4">
        {/* Image (optionnelle) */}
        {imageSrc ? (
          <div className="w-15 h-15 z-10 -top-3 left-0 rounded-lg flex items-center absolute justify-center">
            <Image
              src={imageSrc}
              alt="logo"
              width={50}
              height={50}
              className={`object-contain ${imageClassName}`} // injection de ta classe
            />
          </div>
        ) : null}

        {/* Texte */}
        {useGradient ? (
          <div className="relative font-figtree z-10 bg-clip-text bg-gradient-to-r from-purple-600 to-gray-900 text-transparent">
            {text}
          </div>
        ) : (
          <div className={`relative z-10 font-figtree ${textColor}`}>
            {text}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeTitle;

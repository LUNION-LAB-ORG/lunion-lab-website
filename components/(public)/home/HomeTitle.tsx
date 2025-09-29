"use client";

import Image from "next/image";
import React from "react";

interface GradientTextProps {
  text: string;
  imageSrc?: string | null; // devient optionnel
  className?: string;
  useGradient?: boolean; // pour activer/désactiver le gradient
}

const HomeTitle: React.FC<GradientTextProps> = ({
  text,
  imageSrc,
  className,
  useGradient = true,
}) => {
  return (
    <div className={`text-center ${className || ""}`}>
      <div className="inline-flex items-center relative gap-2 font-bold mb-4">
        {/* Image (rendu seulement si imageSrc est défini ET non vide) */}
        {imageSrc ? (
          <div className="w-12 h-12 z-10 -top-3 left-0 rounded-lg flex items-center absolute justify-center">
            <Image
              src={imageSrc}
              alt="logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
        ) : null}

        {/* Texte */}
        {useGradient ? (
          <div className="relative z-10 bg-clip-text bg-gradient-to-r from-purple-600 to-gray-900 text-transparent">
            {text}
          </div>
        ) : (
          <div className={`relative z-10 ${className || ""}`}>{text}</div>
        )}
      </div>
    </div>
  );
};

export default HomeTitle;

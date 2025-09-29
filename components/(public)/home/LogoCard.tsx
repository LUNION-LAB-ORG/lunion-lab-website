import Image from "next/image";
import React from "react";

type LogoCardProps = {
  logo: string;           // chemin de l'image
  isActive: boolean;      // active ou non
  onClick?: () => void;   // callback au clic
};

export const LogoCard: React.FC<LogoCardProps> = ({ logo, isActive, onClick }) => (
  <div
    className={`p-2 rounded-lg cursor-pointer transition-all duration-300 flex items-center justify-center border ${
      isActive ? "border-white shadow-lg" : "border-gray-500/30"
    }`}
    onClick={onClick}
  >
    <div className="w-20 h-20 relative">
      <Image
        src={logo}
        alt="logo-projet"
        fill
        className="object-contain"
      />
    </div>
  </div>
);

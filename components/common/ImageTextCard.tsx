"use client";

interface ImageTextCardProps {
  imageUrl: string;
  text: string;
}

export default function ImageTextCard({ imageUrl, text }: ImageTextCardProps) {
  return (
    <div
      className="relative w-full lg:h-[100vh] md:h-[70vh] h-[50vh] overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay semi-transparent pour améliorer la lisibilité */}
    

      {/* Texte centré et responsive */}
      <div className="relative lg:-left-40 z-10 px-4 text-center md:text-left md:px-10">
        <p className="text-white/80 font-bold 
          text-xl sm:text-3xl md:text-5xl lg:text-[100px] 
          leading-snug md:leading-tight font-figtree "
        >
          {text}
        </p>
      </div>
    </div>
  );
}

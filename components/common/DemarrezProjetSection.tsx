import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import HomeTitle from "../(public)/home/HomeTitle";
import Section from "../primitives/Section";


const DemarrezProjetSection = () => {
  return (
    <section
      className="relative font-figtree lg:min-h-screen bg-gray-100 flex bg-cover  bg-center items-center justify-center   overflow-hidden px-4 sm:px-6 lg:px-8   "
      style={{
        backgroundImage: `url("/assets/images/all-img/demarrage_fond.png")`,
      }}
    >
      {/* ✅ Overlay blanc semi-transparent */}
      <div className="absolute inset-0 bg-white/80"></div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        {/* <div className="absolute top-8 left-8 sm:top-30 sm:left-30 lg:top-30 lg:left-58">
          <Image
            src={"/assets/images/all-img/demarrage_icone.png"}
            width={60}
            height={60}
            alt="demarrage icone"
            className="w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20"
          />
        </div> */}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-snug">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(112, 74, 154, 1) 0%, rgba(0, 0, 0, 0.7) 93%, rgba(0, 0, 0, 0.7) 100%)",
            }}
          >
            
                   <HomeTitle
          text=" Démarrez votre nouveau projet."
          imageSrc={"/assets/images/all-img/demarrage_icone.png"}
        />
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
          Découvrez la nouvelle façon dont vous et votre équipe pouvez accéder à
          des conceptions spécialement conçues pour vous.
        </p>

        <Button className="bg-primary hover:bg-purple-700 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
          Démarrer ici
        </Button>
      </div>
    </section>
  );
};

export default DemarrezProjetSection;

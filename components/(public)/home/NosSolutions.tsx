"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HomeTitle from "./HomeTitle";
import Section from "@/components/primitives/Section";

export default function NosSolutions() {
  const [activeSlide, setActiveSlide] = useState(0);

  const solutions = [
    { 
      name: "LUNION BOOKING", 
      logo: "/assets/images/solution/lunion_booking.jpg", 
      description: "Créez votre logement sur Lunion Booking",
      bigImage: "/assets/images/all-img/lunion_booking_logo.png"
    },
    { 
      name: "LUNION SECU", 
      logo: "/assets/images/solution/lunion_secu.png", 
      description: "Sécurisez vos opérations",
      bigImage: "/assets/images/solution/secu_bg.png"
    },
    { 
      name: "LUNION EDUC", 
      logo: "/assets/images/solution/lunion_educ.jpg", 
      description: "Gérez vos données efficacement",
      bigImage: "/assets/images/solution/lunion_educ_collage.png"
    },
  ];

  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(112,74,154,0.8) 100%),
      url('/assets/images/all-img/lunion_booking.png')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Section 
      className="relative min-h-screen overflow-hidden px-4 sm:px-8 md:px-16 lg:px-32" 
      style={backgroundStyle}
    >
      <div className="relative z-10 container mx-auto py-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-screen">

          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-purple-400">
              <div className="flex justify-start w-full px-0">
                <HomeTitle
                  text="Nos solutions"
                  imageSrc="/assets/images/vectors/vector2.svg"
                  className="text-3xl sm:text-4xl md:text-5xl ml-0"
                  useGradient={false}
                  textColor="text-white"
                  imageClassName="mb-2 filter invert brightness-1"
                />
              </div>
            </h1>

            <p className="text-white/90 text-base sm:text-lg md:text-lg leading-relaxed max-w-full sm:max-w-md">
              Nous créons des solutions claires et intuitives pour répondre aux besoins de votre entreprise.
            </p>

            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-white">
              {solutions[activeSlide].name}
            </h2>

            {/* Logos */}
            <div className="flex space-x-2 sm:space-x-3 md:space-x-4 mt-4 justify-start">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className={`relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 cursor-pointer rounded-lg overflow-hidden transition-transform duration-300 
                    ${index === activeSlide ? "scale-100 translate-y-0" : "scale-90 translate-y-2"}`}
                  onClick={() => setActiveSlide(index)}
                >
                  <Image
                    src={solution.logo}
                    alt={solution.name}
                    fill
                    className="object-contain transition-all duration-300"
                  />
                  {index !== activeSlide && (
                    <div className="absolute inset-0 bg-black/20 transition-all duration-300"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Pagination dots */}
            <div className="flex space-x-2 mt-4 sm:mt-6 justify-center">
              {solutions.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer ${index === activeSlide ? "bg-white" : "bg-white/30"}`}
                  onClick={() => setActiveSlide(index)}
                ></div>
              ))}
            </div>
          </div>

          {/* Right Content - Dynamique */}
          <div className="relative mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <Link href="/solutions">
              <Image
                src={solutions[activeSlide].bigImage}
                alt={solutions[activeSlide].name}
                width={616}
                height={517}
                className="transition-all duration-500 ease-in-out cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

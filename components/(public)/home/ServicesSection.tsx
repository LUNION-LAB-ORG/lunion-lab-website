"use client";

import Image from "next/image";

import HomeTitle from "./HomeTitle";
import Section from "@/components/primitives/Section";

const services = [
  {
    title: "Transformation Digitale",
    img: "/assets/images/services/service1.png",
  },
  {
    title: "Formation",
    img: "/assets/images/services/service2.jpg",
  },
  {
    title: "UI/UX Design",
   img: "/assets/images/services/service3.png",
  },
  {
    title: "Branding",
   img: "/assets/images/services/service4.png",
  },
  {
    title: "Pitch présentation",
   img: "/assets/images/services/service5.png",
  },
  {
    title: "Social Media",
  img: "/assets/images/services/service6.png",
  },
];

export default function ServicesSection() {
  return (
    <Section className="bg-white text-white py-20 px-6">
      {/* Titre */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-2">
          <HomeTitle  text="Nos services"  
          imageSrc="/assets/images/vectors/vector2.svg"
    className="text-2xl sm:text-4xl md:text-5xl ml-0"
          />
        </div>
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          Ces services permettent de répondre aux défis numériques actuels tout en
          optimisant l&apos;impact social et économique des initiatives.
        </p>
      </div>

      {/* Cartes des services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 rounded-2xl shadow-md hover:shadow-xl p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="w-28 h-20 relative mb-2">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-contain rounded-md"
              />
            </div>
            <h3 className="text-lg font-medium text-center">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </Section>
  );
}

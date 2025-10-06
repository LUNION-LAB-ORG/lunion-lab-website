"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesGrids = () => {
  const phoneNumber = "2250565508686";

  const services = [
    {
      title: "Transformation Digitale",
      image: "/assets/images/services/service1.png",
      description:
        "Passer à la vitesse supérieure avec le digital ! Nous transformons vos défis en opportunités grâce à des solutions technologiques sur mesure..."
    },
    {
      title: "Formation",
      image: "/assets/images/services/service2.jpg",
      description:
        "Faites monter vos équipes en compétences. Nos formations pratiques et interactives donnent à vos collaborateurs les compétences qu'il leur faut..."
    },
    {
      title: "UI/UX Design",
      image: "/assets/images/services/service3.png",
      description:
        "Des expériences qui séduisent, des interfaces qui convertissent. Nous créons des produits digitaux qui ne se contentent pas d'être beaux..."
    },
    {
      title: "Branding",
      image: "/assets/images/services/service4.png",
      description:
        "Créez une marque qui marque les esprits. Logo percutant, identité visuelle forte, univers cohérent..."
    },
    {
      title: "Pitch présentation",
      image: "/assets/images/services/service5.png",
      description:
        "Vendez vos idées en un clin d'œil. Que ce soit pour convaincre des investisseurs, séduire un jury ou décrocher un contrat..."
    },
    {
      title: "Social Media",
      image: "/assets/images/services/service6.png",
      description:
        "Faites parler de vous sur les réseaux. Nous transformons vos réseaux sociaux en véritables leviers de croissance..."
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <span className="block w-full text-center sm:text-center lg:text-left text-base sm:text-lg lg:text-2xl px-4 sm:px-6 lg:px-0 mb-10">
          Nous sommes une équipe de talents de haut niveau qui fournit des solutions d&apos;entreprise à l&apos;échelle mondiale...
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="p-6 border border-lunion-light-gray/30 bg-card transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]"
            >
              <CardContent className="p-0 space-y-6">
                <div className="w-full h-40 bg-gradient-to-br rounded-xl flex items-center justify-end border border-lunion-light-gray/20 transform transition-all duration-500 hover:scale-110">
                  <Image src={service.image} alt="" width={200} height={200} />
                </div>

                <h3 className="text-2xl font-bold font-figtree bg-clip-text bg-gradient-to-r from-purple-600 to-gray-900 text-transparent text-lunion-purple">
                  {service.title}
                </h3>

                <p className="text-foreground/80 leading-relaxed text-sm">
                  {service.description}
                </p>

                <Link
                  href={`https://wa.me/${phoneNumber}?text=Bonjour, je souhaite en savoir plus sur : ${encodeURIComponent(
                    service.title
                  )}`}
                  target="_blank"
                  className="inline-block bg-primary text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-purple-800"
                >
                  En savoir plus
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrids;

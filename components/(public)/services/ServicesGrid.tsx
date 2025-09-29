import React from "react";
import Image from "next/image";

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      title: "TRANSFORMATION DIGITALE",
      icon: "/assets/images/services/icone1.png",
      image: "/assets/images/services/service_fond1.jpg",
    },
    {
      id: 2,
      title: "FORMATION",
      icon: "/assets/images/services/icone2.png",
      image: "/assets/images/services/service_fond2.jpg",
    },
    {
      id: 3,
      title: "UX/UI DESIGN",
      icon: "/assets/images/services/icone3.png",
      image: "/assets/images/services/service_fond3.jpg",
    },
    {
      id: 4,
      title: "TRANSFORMATION DIGITALE",
      icon: "/assets/images/services/icone4.png",
      image: "/assets/images/services/service_fond2.jpg",
    },
    {
      id: 5,
      title: "FORMATION",
      icon: "/assets/images/services/icone5.png",
      image: "/assets/images/services/service_fond3.jpg",
    },
    {
      id: 6,
      title: "UX/UI DESIGN",
      icon: "/assets/images/services/icone1.png",
      image: "/assets/images/services/service_fond1.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image de fond */}
              <Image
                src={service.image}
                alt={service.title}
                width={200}
                height={200}
                className="w-full h-64 sm:h-72 lg:h-72 object-cover"
              />

              {/* Overlay dégradé */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Icône */}
              <div className="absolute top-15 left-5 z-10 w-20 h-20 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Image src={service.icon} alt={service.title} width={48} height={48} />
              </div>

              {/* Titre */}
              <div className="absolute bottom-15 left-4 right-4 z-10">
                <h3 className="text-white font-bold text-xl sm:text-2xl lg:text-3xl leading-tight tracking-wide">
                  {service.title}
                </h3>
              </div>

              {/* Bordure au survol */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500 rounded-2xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ServicesGrid;

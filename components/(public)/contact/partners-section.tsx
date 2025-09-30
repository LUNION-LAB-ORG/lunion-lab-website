"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HomeTitle from "../home/HomeTitle";
import Link from "next/link";

const partners = [
  { id: 1, logo: "/assets/images/all-img/holding.png", name: "Wacanda Holding", link: "/solutions/wacanda" },
  { id: 2, logo: "/assets/images/all-img/logo_turbo.png", name: "Turbo delivery", link: "/solutions/Turbo delivery" },
  { id: 3, logo: "/assets/images/all-img/clean_logo.png", name: "Brin service clean", link: "/solutions/Brin service clean" },
  { id: 4, logo: "/assets/images/all-img/chiken_logo.png", name: "chicken-nation", link: "/solutions/chicken-nation" },
  { id: 5, logo: "/assets/images/all-img/osa_logo.png", name: "Partner 5", link: "/solutions/osa fc" },
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <HomeTitle
        text="Nos Partenaires"
        className="text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-10"
      />

      {/* Bande défilante */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-3 sm:gap-4 md:gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.id}-${index}`} // 🔑 Clé unique pour éviter le warning
              className="
                flex-shrink-0 
                w-28 h-20
                sm:w-36 sm:h-24
                md:w-48 md:h-32
                lg:w-56 lg:h-36
                relative rounded-xl overflow-hidden shadow-lg group
              "
            >
              {/* Image pleine */}
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-cover"
              />

              {/* Overlay avec nom + lien */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-center text-white p-1 sm:p-2">
                <h3 className="text-xs sm:text-sm md:text-base font-semibold">
                  {partner.name}
                </h3>
                <Link
                  href={partner.link}
                  className="mt-1 sm:mt-2 inline-block bg-primary hover:bg-primary/90 text-white text-[10px] sm:text-xs md:text-sm px-2 py-1 sm:px-3 sm:py-2 rounded-lg"
                >
                  Voir la solution
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;

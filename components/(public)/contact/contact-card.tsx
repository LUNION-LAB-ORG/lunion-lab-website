import Section from "@/components/primitives/Section";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const ContactCard = () => {
  return (
    <Section>
      <h1 className="text-2xl text-center mb-4 text-primary">
        Nous aspirons à être la référence en matière de conseil technologique.
      </h1>

      <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden h-[480px] md:h-[480px] sm:h-[380px]">
        {/* Background Image */}
        <Image
          src={"/assets/images/all-img/local.jpg"}
          alt="Lunion-Lab Building"
          className="w-full h-full object-cover"
          width={200}
          height={200}
        />

        {/* Overlay Content */}
        <div
          className="absolute overflow-hidden bg-black/90 rounded-2xl flex flex-col justify-center text-white
                      w-full max-w-sm h-64 md:h-72 p-4 bottom-4 md:bottom-4 md:left-10 
                     md:top-1/2 md:-translate-y-1/2"
        >
          {/* Logo and Title */}
          <div className="flex items-center justify-between gap-3 mb-2">
            <h2 className="lg:text-3xl text-white font-figtree p-4 font-bold sm:text-xl">
              Lunion-Lab
            </h2>
            <div className="w-8 md:h-8 rounded flex items-center justify-center ">
              <Image
                src={"/assets/images/all-img/contact.png"}
                alt="Contact"
                className="w-full h-full object-cover"
                width={200}
                height={200}
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0 sm:w-4 sm:h-4" />
              <p className="text-white/90 leading-relaxed text-sm sm:text-xs">
                Carrefour Kokoh Mall en face du CHU d'Angré
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-white flex-shrink-0 sm:w-4 sm:h-4" />
              <p className="text-white/90 text-sm sm:text-xs">
                +225 05 65 50 86 86
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-white flex-shrink-0 sm:w-4 sm:h-4" />
              <p className="text-white/90 text-sm sm:text-xs">
                support@lunion-lab.com
              </p>
            </div>
          </div>

          {/* Google Maps Button */}
          <button
            className="absolute hidden lg:block bottom-0 left-0 mt-4 overflow-hidden bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-tr-2xl w-fit sm:px-4 sm:py-2 sm:text-sm"
          >
            Voir sur Google Maps
          </button>
        </div>
      </div>
    </Section>
  );
};

export default ContactCard;

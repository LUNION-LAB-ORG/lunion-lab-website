import Section from "@/components/primitives/Section";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const ContactCard = () => {
  return (
   <Section>
    <h1 className="text-2xl text-center mb-4 text-primary">
        Nous aspirons à être la référence en matière de 
conseil technologique.
    </h1>
 <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden h-[480px]">
      {/* Background Image */}
      <Image 
        src={'/assets/images/all-img/local.jpg'} 
        alt="Lunion-Lab Building" 
        className="w-full h-full object-cover"
        width={200}
        height={200}
      />
      
      {/* Overlay Content */}
     
        <div className="absolute  overflow-hidden bg-black/90 h-72 p-5 rounded-2xl right-10 bottom-4  w-1/2 flex flex-col justify-center  text-white">
          {/* Logo and Title */}
          <div className="flex items-center justify-between gap-3 mb-2">
            <h2 className="text-3xl  text-white font-figtree font-bold ">Lunion-Lab</h2>
            <div className="w-8 h-8  rounded flex items-center justify-center">
              <Image 
        src={'/assets/images/all-img/contact.png'} 
        alt="Lunion-Lab Building" 
        className="w-full h-full object-cover"
        width={200}
        height={200}
      />
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
              <p className="text-white/90 leading-relaxed">
                Carrefour Kokoh Mall en face du CHU d'Angré
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-white flex-shrink-0" />
              <p className="text-white/90">+225 05 65 50 86 86</p>
            </div>
            
            <div className="flex items-center lg:mb-5 gap-3">
              <Mail className="w-5 h-5 text-white flex-shrink-0" />
              <p className="text-white/90">support@lunion-lab.com</p>
            </div>
          </div>
          
          {/* Google Maps Button */}
          <button 
            className="absolute bottom-0 left-0 mt-4 overflow-hidden bg-primary hover:bg-primary/90 text-white px-6 py-3  rounded-tr-2xl   w-fit"
     
          >
            Voir sur Google Maps
          </button>
        </div>
      </div>
   </Section>
  
  );
};

export default ContactCard;
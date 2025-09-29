import React from "react";
import { Linkedin, Facebook, Youtube, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LunionLabFooter() {
  return (
    <footer className="-mt-8">
      <div>
        <div className="-mb-2  relative">
          <Image
            src={"/assets/images/all-img/form.svg"}
            className="w-full h-full"
            width={200}
            height={200}
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#0b0b0b] font-figree text-white relative overflow-hidden ">
        {/* Background geometric pattern */}

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-10">
          {/* Logo centré */}
          <div className="flex justify-center mb-1">
            <Image
              src={"/assets/images/all-img/logo_footer.png"}
              alt="logo footer"
              width={200}
              height={200}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Section principale */}
            <div className="md:col-span-1 relative">
              {/* Image de fond décorative */}
              <div className="absolute -top-8 -left-8 w-64 h-64 opacity-10 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 rounded-full blur-3xl"></div>
              </div>
              <div className="absolute top-4 left-4 w-32 h-32 opacity-20 pointer-events-none"></div>

              {/* ✅ image de fond alignée à gauche */}
              {/* ✅ image de fond visible seulement sur desktop */}
              <div
                className="relative z-10 w-full h-full bg-left bg-no-repeat bg-cover hidden lg:block"
                style={{
                  backgroundImage: `url("/assets/images/all-img/footer_symbole.png")`,
                }}
              >
                <h2 className="text-4xl font-bold mb-6 leading-tight">
                  On démarre
                  <br />
                  ensemble
                </h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Contactez-nous à tout moment
                  <br />
                  pour discuter d&apos;une collaboration
                  <br />
                  ou échanger avec notre équipe
                </p>
                <button className="bg-primary hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200">
                  Prendre un rendez-vous
                </button>
              </div>
            </div>

            {/* Nos adresses */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-semibold mb-6">Nos adresses</h3>
              <div className="space-y-4 text-gray-300">
                <p>support@lunion-lab.com</p>
                <div>
                  <p>+225 0565508686</p>
                  <p className="text-sm">(WhatsApp)</p>
                </div>
                <div className="pt-2">
                  <p>Abidjan, Angré Nouveau CHU</p>
                  <p>Bâtiment Kokoh Mall</p>
                </div>
              </div>
            </div>

            {/* Suivez-nous */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-semibold mb-6">Suivez-nous</h3>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <Linkedin size={20} className="text-gray-300" />
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <Facebook size={20} className="text-gray-300" />
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <Youtube size={20} className="text-gray-300" />
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <Instagram size={20} className="text-gray-300" />
                </div>
              </div>
            </div>

            {/* Liens */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-semibold mb-6">Liens</h3>
              <nav className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                  <span className="text-purple-500">▶</span>
                  <Link href={"/"}>Home</Link>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                  <span className="text-purple-500">▶</span>
                  <Link href={"/about"}>A propos</Link>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                  <span className="text-purple-500">▶</span>
                  <Link href={"/solutions"}>Solutions</Link>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                  <span className="text-purple-500">▶</span>
                  <Link href={"/services"}>Services</Link>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                  <span className="text-purple-500">▶</span>
                  <Link href={"/portfolio"}>Portfolio</Link>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                  <span className="text-purple-500">▶</span>
                  <Link href={"/contact"}>Contact</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

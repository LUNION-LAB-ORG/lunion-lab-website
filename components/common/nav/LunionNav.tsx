"use client";
import LocaleSwitcher from "@/components/locale-switch";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@/components/ui/button";
import { LayoutGrid } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  IoBusiness,
  IoCashSharp,
  IoHome,
  IoPeopleOutline,
  IoPeopleSharp,
} from "react-icons/io5";

const LunionNav = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const subMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        subMenuRef.current &&
        !subMenuRef.current.contains(event.target as Node)
      ) {
        setIsSubMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSubMenu = () => setIsSubMenuOpen(!isSubMenuOpen);

  return (
    <div>
      <div
        className="
          fixed left-1/2 transform -translate-x-1/2 top-3
          w-[90%] sm:w-[85%] md:w-[80%] 
          lg:max-w-3xl xl:max-w-4xl
          h-10 sm:h-12 md:h-14 
          bg-white rounded-full z-40
          flex items-center justify-between shadow-lg
          transition-all duration-300
          px-3 sm:px-4  font-figtre
        "
      >
        {/* ---- MOBILE/TABLET ---- */}
        <div className="flex w-full items-center justify-between font-figtree lg:hidden">
          {/* Menu burger gauche */}
          <div className="relative" ref={subMenuRef}>
            <button
              onClick={toggleSubMenu}
              className="cursor-pointer"
              aria-label="Ouvrir le menu"
              aria-expanded={isSubMenuOpen}
            >
              <LayoutGrid className="w-5 h-5 text-black" />
            </button>

            {/* Sous-menu mobile */}
            {isSubMenuOpen && (
              <div className="absolute text-[#616369] font-figtree top-full left-0 mt-2 w-[280px] sm:w-[300px] bg-white rounded-md shadow-lg py-1">
                {/* liens */}
                <Link
                  href="/about"
                  className="block px-4 py-3 text-sm  font-semibold text-[#5B00A5] hover:bg-amber-100 border-b"
                  onClick={() => setIsSubMenuOpen(false)}
                >
                  <div className="flex items-center font-figtree gap-2">
                    <IoPeopleSharp size={18} />A propos
                  </div>
                </Link>
                <Link
                  href="/solutions"
                  className="block px-4 py-3 text-sm font-semibold text-[#5B00A5] hover:bg-amber-100 border-b"
                  onClick={() => setIsSubMenuOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    <IoHome size={18} />
                    Solutions
                  </div>
                </Link>
                <Link
                  href="/services"
                  className="block px-4 py-3 text-sm font-semibold text-[#5B00A5] hover:bg-amber-100 border-b"
                  onClick={() => setIsSubMenuOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    <IoBusiness size={18} />
                    Services
                  </div>
                </Link>
                <Link
                  href="/portfolio"
                  className="block px-4 py-3 text-sm font-semibold text-[#5B00A5] hover:bg-amber-100 border-b"
                  onClick={() => setIsSubMenuOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    <IoCashSharp size={18} />
                    Portfolio
                  </div>
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-3 text-sm font-semibold text-[#5B00A5] hover:bg-amber-100 border-b"
                  onClick={() => setIsSubMenuOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    <IoPeopleOutline size={18} />
                    Contact
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Logo au centre */}
          <button onClick={() => router.push("/")} className="cursor-pointer">
            <Image
              alt="logo de Lunion"
              src={"/assets/images/all-img/logo.png"}
              width={120}
              height={120}
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </button>

          {/* Theme toggle à droite */}
        </div>

        {/* ---- DESKTOP ---- */}
        <div className="hidden lg:flex w-full items-center justify-between">
          {/* Logo à gauche */}
          <button className="cursor-pointer" onClick={() => router.push("/")}>
            <Image
              alt="logo de Lunion"
              src={"/assets/images/all-img/logo.png"}
              width={150}
              height={150}
              className="h-8 w-auto object-contain"
            />
          </button>

          {/* Menu central */}
          <div className="flex text-[#616369] font-figtree  gap-6 font-semibold">
            <Link href="/a-propos" className="hover:text-purple-600">
              A Propos
            </Link>
            <Link href="/solutions" className="hover:text-purple-600">
              Solutions
            </Link>
            <Link href="/services" className="hover:text-purple-600">
              Services
            </Link>
            <Link href="/portfolio" className="hover:text-purple-600">
              Portfolio
            </Link>
            <Link href="/contact" className="hover:text-purple-600">
              Contact
            </Link>

           
          </div>

          {/* Boutons à droite */}
          <div className="flex items-center gap-4">
            <Button
              className="
                rounded-full bg-black hover:bg-primary text-white 
                px-4 py-1  transition-colors 
                text-xs lg:text:sm md:text-sm   cursor-pointer
              "
              onClick={() => router.push("/contact")}
            >
              Prendre un rendez-vous
            </Button>

            {/* Theme toggle */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LunionNav;

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  CircleUserRound,
  LayoutGrid,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";
import {
  IoBusiness,
  IoCashSharp,
  IoFootball,
  IoHome,
  IoPeopleOutline,
  IoPeopleSharp,
} from "react-icons/io5";

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [yellowBarTop, setYellowBarTop] = useState(56);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const subMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);

      if (scrollY > 0) {
        const newTop = Math.max(0, 56 - scrollY * 0.5);
        setYellowBarTop(newTop);
      } else {
        setYellowBarTop(56);
      }
    };

    // Fermer le sous-menu en cliquant à l'extérieur
    const handleClickOutside = (event: MouseEvent) => {
      if (subMenuRef.current && !subMenuRef.current.contains(event.target as Node)) {
        setIsSubMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Navbar principale */}
      <nav
        className={`w-full bg-white/80 backdrop-blur top-0 left-0 z-1 transition-all ${
          isScrolled ? "p" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
        </div>

       
      </nav>

      {/* Section jaune fixe - Réduction fluide au scroll */}
      
    </header>
  );
}

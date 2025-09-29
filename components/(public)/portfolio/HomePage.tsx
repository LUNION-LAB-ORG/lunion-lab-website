"use client";

import { LucideMenu, LucideUser, LucideSearch } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projet";
 // ton fichier avec le tableau

export default function HomePage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-100/90 relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/placeholder-office.jpg")', filter: 'blur(30px) brightness(0.9)', zIndex: -1 }}
      ></div>

      <header className="fixed top-0 z-10 w-full bg-white/80 backdrop-blur-md shadow-sm p-4 flex items-center justify-between lg:px-12">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gray-300"></div>
          <span className="text-xl font-bold">UNION LAB</span>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {["À propos", "Solutions", "Services", "Portfolio", "Contacts"].map((item, index) => (
            <a key={index} href="#" className="font-medium text-gray-700 hover:text-gray-900 transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="h-6 w-6 rounded-full bg-gray-300 hidden lg:block"></div>
          <LucideSearch className="h-6 w-6 text-gray-600 hidden lg:block" />
          <LucideUser className="h-6 w-6 text-gray-600 hidden lg:block" />
          <button className="hidden lg:block bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">
            Prendre un rendez-vous
          </button>
          <LucideMenu className="h-8 w-8 text-gray-600 cursor-pointer lg:hidden" />
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center pt-24 pb-8 lg:pt-32 px-4 lg:px-12">
        <section className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id} // pour le lien dynamique
              title={project.name}
              color={project.color}
              logoSrc={project.imageMain}
            />
          ))}
        </section>

        <div className="mt-12 w-48 h-2 bg-gray-300 rounded-full overflow-hidden">
          <div className="w-1/2 h-full bg-gray-500 rounded-full"></div>
        </div>
      </main>

      <footer className="w-full text-center py-4 text-gray-500 text-sm">
        &copy; 2025 Union Lab. Tous droits réservés.
      </footer>
    </div>
  );
}

"use client";

import React from "react";
import { ProjectCard } from "./ProjectCard";
import { groupProject } from "@/data/projet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

export default function ProjectsShowcase() {
  return (
    <section
      className="min-h-screen flex items-center justify-center py-12 px-3 sm:py-16 sm:px-4 lg:px-8"
      style={{
        backgroundImage: `url(/assets/images/all-img/fond2.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="rounded-2xl p-4 sm:p-6 lg:p-12 max-w-6xl w-full">
        {/* Indication mobile */}
        <div className="sm:hidden flex flex-col items-center mb-4">
          <p className="text-center text-xs text-gray-700 mb-1 animate-pulse">
            👉 Glissez horizontalement pour voir plus de projets
          </p>
          <motion.div
            className="w-6 h-6 text-gray-700"
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.div>
        </div>

        <Carousel>
          <CarouselContent>
            {groupProject.map((projects, idx) => (
              <CarouselItem key={idx}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {projects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      id={project.id}
                      title={project.name}
                      color={project.color}
                      logoSrc={project.img}
                      logoAlt={project.name}
                    />
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}

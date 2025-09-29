"use client";

import React from "react";
import { ProjectCard } from "./ProjectCard";
import { groupProject } from "@/data/projet";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


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
        {/* <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
          Nos Projets Récents
        </h2> */}

        <Carousel>
          <CarouselContent>
            {groupProject.map((projects, idx) => (
              <CarouselItem key={idx}>
                {/* Responsive grid */}
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

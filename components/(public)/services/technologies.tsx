"use client";

import Image from 'next/image';
import React from 'react';
import HomeTitle from '../home/HomeTitle';

const Technologies = () => {
  const technologies = [
    { id: 1, name: "Next.js", image: "/assets/images/techno/next_logo.jpeg" },
    { id: 2, name: "Nest.js", image: "/assets/images/techno/nest_logo.jpeg" },
    { id: 3, name: "Flutter", image: "/assets/images/techno/flutter.png" },
    { id: 4, name: "Java", image: "/assets/images/techno/java.png" },
    { id: 5, name: "React Native", image: "/assets/images/techno/reactnative.png" },
    { id: 6, name: "Python", image: "/assets/images/techno/python.jpeg" },

    { id: 8, name: "Swift", image: "/assets/images/techno/swift.png" },
    { id: 9, name: "PWA", image: "/assets/images/techno/pwa.png" },
     { id: 10, name: "Node", image: "/assets/images/techno/node_logo.jpeg" },
  ];

  return (
    <section className="mb-10 px-4 md:px-12">
      <HomeTitle 
        text="Technologies avec lesquelles nous travaillons"
        className="text-3xl md:text-5xl mb-10"
        imageSrc="/assets/images/vectors/vector_thunder.svg"
      />

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {technologies.map((tech) => (
          <div 
            key={tech.id} 
            className="flex flex-col gap-2 py-3 px-3 rounded-2xl bg-[#F7F7F7] items-center w-20 sm:w-24 md:w-28 lg:w-32"
          >
            <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 relative">
              <Image 
                src={tech.image} 
                alt={tech.name} 
                fill 
                className="object-contain" 
              />
            </div>
            <div className="text-xs sm:text-sm md:text-base text-center">
              {tech.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;

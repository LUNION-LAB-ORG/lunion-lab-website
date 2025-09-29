"use client";
import { Button } from "@heroui/button";
import { FacebookIcon, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const iconesTable = [
    { id: 1, icone: <FacebookIcon />, url: "#" },
    { id: 2, icone: <Instagram />, url: "#" },
    { id: 3, icone: <Linkedin />, url: "#" },
    { id: 4, icone: <Youtube />, url: "#" },
  ];

  return (
    <section className="relative w-full">
      <div className="relative w-full min-h-screen rounded-lg overflow-hidden">
        <Image
          src="/assets/images/all-img/fond.png"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />

        {/* Texte overlay */}
        <div className="absolute top-1/4 sm:top-1/3 left-4 sm:left-8 md:left-20 max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-4xl backdrop-blur-md bg-black/20 text-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
          <h1 className="text-lg sm:text-2xl md:text-4xl font-bold leading-snug">
            Une grande technologie <br />
            repose toujours sur des <br />
            relations parfaites
          </h1>
        </div>

        {/* Cursors visibles seulement sur desktop */}
        <div className="hidden lg:block absolute h-10 left-[65%] top-[44%] w-20">
          <Image
            src="/assets/images/cursors/cursor1.png"
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="hidden lg:block absolute h-12 left-[28%] top-[24%] w-24">
          <Image
            src="/assets/images/cursors/cursor2.png"
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="hidden lg:block absolute h-12 left-[39%] top-[54%] w-32">
          <Image
            src="/assets/images/cursors/cursor3.png"
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="hidden lg:block absolute z-20 h-10 right-[25%] bottom-[8%] w-72">
          <Image
            src="/assets/images/cursors/cursor4.png"
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Bloc violet - visible seulement sur desktop */}
        <div className="hidden lg:flex absolute right-0 bottom-4 w-[380px] h-[240px] bg-primary text-white rounded-bl-[160px] rounded-tl-[30%] flex-col justify-center items-center p-12">
          <p className="text-sm leading-relaxed text-center">
            Envie de démarrer un nouveau projet ? Une question ? <br />
            C&apos;est par ici que vous pouvez entamer la conversation.
          </p>
          <Button
            className="
              mt-6 
              bg-black text-white 
              px-6 py-4 
              text-xl
              rounded-md
              hover:bg-gray-900
              w-[70%]
            "
          >
            Allons-y
          </Button>

          {/* Icônes */}
          <div className="mt-4 flex justify-center gap-3 w-full">
            {iconesTable.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg cursor-pointer bg-white/20 p-1.5"
              >
                <Link href={item.url}>{item.icone}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { Button } from "../ui/button";
import HomeTitle from "../(public)/home/HomeTitle";
import Section from "../primitives/Section";


const DownloadBrochure = () => {
  return (
    <section className="w-full font-figtree flex flex-col items-center justify-center  py-16 px-6 bg-[#F3F4F5]">
      {/* Titre */}
      <h2
        className="text-3xl md:text-5xl font-extrabold text-center mb-10 bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(112, 74, 154, 1) 0%, rgba(0,0,0,1) 100%)",
        }}
      >
        <HomeTitle
          text=" Téléchargez notre brochure"
          imageSrc={"/assets/images/vectors/vector_load.svg"}
        />
      </h2>

      {/* Formulaire */}
      <form className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-2xl">
        {/* Champ email */}
        <input
          type="email"
          placeholder="Adresse email"
          className="flex-1 px-6 py-4 bg-[#616162] rounded-t-3xl rounded-br-2xl   text-white placeholder-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        />

        {/* Bouton */}
        <Button
          type="submit"
          className="p-6 rounded-2xl bg-primary text-white font-semibold shadow-lg hover:bg-purple-700 transition"
        >
          Soumettre
        </Button>
      </form>
    </section>
  );
};

export default DownloadBrochure;

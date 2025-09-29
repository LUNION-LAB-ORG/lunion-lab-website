import Image from 'next/image';
import React from 'react';
import HomeTitle from '../home/HomeTitle';

const LunionLabAbout = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-gray-50 min-h-scren">
      {/* Header with size indicator */}
     

      {/* Company description */}
      <div className="text-center mb-10">
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Lunion-Lab est une startup ivoirienne composée d&pos;une équipe 
          jeune, passionnée et ambitieuse, motivée par l&pos;innovation et 
          l&pos;impact social.
        </p>
      </div>

      {/* Mission and Device Section */}
      <div className="flex flex-col md:flex-row gap-12 justify-center mb-16 items-center md:items-start">
  {/* Mission Text */}
  <div className="w-full md:w-1/2 text-center md:text-left">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold flex justify-center md:justify-start mb-4">
      <HomeTitle
        text="Notre Mission"
        imageSrc="/assets/images/all-img/calendar_svgrepo.com.png"
       
      />
    </h2>
    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
      Développer des solutions numériques 
      locales et durables qui répondent aux 
      besoins réels des communautés et 
      des institutions
    </p>
  </div>

  {/* Device Mockup */}
  <div className="w-full md:w-1/2  bg-black relative h-64 rounded-2xl md:h-80">
    
  </div>
</div>

      {/* Values and Device Section */}
   <div className="flex flex-col md:flex-row gap-5 items-center justify-center ">
  {/* Image */}
  <div className="relative w-64  bg-black md:w-1/2 h-64 md:h-80 lg:h-[290px] rounded-xl ">
    {/* <Image
      src="/assets/images/all-img/video1.png"
      alt="video1"
      fill
      className="object-cover w-full h-full rounded-lg"
    /> */}
  </div>

  {/* Div jaune */}
  <div className="w-full md:w-1/2 bg-[#FFD817] rounded-t-lg rounded-bl-lg flex flex-col py-6 px-8 md:px-12 lg:px-20 h-full text-center md:text-left">
    <div className="text-3xl md:text-4xl lg:text-5xl flex justify-center md:justify-start mb-6">
      <HomeTitle
        text="Nos valeurs"
        imageSrc="/assets/images/all-img/calendar_svgrepo.com.png"
       
      />
    </div>
    <div className="space-y-3">
      <p className="text-base md:text-lg text-gray-700 font-medium">Innovation,</p>
      <p className="text-base md:text-lg text-gray-700 font-medium">Excellence,</p>
      <p className="text-base md:text-lg text-gray-700 font-medium">Impact social</p>
      <p className="text-base md:text-lg text-gray-700 font-medium">Collaboration</p>
    </div>
  </div>
</div>



    </div>
  );
};

export default LunionLabAbout;
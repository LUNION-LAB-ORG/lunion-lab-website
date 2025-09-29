import React from 'react';

const LunionLabContentBlocks = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        
        {/* Left Block - Yellow Background */}
        <div className="p-6 rounded-2xl bg-[#ffd796]">
          <p className="text-gray-800 text-base leading-relaxed mb-4">
            Chez LUNION-LAB, nous nous engageons à créer des solutions de 
            conception innovantes qui propulsent nos clients vers la réussite. 
            Grâce à une équipe passionnée de designers talentueux, nous 
            dépassons constamment les attentes, laissant un impact durable sur 
            chaque projet.
          </p>
          
          <div className="flex items-center gap-2 mt-4">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-purple-600 font-bold text-xl">+10</span>
            <span className="text-gray-600 font-medium">Projets maison</span>
          </div>
        </div>

        {/* Right Block - White Background */}
        <div className="p-6 rounded-2xl bg-white">
          <p className="text-gray-800 text-base leading-relaxed mb-4">
            LUNION-LAB incarne l&pos;excellence de la satisfaction client. Depuis 
            nos débuts, nous avons bâti une tradition de créativité et de 
            professionnalisme, offrant des résultats exceptionnels qui subliment 
            les marques que nous servons. Qu&pos;il s&pos;agisse d&pos;une identité visuelle 
            unique ou d&pos;un site web époustouflant, nous donnons vie à votre 
            vision.
          </p>
          
          <div className="flex items-center gap-2 mt-4">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-purple-600 font-bold text-xl">+10</span>
            <span className="text-gray-600 font-medium">Projets livrés</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LunionLabContentBlocks;
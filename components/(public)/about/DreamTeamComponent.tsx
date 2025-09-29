import React from 'react';
import { TeamMember } from './TeamMember';



const DreamTeamComponent = () => {
  const responsables = [
    {
      name: "Mr Cédric Assah",
      role: "Le Commandant de bord",
      imageSrc: "/assets/images/membres/membre1.jpg"
    },
    {
      name: "Mr Anderson Kouadio",
      role: "Le Contrôleur vente du CRDI",
     imageSrc: "/assets/images/membres/membre2.jpg"
    },
    {
      name: "Mr Yannick DeVinci",
      role: "Le Planeux de l'interface",
     imageSrc: "/assets/images/membres/membre3.jpg"
    }
  ];

  const founders = [
    {
      name: "Mr Alain SIA",
      role: "Le Tâleur de vide et Le Créateur suprême",
    imageSrc: "/assets/images/membres/membre1.jpg",
      isFounder: true
    },
    {
      name: "Mme Fatem Coulibaly",
      role: "Founder & CEO",
     imageSrc: "/assets/images/membres/membre4.png",
      isFounder: true
    }
  ];

  const itTeam = [
    {
      name: "Mr Francis Kouakou",
      role: "Responsable IT",
        imageSrc: "/assets/images/membres/membre1.jpg",
    },
    {
      name: "Mr Yamoussa Keita",
      role: "Développeur Full-Stack",
     imageSrc: "/assets/images/membres/membre1.jpg",
    },
    {
      name: "Mme Livic Aheto",
      role: "La Génie des applis mobiles",
     imageSrc: "/assets/images/membres/membre2.jpg",
    },
    {
      name: "Axel",
      role: "L'architecte de sites web",
     imageSrc: "/assets/images/membres/membre3.jpg",
    },
    {
      name: "Mr Cédric Assah",
      role: "Le Commandant de bord",
     imageSrc: "/assets/images/membres/membre1.jpg",
    },
    {
      name: "Félix",
      role: "L'architecte de sites web",
     imageSrc: "/assets/images/membres/membre3.jpg",
    },
    {
      name: "Issa",
      role: "L'architecte de sites web",
      imageSrc: "/assets/images/membres/membre1.jpg",
    },
    {
      name: "Oriest",
      role: "L'architecte des applis mobiles",
      imageSrc: "/assets/images/membres/membre3.jpg",
    }
  ];

  const commercial = [
    {
      name: "Mr Keita",
      role: "Maître des ventes",
      imageSrc: "/assets/images/membres/membre1.jpg",
    },
    {
      name: "Mr Stéphane",
      role: "Tisseur de liens",
     imageSrc: "/assets/images/membres/membre2.jpg",
    }
  ];

  const designers = [
    {
      name: "Mr Pasal",
      role: "Maître du visuel",
      imageSrc: "/assets/images/membres/membre3.jpg",
    },
    {
      name: "Mr Hassane Boko",
      role: "L'artiste",
     imageSrc: "/assets/images/membres/membre3.jpg",
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
          La <span className="text-gray-700">Dream</span> team
        </h1>
      </div>

      {/* Les responsables */}
     <div>
        <h2 className='text-xl font-semibold text-primary mb-3 '>Les responsables</h2>
         <section className="mb-16 bg-[#FAFAFA] shadow p-6 rounded-2xl ">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8  ">
          {responsables.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div> 
        
        {/* Founders row */}
        <div className="flex justify-center gap-16 mt-12">
          {founders.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </section>
     </div>

      {/* Chez les IT */}
     <div className='' >

        <h2 className="text-xl font-semibold text-purple-500 mb-3">Chez les IT</h2>
         <section className="mb-16  bg-[#FAFAFA] p-8 shadow rounded-2xl">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {itTeam.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </section>
     </div>

      {/* Chez les commerciaux */}
     <div>
        <h2 className="text-xl font-semibold text-purple-500 mb-3">Chez les commerciaux</h2>

         <section className="mb-16 bg-[#FAFAFA] p-8 shadow rounded-2xl">
        
        <div className="flex justify-center gap-16">
          {commercial.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </section>
     </div>

      {/* Chez les Designers */}
     <div>
 <h2 className="text-xl font-semibold text-purple-500 mb-3">Chez les Designers</h2>
         <section className='bg-[#FAFAFA] p-8 shadow rounded-2xl'>
       
        <div className="flex justify-center gap-16">
          {designers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </section>
     </div>
    </div>
  );
};

export default DreamTeamComponent;
import React from 'react';
import { TeamMember } from './TeamMember';
import HomeTitle from '../home/HomeTitle';



const DreamTeamComponent = () => {
  const founders  = [
    {
      name: "M.Cédric Assah",
      role: "Le Commandant de bord",
      imageSrc: "/assets/images/membres/membre1.jpg"
    },
    {
      name: "M.Anderson Kouadio",
      role: "Le Contrôleur vente du CRDI",
     imageSrc: "/assets/images/membres/membre2.jpg"
    },
    {
      name: "M.Yannick DeVinci",
      role: "Le Planeux de l'interface",
     imageSrc: "/assets/images/membres/membre3.jpg"
    }
  ];

 

  const itTeam = [
    {
      name: "M.Francis Kouakou",
      role: "Responsable IT",
        imageSrc: "/assets/images/membres/membre1.jpg",
    },
    {
      name: "M.Yamoussa Keita",
      role: "Développeur Full-Stack",
     imageSrc: "/assets/images/membres/membre1.jpg",
    },
    
    {
      name: "Axel Kouakou",
      role: "L'architecte de sites web",
     imageSrc: "/assets/images/membres/membre3.jpg",
    },
   {
      name: "Oriest Djelloh",
      role: "L'architecte des applis mobiles",
      imageSrc: "/assets/images/membres/membre3.jpg",
    },
    {
      name: "Félix Kouadio",
      role: "L'architecte des applis web",
     imageSrc: "/assets/images/membres/membre3.jpg",
    },
    {
      name: "Issa Coulibaly",
      role: "L'architecte des applis web",
      imageSrc: "/assets/images/membres/membre1.jpg",
    },
    
  ];

  const commercial = [
   
    {
      name: "M.Stéphane",
      role: "Tisseur de liens",
     imageSrc: "/assets/images/membres/membre2.jpg",
    }, {
      name: "M.Alain SIA",
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

  const designers = [
    {
      name: "M.Pascal",
      role: "Maître du visuel",
      imageSrc: "/assets/images/membres/membre3.jpg",
    },
    {
      name: "M.Hassane Boko",
      role: "L'artiste",
     imageSrc: "/assets/images/membres/membre3.jpg",
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white">
      {/* Header */}
      <div className="text-center text-4xl md:text-6xl mb-12">
        {/* <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
          La <span className="text-gray-700">Dream</span> team
        </h1> */}
        <HomeTitle text='La Dream Team' imageSrc='/assets/images/all-img/team_icone.png'
        
        imageClassName='mr-4'/>
      </div>

      {/* Les responsables */}
     <div>
        <h2 className='text-xl font-semibold text-primary mb-3 '>Les Fondateurs</h2>
         <section className="mb-16 bg-[#FAFAFA] shadow p-6 rounded-2xl ">
        
       
        
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
        <h2 className="text-xl font-semibold text-purple-500 mb-3">Chez les Business developers</h2>

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
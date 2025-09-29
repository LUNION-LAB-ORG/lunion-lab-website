'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import HomeTitle from './HomeTitle';
import Section from '@/components/primitives/Section';

// TeamMember Component
interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc?: string;
  isFounder?: boolean;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  imageSrc,
  isFounder = false,
}) => (
  <div className="flex flex-col items-center text-center space-y-3">
    <div className={`relative ${isFounder ? 'w-20 h-20' : 'w-16 h-16'}`}>
      <Image
        src={imageSrc || "/api/placeholder/64/64"}
        alt={name}
        className="w-full h-full rounded-t-full rounded-br-full object-cover border-gray-200"
        width={isFounder ? 80 : 64}
        height={isFounder ? 80 : 64}
      />
    </div>
    <div>
      <h3 className={`font-medium text-gray-800 ${isFounder ? 'text-lg' : 'text-sm'}`}>
        {name}
      </h3>
      <p className={`text-gray-500 ${isFounder ? 'text-sm' : 'text-xs'} mt-1`}>
        {role}
      </p>
    </div>
  </div>
);

const DreamTeamTabs = () => {
  const [activeTab, setActiveTab] = useState('doyens');

  const responsables = [
    {
      name: "Mr Cédric Assah",
      role: "Le Commandant de bord",
      imageSrc: "/assets/images/membres/membre1.jpg"
    },
    {
      name: "Mr Anderson Kouadio",
      role: "Le Couteau-suisse du code",
      imageSrc: "/assets/images/membres/membre2.jpg"
    },
    {
      name: "Mr Yannick DeVinci",
      role: "Le Penseur de l'interface",
      imageSrc: "/assets/images/membres/membre3.jpg"
    }
  ];

  const founders = [
    {
      name: "Mr Alain SIA",
      role: "Le Tisseur de liens et Le Chasseur d'affaires",
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

  const tabs = [
    { id: 'doyens', label: 'Chez les Doyens', icon: '👥', color: 'bg-primary' },
    { id: 'it', label: 'Chez les IT', icon: '👥', color: 'bg-primary' },
    { id: 'designers', label: 'Chez les Designers', icon: '👥', color: 'bg-primary' },
    { id: 'commerciaux', label: 'Chez le commerciaux', icon: '👥', color: 'bg-primary' }
  ];

  const getCurrentTeamMembers = () => {
    switch (activeTab) {
      case 'doyens':
        return [...responsables, ...founders];
      case 'it':
        return itTeam;
      case 'designers':
        return designers;
      case 'commerciaux':
        return commercial;
      default:
        return responsables;
    }
  };

  return (
    <Section className="max-w-7xl mx-auto p-8 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-400 mb-2">
         <HomeTitle text='La Dream Team' imageSrc='/assets/images/all-img/team_icone.png' />
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Side - Tabs and Description */}
        <div className="bg-[#242424] rounded-3xl p-8 text-white">
          <p className="text-base leading-relaxed mb-8">
            Une équipe de professionnels passionnés, chacun apportant des compétences et des expériences uniques pour stimuler l&apos;innovation et l&apos;excellence dans chaque projet que nous entreprenons.
          </p>

          {/* Tabs Grid */}
          <div className="grid grid-cols-2 gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-4  transition-all cursor-pointer rounded-full duration-300 text-left  ${
                  activeTab === tab.id ? tab.color  : 'bg-[#616369]'
                } hover:opacity-80 `}
              >
                <div className="flex flex-col items-center  text-center">
                  <div className="text-2xl mb-2">👥</div>
                  <span className="text-sm font-medium">{tab.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Team Members */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {getCurrentTeamMembers().map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default DreamTeamTabs;
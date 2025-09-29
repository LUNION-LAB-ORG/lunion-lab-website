import Image from 'next/image';
import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc?: string; // optionnel, car tu as une valeur fallback
  isFounder?: boolean;
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  imageSrc,
  isFounder = false,
}) => (
  <div className="flex flex-col items-center  text-center space-y-3">
    <div className={`relative  ${isFounder ? 'w-20 h-20' : 'w-16 h-16'}`}>
      <Image
        src={imageSrc || "/api/placeholder/64/64"}
        alt={name}
        className="w-full h-full rounded-t-full rounded-br-full object-cover  border-gray-200"
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

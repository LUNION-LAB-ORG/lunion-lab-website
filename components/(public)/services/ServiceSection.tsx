import React from 'react';

import Image from 'next/image';

const ServiceSection = () => {
  return (
   <div>
    <h1 className='flex justify-center text-center lg:text-2xl items-center px-30'>
        Nous sommes une équipe de talents de haut niveau qui fournit des solutions d&pos;entreprise à l&pos;échelle mondiale. Nous évoluons
         avec les progrès technologiques 
        car nous croyons que notre technologie doit devenir votre innovation.
    </h1>
     <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-6 ">
          {/* Left Column - Text */}
          <div className="space-y-6  text-primary w-[25%] ">
            <h2 className="text-2xl lg:text-xl font-bold  leading-tight">
              Nous rendons la collaboration entre les personnes et les interfaces{' '}
              <span className="">plus intense et plus passionnante.</span>
            </h2>
          </div>
          
          {/* Right Column - Services */}
          <div className="space-y-8 w-[65%] ">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">
                Développement Service
              </h3>
            </div>
            
            {/* Services Grid */}
            <div className="space-y-8 ">
  {/* Top Row - Two Services */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* App Development Service */}
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow w-full max-w-md">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 relative h-12 rounded-lg flex items-center justify-center">
          <Image src={"/assets/images/services/appcode.svg.png"} className='w-full h-full' width={12} height={12}  alt=''/>
        </div>
        <h4 className="text-lg font-semibold text-gray-800">
          Développement d’applications
        </h4>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">
        Nous créons des interfaces complètes et sophistiquées mais simples à utiliser pour votre application Web
      </p>
    </div>

    {/* Web Development Service */}
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow w-full max-w-md">
      <div className="flex items-center gap-4 mb-4">
         <div className="w-12 relative h-12 rounded-lg flex items-center justify-center">
          <Image src={"/assets/images/services/service2.png"} className='w-full h-full' width={12} height={12}  alt=''/>
        </div>
        <h4 className="text-lg font-semibold text-gray-800">
          Développement web
        </h4>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">
        Nous créons des interfaces complètes et sophistiquées mais simples à utiliser pour votre application Web.
      </p>
    </div>
  </div>

  {/* Bottom Row - E-commerce Service */}
  <div className="flex justify-start lg::justify-centr">
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow w-full max-w-md">
      <div className="flex gap-4 mb-4">
        <div className="w-12 relative h-12 rounded-lg flex items-center justify-center">
          <Image src={"/assets/images/services/service.png"} className='w-full h-full' width={12} height={12}  alt=''/>
        </div>
        <h4 className="text-lg font-semibold text-gray-800">
          Développement du commerce électronique
        </h4>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">
        Nous créons des interfaces complètes et sophistiquées mais simples à utiliser pour votre application Web.
      </p>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
   </div>
  );
};

export default ServiceSection;
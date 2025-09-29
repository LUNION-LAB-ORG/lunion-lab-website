import React from 'react';
import { Building, Calendar, Users, TrendingUp, Filter, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';

export default function LunionBookingDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      {/* Container principal avec grid responsive */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        
        {/* Section Lunion Booking - En-tête principal */}
        <section className="lg:col-span-1">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl font-bold text-red-500">
                Lunion Booking
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 leading-tight">
                Révolutionnez votre<br />
                gestion immobilière
              </h2>
            </div>
          </div>
        </section>

        {/* Section Bâtiment moderne */}
       <div className=" h-24 relative rounded-2xl">
                   <Image
                     src="/assets/images/all-img/bulding.jpg"
                     alt="Building"
                     width={250}
                     height={180}
                     className="rounded-xl w-full"
                   />
                 </div>

        {/* Section Système innovant - Dashboard */}
        <section className="lg:col-span-2 xl:col-span-1">
          <Image
                     src="/assets/images/all-img/systeme.png"
                     alt="Building"
                     width={250}
                     height={180}
                     className="rounded-xl w-full"
                   />
        </section>

        {/* Section Gestion efficace - Services */}
        <section className="lg:col-span-2">
          <div className="bg-gradient-to-br from-orange-400 to-amber-400 rounded-3xl p-6 md:p-8 shadow-lg text-white">
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold leading-tight">
                Gérez efficacement vos biens,<br />
                réservations et clients en un seul endroit.
              </h3>
              
              {/* Services icons */}
              <div className="flex justify-between items-end">
                {/* Documents */}
                <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-4 w-20 h-20 flex items-center justify-center">
                  <div className="space-y-1">
                    <div className="w-8 h-1 bg-white/80 rounded"></div>
                    <div className="w-6 h-1 bg-white/60 rounded"></div>
                    <div className="w-8 h-1 bg-white/80 rounded"></div>
                    <div className="w-4 h-1 bg-white/60 rounded"></div>
                  </div>
                </div>
                
                {/* Gestion immobilière */}
                <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-4 w-20 h-20 flex items-center justify-center">
                  <div className="relative">
                    <Building className="w-8 h-8 text-white" />
                    <TrendingUp className="w-4 h-4 text-green-300 absolute -top-1 -right-1" />
                  </div>
                </div>
                
                {/* Calendrier */}
                <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-4 w-20 h-20 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
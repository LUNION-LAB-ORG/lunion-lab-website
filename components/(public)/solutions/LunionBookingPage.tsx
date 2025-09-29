import React from 'react';
import { FileText, Home, Calendar, TrendingUp, Users, Filter } from 'lucide-react';

export default function LunionBookingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Container principal avec grid layout */}
      <div className="container mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 h-screen lg:h-[calc(100vh-4rem)]">
          
          {/* Colonne de gauche */}
          <div className="flex flex-col gap-6">
            
            {/* Section bleue - Lunion Booking */}
            <section className="bg-blue-500 rounded-3xl p-8 flex-1 flex flex-col justify-between relative overflow-hidden">
              {/* Header avec logo/titre */}
              <div className="z-10">
                <h1 className="text-white text-3xl lg:text-4xl font-bold mb-2">
                  Lunion Booking
                </h1>
                <p className="text-blue-100 text-lg lg:text-xl">
                  Révolutionnez votre<br />
                  gestion immobilière
                </p>
              </div>
              
              {/* Image du bâtiment moderne */}
              <div className="flex justify-center items-end mt-8">
                <div className="relative">
                  {/* Placeholder pour l'image du bâtiment */}
                  <div className="w-80 h-48 bg-gradient-to-t from-gray-800 to-gray-600 rounded-lg shadow-2xl relative overflow-hidden">
                    {/* Simulation d'un bâtiment moderne avec des fenêtres */}
                    <div className="absolute inset-0">
                      {/* Étages du bâtiment */}
                      <div className="grid grid-cols-6 gap-1 p-2 h-full">
                        {Array.from({ length: 24 }).map((_, i) => (
                          <div 
                            key={i} 
                            className={`rounded-sm ${
                              Math.random() > 0.3 ? 'bg-yellow-200' : 'bg-gray-700'
                            }`}
                          />
                        ))}
                      </div>
                      {/* Détails architecturaux */}
                      <div className="absolute bottom-0 left-4 right-4 h-8 bg-stone-400 rounded-t-sm"></div>
                      <div className="absolute bottom-8 left-8 right-8 h-1 bg-stone-300"></div>
                    </div>
                  </div>
                  
                  {/* Végétation autour */}
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500 rounded-full opacity-80"></div>
                  <div className="absolute -bottom-2 -right-6 w-12 h-12 bg-green-600 rounded-full opacity-70"></div>
                  <div className="absolute bottom-0 right-12 w-8 h-8 bg-purple-500 rounded-full opacity-90"></div>
                </div>
              </div>
            </section>

            {/* Section orange - Gestion efficace */}
            <section className="bg-orange-400 rounded-3xl p-8 flex-1">
              <h2 className="text-white text-2xl lg:text-3xl font-bold mb-8 leading-tight">
                Gérez efficacement vos biens,<br />
                réservations et clients en un seul endroit.
              </h2>
              
              {/* Icônes des fonctionnalités */}
              <div className="flex gap-4 justify-start">
                {/* Icône Documents */}
                <div className="bg-orange-300 bg-opacity-50 rounded-2xl p-4 w-20 h-20 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                
                {/* Icône Maison/Analytics */}
                <div className="bg-orange-300 bg-opacity-50 rounded-2xl p-4 w-20 h-20 flex items-center justify-center">
                  <Home className="w-8 h-8 text-white" />
                </div>
                
                {/* Icône Calendar */}
                <div className="bg-orange-300 bg-opacity-50 rounded-2xl p-4 w-20 h-20 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
              </div>
            </section>
          </div>

          {/* Colonne de droite */}
          <div className="flex flex-col gap-6">
            
            {/* Section rouge - Système innovant */}
            <section className="bg-red-500 rounded-3xl p-8 flex-shrink-0">
              <h2 className="text-white text-2xl lg:text-3xl font-bold leading-tight">
                Système innovant pour<br />
                optimiser les services<br />
                publics et réduire les<br />
                les dattente.
              </h2>
            </section>

            {/* Section Dashboard */}
            <section className="bg-white rounded-3xl p-6 flex-1 shadow-lg">
              {/* Header du dashboard */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-gray-800 text-xl font-semibold">Dashboard</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>Last 30 days</span>
                  <div className="flex items-center gap-2">
                    <span>Select dates</span>
                    <Filter className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Métriques principales */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-gray-800">$78,259</div>
                  <div className="text-xs text-gray-500 mt-1">Total revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-gray-800">+1,567</div>
                  <div className="text-xs text-gray-500 mt-1">New bookings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-gray-800">+2,354</div>
                  <div className="text-xs text-gray-500 mt-1">Active properties</div>
                </div>
              </div>

              {/* Graphique Overview */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-gray-800 font-medium">Overview</h4>
                  <span className="text-xs text-gray-500">+4.5% from last year</span>
                </div>
                
                {/* Graphique simplifié */}
                <div className="h-32 relative">
                  <svg className="w-full h-full" viewBox="0 0 300 120">
                    <path
                      d="M 10 80 Q 50 60 80 70 T 150 65 T 220 55 T 290 50"
                      stroke="#3B82F6"
                      strokeWidth="3"
                      fill="none"
                      className="drop-shadow-sm"
                    />
                    <path
                      d="M 10 80 Q 50 60 80 70 T 150 65 T 220 55 T 290 50 L 290 120 L 10 120 Z"
                      fill="url(#blueGradient)"
                      className="opacity-20"
                    />
                    <defs>
                      <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Section Recent sales */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-gray-800 font-medium">Recent sales</h4>
                  <h4 className="text-gray-800 font-medium">Last 7 days</h4>
                </div>
                
                {/* Liste des ventes */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm text-gray-700">Olivia Martin</span>
                    </div>
                    <span className="text-sm font-medium">$39</span>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                      <span className="text-sm text-gray-600">Laura Olivia</span>
                      <span className="text-sm font-medium">$299</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-sm text-gray-700">Emily Johnson</span>
                    </div>
                    <span className="text-sm font-medium">$39</span>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                      <span className="text-sm text-gray-600">Sarah Williams</span>
                      <span className="text-sm font-medium">$75</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from "react";

type MockupDeviceProps = {
  type: "laptop" | "mobile";
};

export const MockupDevice: React.FC<MockupDeviceProps> = ({ type }) => {
  if (type === "laptop") {
    return (
      <div className="relative">
        <div className="bg-gray-800 rounded-t-2xl p-2">
          <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-gray-100 px-4 py-2 flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
            <div className="p-6 h-64 bg-white relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 bg-red-500 rounded-full flex items-center justify-center mb-4">
                  <div className="w-16 h-10 bg-white rounded opacity-80"></div>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-gray-800 mb-2">Créer votre logement</h3>
                  <h4 className="font-semibold text-gray-700 mb-2">sur Lunion Booking</h4>
                  <p className="text-sm text-gray-500 mb-4">Inscrivez votre logement et gagnez</p>
                  <button className="bg-red-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-red-600 transition-colors">
                    Cest parti !
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-700 h-6 rounded-b-2xl"></div>
      </div>
    );
  }

  // Mobile mockup
  return (
    <div className="bg-gray-800 p-2 rounded-3xl shadow-2xl">
      <div className="bg-white rounded-2xl overflow-hidden">
        <div className="bg-gray-100 px-4 py-2 text-center">
          <div className="w-20 h-1 bg-gray-300 rounded mx-auto"></div>
        </div>
        <div className="p-4 h-80 bg-white relative">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Réservations</span>
              <span className="text-xs text-gray-500">Aujourdhui</span>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-red-600">09:00 - 11:00</div>
                  <div className="text-xs text-gray-600">Appartement Vue Mer</div>
                </div>
                <div className="w-8 h-8 bg-red-500 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-lg font-bold">23 653 800 XOF</div>
              <div className="text-xs text-gray-500">Revenus ce mois</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-2 bg-gray-50 rounded">
                <div className="w-8 h-8 bg-green-400 rounded-full mx-auto mb-1"></div>
                <div className="text-xs">Confirmées</div>
              </div>
              <div className="text-center p-2 bg-gray-50 rounded">
                <div className="w-8 h-8 bg-orange-400 rounded-full mx-auto mb-1"></div>
                <div className="text-xs">En attente</div>
              </div>
            </div>
            <button className="w-full bg-red-500 text-white py-2 rounded-lg text-sm font-medium">
              Nouvelle réservation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

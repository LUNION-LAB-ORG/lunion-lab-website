import React from "react";

import Image from "next/image";

export default function PurpleNavbarAbout() {
  return (
    <nav className="bg-primary px-6 py-4">
      <div className="flex items-center gap-4  justify-between        max-w-7xl mx-auto">
        {/* Logo nectar */}

       
        <div className="flex items-center justify-around  w-full   space-x-8">
          {/* Buy me a coffee */}
          <div className="flex items-center space-x-2 text-white hover:text-purple-200 transition-colors cursor-pointer">
            <Image
              src={"/assets/images/all-img/img1.png"}
              alt="marque_1"
              width={100}
              height={20}
            />
          </div>

          {/* Beehiiv */}
          <div className="flex items-center space-x-2 text-white hover:text-purple-200 transition-colors cursor-pointer">
            <Image
              src={"/assets/images/all-img/img3.png"}
              alt="marque_1"
              width={100}
              height={20}
            />
          </div>

          {/* Laravel */}
          <div className="text-white hover:text-purple-200 transition-colors cursor-pointer">
            <Image
              src={"/assets/images/all-img/img2.png"}
              alt="marque_1"
              width={100}
              height={20}
            />
          </div>
          <div className="text-white hover:text-purple-200 transition-colors cursor-pointer">
            <Image
              src={"/assets/images/all-img/img4.png"}
              alt="marque_1"
              width={100}
              height={10}
            />
          </div>
          {/* Xfinity */}
          <div className="text-white hover:text-purple-200 transition-colors cursor-pointer">
            <Image
              src={"/assets/images/all-img/img5.png"}
              alt="marque_1"
              width={100}
              height={20}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

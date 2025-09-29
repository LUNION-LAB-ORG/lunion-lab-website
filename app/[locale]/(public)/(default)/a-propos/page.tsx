
import DreamTeamComponent from "@/components/(public)/about/DreamTeamComponent";
import LunionLabAbout from "@/components/(public)/about/LunionLabAbout";
import LunionLabContentBlocks from "@/components/(public)/about/LunionLabContentBlocks";
import PurpleNavbarAbout from "@/components/(public)/about/PurpleNavbarAbout";
import DemarrezProjetSection from "@/components/common/DemarrezProjetSection";
import DownloadBrochure from "@/components/common/DownloadBrochure";
import ImageTextCard from "@/components/common/ImageTextCard";

import React from "react";

const Page = () => {
  return (
    <div>
      <ImageTextCard
        imageUrl="/assets/images/all-img/image_back.png"
        text="A  propos"
      />
      <LunionLabAbout />
      <PurpleNavbarAbout/>
      <LunionLabContentBlocks />
      <DreamTeamComponent />
      <DemarrezProjetSection/>
      <DownloadBrochure/>
    </div>
  );
};

export default Page;

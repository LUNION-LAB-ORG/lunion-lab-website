import React from "react";
import DemarrezProjetSection from "@/components/common/DemarrezProjetSection";
// import DownloadBrochure from "@/components/common/DownloadBrochure";

import Hero from "@/components/common/hero/hero";
import ServicesSection from "@/components/(public)/home/ServicesSection";
import LunionLabPresentation from "@/components/(public)/home/LunionLabPresentation";
import SecteursActivites from "@/components/(public)/home/SecteursActivites";
import NosSolutions from "@/components/(public)/home/NosSolutions";
import PurpleNavbar from "@/components/(public)/home/PurpleNavbar";
import DreamTeamTabs from "@/components/(public)/home/DreamTeamTabs";
import WorkMethod from "@/components/(public)/home/WorkMethod";
import PackagesPricing from "@/components/common/PackagesPricing";
import FAQSection from "@/components/(public)/home/FAQSection";

const Page = () => {
  return (
    <div>
      <Hero />
    
      <LunionLabPresentation />
        <ServicesSection />
      <SecteursActivites />
      <NosSolutions />
      <PurpleNavbar />
      <DreamTeamTabs />
      <WorkMethod />
      <PackagesPricing />
      <DemarrezProjetSection />
      {/* <DownloadBrochure /> */}
      <FAQSection />
    </div>
  );
};

export default Page;

import FlashInfo from "@/components/(public)/contact";

import ProcessusTravail from "@/components/(public)/home/ProcessusTravail";
import ServicesGrids from "@/components/(public)/services/services-grid";
import Technologies from "@/components/(public)/services/technologies";

import ImageTextCard from "@/components/common/ImageTextCard";
import PackagesPricing from "@/components/common/PackagesPricing";

const Page = () => {
  return (
    <div className="font-figree">
      <ImageTextCard
        imageUrl="/assets/images/all-img/image_back.png"
        text="Services"
      />

      <ServicesGrids />
      <ProcessusTravail />

      <Technologies />

      <FlashInfo />
       <PackagesPricing />
    </div>
  );
};

export default Page;

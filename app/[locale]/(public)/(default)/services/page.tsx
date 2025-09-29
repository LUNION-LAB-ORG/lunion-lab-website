import FAQSection from "@/components/(public)/home/FAQSection";
import ProcessusTravail from "@/components/(public)/home/ProcessusTravail";
import ServicesGrids from "@/components/(public)/services/services-grid";
import Technologies from "@/components/(public)/services/technologies";

import ImageTextCard from "@/components/common/ImageTextCard";

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
      <FAQSection />
    </div>
  );
};

export default Page;

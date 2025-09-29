import BusinessImprovementSection from "@/components/(public)/solutions/BusinessImprovementSection";
import DigitalTransformationSection from "@/components/(public)/solutions/DigitalTransformationSection";
import ProductsSection from "@/components/(public)/solutions/ProductsSection";
import ImageTextCard from "@/components/common/ImageTextCard";

import React from "react";

const Page = () => {
  return (
    <div>
      <ImageTextCard
        imageUrl="/assets/images/all-img/image_back.png"
        text="Solutions"
      />
      <DigitalTransformationSection />
      <BusinessImprovementSection />
      <ProductsSection />
    </div>
  );
};

export default Page;

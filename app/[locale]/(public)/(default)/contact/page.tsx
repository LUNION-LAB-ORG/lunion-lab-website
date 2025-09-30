import ContactCard from "@/components/(public)/contact/contact-card";
import ContactForm from "@/components/(public)/contact/contact-form";
import ContactSection from "@/components/(public)/contact/contact-section";
import PartnersSection from "@/components/(public)/contact/partners-section";
import FAQSection from "@/components/(public)/home/FAQSection";
import DownloadBrochure from "@/components/common/DownloadBrochure";
import ImageTextCard from "@/components/common/ImageTextCard";
import React from "react";

const Page = () => {
  return (
    <div>
      <ImageTextCard
        imageUrl="/assets/images/all-img/image_back.png"
        text="Contact"
      />
     
      {/* <ContactSection/> */}
      <ContactCard />
      <PartnersSection/>
      <ContactForm />
       <DownloadBrochure />
      <FAQSection />
    </div>
  );
};

export default Page;


import DemarrezProjetSection from "@/components/common/DemarrezProjetSection";
import DownloadBrochure from "@/components/common/DownloadBrochure";
import { getTranslations } from "next-intl/server";

import DreamTeamTabs from '@/components/(public)/home/DreamTeamTabs';
import FAQSection from '@/components/(public)/home/FAQSection';
import LunionLabPresentation from '@/components/(public)/home/LunionLabPresentation';
import NosSolutions from '@/components/(public)/home/NosSolutions';
import PurpleNavbar from '@/components/(public)/home/PurpleNavbar';
import SecteursActivites from '@/components/(public)/home/SecteursActivites';
import ServicesSection from '@/components/(public)/home/ServicesSection';
import WorkMethod from '@/components/(public)/home/WorkMethod';

import LunionLabFooter from "@/components/common/Footer copy";
import Hero from "@/components/common/hero/hero";
import LunionNav from "@/components/common/nav/LunionNav";
import PackagesPricing from '@/components/common/PackagesPricing';
export default async function Home() {
  const t = await getTranslations("home.hero");

  return (
    <div>
      <LunionNav />
      <Hero />
           <ServicesSection />
           <LunionLabPresentation />
           <SecteursActivites />
           <NosSolutions />
           <PurpleNavbar />
           <DreamTeamTabs />
           <WorkMethod />
           <PackagesPricing />
           <DemarrezProjetSection />
           <DownloadBrochure />
           <FAQSection />
           <LunionLabFooter />
    </div>
  );
}

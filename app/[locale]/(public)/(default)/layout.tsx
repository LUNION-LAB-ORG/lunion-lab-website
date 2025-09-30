// app/[locale]/(public)/default/layout.tsx
import LunionLabFooter from "@/components/common/Footer copy";
import LunionNav from "@/components/common/nav/LunionNav";
import { Figtree, Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });


export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    < >
      < >
        <LunionNav />
        {children}
        <LunionLabFooter />
      </>
    </>
  );
}

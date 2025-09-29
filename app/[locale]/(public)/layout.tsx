import "@/styles/globals.css";

import { Navbar } from "@/components/common/navbar";

import { Footer } from "@/components/common/footer";
import Main from "@/components/primitives/Main";
import LunionLabFooter from "@/components/common/Footer copy";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
    
      {children}
      
     
    </body>
  );
}

"use client";
import React from "react";
import { Loader2 } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";
import { siteConfig } from "@/config/site";
import { Logo } from "./icons";
import Image from "next/image";
import { Spinner } from "./(public)/kibo-ui/spinner";
const Loader = () => {
  const mounted = useMounted();
  return mounted ? null : (
    <div className=" h-screen flex  bg-cover bg-center items-center justify-center flex-col space-y-2" 
    style={{ backgroundImage: "url('/assets/images/all-img/fond3.png')" }}
    >
      <div className="flex gap-2 items-center ">
       
         <Image src={"/assets/images/all-img/logo.png"} alt="logo" width={200} height={200} className="w-full h-full" />
       
        {/* <h1 className="text-xl font-semibold text-default-900 ">
          {siteConfig.name}
        </h1> */}
      </div>
      <span className=" inline-flex gap-1  items-center">
    <Spinner />
        Loading...
      </span>
    </div>
  );
};

export default Loader;

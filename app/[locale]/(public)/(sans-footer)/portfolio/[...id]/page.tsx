"use client";

import ProjectPreview from "@/components/(public)/portfolio/ProjectPreview";



const Page = ({ params }: { params: { id: string } }) => {
    return <ProjectPreview params={params} />;
};

export default Page;

import ProcessusTravail from '@/components/(public)/home/ProcessusTravail';
import ServiceSection from '@/components/(public)/services/ServiceSection';
import ServicesGrid from '@/components/(public)/services/ServicesGrid';
import ImageTextCard from '@/components/common/ImageTextCard';

import React from 'react';

const Page = () => {
    return (
        <div className='font-figree'>
           <ImageTextCard
                  imageUrl="/assets/images/all-img/image_back.png"
                  text="Services"
                  
                />
                <ServiceSection />
                <ServicesGrid />
                <ProcessusTravail/>
        </div>
    );
}

export default Page;

import React from 'react';
import bannerSvg from '../../../public/bannerImages/bannerSvg.png';
import Image from 'next/image';

const BannerSvg = () => {
  return (
    <div>
      <div>
        
        <Image src={bannerSvg}></Image>
      </div>
    </div>
  );
};

export default BannerSvg;

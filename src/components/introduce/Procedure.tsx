import { useMobileClient } from '@/src/utils/hook';
import Image from 'next/image';
import ImageLegacy from 'next/legacy/image';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

type ProcedureType = {
  title: string;
  description: string;
  bannerLink: string;
  dataNav: Array<{ title: string; icon: string; desc: string }>;
  id: string;
};

function Procedure(props: ProcedureType) {
  const { title, dataNav, bannerLink, description, id } = props;
  const isMobileClient = useMobileClient();

  return (
    <div id={id} className='procedure text-center pb-20'>
      <div className='text-2xl font-semibold'>
        <span className='title relative'>{title}</span>
      </div>
      <p className='py-4'>{description}</p>
      <div className='w-1/2 m-auto'>
        <ImageLegacy
          src={bannerLink}
          layout='responsive'
          width={990}
          height={590}
        />
      </div>
      <div className='grid grid-cols-3 gap-2'>
        {dataNav.map((item) => (
          <div
            key={item.title}
            className={`rounded-xl ${
              !isMobileClient ? 'p-6' : 'p-2'
            } bg-white text-left`}
          >
            <Image src={item.icon} width={50} height={50} alt='icon' />
            <div
              className={`${!isMobileClient && 'text-xl'} font-semibold py-4`}
            >
              {item.title}
            </div>
            <div
              className={`procedure-items-desc ${isMobileClient && 'dot-3'}`}
            >
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Procedure;

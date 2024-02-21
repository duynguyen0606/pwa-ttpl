import { Button } from 'antd';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

type BannerContactType = {
  direction: 'text-left' | 'text-right';
  title: string;
  btnText: string;
  description: string;
  image: string;
  id: string;
};

function BannerContact({
  direction,
  title,
  description,
  btnText,
  image,
  id,
}: BannerContactType) {
  const [isMobileClient, setIsMobileClient] = useState(false);
  const isMobileUI = useMediaQuery({
    query: '(max-width: 600px)',
  });

  useEffect(() => {
    setIsMobileClient(isMobileUI);
  }, [isMobileUI]);

  if (direction === 'text-left') {
    return (
      <div id={id} className='flex items-center mb-20'>
        <div className={`flex-1 ${isMobileClient ? 'mr-5' : 'mr-40'}`}>
          <div className='text-xl font-semibold'>{title}</div>
          <div className='py-4'>{description}</div>
          <Button className='button-primary'>{btnText}</Button>
        </div>
        <div className='flex-1'>
          <Image src={image} alt='banner' width={801} height={602} />
        </div>
      </div>
    );
  } else {
    return (
      <div id={id} className='flex items-center mb-20'>
        <div className='flex-1'>
          <Image src={image} alt='banner' width={801} height={602} />
        </div>
        <div className={`flex-1 ${isMobileClient ? 'ml-5' : 'ml-40'}`}>
          <div className='text-xl font-semibold'>{title}</div>
          <div className='py-4'>{description}</div>
          <Button className='button-primary'>{btnText}</Button>
        </div>
      </div>
    );
  }
}

export default BannerContact;

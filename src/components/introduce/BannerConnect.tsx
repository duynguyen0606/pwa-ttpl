import Image from 'next/image';
import ImageLegacy from 'next/legacy/image';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

function BannerConnect() {
  const [isMobileClient, setIsMobileClient] = useState(false);
  const isMobileUI = useMediaQuery({
    query: '(max-width: 600px)',
  });

  useEffect(() => {
    setIsMobileClient(isMobileUI);
  }, [isMobileUI]);

  return (
    <div
      id='tai-ung-dung'
      className='flex banner-connect items-center text-white'
    >
      <div className='flex-1'>
        <div className='text-xl font-semibold'>
          Kết nối với chúng tôi bất cứ khi nào và bất cứ nơi nào!
        </div>
        <p className='py-10'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className='flex gap-2'>
          <div style={{ width: 160 }}>
            <Image
              src='/images/introduce/app-store.png'
              alt='app-store'
              width={202}
              height={70}
            />
          </div>
          <div style={{ width: 180 }}>
            <Image
              src='/images/introduce/ch-play.png'
              alt='app-store'
              width={202}
              height={70}
            />
          </div>
        </div>
      </div>
      {!isMobileClient && (
        <div className='flex-1 relative' style={{ paddingTop: '37.5%' }}>
          <ImageLegacy
            src='/images/introduce/phones-connect.png'
            alt='phones'
            layout='fill'
            className='absolute'
          />
        </div>
      )}
    </div>
  );
}

export default BannerConnect;

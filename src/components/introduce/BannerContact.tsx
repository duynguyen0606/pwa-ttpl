import { Button } from 'antd';
import Image from 'next/image';

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
  if (direction === 'text-left') {
    return (
      <div id={id} className='flex items-center mb-20'>
        <div className='flex-1 mr-40'>
          <div className='text-xl font-semibold'>{title}</div>
          <div className='py-4'>{description}</div>
          <Button
            style={{
              color: '#fff',
              backgroundColor: 'var(--primary-color)',
              border: 'unset',
            }}
          >
            {btnText}
          </Button>
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
        <div className='flex-1 ml-40'>
          <div className='text-xl font-semibold'>{title}</div>
          <div className='py-4'>{description}</div>
          <Button
            style={{
              color: '#fff',
              backgroundColor: 'var(--primary-color)',
              border: 'unset',
            }}
          >
            {btnText}
          </Button>
        </div>
      </div>
    );
  }
}

export default BannerContact;

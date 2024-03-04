import { useRouter } from 'next/navigation';
import Header from '@/src/components/mobile/header/Header';
import Slider from '@/src/components/mobile/slider/Slider';
import Footer from '@/src/components/mobile/footer/Footer';

function HomePageMobile() {
  const router = useRouter();
  const data = [
    {
      id: 0,
      img: 'https://ttpl.vn/assets/images/banner/slide_home_mobile.png.webp',
    },
    {
      id: 1,
      img: 'https://ttpl.vn/assets/images/banner/slide_home_mobile.png.webp',
    },
    {
      id: 2,
      img: 'https://ttpl.vn/assets/images/banner/slide_home_mobile.png.webp',
    },
  ];

  return (
    <>
      <Header />

      {/* Content legalzone */}
      <div className='m-4 mt-0 pt-[100px]'>
        <Slider data={data} />

        {/* Danh sách thủ tục */}
        <div className='p-2 pb-28'>
          <div className='flex text-base font-bold text-[#262C41] justify-between items-center'>
            Danh sách thủ tục
            <button
              className='text-sm text-[--primary-color]'
              onClick={() => router.push('/mobile/thu-tuc')}
            >
              Xem tất cả
            </button>
          </div>
        </div>

        <a href='tel: 0888888888' className='fixed bottom-16 left-4 z-[2] '>
          <div className='flex w-28 h-9 bg-[--primary-color] rounded-3xl items-center justify-left pl-2'>
            <img
              src='/images/introduce/phone.png'
              alt='phone'
              className='w-5 h-4 pr-1'
            />
            <span className='text-white text-xs'>0888888888</span>
          </div>
        </a>
      </div>

      <Footer />
    </>
  );
}

export default HomePageMobile;

'use client';

import Header from './components/header/Header';
import Blog from './components/blog/Blog';
import Slider from './components/slider/Slider';
import Footer from './components/footer/Footer';
import { useRouter } from 'next/navigation';

function Home() {
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
    <div>
      <Header />

      {/* Content legalzone */}
      <div className='m-4 mt-0 pt-[100px]'>
        <Slider data={data} />

        {/* Danh sách thủ tục */}
        <div className='p-2 pb-28'>
          <div className='flex text-base font-bold text-[#262C41] justify-between items-center'>
            Danh sách thủ tục
            <button
              className='text-sm text-[#F58533]'
              onClick={() => router.push('/mobile/thu-tuc')}
            >
              Xem tất cả
            </button>
          </div>
          <Blog />
        </div>

        <a href='tel: 0888888888' className='fixed bottom-16 left-4 z-[2] '>
          <div className='flex w-28 h-9 bg-[#F58533] rounded-3xl items-center justify-left pl-2'>
            <img
              src='https://ttpl.vn/assets/images/icon/phone.png'
              alt='phone'
              className='w-5 h-4 pr-1'
            />
            <span className='text-white text-xs'>0888888888</span>
          </div>
        </a>
      </div>

      <Footer />
    </div>
  );
}

export default Home;

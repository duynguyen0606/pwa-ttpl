'use client';

import { Header, Category, Post, Article } from '@/src/components/common';
// import DefaultLayout from '@/src/components/layout';
import Sider from 'antd/es/layout/Sider';
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';

const DefaultLayout = dynamic(() => import('@/src/components/layout'));

export default function Index() {
  const isMobileUI = useMediaQuery({ query: 'min-widt' });
  return (
    <>
      <Category />
      <div className='mx-4 flex flex-col gap-4 overflow-auto fixed-height'>
        {[1, 2, 3, 4].map((item) => (
          <Post key={item} />
        ))}
      </div>
      {
        <Sider
          width={320}
          style={{
            backgroundColor: '#fff',
            position: 'sticky',
          }}
          className='h-full px-4 py-2 rounded-lg fixed-height'
        >
          <div className='font-medium text-lg'>
            Bài viết được xem nhiều nhất
          </div>
          {[1, 2, 3, 4].map((item) => (
            <Article />
          ))}
        </Sider>
      }
    </>
  );
}

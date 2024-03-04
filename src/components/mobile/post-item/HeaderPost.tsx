'use client';

import Link from 'next/link';
import { useState } from 'react';

import { converDateToDays } from '@/src/utils';
import ArticleModel from '@/src/models/Article';
import Image from 'next/image';

function HeaderPostItem({ post }: { post: ArticleModel }) {
  const [follow, setFollow] = useState(false);

  return (
    <header className='flex justify-between mb-2'>
      <div className='flex'>
        <Image
          src='https://ttpl.vn/assets/images/logo/logo-legalzone.png'
          className='w-10 h-10 object-cover rounded-full'
          alt='avatar'
          width={40}
          height={40}
        />
        <div className='flex flex-col ml-2 justify-center'>
          <Link
            href={`/mobile/trang-ca-nhan/${post.created_by}`}
            className='text-sm font-bold text-[#262C41]'
          >
            {post.created_by_full_name}
          </Link>
          <p className='text-xs text-[#B5B9C7]'>
            {converDateToDays({ date: post.created_at })}
          </p>
        </div>
      </div>
      <div className='flex items-center justify-center '>
        <div
          className='rounded py-[6px] px-[10px] text-xs font-medium'
          onClick={() => setFollow(!follow)}
          style={{
            color: follow ? '#FFF' : '#262C41',
            backgroundColor: follow ? '#F58533' : '#F4F5F8',
          }}
        >
          Theo dõi
        </div>
      </div>
    </header>
  );
}

export default HeaderPostItem;

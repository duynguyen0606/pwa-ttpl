import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { apiGetListMostViewArticle } from '@/src/api/home-page';
import ArticleModel from '@/src/models/Article';
import { converDateToDays } from '@/src/utils';
import './style.scss';
import { useMobileClient } from '@/src/utils/hook';

function Article({ article }: { article: ArticleModel }) {
  const isMobileClient = useMobileClient();

  return (
    <div
      key={article.id}
      id='article'
      className='flex items-center gap-2 py-4 border-b-[1px] border-solid border-slate-100'
    >
      {/* <Link
        href={`${isMobileClient ? '/mobile' : ''}/bai-viet/${article.url_key}`}
      > */}
      <Image
        src={article?.images ?? 'https://ttpl.vn/assets/images/unsplash.jpg'}
        alt='article image'
        width={70}
        height={70}
      />
      {/* </Link> */}
      <div className='inline-grid flex-col'>
        <Link
          href={`${isMobileClient ? '/mobile' : ''}/bai-viet/${
            article.url_key
          }`}
          style={{ color: '#4262AE' }}
          className='title dot-1 text-sm font-semibold'
        >
          {article.title}
        </Link>
        <span
          className='description dot-1 text-xs'
          dangerouslySetInnerHTML={{ __html: article.short_description }}
        />
        <div className='flex items-center text-xs text-[#979797] pt-4'>
          <span>{converDateToDays({ date: article.created_at })}</span>
          <div className='w-1 h-1 mx-1 bg-[#A1A5AC] rounded-full' />
          <span>{article.created_by_full_name}</span>
        </div>
      </div>
    </div>
  );
}

export default Article;

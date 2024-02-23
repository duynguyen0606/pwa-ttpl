import Image from 'next/image';
import './style.scss';
import { useEffect, useState } from 'react';
import ArticleModel from '@/src/models/Article';
import { apiGetListMostViewArticle } from '@/src/api/home-page';

function Article({ article }: { article: ArticleModel }) {
  return (
    <div
      key={article.id}
      id='article'
      className='flex items-center gap-2 py-4 border-b-[1px] border-solid border-slate-100'
    >
      <Image
        src={article?.images ?? 'https://ttpl.vn/assets/images/unsplash.jpg'}
        alt='article image'
        width={70}
        height={70}
      />
      <div className='inline-grid flex-col'>
        <h3
          style={{ color: '#4262AE' }}
          className='title dot-1 text-sm font-semibold'
        >
          {article.title}
        </h3>
        <span
          className='description dot-1 text-xs'
          dangerouslySetInnerHTML={{ __html: article.short_description }}
        />
        <span className='text-xs pt-4 text-gray-300'>
          {article.created_by_full_name}
        </span>
      </div>
    </div>
  );
}

export default Article;

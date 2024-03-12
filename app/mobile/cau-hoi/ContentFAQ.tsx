'use client';

import Image from 'next/image';
import { useState, useMemo, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Collapse, Input, Pagination } from 'antd';

import { Question } from '@/src/components/mobile/law-qa';
import { apiGetListFAQ } from '@/src/api/question';
import { nonAccentVietnamese } from '@/src/utils';

function ContentFAQ() {
  const [pageFAQ, setPageFAQ] = useState(1);
  const [listFAQ, setListFAQ] = useState<Array<any>>([]);
  const [filterListFAQ, setFilterListFAQ] = useState<Array<any>>([]);

  const [isMobileClient, setIsMobileClient] = useState(false);
  const isMobileUI = useMediaQuery({
    query: '(max-width: 600px)',
  });
  useEffect(() => {
    setIsMobileClient(isMobileUI);
  }, [isMobileUI]);

  useEffect(() => {
    (async () => {
      const dataRes = await apiGetListFAQ({ page: pageFAQ - 1 });
      if (dataRes.status) {
        setListFAQ(dataRes.data);
        setFilterListFAQ(dataRes.data);
      }
    })();
  }, [pageFAQ]);

  const renderIcon = (isActive?: boolean) => {
    return (
      <div
        className={`mt-20 rounded-full w-7 h-7 p-1 overflow-hidden 
                ${
                  isMobileClient
                    ? 'bg-[var(--secondary-color)]'
                    : 'bg-[var(--primary-color)]'
                }`}
      >
        <Image
          src={!!isActive ? '/images/icons/up.png' : '/images/icons/down.png'}
          alt='expand icon'
          width={24}
          height={24}
        />
      </div>
    );
  };

  const handleSearch = (value: string) => {
    if (value) {
      setFilterListFAQ(
        listFAQ.filter((qa) =>
          nonAccentVietnamese(qa.title).includes(nonAccentVietnamese(value))
        )
      );
    } else {
      setFilterListFAQ(listFAQ);
    }
  };

  return (
    <>
      {listFAQ.length > 0 && (
        <div className='pt-2'>
          <div className='flex justify-center p-4'>
            <Input
              style={{
                width: isMobileClient ? '100%' : '60%',
                margin: 'auto',
              }}
              size='large'
              placeholder='Tìm kiếm'
              onChange={(e) => handleSearch(e.target.value)}
              prefix={
                <Image
                  src='/images/icons/search.png'
                  alt='search-icon'
                  width={20}
                  height={20}
                />
              }
              alt='search-icon'
              width={20}
              height={20}
            />
          </div>
        </div>
      )}

      <Collapse
        ghost
        collapsible='icon'
        expandIconPosition='end'
        expandIcon={({ isActive }) => renderIcon(isActive)}
        items={filterListFAQ.map((faq) => {
          return {
            key: faq?.id,
            label: (
              <Question
                title={faq?.title}
                description={faq?.question}
                type={faq?.type_faq_title}
              />
            ),
            children: (
              <div className='border-t-[1px] border-dashed border-[#E5E5E5] mt-3 pt-4'>
                <h2 className='text-lg font-bold text-[--primary-color]'>
                  Câu trả lời tham khảo
                </h2>
                <p className='text-[--primary-color]'>{faq?.answer}</p>
              </div>
            ),
          };
        })}
      />

      <div className='flex items-center justify-center'>
        <Pagination
          size='small'
          onChange={(page) => {
            setPageFAQ(page);
          }}
          current={pageFAQ}
          total={150}
          showSizeChanger={false}
        />
      </div>
    </>
  );
}

export default ContentFAQ;

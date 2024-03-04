'use client';

import { useState, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Collapse, Pagination } from 'antd';

import { apiGetFAQ } from '@/src/api/question';
import { Question, Answer } from '@/src/components/mobile/law-qa';

function ContentFAQ() {
  const [pageFAQ, setPageFAQ] = useState(1);
  const [listFAQ, setListFAQ] = useState<Array<any>>([]);
  const isMobileUI = useMediaQuery({
    query: '(max-width: 600px)',
  });

  useMemo(() => {
    (async () => {
      const dataRes = await apiGetFAQ({ page: pageFAQ });
      if (dataRes.status) {
        setListFAQ(dataRes.data);
      }
    })();
  }, [pageFAQ]);

  const renderIcon = (isActive?: boolean) => {
    return (
      <div
        className={`mt-20 rounded-full w-7 h-7 p-1 overflow-hidden 
                ${isMobileUI ? 'bg-[#4755D4]' : 'bg-[var(--primary-color)]'}`}
      >
        <img
          src={!!isActive ? '/images/icons/up.png' : '/images/icons/down.png'}
          alt='expand icon'
        />
      </div>
    );
  };

  return (
    <>
      <Collapse
        // className={`bg-[#f1f5ff]`}
        collapsible='icon'
        ghost
        items={listFAQ.map((faq) => {
          return {
            key: faq?.id,
            label: (
              <Question
                title={faq?.title}
                description={faq?.question}
                type={faq?.type_faq_title}
              />
            ),
            children: <Answer content={faq?.answer} />,
          };
        })}
        expandIconPosition='end'
        expandIcon={({ isActive }) => renderIcon(isActive)}
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

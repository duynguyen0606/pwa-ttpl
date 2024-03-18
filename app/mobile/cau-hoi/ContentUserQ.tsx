'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import Image from 'next/image';
import { Collapse, Pagination, Input } from 'antd';

import { Question } from '@/src/components/mobile/law-qa';
import { apiGetListUserQuestion } from '@/src/api/question';
import { useMobileClient } from '@/src/utils/hook';

function ContenUserQ() {
  const [pageUserQ, setPageUserQ] = useState(1);
  const [listUserQ, setListUserQ] = useState<Array<any>>([]);
  const isMobileClient = useMobileClient();

  useEffect(() => {
    (async () => {
      const dataRes = await apiGetListUserQuestion({
        page: pageUserQ - 1,
      });
      if (dataRes.status) {
        setListUserQ(dataRes.data);
        // setFilterListFAQ(dataRes.data);
      }
    })();
  }, [pageUserQ]);

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

  return (
    <>
      {listUserQ.length > 0 && (
        <div className='pt-2'>
          <div className='flex justify-center p-4'>
            <Input
              style={{
                width: isMobileClient ? '100%' : '60%',
                margin: 'auto',
              }}
              size='large'
              placeholder='Tìm kiếm'
              // onChange={(e) => handleSearch(e.target.value)}
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
        collapsible='icon'
        ghost
        expandIconPosition='end'
        expandIcon={({ isActive }) => renderIcon(isActive)}
        items={listUserQ.map((userQ) => {
          const listAns = userQ.data_answer;
          return {
            key: userQ?.id,
            label: (
              <Question
                title={userQ?.title}
                description={userQ?.question}
                type={userQ?.type_faq_title}
                user={{
                  name: userQ?.name_user_question,
                  img: userQ?.avatar_user_question,
                  id: userQ?.create_by,
                }}
                create_at={userQ.created_at}
              />
            ),
            children: (
              <div className='border-t-[1px] border-dashed border-[#E5E5E5] mt-3 pt-4'>
                <Collapse
                  ghost
                  // collapsible="icon"
                  expandIconPosition='end'
                  expandIcon={({ isActive }) => renderIcon(isActive)}
                  items={listAns.map((ans: any, idx: number) => {
                    return {
                      key: idx,
                      label: (
                        <div className='flex items-center flex-wrap'>
                          <Image
                            className='w-9 h-9 rounded-full object-cover'
                            src={
                              ans.avatar_user_answer
                                ? ans.avatar_user_answer
                                : 'https://ttpl.vn/assets/images/logo/logo-legalzone.png'
                            }
                            alt='avatar user'
                            width={36}
                            height={36}
                          />
                          <div className='ml-3'>
                            <Link
                              href={`${isMobileClient ? '/mobile' : ''}/user/${
                                ans?.created_by
                              }`}
                              className='text-[#444] font-bold'
                            >
                              {ans?.name_user_answer}
                            </Link>
                            <p className='text-xs text-[#979797]'>
                              {ans?.created_at}
                            </p>
                          </div>
                        </div>
                      ),
                      children: (
                        <div
                          className='text-[--primary-color]'
                          dangerouslySetInnerHTML={{
                            __html: ans.answer,
                          }}
                        />
                      ),
                    };
                  })}
                />
              </div>
            ),
          };
        })}
      />

      <div className='flex items-center justify-center'>
        <Pagination
          size='small'
          onChange={(page) => {
            setPageUserQ(page);
          }}
          current={pageUserQ}
          total={150}
          showSizeChanger={false}
        />
      </div>
    </>
  );
}

export default ContenUserQ;

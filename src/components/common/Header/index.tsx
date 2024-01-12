'use client';

import Image from 'next/image';
import {
  Breadcrumb,
  Button,
  ConfigProvider,
  Drawer,
  Layout,
  Menu,
  Tabs,
  theme,
} from 'antd';
import './style.scss';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';
import { useMemo, useState } from 'react';
const { Header } = Layout;

const navbarArr = [
  {
    name: 'Bài viết',
    link: '/bai-viet',
  },
  {
    name: 'Thủ tục pháp luật',
    link: '/thu-tuc',
  },
  {
    name: 'Hướng dẫn sử dụng',
    link: '/gioi-thieu',
  },
  {
    name: 'Xếp hạng',
    link: '/rank',
  },
  {
    name: 'Hỏi đáp pháp luật',
    link: '/law-qa',
  },
];

function HeaderCom() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const router = useRouter();
  console.log(router);
  const isMobileUI = useMediaQuery({
    query: '(max-width: 600px)',
  });

  return (
    <Header
      id='header'
      className={`flex bg-white w-full items-center justify-between px-9 ${
        !isMobileUI ? 'h-20' : 'h-15'
      } fixed t-0 z-50`}
    >
      {isMobileUI ? (
        <>
          <div>
            <Image
              priority
              src='/images/logo.png'
              alt='logo'
              width={50}
              height={50}
            />
          </div>
          <div className='flex gap-4 items-center'>
            <Button
              type='link'
              className='flex items-center'
              icon={
                <Image
                  src='/images/icons/search.png'
                  alt='search'
                  width={50}
                  height={50}
                />
              }
            />
            <Button
              type='link'
              className='flex items-center'
              icon={
                <Image
                  src='/images/icons/account.png'
                  alt='search'
                  width={50}
                  height={50}
                />
              }
            />
            <Button
              type='link'
              className='flex items-center'
              icon={
                <Image
                  src='/images/icons/menu.png'
                  alt='menu'
                  width={50}
                  height={50}
                />
              }
              onClick={() => setOpenDrawer(true)}
            />
          </div>
          <Drawer
            placement='right'
            onClose={() => setOpenDrawer(false)}
            open={openDrawer}
          >
            {navbarArr.map((item) => (
              <div
                key={item.name}
                className='font-base text-xl mb-4 cursor-pointer'
              >
                {item.name}
              </div>
            ))}
          </Drawer>
        </>
      ) : (
        <>
          <div>
            <Image
              priority
              src='/images/logo.png'
              alt='logo'
              width={60}
              height={60}
            />
          </div>
          <div>
            <ConfigProvider
              theme={{
                components: {
                  Tabs: {
                    itemActiveColor: 'var(--primary-color)',
                    itemHoverColor: 'var(--primary-color)',
                    itemSelectedColor: 'var(--primary-color)',
                    inkBarColor: 'var(--primary-color)',
                    fontSize: 18,
                  },
                },
              }}
            >
              <Tabs
                activeKey='Bài viết'
                onTabClick={(item) => router.push(item)}
                // activeKey={}
                items={navbarArr.map((item) => {
                  return {
                    label: item.name.toUpperCase(),
                    key: item.link,
                  };
                })}
              />
            </ConfigProvider>
          </div>
          <div className='flex gap-4 items-center'>
            <Button
              type='link'
              icon={
                <Image
                  src='/images/icons/search.png'
                  alt='search'
                  width={50}
                  height={50}
                />
              }
            />
            <Button
              type='link'
              icon={
                <Image
                  src='/images/icons/account.png'
                  alt='search'
                  width={50}
                  height={50}
                />
              }
            />
          </div>
        </>
      )}
    </Header>
  );
}

export default HeaderCom;

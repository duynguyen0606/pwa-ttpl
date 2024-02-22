'use client';

import {
  App,
  Avatar,
  Button,
  ConfigProvider,
  Drawer,
  Layout,
  Popover,
  Tabs,
  message,
} from 'antd';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import './style.scss';
// import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ModalLogin } from '../../modal';
import ModalSearch from '../../modal/ModalSearch';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { authLogout, setOpenModalLogin } from '@/src/redux/feature/authSlice';
const { Header } = Layout;

const navbarArr = [
  {
    name: 'Bài viết',
    link: '/',
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
  const pathName = usePathname();
  // const { activeTab } = props;
  const [openDrawer, setOpenDrawer] = useState(false);
  const [tabActive, setTabActive] = useState('');
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isMobileClient, setIsMobileClient] = useState(false);
  const [openModalSearch, setOpenModalSearch] = useState(false);
  const [openPopoverUser, setOpenPopoverUser] = useState(false);
  // const { message } = App.useApp();
  const { loading, user, loginCode, token } = useAppSelector(
    (state) => state.authState
  );
  const isMobileUI = useMediaQuery({
    query: '(max-width: 600px)',
  });

  useEffect(() => {
    setTabActive(pathName);
  }, [pathName]);

  useEffect(() => {
    setIsMobileClient(isMobileUI);
  }, [isMobileUI]);

  return (
    <Header
      id='header'
      className={`flex bg-white w-full items-center justify-between px-9 h-15 sm:h-20 fixed t-0 z-50`}
    >
      {isMobileClient ? (
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
                // activeKey='Bài viết'
                // activeKey={activeTab || '/bai-viet'}
                activeKey={tabActive}
                onTabClick={(item) => router.push(item)}
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
            {user && (
              <Button
                type='link'
                icon={
                  <Image
                    src='/images/icons/notification.png'
                    alt='notification'
                    width={50}
                    height={50}
                  />
                }
              />
            )}
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
              onClick={() => setOpenModalSearch(true)}
            />
            {user ? (
              <Popover
                content={
                  <div>
                    <div className='flex gap-2 items-center p-2 border-b border-slate-200'>
                      <Image
                        src='/images/icons/white-account.png'
                        alt='profile'
                        width={20}
                        height={20}
                      />
                      <span>Hồ sơ của tôi</span>
                    </div>
                    <div className='flex gap-2 items-center p-2 border-b border-slate-200'>
                      <Image
                        src='https://ttpl.vn/assets/images/icon/exclusively.png'
                        alt='for you'
                        width={20}
                        height={20}
                      />
                      <span>Dành riêng cho bạn</span>
                    </div>
                    <div className='flex gap-2 items-center p-2 border-b border-slate-200'>
                      <Image
                        src='/images/icons/home.png'
                        alt='dashboard'
                        width={20}
                        height={20}
                      />
                      <span>Dashboard</span>
                    </div>
                    <div
                      // onClick={() =>
                      // dispatch(
                      //   authLogout({
                      //     url: 'https://thutucphapluat.com/api/login/logout',
                      //     token: token,
                      //   })
                      // )
                      // sendPostWithToken(
                      //   {
                      //         url: 'https://thutucphapluat.com/api/login/logout',
                      //         token: token,
                      //       }
                      // })
                      // }
                      className='flex gap-2 items-center p-2 border-b border-slate-200 cursor-pointer'
                    >
                      <Image
                        src='/images/icons/logout.png'
                        alt='logut'
                        width={20}
                        height={20}
                      />
                      <span>Đăng xuất</span>
                    </div>
                  </div>
                }
                trigger='click'
                open={openPopoverUser}
                onOpenChange={(newOpen) => setOpenPopoverUser(newOpen)}
                placement='bottomLeft'
              >
                <Avatar
                  onClick={() => setOpenPopoverUser(true)}
                  shape='circle'
                  size='large'
                  src={user.image}
                />
              </Popover>
            ) : (
              <Button
                onClick={() => dispatch(setOpenModalLogin(true))}
                type='link'
                icon={
                  <Image
                    src='/images/icons/account.png'
                    alt='account'
                    width={50}
                    height={50}
                  />
                }
              />
            )}
          </div>
        </>
      )}
      <ModalLogin
        onCancel={() => dispatch(setOpenModalLogin(false))}
        onOk={() => dispatch(setOpenModalLogin(false))}
      />
      <ModalSearch
        open={openModalSearch}
        onCancel={() => setOpenModalSearch(false)}
      />
    </Header>
  );
}

export default HeaderCom;

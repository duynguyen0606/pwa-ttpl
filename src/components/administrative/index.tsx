'use client';

import Sider from 'antd/es/layout/Sider';
import DefaultLayout from '../layout';
import { useMemo, useState } from 'react';
import {
  Avatar,
  ConfigProvider,
  Layout,
  Menu,
  MenuProps,
  Popover,
  Typography,
} from 'antd';
import { Header } from 'antd/es/layout/layout';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { authLogout } from '@/src/redux/feature/authSlice';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import Dashboard from './dashboard';
import Setting from './setting';
import Procedures from './procedures';
import PostManagement from './post-manage';
import CustomerManagement from './customer-manage';
import EmployeeManagement from './employee-manage';
import WoringFlow from './working-flow';
import Finance from './finance';
import CustomerSupport from './customer-support';
import WorkDay from './work-day';
import LeaveDay from './leave-day';
import Notification from './notification';
import Survey from './survey';

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

enum MenuTab {
  DASHBOARD = 'dashboard',
  SETTING_GENERAL = 'setting-general',
  PROCEDURE = 'procedure',
  POSTS = 'posts',
  CUSTOMER = 'customer',
  FLOW = 'flow',
  EMPLOYEEE = 'employee',
  FINANCE = 'finance',
  CUSTOMER_SP = 'customer-support',
  WORKDAY = 'work-day',
  LEAVEDAY = 'leave-day',
  NOTIFICATION = 'notification',
  SURVEY = 'survey',
  CONTRACT = 'contract',
}

const items: MenuItem[] = [
  getItem(
    'Bảng điều khiển',
    'dashboard',
    <Image
      src='/images/dashboard/home.png'
      alt='dashboard'
      width={20}
      height={20}
    />
  ),
  getItem(
    'Cài đặt',
    '2',
    <Image
      src='/images/dashboard/setting.png'
      alt='setting'
      width={20}
      height={20}
    />,
    [
      getItem('Cài đặt chung', '3'),
      getItem('Tất cả vai trò', '4'),
      getItem('Công ty', '5'),
      getItem('Email', '6'),
      getItem('Khách hàng', '7'),
      getItem('Loại hình nghỉ', '8'),
      getItem('Vé hỗ trợ khách hàng', '9'),
      getItem('Tất cả loại chi phí', '10'),
      getItem('Loại quy trình', '11'),
    ]
  ),
  getItem(
    'Thủ tục hành chính',
    'procedure',
    <Image src='/images/dashboard/menu.png' alt='menu' width={20} height={20} />
  ),
  getItem(
    'Quản lý bài viết',
    'posts',
    <Image src='/images/dashboard/menu.png' alt='menu' width={20} height={20} />
  ),
  getItem(
    'Quản lý khách hàng',
    'customer',
    <Image
      src='/images/dashboard/user.png'
      alt='clock'
      width={20}
      height={20}
    />
  ),
  getItem(
    'Quản lý nhân viên',
    'employee',
    <Image
      src='/images/dashboard/group.png'
      alt='clock'
      width={20}
      height={20}
    />
  ),
  getItem(
    'Quy trình hoạt động',
    'flow',
    <Image src='/images/dashboard/flow.png' alt='flow' width={20} height={20} />
  ),
  getItem(
    'Tài chính',
    'finance',
    <Image
      src='/images/dashboard/finance.png'
      alt='finance'
      width={20}
      height={20}
    />
  ),
  getItem(
    'Chăm sóc khách hàng',
    'customer-support',
    <Image
      src='/images/dashboard/group.png'
      alt='clock'
      width={20}
      height={20}
    />
  ),
  getItem(
    'Ngày công',
    'work-day',
    <Image
      src='/images/dashboard/clock.png'
      alt='clock'
      width={20}
      height={20}
    />
  ),
  getItem(
    'Nghỉ phép',
    'leave-day',
    <Image
      src='/images/dashboard/leave.png'
      alt='leave'
      width={20}
      height={20}
    />
  ),
  getItem(
    'Thông báo',
    'notification',
    <Image
      src='/images/dashboard/notification.png'
      alt='notification'
      width={20}
      height={20}
    />
  ),
  getItem(
    'Khảo sát',
    'survey',
    <Image
      src='/images/dashboard/response.png'
      alt='response'
      width={20}
      height={20}
    />
  ),
  getItem(
    'Hợp đồng điện tử',
    'contract',
    <Image
      src='/images/dashboard/document.png'
      alt='document'
      width={20}
      height={20}
    />,
    [
      getItem('Trang chủ', '23'),
      getItem('Hợp đồng lao động', '24'),
      getItem('Hợp đồng thương mại', '25'),
      getItem('Các văn bản khác', '26'),
    ]
  ),
];

function AdminPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { token, user } = useAppSelector((state) => state.authState);
  const [openPopoverUser, setOpenPopoverUser] = useState(false);
  const [tabActive, setTabActive] = useState('');

  const renderView = useMemo(() => {
    switch (tabActive) {
      case MenuTab.DASHBOARD:
        return <Dashboard />;
      case MenuTab.SETTING_GENERAL:
        return <Setting />;
      case MenuTab.PROCEDURE:
        return <Procedures />;
      case MenuTab.POSTS:
        return <PostManagement />;
      case MenuTab.CUSTOMER:
        return <CustomerManagement />;
      case MenuTab.EMPLOYEEE:
        return <EmployeeManagement />;
      case MenuTab.FLOW:
        return <WoringFlow />;
      case MenuTab.FINANCE:
        return <Finance />;
      case MenuTab.CUSTOMER_SP:
        return <CustomerSupport />;
      case MenuTab.WORKDAY:
        return <WorkDay />;
      case MenuTab.LEAVEDAY:
        return <LeaveDay />;
      case MenuTab.NOTIFICATION:
        return <Notification />;
      case MenuTab.SURVEY:
        return <Survey />;
      default:
        return <Dashboard />;
    }
  }, [tabActive]);

  const renderTitle = useMemo(() => {
    switch (tabActive) {
      case MenuTab.DASHBOARD:
        return 'Bảng điều khiển';
      case MenuTab.SETTING_GENERAL:
        return 'Cài đặt chung';
      case MenuTab.PROCEDURE:
        return 'Thủ tục hành chính';
      case MenuTab.POSTS:
        return 'Quản lý bài viết';
      case MenuTab.CUSTOMER:
        return 'Quản lý khách hàng';
      case MenuTab.EMPLOYEEE:
        return 'Quản lý nhân viên';
      case MenuTab.FLOW:
        return 'Quy trình hoạt động';
      case MenuTab.FINANCE:
        return 'Tài chính';
      case MenuTab.CUSTOMER_SP:
        return 'Chăm sóc khách hàng';
      case MenuTab.WORKDAY:
        return 'Ngày công';
      case MenuTab.LEAVEDAY:
        return 'Ngày nghỉ';
      case MenuTab.NOTIFICATION:
        return 'Thông báo';
      case MenuTab.SURVEY:
        return 'Khảo sát';
      default:
        return 'Bảng điều khiển';
    }
  }, [tabActive]);

  return (
    <Layout style={{ height: '100vh' }} hasSider>
      <Header
        style={{
          backgroundColor: '#F6F6F6',
          height: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          overflow: 'auto',
          position: 'fixed',
          right: 0,
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 100,
        }}
      >
        <div className='flex items-center gap-4'>
          <div onClick={() => router.push('/')}>
            <Image
              priority
              src='/images/logo.png'
              alt='logo'
              width={60}
              height={60}
            />
          </div>
          <Typography.Title level={3}>{renderTitle}</Typography.Title>
        </div>
        <Popover
          content={
            <div>
              <div
                onClick={() => router.push('/user')}
                className='flex gap-2 items-center p-2 border-b border-slate-200 cursor-pointer'
              >
                <Image
                  style={{ borderRadius: '1000px' }}
                  src={user?.image}
                  alt='profile'
                  width={20}
                  height={20}
                />
                <span>{user?.full_name}</span>
              </div>
              <div
                onClick={() => router.push('/dashboard')}
                className='flex gap-2 items-center p-2 border-b border-slate-200 cursor-pointer'
              >
                <Image
                  src='/images/icons/home.png'
                  alt='dashboard'
                  width={20}
                  height={20}
                />
                <span>Nhiệm vụ của tôi</span>
              </div>
              <div
                onClick={async () =>
                  authLogout({
                    url: 'https://thutucphapluat.com/api/login/logout',
                    token,
                  })
                }
                className='flex gap-2 items-center p-2 border-b border-slate-200 cursor-pointer cursor-pointer'
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
            src={user?.image}
          />
        </Popover>
      </Header>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemSelectedColor: '#fff',
              itemSelectedBg: '#E8670A',
              itemActiveBg: '#E8670A',
              itemColor: '#fff',
              itemHoverColor: '#fff',
            },
          },
        }}
      >
        <Sider
          width={300}
          style={{
            overflow: 'auto',
            position: 'fixed',
            left: 0,
            top: 100,
            bottom: 0,
            zIndex: 100,
            backgroundColor: 'var(--primary-color)',
          }}
        >
          <Menu
            defaultSelectedKeys={['1']}
            mode='inline'
            items={items}
            style={{
              height: '100%',
              backgroundColor: 'var(--primary-color)',
            }}
            onSelect={({ item, key, keyPath }) => {
              setTabActive(key);
            }}
          />
        </Sider>
      </ConfigProvider>
      <Layout
        style={{
          marginLeft: 300,
          marginTop: 100,
          padding: 16,
          // backgroundColor: '#fff',
        }}
      >
        {renderView}
      </Layout>
    </Layout>
  );
}

export default AdminPage;

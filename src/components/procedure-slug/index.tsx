'use client';

import { Button, ConfigProvider, Menu, notification } from 'antd';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import ProcedureSlugContent from './ProcedureSlugContent';
import ProcedureSlugComment from './ProcedureSlugComment';
import { useAppSelector } from '@/src/redux/hooks';
import ProcedureSlugAction from './ProcedureSlugAction';
import ProcedureSlugDiagram from './ProcedureSlugDiagram';
import { useMediaQuery } from 'react-responsive';
import { apiSaveProcedure } from '@/src/api/procedure';

const dataNavs = [
  {
    label: 'Nội dung',
    key: 1,
  },
  {
    label: 'Thực tế thực hiện',
    key: 2,
  },
  {
    label: 'Lược đồ',
    key: 3,
  },
  {
    label: 'Bình luận',
    key: 4,
  },
];

function ProcedureSlug({
  data,
  procedureId,
}: {
  data: any;
  procedureId: string;
}) {
  const [tabActive, setTabActive] = useState(1);
  const { user, token } = useAppSelector((state) => state.authState);
  const isMobileUI = useMediaQuery({
    query: '(max-width: 600px)',
  });
  const [isMobileClient, setIsMobileClient] = useState(false);

  useEffect(() => {
    setIsMobileClient(isMobileUI);
  }, [isMobileUI]);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.success({
      message: 'Lưu thủ tục thành công',
    });
  };

  const renderView = () => {
    switch (tabActive) {
      case 1:
        return <ProcedureSlugContent data={data} />;
      case 2:
        return user ? (
          <ProcedureSlugAction id={procedureId} />
        ) : (
          <div>Bạn chưa đăng nhập!</div>
        );
      case 3:
        return user ? <ProcedureSlugDiagram /> : <div>Bạn chưa đăng nhập!</div>;
      case 4:
        return user ? (
          <ProcedureSlugComment id={procedureId} />
        ) : (
          <div>Bạn chưa đăng nhập!</div>
        );
      default:
        return <ProcedureSlugContent data={data} />;
    }
  };

  const handleSaveProcedure = async () => {
    if (procedureId && token) {
      const dataRes = await apiSaveProcedure({
        token,
        id_help_articles: procedureId,
      });
      if (dataRes.status) {
        openNotification();
      }
    }
  };

  return (
    <div>
      {contextHolder}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: !isMobileClient ? 'var(--primary-color)' : '#F58533',
          },
          components: {
            Menu: {
              horizontalItemSelectedColor: !isMobileClient
                ? 'var(--primary-color)'
                : '#F58533',
            },
          },
        }}
      >
        <Menu
          mode={isMobileClient ? 'vertical' : 'horizontal'}
          defaultSelectedKeys={[`${tabActive}`]}
          items={dataNavs.map((item) => {
            return {
              key: item.key,
              label: item.label,
            };
          })}
          onSelect={({ item, key }) => setTabActive(Number(key))}
          style={{ fontSize: 18, fontWeight: 600 }}
        />
      </ConfigProvider>
      {user && (
        <div className='m-4'>
          <Button
            onClick={handleSaveProcedure}
            size='large'
            icon={
              <Image
                src='/images/icons/download.png'
                alt='download'
                width={20}
                height={20}
              />
            }
            className='button-flex button-primary'
          >
            Lưu thủ tục
          </Button>
        </div>
      )}

      <div className='p-4'>{renderView()}</div>
    </div>
  );
}

export default ProcedureSlug;

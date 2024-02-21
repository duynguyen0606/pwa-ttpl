'use client';

import { Button, ConfigProvider, Menu } from 'antd';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import ProcedureSlugContent from './ProcedureSlugContent';
import ProcedureSlugComment from './ProcedureSlutComment';

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

function ProcedureSlug({ data }: { data: any }) {
  const [tabActive, setTabActive] = useState(1);
  const renderView = () => {
    switch (tabActive) {
      case 1:
        return <ProcedureSlugContent data={data} />;
      case 2:
        return 'xxx';
      case 4:
        return <ProcedureSlugComment />;
      default:
        return <ProcedureSlugContent data={data} />;
    }
  };

  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: 'var(--primary-color)',
          },
          components: {
            Menu: {
              horizontalItemSelectedColor: 'var(--primary-color)',
            },
          },
        }}
      >
        <Menu
          mode='horizontal'
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
      <div className='m-4'>
        <Button
          size='large'
          icon={
            <Image
              src='/images/icons/download.png'
              alt='download'
              width={20}
              height={20}
            />
          }
          className='flex items-center button-primary'
        >
          Lưu thủ tục
        </Button>
      </div>
      <div className='p-4'>{renderView()}</div>
    </div>
  );
}

export default ProcedureSlug;

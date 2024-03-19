'use client';

import { Article } from '@/src/components/common';
import { TableProcedureAgent } from '@/src/components/procedure-agent';
import { useAppSelector } from '@/src/redux/hooks';
import { useMobileClient } from '@/src/utils/hook';
import { Col, Row } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useRouter } from 'next/navigation';

const navbarArr = [
  { name: 'Thủ tục', slug: '/thu-tuc' },
  { name: 'Cơ quan thực hiện', slug: '/thu-vien/co-quan-thuc-hien' },
];

const slug: string = '/thu-vien/co-quan-thuc-hien';

function Index({}) {
  const router = useRouter();
  const isMobileClient = useMobileClient();
  const { listArticle } = useAppSelector((state) => state.postState);

  return (
    <Row gutter={16}>
      <Col span={isMobileClient ? 24 : 16}>
        <div className='rounded-lg overflow-hidden bg-white fixed-height mx-4'>
          <div className='grid grid-cols-2'>
            {navbarArr.map((item) => (
              <nav
                key={item.name}
                className='flex justify-center text-xl font-semibold p-4'
                onClick={() => router.push(item.slug)}
                style={{
                  color: slug === item.slug ? '#fff' : '#444',
                  backgroundColor: slug === item.slug ? '#4262AE' : '#fff',
                  borderBottom: '1px solid #d8d8d8',
                }}
              >
                {item.name}
              </nav>
            ))}
          </div>
          <TableProcedureAgent />
        </div>
      </Col>
      {!isMobileClient && (
        <Col span={8}>
          <Sider
            width={'100%'}
            style={{
              backgroundColor: '#fff',
            }}
            className='h-full px-4 py-2 rounded-lg fixed-height'
          >
            <div className='font-medium text-lg'>
              Bài viết được xem nhiều nhất
            </div>
            {listArticle.length > 0 &&
              listArticle?.map((item) => (
                <Article article={item} key={item.id} />
              ))}
          </Sider>
        </Col>
      )}
    </Row>
  );
}

export default Index;

'use client';

import { Article } from '@/src/components/common';
import DefaultLayout from '@/src/components/layout';
import {
  TableProcedure,
  TableProcedureAgent,
} from '@/src/components/procedure';
import { Col, ConfigProvider, Row, Tabs } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';

const navbarArr = [
  { name: 'Thủ tục', tabActive: 1 },
  { name: 'Cơ quan thực hiện', tabActive: 2 },
];

function Index() {
  const [tabActive, setTabActive] = useState(1);
  return (
    // <DefaultLayout>
    <Row gutter={16}>
      <Col span={16}>
        <div className='rounded-lg overflow-hidden bg-white fixed-height'>
          <div className='grid grid-cols-2'>
            {navbarArr.map((item) => (
              <nav
                key={item.name}
                className='flex justify-center text-xl font-semibold p-4'
                onClick={() => setTabActive(item.tabActive)}
                style={{
                  color: tabActive === item.tabActive ? '#fff' : '#444',
                  backgroundColor:
                    tabActive === item.tabActive ? '#4262AE' : '#fff',
                  borderBottom: '1px solid #d8d8d8',
                }}
              >
                {item.name}
              </nav>
            ))}
          </div>
          {tabActive === 1 ? <TableProcedure /> : <TableProcedureAgent />}
        </div>
      </Col>
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
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Article />
          ))}
        </Sider>
      </Col>
    </Row>
    // </DefaultLayout>
  );
}

export default Index;

'use client';

import { apiGetListMostViewArticle } from '@/src/api/home-page';
import {
  apiGetListProcedure,
  apiGetListProcedureAgentByType,
} from '@/src/api/procedure';
import { Article } from '@/src/components/common';
import {
  TableProcedure,
  TableProcedureAgent,
} from '@/src/components/procedure';
import ArticleModel from '@/src/models/Article';
import ProcedureModel from '@/src/models/Procedure';
import { Col, Row } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useEffect, useState } from 'react';

const navbarArr = [
  { name: 'Thủ tục', tabActive: 1 },
  { name: 'Cơ quan thực hiện', tabActive: 2 },
];

function Index() {
  const [tabActive, setTabActive] = useState(1);
  const [listArticle, setListArticle] = useState<Array<ArticleModel>>([]);
  const [listProcedure, setListProcedure] = useState<Array<ProcedureModel>>([]);

  useEffect(() => {
    (async () => {
      const dataRes = await apiGetListMostViewArticle();
      if (dataRes.status) {
        setListArticle(dataRes.data);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const dataRes = await apiGetListProcedure();
      if (dataRes.status && dataRes.data) {
        setListProcedure(dataRes.data);
      }
    })();
  }, []);

  return (
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
          {tabActive === 1 ? (
            <TableProcedure data={listProcedure} />
          ) : (
            <TableProcedureAgent />
          )}
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
          {listArticle.length > 0 &&
            listArticle?.map((item) => (
              <Article article={item} key={item.id} />
            ))}
        </Sider>
      </Col>
    </Row>
  );
}

export default Index;

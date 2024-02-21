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
} from '@/src/components/procedure-agent';
import ArticleModel from '@/src/models/Article';
import ProcedureModel from '@/src/models/Procedure';
import { useAppSelector } from '@/src/redux/hooks';
import { Col, Row } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const navbarArr = [
  { name: 'Thủ tục', tabActive: 1 },
  { name: 'Cơ quan thực hiện', tabActive: 2 },
];

function Index() {
  const [tabActive, setTabActive] = useState(1);
  // const [listArticle, setListArticle] = useState<Array<ArticleModel>>([]);
  const [listProcedure, setListProcedure] = useState<Array<ProcedureModel>>([]);
  const [isMobileClient, setIsMobileClient] = useState(false);
  const isMobileUI = useMediaQuery({
    query: '(max-width: 600px)',
  });
  const { listArticle } = useAppSelector((state) => state.postState);

  useEffect(() => {
    (async () => {
      const dataRes = await apiGetListProcedure();
      if (dataRes.status && dataRes.data) {
        setListProcedure(dataRes.data);
      }
    })();
  }, []);

  useEffect(() => {
    setIsMobileClient(isMobileUI);
  }, [isMobileUI]);

  return (
    <Row gutter={16}>
      <Col span={isMobileClient ? 24 : 16}>
        <div className='rounded-lg overflow-hidden bg-white fixed-height mx-4'>
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

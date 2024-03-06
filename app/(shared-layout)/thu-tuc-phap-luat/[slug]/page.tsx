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
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const navbarArr = [
  { name: 'Thủ tục', slug: 'thu-tuc' },
  { name: 'Cơ quan thực hiện', slug: 'co-quan-thuc-hien' },
];

function Index({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [tabSlug, setTabSlug] = useState(slug);
  const router = useRouter();
  // const [listArticle, setListArticle] = useState<Array<ArticleModel>>([]);
  const [listProcedure, setListProcedure] = useState<Array<ProcedureModel>>([]);
  const [isMobileClient, setIsMobileClient] = useState(false);
  const isMobileUI = useMediaQuery({
    query: '(max-width: 600px)',
  });
  const { listArticle } = useAppSelector((state) => state.postState);

  useEffect(() => {
    (async () => {
      const dataRes = await apiGetListProcedure({ page: 1 });
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
                onClick={() => router.push(item.slug)}
                style={{
                  color: tabSlug === item.slug ? '#fff' : '#444',
                  backgroundColor: tabSlug === item.slug ? '#4262AE' : '#fff',
                  borderBottom: '1px solid #d8d8d8',
                }}
              >
                {item.name}
              </nav>
            ))}
          </div>
          {tabSlug === 'thu-tuc' ? (
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

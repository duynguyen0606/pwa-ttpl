'use client';

import {
  apiGetListProcedureRelative,
  apiGetProcedureContentDesktop,
} from '@/src/api/procedure';
import { Article } from '@/src/components/common';
import ProcedureSlug from '@/src/components/procedure-slug';
import { useAppSelector } from '@/src/redux/hooks';
import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import { navbarArr } from '../page';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';
function Index({ params }: { params: { id: string } }) {
  const [dataContent, setDataContent] = useState();
  const [dataRelative, setDataRelative] = useState<Array<any>>();
  const { listArticle } = useAppSelector((state) => state.postState);
  const [isMobileClient, setIsMobileClient] = useState(false);
  const isMobileUI = useMediaQuery({
    query: '(max-width: 600px)',
  });
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const dataRes = await apiGetProcedureContentDesktop(params.id);
      if (dataRes.data?.actual_implementation) {
        setDataContent(dataRes.data.actual_implementation);
        const dataRelativeRes = await apiGetListProcedureRelative(
          dataRes.data.actual_implementation.area_id
        );
        if (dataRelativeRes.status) {
          setDataRelative(dataRelativeRes.data);
        }
      }
    })();
  }, [params.id]);

  useEffect(() => {
    setIsMobileClient(isMobileUI);
  }, [isMobileUI]);

  return (
    <Row gutter={6}>
      <Col span={!isMobileClient ? 16 : 24}>
        <div className='rounded-lg overflow-hidden bg-white fixed-height mx-4'>
          <div className='grid grid-cols-2'>
            {navbarArr.map((item) => (
              <nav
                key={item.name}
                className='flex justify-center text-xl font-semibold p-4'
                onClick={() => router.push(`/thu-tuc-phap-luat/${item.slug}`)}
                style={{
                  color: 'thu-tuc' === item.slug ? '#fff' : '#444',
                  backgroundColor: 'thu-tuc' === item.slug ? '#4262AE' : '#fff',
                  borderBottom: '1px solid #d8d8d8',
                }}
              >
                {item.name}
              </nav>
            ))}
          </div>
          <ProcedureSlug data={dataContent} />
        </div>
      </Col>
      {!isMobileClient && (
        <Col span={8}>
          <div className='fixed-height'>
            <div className='bg-white p-4 rounded-lg mb-4'>
              <h2 className='font-semibold text-lg'>Thủ tục cùng lĩnh vực</h2>
              {dataRelative &&
                dataRelative?.map((item) => (
                  <Article key={item.id} article={item} />
                ))}
            </div>
            <div className='bg-white p-4 rounded-lg'>
              <h2 className='font-semibold text-lg'>Bài viết mới nhất</h2>
              {listArticle &&
                listArticle?.map((item) => (
                  <Article key={item.id} article={item} />
                ))}
            </div>
          </div>
        </Col>
      )}
    </Row>
  );
}

export default Index;

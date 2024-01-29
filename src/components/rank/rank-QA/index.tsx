import { apiGetListRankQA } from '@/src/api/rank';
import RankQaModel from '@/src/models/RankAnswer';
import { converDateToDays, renderCollapseIcon } from '@/src/utils';
import { Button, Collapse, CollapseProps, Rate } from 'antd';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function RankQA() {
  const [listQA, setListQA] = useState<Array<RankQaModel>>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    (async () => {
      const dataRes = await apiGetListRankQA({ page });
      if (dataRes.status && dataRes.data.result.length > 0) {
        if (listQA.length > 0) {
          setListQA((prev) => [...prev, ...dataRes.data.result]);
        } else {
          setListQA(dataRes.data.result);
        }
      }
    })();
  }, [page]);

  const items: CollapseProps['items'] = listQA.map((item, id) => {
    return {
      key: id,
      label: (
        <div>
          <div className='flex gap-4'>
            <Image
              src={item.image_question}
              alt='avatar'
              width={45}
              height={45}
              objectFit='cover'
              className='rounded-full'
            />
            <div>
              <h3 className='font-semibold'>{item.full_name_question}</h3>
              <p style={{ color: 'var(--description-color)' }}>
                {converDateToDays({ date: item.created_at_question })}&nbsp;
                ngày trước
              </p>
            </div>
          </div>
          <h2 className='qa-title'>{item.title_type_faq}</h2>
          <p
            className='qa-desc'
            dangerouslySetInnerHTML={{ __html: item.title_question }}
          />
          <p className='qa-subdesc'>{item.question}</p>
        </div>
      ),
      children: (
        <div className='qa-children'>
          <h2 className='font-semibold text-xl'>Câu trả lời</h2>
          <div className='flex gap-4 my-2'>
            <Image
              src={item.image_answer}
              alt='avatar'
              width={45}
              height={45}
              objectFit='cover'
              className='rounded-full'
            />
            <div>
              <h3 className='font-semibold'>{item.full_name_answer}</h3>
              <p style={{ color: 'var(--description-color)' }}>
                {converDateToDays({ date: item.created_at_question })}&nbsp;
                ngày trước
              </p>
            </div>
          </div>
          <Rate defaultValue={5} />
          <p
            style={{ color: 'var(--primary-color)' }}
            dangerouslySetInnerHTML={{ __html: item.answer }}
          />
        </div>
      ),
    };
  });
  return (
    <>
      <Collapse
        style={{ backgroundColor: '#fff' }}
        bordered={false}
        expandIcon={({ isActive }) => renderCollapseIcon(isActive)}
        expandIconPosition='end'
        items={items}
      />
      <div className='text-center my-4'>
        <Button
          style={{
            color: '#fff',
            backgroundColor: 'var(--primary-color)',
            border: 'unset',
            textAlign: 'center',
          }}
          size='large'
          onClick={() => setPage((prev) => prev + 1)}
        >
          Xem thêm
        </Button>
      </div>
    </>
  );
}

export default RankQA;

import { useEffect, useState } from 'react';
import './style.scss';
import RankProcedureModel from '@/src/models/RankProcedure';
import { apiGetListRankProcedure } from '@/src/api/rank';
import { Button } from 'antd';

function RankProcedure() {
  const [dataProcedure, setDataProcedure] = useState<Array<RankProcedureModel>>(
    []
  );
  const [page, setPage] = useState(0);

  useEffect(() => {
    (async () => {
      const dataRes = await apiGetListRankProcedure({ page });
      if (dataRes.status && dataRes.data.result.length > 0) {
        if (dataProcedure.length > 0) {
          setDataProcedure((prev) => [...prev, ...dataRes.data.result]);
        } else {
          setDataProcedure(dataRes.data.result);
        }
      }
    })();
  }, [page]);

  return (
    <>
      {dataProcedure.length > 0 &&
        dataProcedure.map((item, id) => (
          <div id='rank-procedure'>
            <div className='flex items-center gap-4 bg-white rounded-xl p-4 mb-4'>
              <div>#{id + 1}</div>
              <div className='flex-1 dot-1 desc'>{item.title}</div>
              <div
                className='flex-1 px-2 border-x-2 border-black dot-1 desc'
                dangerouslySetInnerHTML={{ __html: item.co_quan_thuc_hien }}
              />
              <div
                className='flex-1 dot-1 desc'
                dangerouslySetInnerHTML={{ __html: item.result }}
              />
            </div>
          </div>
        ))}
      <div className='text-center'>
        <Button
          className='button-primary'
          size='large'
          onClick={() => setPage((prev) => prev + 1)}
        >
          Xem thêm
        </Button>
      </div>
    </>
  );
}

export default RankProcedure;

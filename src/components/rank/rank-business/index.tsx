import { apiGetListRankBussiness, apiGetListRankCompany } from '@/src/api/rank';
import BussinessModel from '@/src/models/business';
import Image from 'next/image';
import { useEffect, useState } from 'react';

enum RankBussinessType {
  company = 1,
  bussiness = 2,
}

function RankBusiness({ type }: { type: number }) {
  const [listData, setListData] = useState<Array<BussinessModel>>([]);

  useEffect(() => {
    if (type == RankBussinessType.company) {
      (async () => {
        const dataRes = await apiGetListRankCompany({ page: 0 });
        if (dataRes.status && dataRes.data.result.length > 0) {
          setListData(dataRes.data.result);
        }
      })();
    } else {
      (async () => {
        const dataRes = await apiGetListRankBussiness({ page: 0 });
        if (dataRes.status && dataRes.data.result.length > 0) {
          setListData(dataRes.data.result);
        }
      })();
    }
  }, [type]);

  return (
    <>
      {listData.length > 0 &&
        listData.map((item, id) => (
          <div id='rank-business' className='mb-4'>
            <div className='flex bg-white items-center gap-2 p-4 rounded-lg'>
              <div className='text-xl font-semibold'>#{id + 1}</div>
              <div className='flex gap-2 items-center'>
                <Image
                  src='https://drive.google.com/uc?id=1vLPCXwk1Fo3LkXI9N2ejCz2J0abYImZB'
                  alt='avatar'
                  width={60}
                  height={60}
                  className='rounded-full'
                />
                <div>
                  <h3 className='text-xl font-semibold'>{item?.full_name}</h3>
                  <p>{item?.address}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default RankBusiness;

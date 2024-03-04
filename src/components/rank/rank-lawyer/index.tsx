import { apiGetListRankLawyer } from '@/src/api/rank';
import User from '@/src/models/User';
import { Button } from 'antd';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import './style.scss';

export enum RankType {
  lawyer = 1,
  account = 2,
}

function RankLawyer(props: { type?: number }) {
  const { type = RankType.lawyer } = props;
  const [listRankLawyer, setListRankLawyer] = useState<Array<User>>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (type == RankType.lawyer) {
      (async () => {
        const dataRes = await apiGetListRankLawyer({ page });
        if (dataRes.status && dataRes.data.result.length > 0) {
          if (listRankLawyer.length > 0) {
            setListRankLawyer((prev) => [...prev, ...dataRes.data.result]);
          } else {
            setListRankLawyer(dataRes.data.result);
          }
        }
      })();
    }
  }, [page, type, listRankLawyer.length]);

  return (
    <>
      {listRankLawyer.length > 0 && (
        <>
          <div id='rank-lawyer'>
            <div className='rank-lawyer-header flex justify-center gap-10'>
              <div className='flex flex-col items-center gap-2 rank-second'>
                <div className='font-semibold text-xl'>#2</div>
                <Image
                  src={listRankLawyer[1].images}
                  alt='avatar'
                  width={120}
                  height={120}
                  className='rounded-full'
                />
                <div>{listRankLawyer[1].full_name}</div>
                <div className='flex'>
                  <Image
                    src='/images/icons/star.png'
                    alt='star'
                    width={30}
                    height={30}
                  />
                  <Image
                    src='/images/icons/star.png'
                    alt='star'
                    width={30}
                    height={30}
                  />
                </div>
                {type === RankType.account && <div>Điểm thưởng: 456789</div>}
              </div>
              <div className='flex flex-col items-center gap-2 rank-first'>
                <div className='font-semibold text-xl'>#1</div>
                <Image
                  src='https://ttpl.vn/assets/images/rank/icon_rank.png'
                  alt='top1-rank'
                  width={40}
                  height={40}
                />
                <Image
                  src={listRankLawyer[0].images}
                  alt='avatar'
                  width={120}
                  height={120}
                  className='rounded-full'
                />
                <div>{listRankLawyer[0].full_name}</div>
                <div className='flex'>
                  <Image
                    src='/images/icons/star.png'
                    alt='star'
                    width={30}
                    height={30}
                  />
                  <Image
                    src='/images/icons/star.png'
                    alt='star'
                    width={30}
                    height={30}
                  />
                </div>
              </div>
              <div className='flex flex-col items-center gap-2 rank-third'>
                <div className='font-semibold text-xl'>#3</div>
                <Image
                  src={listRankLawyer[2].images}
                  alt='avatar'
                  width={120}
                  height={120}
                  className='rounded-full'
                />
                <div>{listRankLawyer[2].full_name}</div>
              </div>
            </div>
            <div className='pt-6'>
              {listRankLawyer.slice(3).map((item, id) => (
                <div key={id} className='flex items-center gap-4 mb-4'>
                  <div className='font-semibold text-xl w-10'>#{id + 4}</div>
                  <div
                    className='flex items-center gap-2 rounded-full flex-1 px-4 py-2'
                    style={{ backgroundColor: '#F3F3F3' }}
                  >
                    <Image
                      src='https://ttpl.vn/assets/images/logo/logo-legalzone.png'
                      alt='avatar'
                      width={30}
                      height={30}
                      className='rounded-lg'
                    />
                    <div>{item.full_name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='text-center my-4'>
            <Button
              className='button-primary'
              size='large'
              onClick={() => setPage((prev) => prev + 1)}
            >
              Xem thêm
            </Button>
          </div>
        </>
      )}
    </>
  );
}

export default RankLawyer;

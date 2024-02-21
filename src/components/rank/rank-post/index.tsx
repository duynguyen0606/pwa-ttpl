import { apiGetListRankPost } from '@/src/api/rank';
import PostModel from '@/src/models/Post';
import { converDateToDays } from '@/src/utils';
import { Button } from 'antd';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import './style.scss';

function RankPost() {
  const [dataRankPosts, setDataRankPost] = useState<Array<PostModel>>([]);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    (async () => {
      const dataRes = await apiGetListRankPost({ page: currentPage });
      if (dataRes.status && dataRes.data.result.length > 0) {
        if (dataRankPosts.length > 0) {
          setDataRankPost((prev) => [...prev, ...dataRes.data.result]);
        } else {
          setDataRankPost(dataRes.data.result);
        }
      }
    })();
  }, [currentPage]);

  return (
    <div className='overflow-auto'>
      {dataRankPosts.length > 0 &&
        dataRankPosts.map((item, id) => (
          <div
            key={id}
            id='rank-post'
            className='flex gap-2 items-center bg-white p-4 rounded-lg mb-4'
          >
            <div className='text-xl font-semibold'>#{id + 1}</div>
            <div className='flex-1'>
              <div className='flex justify-between items-center pb-2 border-b-[2px] border-solid border-slate-100'>
                <div className='flex gap-2'>
                  <div className='w-10'>
                    <Image
                      src='https://ttpl.vn/files/profile_images/_file60efb3760fc90-avatar.png'
                      alt='avatar'
                      width={40}
                      height={40}
                      className='rounded-full'
                    />
                  </div>
                  <div>
                    <div className='font-semibold'>{item.title}</div>
                    <div style={{ color: 'var(--description-color)' }}>
                      {converDateToDays({
                        date: item.created_at,
                      })}
                      &nbsp;ngày trước
                    </div>
                  </div>
                </div>
                <Button>Theo dõi</Button>
              </div>
              <div className='flex gap-4 py-4'>
                <div className='flex-1'>
                  <h2 className='font-semibold text-xl'>{item.title}</h2>
                  <p
                    className='dot-4 rank-post-desc'
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
                <div style={{ width: 148 }}>
                  <Image
                    src='https://ttpl.vn/files/timeline_files/timeline_post_file61f345e84affa-1w--3-.jpg.webp'
                    alt='image'
                    width={148}
                    height={148}
                  />
                </div>
              </div>
              <div className='flex justify-between'>
                <div className='flex'>
                  <Image
                    src='/images/icons/like-circle.png'
                    alt='like icon'
                    width={20}
                    height={20}
                  />
                  8
                </div>
                <div className='flex gap-2'>
                  <span>84 lượt xem</span>
                  <span>0 bình luận</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      <div className='text-center'>
        <Button
          className='button-primary'
          size='large'
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Xem thêm
        </Button>
      </div>
    </div>
  );
}

export default RankPost;

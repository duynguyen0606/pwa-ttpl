'use client';

import { apiGetDetailPost } from '@/src/api/post';
import ArticleModel from '@/src/models/Article';
import { converDateToDays } from '@/src/utils';
import { Button, Carousel, Col, Row } from 'antd';
import Image from 'next/image';
import ImageLegacy from 'next/legacy/image';
import { useEffect, useState } from 'react';
import './style.scss';
import { useAppSelector } from '@/src/redux/hooks';
import CreateComment from '@/src/components/common/comment/CreateComment';
import { apiGetListCommentByPostId } from '@/src/api/home-page';
import CommentItem from '@/src/components/common/comment/CommentItem';
function Index({ params }: { params: { slug: string } }) {
  const { user } = useAppSelector((state) => state.authState);
  const { slug } = params;
  const [dataDetail, setDataDetail] = useState<ArticleModel | null>(null);
  const [dataComment, setDataComment] = useState<Array<any>>([]);
  useEffect(() => {
    if (slug)
      (async () => {
        const response = await apiGetDetailPost({ url_key: slug });
        if (response.status && response.data) {
          setDataDetail(response.data[0]);
        }
      })();
  }, [slug]);

  const handleFollow = () => {
    // setDataDetail((dataDetail) => {
    //   return {
    //     ...dataDetail,
    //     is_follow: '1',
    //   };
    // });
  };

  return (
    <>
      {dataDetail && (
        <Row gutter={16} className='bg-white p-4'>
          <Col span={16}>
            {/* <div className='rounded-lg overflow-hidden bg-white fixed-height'>
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
        </div> */}
            <div className='overflow-auto fixed-height'>
              <Carousel autoplay>
                {dataDetail.list_file.map((item, idx) => (
                  <div key={idx}>
                    {item?.name.includes('http') && (
                      <ImageLegacy
                        src={item.name}
                        alt='thumbnail'
                        layout='responsive'
                        height={407}
                        width={543}
                      />
                    )}
                  </div>
                ))}
              </Carousel>
              <div
                className='detail-post-description'
                dangerouslySetInnerHTML={{
                  __html: dataDetail.description,
                }}
              />
            </div>
          </Col>
          <Col span={8}>
            <div>
              <div className='flex justify-between'>
                <div className='flex gap-2'>
                  {dataDetail?.images.includes('http') && (
                    <Image
                      src={dataDetail.images}
                      alt='avatar'
                      width={40}
                      height={40}
                    />
                  )}
                  <div>
                    <div className='font-semibold text-xl'>
                      {dataDetail.created_by_full_name}
                    </div>
                    <div>
                      {converDateToDays({
                        date: dataDetail.created_at,
                      })}{' '}
                      ngày trước
                    </div>
                  </div>
                </div>
                <Button onClick={handleFollow}>Theo dõi</Button>
              </div>
              <div className='pt-4'>
                <div className='font-semibold text-xl'>{dataDetail.title}</div>
                <div className='detail-short-description dot-3'>
                  {dataDetail.short_description}
                </div>
              </div>
              <div className='flex justify-end gap-2 py-4'>
                <div>{dataDetail.view} lượt xem</div>
                <div>{dataDetail.total_comment} comment</div>
              </div>
              <div className='post-actions flex justify-between items-center mb-3'>
                <Button
                  className='button-flex'
                  icon={
                    <Image
                      src='/images/icons/like.png'
                      alt='like icon'
                      width={18}
                      height={18}
                    />
                  }
                >
                  Like
                </Button>
                <Button
                  className='button-flex'
                  icon={
                    <Image
                      src='/images/icons/dislike.png'
                      alt='like icon'
                      width={18}
                      height={18}
                    />
                  }
                >
                  Dislike
                </Button>
                <Button
                  className='button-flex'
                  icon={
                    <Image
                      src='/images/icons/comment.png'
                      alt='like icon'
                      width={18}
                      height={18}
                    />
                  }
                >
                  Comment
                </Button>
                <Button
                  className='button-flex'
                  icon={
                    <Image
                      src='/images/icons/share.png'
                      alt='like icon'
                      width={18}
                      height={18}
                    />
                  }
                >
                  Share
                </Button>
              </div>
              {user ? (
                <div className='py-4 w-full'>
                  <CreateComment
                    itemId={dataDetail.id}
                    onSetDataComment={(cmtParent) =>
                      setDataComment([cmtParent, ...dataComment])
                    }
                  />
                </div>
              ) : (
                <div>Bạn chưa đăng nhập!</div>
              )}
            </div>
          </Col>
        </Row>
      )}
    </>
  );
}

export default Index;

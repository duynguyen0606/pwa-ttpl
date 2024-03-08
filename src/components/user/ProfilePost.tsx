import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import { Avatar, Button, Col, Input, Row, Typography } from 'antd';

import { useAppSelector } from '@/src/redux/hooks';
import { Post } from '../common';
import ModalPost from '../modal/ModalPost';
import UserPost from '../common/home-page/UserPost';
import PostModel from '@/src/models/Post';
import ArticleModel from '@/src/models/Article';
import ProfileFollowComp from '../mobile/user/ProfileFollowComp';

function ProfilePost({
  listPost,
  listFollower,
  listWatching,
  showPost = true,
  onTransferFollower,
}: {
  listPost: Array<ArticleModel>;
  listFollower: Array<any>;
  listWatching: Array<any>;
  showPost?: boolean;
  onTransferFollower: (type: string) => void;
}) {
  const [openModalPost, setOpenModalPost] = useState(false);
  // const { listMyPost, listFollower, listWatching } = useAppSelector(
  //   (state) => state.userState
  // );
  const isMobileUI = useMediaQuery({
    query: '(max-width: 600px)',
  });

  return (
    <Row gutter={16}>
      <Col span={isMobileUI ? 24 : 8}>
        <div className='mb-4 p-4 bg-white rounded-lg'>
          <Typography.Title level={5}>
            Tìm kiếm công ty Luật/ Doanh nghiệp
          </Typography.Title>
          <Input
            prefix={
              <Image
                src='/images/icons/search.png'
                alt='search'
                width={20}
                height={20}
              />
            }
            width={'100%'}
            placeholder='Tìm kiếm'
          />
        </div>
        <div className='mb-4 p-4 bg-white rounded-lg'>
          <div>
            <div className='flex items-center justify-between mb-4'>
              <div className='flex flex-col'>
                <span className='font-semibold text-lg'>Người theo dõi</span>
                <span style={{ color: '#898A8D' }}>
                  {listFollower.length} người
                </span>
              </div>
              <Button
                type='text'
                onClick={() => onTransferFollower('follower')}
              >
                Xem tất cả
              </Button>
            </div>

            {listFollower?.length ? (
              <div>
                {listFollower.map((item, id) => (
                  <div
                    key={id}
                    className='flex items-center justify-between py-2 w-full'
                  >
                    <div className='flex items-center gap-2'>
                      <Avatar src={item?.avatar_user_follow} size='large' />
                      <div>{item?.name_user_follow}</div>
                    </div>
                    {item?.is_follow ? (
                      <Button>Đang theo dõi</Button>
                    ) : (
                      <Button>Theo dõi</Button>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className='mb-4 p-4 bg-white rounded-lg'>
          <div>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <span className='font-semibold text-lg'>Đang theo dõi</span>
                <span style={{ color: '#898A8D' }}>
                  {listWatching.length} người
                </span>
              </div>
              <Button
                type='text'
                onClick={() => onTransferFollower('watching')}
              >
                Xem tất cả
              </Button>
            </div>

            {listWatching?.length ? (
              <div>
                {listWatching.map((item, idx) => (
                  <div
                    key={idx}
                    className='flex items-center justify-between py-2 w-full'
                  >
                    <div className='flex items-center gap-2'>
                      <Avatar src={item?.avatar_user_watching} size='large' />
                      <div>{item?.name_user_watching}</div>
                    </div>
                    {item?.is_follow ? (
                      <Button>Đang theo dõi</Button>
                    ) : (
                      <Button>Theo dõi</Button>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </Col>
      <Col span={isMobileUI ? 24 : 16}>
        {showPost && (
          <div className='mb-4 p-4 bg-white rounded-lg'>
            <UserPost onOpenModal={() => setOpenModalPost(true)} />
          </div>
        )}
        <div className='p-4 rounded-lg'>
          {listPost?.length > 0 &&
            listPost.map((item) => (
              <Post post={new ArticleModel(item)} key={item.title} />
            ))}
        </div>
        <div className='flex items-center justify-center py-5'>
          <button
            className='
                            py-2 px-3
                            text-[var(--primary-color)] 
                            font-bold 
                            bg-[#FFF0E6] 
                        '
            //   onClick={() => setPagePost((prev) => prev + 1)}
          >
            Xem thêm
          </button>
        </div>
      </Col>

      <ModalPost
        open={openModalPost}
        onCancel={() => setOpenModalPost(false)}
      />
    </Row>
  );
}

export default ProfilePost;

import { Avatar, Button, Col, Input, Row, Typography } from 'antd';
import Image from 'next/image';
import UserPost from '../common/home-page/UserPost';
import { useState } from 'react';
import ModalPost from '../modal/ModalPost';
import { useAppSelector } from '@/src/redux/hooks';
import { Post } from '../common';
import PostModel from '@/src/models/Post';
import ArticleModel from '@/src/models/Article';

function ProfilePost() {
  const [openModalPost, setOpenModalPost] = useState(false);
  const { listMyPost, listFollower, listWatching } = useAppSelector(
    (state) => state.userState
  );
  return (
    <Row gutter={16}>
      <Col span={8}>
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
            <div className='flex items-center justify-between'>
              <span className='font-semibold text-lg'>Đang theo dõi</span>
              <Button type='text'>Xem tất cả</Button>
            </div>
            {listFollower?.length ? (
              <div>
                {listFollower.map((item) => (
                  <div className='flex items-center justify-between py-2 w-full'>
                    <div className='flex items-center gap-2'>
                      <Avatar src={item?.avatar_user_answer} size='large' />
                      <div>{item?.name_user_answer}</div>
                    </div>
                    <Button disabled>Đang theo dõi</Button>
                  </div>
                ))}
              </div>
            ) : (
              <div>0 người</div>
            )}
          </div>
        </div>
        <div className='mb-4 p-4 bg-white rounded-lg'>
          <div>
            <div className='flex items-center justify-between'>
              <span className='font-semibold text-lg'>Đang theo dõi</span>
              <Button type='text'>Xem tất cả</Button>
            </div>
            {listWatching?.length && (
              <div>
                {listWatching.map((item) => (
                  <div className='flex items-center justify-between py-2 w-full'>
                    <div className='flex items-center gap-2'>
                      <Avatar src={item?.avatar_user_answer} size='large' />
                      <div>{item?.name_user_answer}</div>
                    </div>
                    <Button disabled>Đang theo dõi</Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Col>
      <Col span={16}>
        <div className='mb-4 p-4 bg-white rounded-lg'>
          <UserPost onOpenModal={() => setOpenModalPost(true)} />
        </div>
        <div className='p-4 rounded-lg'>
          {listMyPost?.length > 0 &&
            listMyPost.map((item) => (
              <Post post={new ArticleModel(item)} key={item.title} />
            ))}
        </div>
      </Col>
      s
      <ModalPost
        open={openModalPost}
        onCancel={() => setOpenModalPost(false)}
      />
    </Row>
  );
}

export default ProfilePost;

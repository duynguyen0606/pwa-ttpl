import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import { Avatar, Button, Col, Input, Row, Typography } from 'antd';

import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { Post } from '../../common';
import ModalPost from '../../modal/ModalPost';
import UserPost from '../../common/home-page/UserPost';
import PostModel from '@/src/models/Post';
import ArticleModel from '@/src/models/Article';
import { setOpenModalLogin } from '@/src/redux/feature/authSlice';
import { apiFollowUser } from '@/src/api/home-page';
import { useMobileClient } from '@/src/utils/hook';

function ProfilePost({
  listPost,
  listFollower,
  listWatching,
  showPost = true,
  onTransferFollower,
  onLoadMore,
  onSetMapFollower,
  onSetMapFollowing,
}: {
  listPost: Array<ArticleModel>;
  listFollower: Array<any>;
  listWatching: Array<any>;
  showPost?: boolean;
  onTransferFollower: (type: string) => void;
  onLoadMore?: () => void;
  onSetMapFollower: (newListFollower: Array<any>) => void;
  onSetMapFollowing: (newListWatching: Array<any>) => void;
}) {
  const { token } = useAppSelector((state) => state.authState);
  const dispatch = useAppDispatch();
  const [openModalPost, setOpenModalPost] = useState(false);
  const isMobileClient = useMobileClient();

  // Follow other user
  const handleInFollow = async (id: string, type: 'follow' | 'unfollow') => {
    if (id && token) {
      const dataRes = await apiFollowUser({ id, token, type });
      if (dataRes.status) {
        onSetMapFollower(
          listFollower.map((item) => {
            if (item?.id_customer_follows == id) {
              return {
                ...item,
                follow: +dataRes.action === 1 ? '0' : '1',
              };
            }
            return item;
          })
        );
      }
    } else {
      dispatch(setOpenModalLogin(true));
    }
  };

  const handleInWatching = async (id: string, type: 'follow' | 'unfollow') => {
    if (id && token) {
      const dataRes = await apiFollowUser({ id, token, type });
      if (dataRes.status) {
        onSetMapFollowing(
          listWatching.map((item) => {
            if (item?.id_customer.toString() == id) {
              return {
                ...item,
                follow: +dataRes.action === 1 ? '0' : '1',
              };
            }
            return item;
          })
        );
      }
    } else {
      dispatch(setOpenModalLogin(true));
    }
  };

  return (
    <Row gutter={16}>
      <Col span={isMobileClient ? 24 : 8}>
        <div className='my-4 p-4 bg-white rounded-lg'>
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
          <div className='flex items-center justify-between mb-4'>
            <div className='flex flex-col'>
              <span className='font-semibold text-lg'>Người theo dõi</span>
              <span style={{ color: '#898A8D' }}>
                {listFollower.length} người
              </span>
            </div>
            <Button type='text' onClick={() => onTransferFollower('follower')}>
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
                  <Button
                    className={item?.follow == 1 ? 'button-primary' : ''}
                    onClick={() =>
                      handleInFollow(
                        item?.id_customer_follows.toString(),
                        item?.follow == 1 ? 'unfollow' : 'follow'
                      )
                    }
                  >
                    {item?.follow == 1 ? 'Bỏ theo dõi' : 'Theo dõi'}
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className='mb-4 p-4 bg-white rounded-lg'>
          <div className='flex items-center justify-between mb-4'>
            <div className='flex flex-col'>
              <span className='font-semibold text-lg'>Đang theo dõi</span>
              <span style={{ color: '#898A8D' }}>
                {listWatching.length} người
              </span>
            </div>
            <Button type='text' onClick={() => onTransferFollower('watching')}>
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
                  <Button
                    className={item?.follow == 1 ? 'button-primary' : ''}
                    onClick={() =>
                      handleInWatching(
                        item?.id_customer.toString(),
                        item?.follow == 1 ? 'unfollow' : 'follow'
                      )
                    }
                  >
                    {item?.follow == 1 ? 'Bỏ theo dõi' : 'Theo dõi'}
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </Col>
      <Col span={isMobileClient ? 24 : 16}>
        {showPost && (
          <div className='mb-4 p-4 bg-white rounded-lg'>
            <UserPost onOpenModal={() => setOpenModalPost(true)} />
          </div>
        )}
        <div className='p-4 rounded-lg'>
          {listPost?.length > 0 && (
            <>
              {listPost.map((item) => (
                <Post post={new ArticleModel(item)} key={item.title} />
              ))}
              <div className='flex items-center justify-center py-5'>
                <button
                  className='
                                        py-2 px-3
                                        text-[var(--primary-color)] 
                                        font-bold 
                                        bg-[#FFF0E6] 
                                    '
                  onClick={onLoadMore}
                >
                  Xem thêm
                </button>
              </div>
            </>
          )}
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

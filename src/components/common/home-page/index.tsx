'use client';

import { apiGetListPost } from '@/src/api/home-page';
import { Article, Category, Post } from '@/src/components/common';
import DefaultLayout from '@/src/components/layout';
import { Divider, Skeleton } from 'antd';
// import DefaultLayout from '@/src/components/layout';
import { setListPost } from '@/src/redux/feature/postSlice';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { useMobileClient } from '@/src/utils/hook';
import Sider from 'antd/es/layout/Sider';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ModalPost from '../../modal/ModalPost';
import UserPost from './UserPost';
import UserProfile from './UserProfile';

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [openDrawerAlert, setOpenDrawerAlert] = useState(false);
  const [openModalPost, setOpenModalPost] = useState(false);
  const { user, token } = useAppSelector((state) => state.authState);
  const { listPost, listArticle } = useAppSelector((state) => state.postState);
  const isMobileClient = useMobileClient();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const dataRes = await apiGetListPost({ page, token });
      if (dataRes.status) {
        dispatch(setListPost(dataRes.data));
      }
    })();
    return () => {
      dispatch(setListPost([]));
    };
  }, [token]);

  const loadMoreData = async () => {
    setPage((prev) => prev + 1);
    if (loading) {
      return;
    }
    setLoading(true);
    const res = await apiGetListPost({ page });
    if (res.status) {
      dispatch(setListPost([...listPost, ...res.data]));
    }
    setLoading(false);
  };

  return (
    <DefaultLayout>
      {!isMobileClient && (
        <div
          style={{
            overflow: 'auto',
            height: '90vh',
            minWidth: 300,
          }}
        >
          {user && <UserProfile />}
          <Category />
          <div className='text-lg' style={{ paddingTop: 50 }}>
            Quyền riêng tư, Điều khoản, Quảng cáo, Lựa chọn quảng cáo
          </div>
        </div>
      )}
      <div
        style={{ margin: !isMobileClient ? '0 16px' : 'unset' }}
        className='flex flex-col gap-4 overflow-auto fixed-height w-full'
      >
        {user && <UserPost onOpenModal={() => setOpenModalPost(true)} />}
        {
          <div
            id='scrollableDiv'
            style={{
              overflow: 'auto',
            }}
          >
            <InfiniteScroll
              dataLength={listPost.length}
              next={loadMoreData}
              hasMore={true}
              loader={
                <div
                  style={{
                    height: 740,
                    width: '100%',
                    padding: 16,
                    backgroundColor: '#fff',
                  }}
                >
                  <div className='flex justify-between mb-4'>
                    <div
                      style={{ backgroundColor: '#f0f0f0' }}
                      className='w-10 h-10 rounded-full rounded-lg'
                    />
                    <div
                      style={{
                        width: 150,
                        height: 40,
                        backgroundColor: '#f0f0f0',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      backgroundColor: '#f0f0f0',
                      width: '100%',
                      height: 412,
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: '#f0f0f0',
                      width: 200,
                      height: 20,
                      marginTop: 16,
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: '#f0f0f0',
                      width: '100%',
                      height: 20,
                      marginTop: 16,
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: '#f0f0f0',
                      width: '100%',
                      height: 20,
                      marginTop: 16,
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: '#f0f0f0',
                      width: '100%',
                      height: 20,
                      marginTop: 16,
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: '#f0f0f0',
                      width: '100%',
                      height: 20,
                      marginTop: 16,
                    }}
                  />
                  <div className='flex justify-between mt-8'>
                    <div
                      style={{
                        backgroundColor: '#f0f0f0',
                        width: 150,
                        height: 40,
                      }}
                      className='rounded-lg'
                    />
                    <div
                      style={{
                        backgroundColor: '#f0f0f0',
                        width: 150,
                        height: 40,
                      }}
                      className='rounded-lg'
                    />
                  </div>
                </div>
              }
              endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
              scrollableTarget='scrollableDiv'
            >
              {listPost.map((item, idx) => (
                <Post post={item} key={idx} />
              ))}
            </InfiniteScroll>
          </div>
        }
      </div>
      {!isMobileClient && (
        <Sider
          width={320}
          style={{
            backgroundColor: '#fff',
            position: 'sticky',
          }}
          className='h-full px-4 py-2 rounded-lg fixed-height'
        >
          <div className='font-medium text-lg'>
            Bài viết được xem nhiều nhất
          </div>
          {listArticle.length > 0 &&
            listArticle.map((item) => <Article article={item} key={item.id} />)}
        </Sider>
      )}
      {!isMobileClient && (
        <ModalPost
          open={openModalPost}
          onCancel={() => setOpenModalPost(false)}
        />
      )}
    </DefaultLayout>
  );
}

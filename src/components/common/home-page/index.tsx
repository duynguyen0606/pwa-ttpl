'use client';

import { apiGetListMostViewArticle, apiGetListPost } from '@/src/api/home-page';
import { Article, Category, Post } from '@/src/components/common';
import AlertMobile from '@/src/components/common/AlertMobile';
import DefaultLayout from '@/src/components/layout';
import ArticleModel from '@/src/models/Article';
import { Button, Divider, List, Skeleton } from 'antd';
// import DefaultLayout from '@/src/components/layout';
import Sider from 'antd/es/layout/Sider';
import { NextRequest, NextResponse } from 'next/server';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useMediaQuery } from 'react-responsive';
import UserProfile from './UserProfile';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import CustomEditor from '../customer-editor';
import ModalPost from '../../modal/ModalPost';
import UserPost from './UserPost';
import { setListPost } from '@/src/redux/feature/postSlice';

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [listArticle, setListArticle] = useState<Array<ArticleModel>>([]);
  // const [listPost, setListPost] = useState<Array<ArticleModel>>([]);
  const [page, setPage] = useState(1);
  const [openDrawerAlert, setOpenDrawerAlert] = useState(false);
  const [isMobileClient, setIsMobileClient] = useState(false);
  const [openModalPost, setOpenModalPost] = useState(false);
  const { user } = useAppSelector((state) => state.authState);
  const { listPost } = useAppSelector((state) => state.postState);
  const isMobileUI = useMediaQuery({
    query: '(max-width: 600px)',
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    setOpenDrawerAlert(isMobileUI);
    setIsMobileClient(isMobileUI);
  }, [isMobileUI]);

  useEffect(() => {
    (async () => {
      const dataRes = await apiGetListMostViewArticle();
      if (dataRes.status) {
        setListArticle(dataRes.data);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const dataRes = await apiGetListPost({ page });
      console.log(dataRes);
      if (dataRes.status) {
        dispatch(setListPost(dataRes.data));
      }
    })();
    return () => {
      dispatch(setListPost([]));
    };
  }, []);

  useEffect(() => {
    loadMoreData();
  }, []);

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
            height: '80vh',
            minWidth: 300,
          }}
        >
          {user && <UserProfile />}
          <Category />
        </div>
      )}
      <div className='mx-4 flex flex-col gap-4 overflow-auto fixed-height'>
        {user && <UserPost onOpenModal={() => setOpenModalPost(true)} />}
        {listPost.length > 0 && (
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
                <Skeleton style={{ width: '100%', height: 100 }} active />
              }
              endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
              scrollableTarget='scrollableDiv'
            >
              <div>
                {listPost.map((item) => (
                  <Post post={item} key={item?.id} />
                ))}
              </div>
            </InfiniteScroll>
          </div>
        )}
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

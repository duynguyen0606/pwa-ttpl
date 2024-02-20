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
import { useAppSelector } from '@/src/redux/hooks';
import CustomEditor from '../customer-editor';
import ModalPost from '../../modal/ModalPost';

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [listArticle, setListArticle] = useState<Array<ArticleModel>>([]);
  const [listPost, setListPost] = useState<Array<ArticleModel>>([]);
  const [page, setPage] = useState(1);
  const [openDrawerAlert, setOpenDrawerAlert] = useState(false);
  const [isMobileClient, setIsMobileClient] = useState(false);
  const [openModalPost, setOpenModalPost] = useState(false);
  const { user } = useAppSelector((state) => state.authState);
  const isMobileUI = useMediaQuery({
    query: '(max-width: 600px)',
  });

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
      const dataRes = await apiGetListPost({ page: 1 });
      if (dataRes.status) {
        setListPost(dataRes.data);
      }
    })();
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
    const res = await apiGetListPost({ page: page + 1 });
    if (res.status) {
      setListPost((prev) => [...prev, ...res.data]);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  return (
    <DefaultLayout>
      <div
        style={{
          overflow: 'auto',
          height: '80vh',
          minWidth: 300,
        }}
      >
        {!isMobileClient && (
          <>
            {user && <UserProfile />}
            <Category />
          </>
        )}
      </div>
      <div className='mx-4 flex flex-col gap-4 overflow-auto fixed-height'>
        {user && (
          <div>
            <Button onClick={() => setOpenModalPost(true)}>showModal</Button>
          </div>
        )}
        <div
          id='scrollableDiv'
          style={{
            overflow: 'auto',
          }}
        >
          <InfiniteScroll
            dataLength={listPost.length}
            next={loadMoreData}
            hasMore={listPost.length !== 15000}
            loader={<Skeleton style={{ width: '100%', height: 100 }} active />}
            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
            scrollableTarget='scrollableDiv'
          >
            <div>
              {listPost.map((item) => (
                <Post post={item} key={item.id} />
              ))}
            </div>
          </InfiniteScroll>
        </div>
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

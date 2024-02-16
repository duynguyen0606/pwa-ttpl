'use client';

import { apiGetListMostViewArticle, apiGetListPost } from '@/src/api/home-page';
import { Article, Category, Post } from '@/src/components/common';
import AlertMobile from '@/src/components/common/AlertMobile';
import HomePageDesktop from '@/src/components/common/home-page';
import DefaultLayout from '@/src/components/layout';
import HomePageMobile from '@/src/components/mobile/home-page';
import ArticleModel from '@/src/models/Article';
import { Divider, List, Skeleton } from 'antd';
// import DefaultLayout from '@/src/components/layout';
import Sider from 'antd/es/layout/Sider';
import { NextRequest, NextResponse } from 'next/server';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useMediaQuery } from 'react-responsive';

export default function Index() {
  const [transformView, setTransformView] = useState(false);
  const [openDrawerAlert, setOpenDrawerAlert] = useState(false);
  const [isMobileClient, setIsMobileClient] = useState(false);
  const isMobileUI = useMediaQuery({
    query: '(max-width: 600px)',
  });

  useEffect(() => {
    if (localStorage.getItem('device') == 'mobile') {
      setOpenDrawerAlert(false);
    } else {
      setOpenDrawerAlert(isMobileUI);
      setIsMobileClient(isMobileUI);
    }

    localStorage.setItem('device', isMobileUI ? 'mobile' : 'desktop');
  }, [isMobileUI]);

  useEffect(() => {
    setTransformView(localStorage.getItem('device') == 'mobile');
  }, []);

  return (
    <>
      {transformView ? <HomePageMobile /> : <HomePageDesktop />}
      {isMobileClient && (
        <AlertMobile
          handleTransformView={() => {
            setTransformView(true);
            setOpenDrawerAlert(false);
            localStorage.setItem('device', 'mobile');
          }}
          open={openDrawerAlert}
          onClose={() => setOpenDrawerAlert(false)}
        />
      )}
    </>
  );
}

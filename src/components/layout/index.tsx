'use client';

import { Layout } from 'antd';
import { Header } from '../common';
import { PropsWithChildren, useEffect, useState } from 'react';
import { Content } from 'antd/es/layout/layout';
import { StyleProvider } from '@ant-design/cssinjs';
import { useMediaQuery } from 'react-responsive';
import { useMobileClient } from '@/src/utils/hook';

function DefaultLayout(props: PropsWithChildren) {
  const { children } = props;
  const isMobileClient = useMobileClient();

  return (
    <StyleProvider hashPriority='low'>
      <Layout>
        <Header />
        <Content
          style={{
            marginTop: 80,
            height: 'calc(100vh - 80px)',
            // overflow: 'hidden',
          }}
        >
          <Layout
            style={{ maxWidth: 1440, margin: '0 auto' }}
            className={`${!isMobileClient && 'p-6'}`}
          >
            {children}
          </Layout>
        </Content>
      </Layout>
    </StyleProvider>
  );
}

export default DefaultLayout;

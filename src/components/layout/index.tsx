'use client';

import { Layout } from 'antd';
import { Header } from '../common';
import { PropsWithChildren } from 'react';
import { Content } from 'antd/es/layout/layout';
import { StyleProvider } from '@ant-design/cssinjs';
import { useMediaQuery } from 'react-responsive';

function DefaultLayout(props: PropsWithChildren) {
  const { children } = props;
  return (
    <StyleProvider hashPriority='low'>
      <Layout>
        <Header />
        <Content
          style={{
            marginTop: 80,
            height: 'calc(100vh - 80px)',
            overflow: 'hidden',
          }}
        >
          <Layout className='p-6'>{children}</Layout>
        </Content>
      </Layout>
    </StyleProvider>
  );
}

export default DefaultLayout;

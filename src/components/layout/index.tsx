'use client';

import { Layout } from 'antd';
import { Header } from '../common';
import { PropsWithChildren, useEffect, useState } from 'react';
import { Content } from 'antd/es/layout/layout';
import { StyleProvider } from '@ant-design/cssinjs';
import { useMediaQuery } from 'react-responsive';

function DefaultLayout(props: PropsWithChildren) {
  const { children } = props;
  const [isMobileClient, setIsMobileClient] = useState(false);
  const isMobileUI = useMediaQuery({
    query: '(max-width: 600px)',
  });

  useEffect(() => {
    setIsMobileClient(isMobileUI);
  }, [isMobileUI]);

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
          <Layout className={`${!isMobileClient && 'p-6'}`}>{children}</Layout>
        </Content>
      </Layout>
    </StyleProvider>
  );
}

export default DefaultLayout;

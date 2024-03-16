// import DefaultLayout from '@/src/components/layout';
import { apiGetListMostViewArticle } from '@/src/api/home-page';
import LayoutState from '@/src/components/layout/LayoutState';
import '@/src/styles/global.scss';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Spin } from 'antd';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import StoreProvider from './StoreProvider';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Thủ tục pháp luật',
  description: 'Thủ tục pháp luật',
  manifest: '/manifest.json',
  icons: { icon: '/icon-192x192.png', apple: '/icon-192x192.png' },
  // themeColor: '#042940',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articleRes = await apiGetListMostViewArticle();
  return (
    <StoreProvider>
      <html lang='en'>
        <body className={inter.className}>
          <AntdRegistry>
            <Suspense
              fallback={
                <div className='flex justify-center pt-20'>
                  <Spin size='large' />
                </div>
              }
            >
              <LayoutState listArticle={articleRes?.data}>
                {children}
              </LayoutState>
            </Suspense>
          </AntdRegistry>
        </body>
      </html>
    </StoreProvider>
  );
}

// import DefaultLayout from '@/src/components/layout';
import '@/src/styles/global.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StoreProvider from './StoreProvider';
import { useAppDispatch } from '@/src/redux/hooks';
import LayoutState from '@/src/components/layout/LayoutState';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Thủ tục pháp luật',
  description: 'Thủ tục pháp luật',
  manifest: '/manifest.json',
  icons: { icon: '/icon-192x192.png', apple: '/icon-192x192.png' },
  // themeColor: '#042940',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang='en'>
        <body className={inter.className}>
          <LayoutState>{children}</LayoutState>
        </body>
      </html>
    </StoreProvider>
  );
}

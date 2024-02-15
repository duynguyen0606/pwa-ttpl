// import DefaultLayout from '@/src/components/layout';
import DefaultLayout from '@/src/components/layout';
import '@/src/styles/global.scss';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Thủ tục pháp luật',
  description: 'Thủ tục pháp luật',
  manifest: '/manifest.json',
  icons: { icon: '/icon-192x192.png', apple: '/icon-192x192.png' },
  // themeColor: '#042940',
};

export default function SharedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DefaultLayout>{children}</DefaultLayout>;
}

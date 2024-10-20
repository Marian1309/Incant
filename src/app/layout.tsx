import type { FC, ReactNode } from 'react';

import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import './globals.scss';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-figtree'
});

export const metadata: Metadata = {
  title: 'Coin Management System',
  description:
    'A cryptocurrency monitoring system, allowing users to view, search, and manage coins, including real-time data such as price and market cap.',
  openGraph: {
    title: 'Coin Management System',
    description:
      'Monitor and manage cryptocurrency data including price, market cap, and more using this powerful Next.js-based system.',
    type: 'website',
    url: '',
    images: [
      {
        url: '',
        width: 40,
        height: 40,
        alt: 'Coin Management System'
      }
    ]
  }
};

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={figtree.variable}>{children}</body>
    </html>
  );
};

export default RootLayout;

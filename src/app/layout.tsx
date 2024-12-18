import type { FC, ReactNode } from 'react';

import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import { redirect } from 'next/navigation';

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

import { cn } from '@/lib/utils';

import Header from '@/components/header';

import './globals.scss';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-figtree'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://incant.vercel.app'),
  title: 'Coin Management System',
  description:
    'A cryptocurrency monitoring system, allowing users to view, search, and manage coins, including real-time data such as price and market cap.',
  openGraph: {
    title: 'Coin Management System',
    description:
      'Monitor and manage cryptocurrency data including price, market cap, and more using this powerful Next.js-based system.',
    type: 'website',
    url: 'http://incant.vercel.com',
    images: [
      {
        url: 'https://github.com/Marian1309/Incant/blob/master/src/app/opengraph-image.png?raw=true',
        width: 1920,
        height: 969,
        alt: 'Coin Management System'
      }
    ]
  }
};

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = async ({ children }) => {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) {
    redirect('/api/auth/login');
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(figtree.className, 'container mx-auto')}>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

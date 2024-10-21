import type { FC } from 'react';

import dynamic from 'next/dynamic';
import Link from 'next/link';

import { SignOutButton } from './ui/custom';

import { CreateNewCoin } from '@/features/create-new';
import { CoinSearch } from '@/features/search';

const DynamicMobileSearch = dynamic(
  () => import('../components/mobile-search')
);

const Header: FC = () => {
  return (
    <div className="flex items-center justify-between py-8">
      <div className="flex items-center gap-x-3">
        <Link className="cursor-pointer text-lg lg:text-2xl" href="/">
          Crypto Tracker
        </Link>

        <CreateNewCoin />
      </div>

      {/* Mobile */}
      <div className="gap-x-2 flex-center sm:hidden">
        <DynamicMobileSearch />

        <SignOutButton />
      </div>

      {/* Desktop */}
      <div className="hidden gap-x-2 sm:flex">
        <CoinSearch />

        <SignOutButton />
      </div>
    </div>
  );
};

export default Header;

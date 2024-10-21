import type { FC } from 'react';

import Link from 'next/link';

import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';

import { Button } from './ui/button';

import { CreateNewIcon } from '@/features/create-new';
import { CoinSearch } from '@/features/search';

const Header: FC = () => {
  return (
    <div className="flex items-center justify-between py-8">
      <div className="flex gap-x-3">
        <Link className="cursor-pointer text-lg sm:text-2xl" href="/">
          Crypto Tracker
        </Link>

        <CreateNewIcon />
      </div>

      <div className="flex gap-x-2">
        <CoinSearch />

        <Button
          className="text-xl transition-colors hover:bg-gray-200"
          variant="outline"
        >
          <LogoutLink>Sign out</LogoutLink>
        </Button>
      </div>
    </div>
  );
};

export default Header;

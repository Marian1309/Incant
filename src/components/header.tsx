'use client';

import type { FC } from 'react';

import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';

import { Button } from './ui/button';

const Header: FC = () => {
  return (
    <div className="flex items-center justify-between py-6 text-2xl">
      <h1>Crypto Tracker</h1>

      <div className="flex gap-x-2">
        <Button className="text-xl hover:text-white" variant="outline">
          <LogoutLink>Sign out</LogoutLink>
        </Button>
      </div>
    </div>
  );
};

export default Header;

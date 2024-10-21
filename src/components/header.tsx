'use client';

import type { FC } from 'react';

import Link from 'next/link';

import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';

import useSearch from '@/hooks/use-search';

import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';

import CoinForm from './coin-form';

const Header: FC = () => {
  const { searchTerm, handleChange, handleRedirect } = useSearch();

  return (
    <div className="flex items-center justify-between py-8">
      <div className="flex gap-x-3">
        <Link className="cursor-pointer text-xl sm:text-2xl" href="/">
          Crypto Tracker
        </Link>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="text-xl transition-colors hover:bg-gray-200"
              variant="outline"
            >
              Add Coin
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogTitle className="text-2xl">Add a new Coin</DialogTitle>
            <CoinForm />
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex gap-x-2">
        <Input
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleRedirect();
            }
          }}
          placeholder="Type your coin"
          value={searchTerm}
        />

        <Button
          className="text-xl transition-colors hover:bg-gray-200"
          onClick={handleRedirect}
          variant="outline"
        >
          Search
        </Button>

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

'use client';

import type { ChangeEvent, FC } from 'react';
import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';

import { Button } from './ui/button';
import { Input } from './ui/input';

const Header: FC = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleRedirect = () => {
    if (searchTerm) {
      setSearchTerm('');
      router.push(`/?search=${searchTerm}`);
    }
  };

  return (
    <div className="flex items-center justify-between py-8">
      <Link className="cursor-pointer text-xl sm:text-2xl" href="/">
        Crypto Tracker
      </Link>

      <div className="flex gap-x-2">
        <Input
          onChange={handleChange}
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

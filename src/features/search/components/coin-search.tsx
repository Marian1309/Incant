'use client';

import type { FC, KeyboardEvent } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import useSearch from '../hooks/use-search';

const CoinSearch: FC = () => {
  const { searchTerm, handleChange, handleRedirect } = useSearch();

  const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleRedirect();
    }
  };

  return (
    <div className="flex gap-x-2">
      <Input
        onChange={handleChange}
        onKeyDown={handleEnterPress}
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
    </div>
  );
};

export default CoinSearch;

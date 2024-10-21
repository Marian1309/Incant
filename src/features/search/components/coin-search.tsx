'use client';

import type { FC, KeyboardEvent } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import useSearch from '../hooks/use-search';

type Props = {
  className?: string;
};

const CoinSearch: FC<Props> = ({ className }) => {
  const { searchTerm, handleChange, handleRedirect } = useSearch();

  const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleRedirect();
    }
  };

  return (
    <div className={cn('flex gap-x-2', className)}>
      <Input
        onChange={handleChange}
        onKeyDown={handleEnterPress}
        placeholder="Type your coin"
        value={searchTerm}
      />

      <Button
        className="text-lg transition-colors lg:text-xl"
        onClick={handleRedirect}
        variant="outline"
      >
        Search
      </Button>
    </div>
  );
};

export default CoinSearch;

'use client';

import type { Dispatch, FC, KeyboardEvent, SetStateAction } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import useSearch from '../hooks/use-search';

type Props = {
  className?: string;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
};

const CoinSearch: FC<Props> = ({ className, setIsOpen }) => {
  const { searchTerm, handleChange, handleRedirect } = useSearch();

  const handleToggle = () => {
    handleRedirect();
    setIsOpen?.(false);
  };

  const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleToggle();
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
        onClick={handleToggle}
        variant="outline"
      >
        Search
      </Button>
    </div>
  );
};

export default CoinSearch;

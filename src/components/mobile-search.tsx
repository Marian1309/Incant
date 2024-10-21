'use client';

import type { FC } from 'react';
import { useState } from 'react';

import { Search } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from './ui/dialog';

import { CoinSearch } from '@/features/search';

const MobileSearch: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog onOpenChange={() => setIsOpen((prev) => !prev)} open={isOpen}>
      <DialogTrigger>
        <Search className="cursor-pointer pr-1" size={24} />
      </DialogTrigger>

      <DialogContent className="p-6">
        <DialogHeader>
          <DialogTitle>Coin Tracker</DialogTitle>
        </DialogHeader>

        <CoinSearch className="flex-col gap-y-4" setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default MobileSearch;

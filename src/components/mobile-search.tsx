'use client';

import { type FC, useState } from 'react';

import { Search } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from './ui/dialog';

import { CoinSearch } from '@/features/search';

const MobileNavigation: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog onOpenChange={() => setIsOpen((prev) => !prev)} open={isOpen}>
      <DialogTrigger>
        <Search className="cursor-pointer pr-1" size={24} />
      </DialogTrigger>

      <DialogContent className="p-6">
        <DialogHeader>
          <DialogTitle>Type coin</DialogTitle>
        </DialogHeader>

        <CoinSearch className="flex-col gap-y-4" />
      </DialogContent>
    </Dialog>
  );
};

export default MobileNavigation;

'use client';

import type { FC } from 'react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

import CoinForm from './coin-form';

const CoinDialog: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog onOpenChange={() => setIsOpen((prev) => !prev)} open={isOpen}>
      <DialogTrigger asChild>
        <Button
          className="text-sm transition-colors hover:bg-gray-200 sm:text-lg lg:text-xl"
          variant="outline"
        >
          Add Coin
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Add a new Coin</DialogTitle>
        </DialogHeader>

        <CoinForm setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default CoinDialog;

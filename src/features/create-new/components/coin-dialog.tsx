import type { FC } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

import CoinForm from './coin-form';

const CoinDialog: FC = () => {
  return (
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
  );
};

export default CoinDialog;

import type { FC } from 'react';

import { CoinCard } from './ui/custom';

import type { Coin } from '@/db/schema';

type Props = {
  coins: Coin[];
};

const CoinList: FC<Props> = ({ coins }) => {
  const renderCoins = () => {
    if (!coins.length) {
      return <div className="pt-12 text-center text-2xl">No coins found.</div>;
    }

    return (
      <div className="grid grid-cols-1 gap-4 pb-12 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {coins.map((coin) => (
          <CoinCard coin={coin} key={coin.id} />
        ))}
      </div>
    );
  };

  return <>{renderCoins()}</>;
};

export default CoinList;

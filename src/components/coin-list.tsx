import type { FC } from 'react';

import { CoinCard } from './ui/custom';

import { getCoins } from '@/actions';

const CoinList: FC = async () => {
  const coins = await getCoins();

  return (
    <div className="grid grid-cols-3 gap-4">
      {coins.map((coin) => (
        <CoinCard coin={coin} key={coin.id} />
      ))}
    </div>
  );
};

export default CoinList;

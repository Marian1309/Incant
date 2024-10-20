import type { FC } from 'react';

import { Card } from '../card';

import type { Coin } from '@/db/schema';

type Props = {
  coin: Coin;
};

const CoinCard: FC<Props> = ({ coin }) => {
  return (
    <Card key={coin.id}>
      <h3>{coin.name}</h3>
      <p>Price: ${coin.price}</p>
      <p>Market Cap: ${coin.marketCap}</p>
      <a href={coin.coinMarketCapLink}>View on CoinMarketCap</a>
    </Card>
  );
};

export default CoinCard;

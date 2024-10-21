import type { FC } from 'react';

import Link from 'next/link';

import { Button } from '../button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../card';

import type { Coin } from '@/db/schema';

type Props = {
  coin: Coin;
};

const CoinCard: FC<Props> = ({ coin }) => {
  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">{coin.name}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-lg font-bold">
          Price: ${coin.price.toLocaleString()}
        </p>

        <p className="text-sm">
          Market Cap: ${coin.marketCap.toLocaleString()}
        </p>
      </CardContent>

      <CardFooter>
        <Link href={coin.coinMarketCapLink}>
          <Button className="text-blue-500" variant="secondary">
            View on CoinMarketCap
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CoinCard;

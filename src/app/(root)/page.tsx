import type { NextPage } from 'next';

import CoinList from '@/components/coin-list';

import { getCoinsByName } from '@/actions';

type Props = {
  searchParams: {
    search: string;
  };
};

const HomePage: NextPage<Props> = async ({ searchParams }) => {
  const coins = await getCoinsByName(searchParams.search);

  return <CoinList coins={coins} searchTerm={searchParams.search} />;
};

export default HomePage;

import type { NextPage } from 'next';

import db from '@/db';
import { coinsSchema } from '@/db/schema';

const HomePage: NextPage = async () => {
  const coins = await db.select().from(coinsSchema);

  return <h1 className="pl-3 pt-2 text-xl text-accent">Homepage</h1>;
};

export default HomePage;

'use server';

import db from '@/db';
import { coinsSchema } from '@/db/schema';

export const getCoins = async () => {
  const coins = await db.select().from(coinsSchema);

  return coins;
};

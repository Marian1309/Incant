'use server';

import { ilike } from 'drizzle-orm';

import db from '@/db';
import type { Coin } from '@/db/schema';
import { coinsSchema } from '@/db/schema';

export const getAllCoins = async () => {
  const coins = await db.select().from(coinsSchema);

  return coins;
};

export const getCoinsByName = async (coinName: string) => {
  if (!coinName) {
    return getAllCoins();
  }

  const coins = await db
    .select()
    .from(coinsSchema)
    .where(ilike(coinsSchema.name, `%${coinName}%`));

  return coins;
};

export const addNewCoin = async (coin: Omit<Coin, 'id'>) => {
  await db.insert(coinsSchema).values({
    name: coin.name,
    price: coin.price,
    marketCap: coin.marketCap,
    coinMarketCapLink: coin.coinMarketCapLink
  });
};

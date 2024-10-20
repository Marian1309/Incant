import { numeric, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const coinsSchema = pgTable('coins', {
  id: serial('id').primaryKey().notNull(),
  name: text('name').notNull(),
  price: numeric('price').notNull(),
  marketCap: numeric('market_cap').notNull(),
  coinMarketCapLink: text('coin_market_cap_link').notNull()
});

export type Coin = typeof coinsSchema.$inferSelect;

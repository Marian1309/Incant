CREATE TABLE IF NOT EXISTS "coins" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"price" numeric NOT NULL,
	"market_cap" numeric NOT NULL,
	"coin_market_cap_link" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "coins" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"price" numeric,
	"market_cap" numeric,
	"coin_market_cap_link" text
);

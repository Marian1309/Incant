import db from '.';

import { coinsSchema } from './schema';

export const coinData = [
  {
    name: 'Bitcoin',
    price: 69000,
    marketCap: 600000000000,
    coinMarketCapLink: 'https://coinmarketcap.com/currencies/bitcoin/'
  },
  {
    name: 'Ethereum',
    price: 2715,
    marketCap: 250000000000,
    coinMarketCapLink: 'https://coinmarketcap.com/currencies/ethereum'
  },
  {
    name: 'Binance Coin',
    price: 600,
    marketCap: 42000000000,
    coinMarketCapLink: 'https://coinmarketcap.com/currencies/bnb'
  },
  {
    name: 'Cardano',
    price: 0.36,
    marketCap: 12000000000,
    coinMarketCapLink: 'https://coinmarketcap.com/currencies/cardano'
  },
  {
    name: 'XRP',
    price: 0.55,
    marketCap: 21000000000,
    coinMarketCapLink: 'https://coinmarketcap.com/currencies/xrp'
  },
  {
    name: 'Solana',
    price: 163,
    marketCap: 8000000000,
    coinMarketCapLink: 'https://coinmarketcap.com/currencies/solana'
  },
  {
    name: 'Polkadot',
    price: 4.55,
    marketCap: 7200000000,
    coinMarketCapLink: 'https://coinmarketcap.com/currencies/polkadot-new'
  },
  {
    name: 'Litecoin',
    price: 74.1,
    marketCap: 6500000000,
    coinMarketCapLink: 'https://coinmarketcap.com/currencies/litecoin'
  },
  {
    name: 'Chainlink',
    price: 11.9,
    marketCap: 3500000000,
    coinMarketCapLink: 'https://coinmarketcap.com/currencies/chainlink'
  },
  {
    name: 'Polygon',
    price: 0.38,
    marketCap: 9000000000,
    coinMarketCapLink: 'https://coinmarketcap.com/currencies/polygon'
  },
  {
    name: 'Dogecoin',
    price: 0.14,
    marketCap: 14000000000,
    coinMarketCapLink: 'https://coinmarketcap.com/currencies/dogecoin'
  },
  {
    name: 'Avalanche',
    price: 28.7,
    marketCap: 4300000000,
    coinMarketCapLink: 'https://coinmarketcap.com/currencies/avalanche'
  },
  {
    name: 'Shiba Inu',
    price: 0.00002,
    marketCap: 6000000000,
    coinMarketCapLink: 'https://coinmarketcap.com/currencies/shiba-inu'
  }
];

export const insertCoins = async () => {
  try {
    await db.insert(coinsSchema).values(coinData);
    console.log('Data successfully inserted!');
  } catch (error) {
    console.error('Error inserting data:', error);
  }
};

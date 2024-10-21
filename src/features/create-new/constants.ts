import type { CreateNewCoinFormField } from './types';

const CREATE_NEW_COIN_FORM_FIELDS: CreateNewCoinFormField[] = [
  {
    id: 1,
    name: 'name',
    title: 'Name'
  },
  {
    id: 2,
    name: 'price',
    title: 'Price',
    numbed: true
  },
  {
    id: 3,
    name: 'marketCap',
    title: 'Market Cap',
    numbed: true
  },
  { id: 4, name: 'coinMarketCapLink', title: 'Coin Market Cap Link' }
];

export default CREATE_NEW_COIN_FORM_FIELDS;

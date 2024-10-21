export type CreateNewCoinFormField = {
  id: number;
  name: 'name' | 'price' | 'marketCap' | 'coinMarketCapLink';
  title: string;
  numbed?: boolean;
};

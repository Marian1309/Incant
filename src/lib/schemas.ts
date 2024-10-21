import { z } from 'zod';

export const coinFormSchema = z.object({
  name: z.string().min(3, {
    message: 'Coin name must be at least 3 characters long.'
  }),
  price: z
    .string()
    .min(1, {
      message: 'Please provide a valid price.'
    })
    .refine((val) => !isNaN(Number(val)), {
      message: 'Price must be a valid number.'
    }),
  marketCap: z
    .string()
    .min(1, {
      message: 'Please provide the market capitalization.'
    })
    .refine((val) => !isNaN(Number(val)), {
      message: 'Market capitalization must be a valid number.'
    }),
  coinMarketCapLink: z.string().url({
    message: 'Please enter a valid CoinMarketCap link (URL).'
  })
});

export type CoinFormSchema = z.infer<typeof coinFormSchema>;

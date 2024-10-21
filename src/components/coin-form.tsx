'use client';

import type { FC } from 'react';

import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import type { CoinFormSchema } from '@/lib/schemas';
import { coinFormSchema } from '@/lib/schemas';

import { Button } from './ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from './ui/form';
import { Input } from './ui/input';

import { addNewCoin } from '@/actions';

const CoinForm: FC = () => {
  const router = useRouter();

  const form = useForm<CoinFormSchema>({
    resolver: zodResolver(coinFormSchema),
    defaultValues: {
      name: '',
      price: '',
      marketCap: '',
      coinMarketCapLink: ''
    }
  });

  const onSubmit = async (values: CoinFormSchema) => {
    try {
      await addNewCoin(values);
      form.reset();
      router.push('/');
    } catch (error) {
      console.error('Error adding new coin:', error);
    }
  };

  return (
    <Form {...form}>
      <form
        className="space-y-4 text-2xl"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[16px]">Coin name</FormLabel>

              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[16px]">Coin price</FormLabel>

              <FormControl>
                <Input type="number" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="marketCap"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[16px]">Coin Market Cap</FormLabel>

              <FormControl>
                <Input type="number" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="coinMarketCapLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[16px]">Coin MarketCap Link</FormLabel>

              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default CoinForm;

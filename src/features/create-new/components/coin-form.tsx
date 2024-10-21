'use client';

import type { FC } from 'react';

import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import type { CoinFormSchema } from '@/features/create-new/schemas';
import { coinFormSchema } from '@/features/create-new/schemas';

import CREATE_NEW_COIN_FORM_FIELDS from '../constants';

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
        {CREATE_NEW_COIN_FORM_FIELDS.map((formField) => (
          <FormField
            control={form.control}
            key={formField.id}
            name={formField.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[16px]">{formField.title}</FormLabel>

                <FormControl>
                  <Input type={formField.numbed ? 'number' : ''} {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default CoinForm;

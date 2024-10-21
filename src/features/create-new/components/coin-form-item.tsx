import type { FC } from 'react';

import type { UseFormReturn } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import type { CreateNewCoinFormField } from '../types';

type Props = {
  form: UseFormReturn<
    {
      name: string;
      price: string;
      marketCap: string;
      coinMarketCapLink: string;
    },
    any,
    undefined
  >;
  createNewCoinFormField: CreateNewCoinFormField;
};

const CoinFormItem: FC<Props> = ({ form, createNewCoinFormField }) => {
  return (
    <FormField
      control={form.control}
      name={createNewCoinFormField.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-[16px]">
            {createNewCoinFormField.title}
          </FormLabel>

          <FormControl>
            <Input
              type={createNewCoinFormField.numbed ? 'number' : ''}
              {...field}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CoinFormItem;

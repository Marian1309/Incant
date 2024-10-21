import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import type { CoinFormSchema } from '../schemas';
import { coinFormSchema } from '../schemas';

import { addNewCoin } from '@/actions';

const useCoin = (setIsOpen: Dispatch<SetStateAction<boolean>>) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
    setIsLoading(true);

    try {
      await addNewCoin(values);
      form.reset();
      router.push('/');
    } catch (error) {
      console.error('Error adding new coin:', error);
    } finally {
      setIsLoading(false);
      setIsOpen(false);
    }
  };

  return {
    form,
    onSubmit,
    isLoading
  };
};

export default useCoin;

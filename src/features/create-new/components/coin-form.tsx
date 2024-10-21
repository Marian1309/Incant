'use client';

import type { Dispatch, FC, SetStateAction } from 'react';

import { Button } from '@/components/ui/button';
import { Loader } from '@/components/ui/custom';
import { Form } from '@/components/ui/form';

import CREATE_NEW_COIN_FORM_FIELDS from '../constants';
import useCoin from '../hooks/use-coin';

import CoinFormItem from './coin-form-item';

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const CoinForm: FC<Props> = ({ setIsOpen }) => {
  const { form, onSubmit, isLoading } = useCoin(setIsOpen);

  return (
    <Form {...form}>
      <form
        className="flex flex-col justify-center gap-4 text-xl"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {CREATE_NEW_COIN_FORM_FIELDS.map((createNewCoinFormField) => (
          <CoinFormItem
            createNewCoinFormField={createNewCoinFormField}
            form={form}
            key={createNewCoinFormField.id}
          />
        ))}

        <Button type="submit">{isLoading ? <Loader /> : <p>Submit</p>}</Button>
      </form>
    </Form>
  );
};

export default CoinForm;

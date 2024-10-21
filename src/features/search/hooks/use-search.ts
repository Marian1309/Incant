import type { ChangeEvent } from 'react';
import { useState } from 'react';

import { useRouter } from 'next/navigation';

const useSearch = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleRedirect = () => {
    if (searchTerm === '') {
      router.push('/');
      return;
    }

    if (searchTerm) {
      setSearchTerm('');
      router.push(`/?search=${searchTerm}`);
    }
  };

  return {
    searchTerm,
    handleChange,
    handleRedirect
  };
};

export default useSearch;

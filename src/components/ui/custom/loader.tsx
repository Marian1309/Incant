'use client';

import type { FC } from 'react';

import { ClipLoader } from 'react-spinners';

type Props = {
  loading?: boolean;
};

const Loading: FC<Props> = ({ loading = true }) => {
  return (
    <div className="min-h-screen flex-center">
      <ClipLoader
        aria-label="Loading Spinner"
        color="#fff"
        loading={loading}
        size={16}
      />
    </div>
  );
};

export default Loading;

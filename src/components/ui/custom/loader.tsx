'use client';

import type { FC } from 'react';

import { ClipLoader } from 'react-spinners';

type Props = {
  loading?: boolean;
  color?: string;
  size?: number;
};

const Loading: FC<Props> = ({ loading = true, color = '#fff', size = 16 }) => {
  return (
    <div className="min-h-[calc(100vh-12rem)] flex-center">
      <ClipLoader
        aria-label="Loading Spinner"
        color={color}
        loading={loading}
        size={size}
      />
    </div>
  );
};

export default Loading;

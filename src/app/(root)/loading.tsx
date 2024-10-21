import type { FC } from 'react';

import { Loader } from '@/components/ui/custom';

const Loading: FC = () => {
  return <Loader color="#000" size={32} />;
};

export default Loading;

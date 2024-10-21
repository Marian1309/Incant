import type { FC } from 'react';

import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';

import { Button } from '../button';

const SignOutButton: FC = () => {
  return (
    <Button
      className="text-sm transition-colors hover:bg-gray-200 sm:text-lg lg:text-xl"
      variant="outline"
    >
      <LogoutLink>Sign out</LogoutLink>
    </Button>
  );
};

export default SignOutButton;

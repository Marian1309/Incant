import type { NextPage } from 'next';

import database from '@/db';
import { users } from '@/db/schema';

const HomePage: NextPage = async () => {
  const usersA = await database.select().from(users);

  console.log(usersA);

  return <h1 className="pl-3 pt-2 text-xl text-accent">Homepage</h1>;
};

export default HomePage;

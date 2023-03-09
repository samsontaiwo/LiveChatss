import { useState } from 'react';

import bcyrpt from 'bcrypt';

// import Login from '~/components/Login';
// import Register from '~/components/Register';
// import { prisma } from '~/services/db.server';
import { type ActionArgs, ActionFunction } from '@remix-run/node';

const Home = () => {
  return <>Welcome</>;
};

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  const data = await request.formData(); // from database
};

export default Home;

export { CatchBoundary } from '~/components/error/CatchBoundary';
export { ErrorBoundary } from '~/components/error/ErrorBoundary';

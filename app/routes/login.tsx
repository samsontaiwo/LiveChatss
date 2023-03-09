import { useState } from 'react';

import bcyrpt from 'bcrypt'

import Login from '~/components/Login';
import Register from '~/components/Register';
import { prisma } from '~/services/db.server';
import { type ActionArgs, ActionFunction } from '@remix-run/node';
import { User } from '@prisma/client';
import { createUserSession } from '~/lib/utils/session.server';

const Index = () => {
  const [curForm, setCurForm] = useState('login');

  // if (data.authenticated) {
  //   redirect('/home');
  // }

  return curForm === 'login' ? (
    <Login setCurForm={setCurForm} />
  ) : (
    <Register setCurForm={setCurForm} />
  );
};

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  const data = await request.formData();

  const username = data.get('username') as string;
  const password = data.get('password') as string;
  const registering = data.get('registering') as string;
  const name = data.get('name') as string;

  if (!username || !password || !name) {
    return {
      formError: 'form not submitted correctly',
    };
  }

  console.log({ username, password, name });

  if (registering === 'true') {
    const passwordHash = await bcyrpt.hash(password, 10);
    await prisma.user.create({ data: { passwordHash, username, name } });
  } else {
    const currentUser = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!currentUser) return null;
    let isCorrectPw = await bcyrpt.compare(password, currentUser.passwordHash);
    if (!isCorrectPw) return null;
    return createUserSession(currentUser.id, '/home');
  }
};



export default Index;

export { CatchBoundary } from '~/components/error/CatchBoundary';
export { ErrorBoundary } from '~/components/error/ErrorBoundary';

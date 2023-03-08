import { useState } from 'react';

import Login from '~/components/Login';
import Register from '~/components/Register';
import { prisma } from '~/services/db.server';
import { type ActionArgs, ActionFunction } from '@remix-run/node';

const Index = () => {
  const [curForm, setCurForm] = useState('login');

  return curForm === 'login' ? (
    <Login setCurForm={setCurForm} />
  ) : (
    <Register setCurForm={setCurForm} />
  );
};

export const action: ActionFunction = async ({request}: ActionArgs) => {
  const data = await request.formData()
  const username = data.get('username')
  const password = data.get('password')
  if(username && password){
    await prisma.user.create({data: {username, passwordHash: password}})
  }
}



export default Index;

export { CatchBoundary } from '~/components/error/CatchBoundary';
export { ErrorBoundary } from '~/components/error/ErrorBoundary';

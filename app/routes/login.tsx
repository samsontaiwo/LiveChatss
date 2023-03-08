import { useState } from 'react';

import Login from '~/components/Login';
import Register from '~/components/Register';

const Index = () => {
  const [curForm, setCurForm] = useState('login');

  return curForm === 'login' ? (
    <Login setCurForm={setCurForm} />
  ) : (
    <Register setCurForm={setCurForm} />
  );
};

export default Index;

export { CatchBoundary } from '~/components/error/CatchBoundary';
export { ErrorBoundary } from '~/components/error/ErrorBoundary';

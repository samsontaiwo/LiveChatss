import { useState } from 'react';

import Layout from '~/components/Layout';
import Login from '~/components/Login';
import Register from '~/components/Register';



const Index = () => {
  const [curForm, setCurForm] = useState('login')

  return (
    <Layout>
      {
        curForm === 'login' ? <Login setCurForm={setCurForm}/> : <Register setCurForm={setCurForm}/>
      }
    </Layout>
  );
};

export default Index;

export { CatchBoundary } from '~/components/error/CatchBoundary';
export { ErrorBoundary } from '~/components/error/ErrorBoundary';

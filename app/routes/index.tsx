import { useState } from 'react';

import Layout from '~/components/Layout';
import Login from '~/components/Login';

const Index = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(true);
  return (
    <Layout>
      <p>hello chat</p>
      <Login
        passwordVisibility={passwordVisibility}
        setPasswordVisibility={setPasswordVisibility}
      />
    </Layout>
  );
};

export default Index;

export { CatchBoundary } from '~/components/error/CatchBoundary';
export { ErrorBoundary } from '~/components/error/ErrorBoundary';

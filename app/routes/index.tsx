import { useState } from 'react';

import Layout from '~/components/Layout';
import Login from '~/components/Login';


const Index = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(true);
  const [loginPage, setLoginPage] = useState<boolean>(false);
  const [userCreateToggle, setUserCreateToggle] = useState<boolean>(true);
  return (
    <Layout>
      {userCreateToggle && <Login
        passwordVisibility={passwordVisibility}
        setPasswordVisibility={setPasswordVisibility}
        userCreateToggle={userCreateToggle} setUserCreateToggle={setUserCreateToggle}
        loginPage={loginPage} setLoginPage={setLoginPage}
      />}
    </Layout>
  );
};

export default Index;

export { CatchBoundary } from '~/components/error/CatchBoundary';
export { ErrorBoundary } from '~/components/error/ErrorBoundary';

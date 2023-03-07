import Layout from '~/components/Layout';
import Login from '~/components/Login'
import {useState} from 'react'

const Index = () => {
  const [userInfo, setUserInfo] = useState([])
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(true);
  return (
    <Layout>
      <p>hello chat</p>
      <Login passwordVisibility={passwordVisibility} setPasswordVisibility={setPasswordVisibility}/>
    </Layout>
  );
};

export default Index;

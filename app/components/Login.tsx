import { useState } from 'react';
import type { Dispatch, SetStateAction, ChangeEvent } from 'react';
import { ActionFunction } from '@remix-run/node';

const Login = ({ setCurForm }: { setCurForm: Dispatch<SetStateAction<string>> }) => {
  const [email, setEmail] = useState('');
  const [passw, setPassw] = useState('');

  const handlePasswChange = (eve: ChangeEvent<HTMLInputElement>) => {
    setPassw(eve.target.value);
  };
  const handleEmailChange = (eve: ChangeEvent<HTMLInputElement>) => {
    setEmail(eve.target.value);
  };
  const handleChangeFormToRegister = () => {
    setCurForm('register');
  };
  const emailPlaceHolder = 'youremail@domain.com';
  const passwordPlaceHolder = 'password';

  return (
    <div className="first">
      <form>
        <div className="email-passw">
          <label htmlFor="email">Email</label>
          <input
            className="email"
            value={email}
            type="email"
            placeholder={emailPlaceHolder}
            onChange={(eve) => handleEmailChange(eve)}
          />
          <br />
          <label htmlFor={passwordPlaceHolder}>Pasword</label>
          <input
            className="password"
            value={passw}
            type="password"
            placeholder={passwordPlaceHolder}
            onChange={(eve) => handlePasswChange(eve)}
          />
          <br />
          <button className="submit-login" type="submit" disabled={passw.length < 1}>
            ChatR
          </button>
        </div>
      </form>
      <button className="switch-page" onClick={() => handleChangeFormToRegister()}>
        Don&apos;t have an account? Click Here
      </button>
    </div>
  );
};

export default Login;

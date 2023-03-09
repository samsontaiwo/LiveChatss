 
import { useSubmit } from '@remix-run/react';
import { ActionFunction } from '@remix-run/node';
import { useState } from 'react';
import type { ChangeEvent, Dispatch, SetStateAction } from 'react';


/**
 * Create user session
 * After the login ->  
 * Failed submission ->
 * 
 * @returns a session
 */
const Login = ({ setCurForm }: { setCurForm: Dispatch<SetStateAction<string>> }) => {
  const [email, setEmail] = useState('');
  const [passw, setPassw] = useState('');
  const submit = useSubmit();

  const handlePasswChange = (eve: ChangeEvent<HTMLInputElement>) => {
    setPassw(eve.target.value);
  };
  const handleEmailChange = (eve: ChangeEvent<HTMLInputElement>) => {
    setEmail(eve.target.value);
  };
  const handleChangeFormToRegister = () => {
    setCurForm('register');
  };
  const handleLogin = () => {
    submit({password: passw, username: email}, {method: 'post', replace: true})
  }
  const passwordPlaceHolder = 'password';

  return (
    <div className="first">
      <form>
        <div className="email-passw">
          <label htmlFor="email">Username</label>
          <input
            className="email"
            value={email}
            type="text"
            placeholder={'Username'}
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
          <button
            className="submit-login"
            type="submit"
            disabled={passw.length < 1}
            onClick={() => handleLogin()}
          >
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

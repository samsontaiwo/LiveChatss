import React from 'react';
import { useState } from 'react';
import type { ChangeEvent, Dispatch, SetStateAction } from 'react';

const Register = ({ setCurForm }: { setCurForm: Dispatch<SetStateAction<string>> }) => {
  const [email, setEmail] = useState('');
  const [passw, setPassw] = useState('');
  const [name, setName] = useState('');

  const handlePasswChange = (eve: ChangeEvent<HTMLInputElement>) => {
    setPassw(eve.target.value);
  };
  const handleEmailChange = (eve: ChangeEvent<HTMLInputElement>) => {
    setEmail(eve.target.value);
  };
  const handleNameChange = (eve: ChangeEvent<HTMLInputElement>) => {
    setName(eve.target.value);
  };
  const handleChangeFormToLogin = () => {
    setCurForm('login');
  };
  const emailPlaceHolder = 'youremail@domain.com';
  const passwordPlaceHolder = 'password';

  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          type="text"
          id="name"
          placeholder="Fullname"
          onChange={(eve) => handleNameChange(eve)}
        />{' '}
        <br />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={email}
          type="email"
          placeholder={emailPlaceHolder}
          onChange={(eve) => handleEmailChange(eve)}
        />{' '}
        <br />
        <label htmlFor={passwordPlaceHolder}>Enter new pasword</label>
        <input
          id="password"
          value={passw}
          type="text"
          placeholder={passwordPlaceHolder}
          onChange={(eve) => handlePasswChange(eve)}
        />{' '}
        <br />
        <button type="submit" disabled={passw.length < 1}>
          Create
        </button>
      </form>
      <button onClick={() => handleChangeFormToLogin()}>Existing user? Login Here</button>
    </div>
  );
};

export default Register;

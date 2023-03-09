
import { useSubmit } from '@remix-run/react';
import { useState } from 'react';
import type { ChangeEvent, Dispatch, SetStateAction } from 'react';


const Register = ({ setCurForm }: { setCurForm: Dispatch<SetStateAction<string>> }) => {
  const [email, setEmail] = useState('');
  const [passw, setPassw] = useState('');
  const [name, setName] = useState('');
  const submit = useSubmit()

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
  const handleCreate = () => {
    submit(
      { name: name, password: passw, username: email, registering: 'true' },
      { method: 'post', replace: true },
    );
  }
  const passwordPlaceHolder = 'password';
  const condition = (passw.length < 1) || (name.length < 1) || (email.length < 1)

  return (
    <div className="first">
      <form>
        <div className="email-passw">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            type="text"
            className="name"
            placeholder="Fullname"
            onChange={(eve) => handleNameChange(eve)}
          />
          <br />
          <label htmlFor="email">Username</label>
          <input
            className="email"
            value={email}
            type="text"
            placeholder={'Username'}
            onChange={(eve) => handleEmailChange(eve)}
          />
          <br />
          <label htmlFor={passwordPlaceHolder}>Enter new pasword</label>
          <input
            className="password"
            value={passw}
            type="password"
            placeholder={passwordPlaceHolder}
            onChange={(eve) => handlePasswChange(eve)}
          />
          <br />
          <button className="submit-login" type="submit" disabled={condition} onClick={()=>handleCreate()}>
            Create
          </button>
          </div>
      </form>
      <button className="switch-page" onClick={() => handleChangeFormToLogin()}>Existing user? Login Here</button>
    </div>
  );
};

export default Register;

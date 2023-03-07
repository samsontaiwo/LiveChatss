
import React  from 'react';
import { useState } from 'react';
import { Dispatch, SetStateAction, ChangeEvent } from 'react';

const Login = ({curForm, setCurForm} : {curForm: string; setCurForm: Dispatch<SetStateAction<string>>}) => {

    const [email, setEmail] = useState('');
    const [passw, setPassw] = useState('');

    const handlePasswChange = (eve:ChangeEvent<HTMLInputElement>) => {
        setPassw(eve.target.value)
    }
    const handleEmailChange = (eve:ChangeEvent<HTMLInputElement>) => {
        setEmail(eve.target.value)
    }
    const handleChangeFormToRegister = () => {
        setCurForm('register')
    }
    const emailPlaceHolder = 'youremail@domain.com'; const passwordPlaceHolder = 'password';

    return (
        <div>
            <form>
                <label htmlFor='email'>Email</label>
                <input id='email' value={email} type='email' placeholder={emailPlaceHolder} onChange={(eve)=>handleEmailChange(eve)}/> <br/>
                <label htmlFor={passwordPlaceHolder}>Pasword</label>
                <input id='password' value={passw} type='password' placeholder={passwordPlaceHolder} onChange={(eve)=>handlePasswChange(eve)}/> <br/>
                <button type='submit' disabled={passw.length<1} >ChatR</button>
            </form>
            <button onClick={()=>handleChangeFormToRegister()}>Don't have an account? Click Here</button>
        </div>
    )
}

export default Login;
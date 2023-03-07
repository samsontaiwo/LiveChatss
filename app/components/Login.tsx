import React from 'react'
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Dispatch, SetStateAction} from 'react';
import ExistingUser from './ExistingUser';



const CreateUser = ({loginPage, setLoginPage, passwordVisibility, setPasswordVisibility, userCreateToggle, setUserCreateToggle} : { loginPage: boolean; setLoginPage: Dispatch<SetStateAction<boolean>>; userCreateToggle: boolean; setUserCreateToggle: Dispatch<SetStateAction<boolean>>; passwordVisibility: boolean; setPasswordVisibility : Dispatch<SetStateAction<boolean>>}) => {

    const handlePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility)
    }
    const handleExistingUser = () => {
        setUserCreateToggle(!userCreateToggle)
        setLoginPage(!loginPage)
    }


    return (
        <div className= 'login-page'>
            <form>
                <section>
                    <label htmlFor='firstName'>First Name: </label>
                    <label htmlFor='lastname'>Last Name: </label>
                </section>
                <section>
                    <input className='loginInput'type='text' placeholder='First Name'/>
                    <input type='text' placeholder='Last Name'/>
                </section>
                <section>
                    <label htmlFor='email-password'>
                        Email Address <br/>
                        <input type='email' placeholder='Enter your email'/> <br/>
                        Password  <br/>
                        <input type={passwordVisibility ? 'password' : 'text'} placeholder='Enter new password'/> 
                        <button className='password-toggle' onClick={()=>handlePasswordVisibility()}><FontAwesomeIcon icon={faEye}/></button>
                        <br/>     
                    </label> <br/>    
                </section>
                <button>Continue to ChatR</button>
            </form>
            <span>Already have an account?<button onClick={()=>handleExistingUser()}>Login</button></span>
            {loginPage && <ExistingUser 
                loginPage={loginPage}
                setLoginPage={setLoginPage}
                userCreateToggle={userCreateToggle} setUserCreateToggle={setUserCreateToggle}
      
            />}
        </div>
    )
}

export default CreateUser
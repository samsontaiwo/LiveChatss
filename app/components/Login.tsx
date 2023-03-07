import React from 'react'

type LoginValues = {
    firstName: string;
    lastName: string;
    email: string;
}

const Login = () => {
    return (
        <div className= 'login-page'>
            <form>
                <label htmlFor='firstName'>First Name: </label>
                <input type='text' placeholder='Enter Your First Name...'/>
                <br/>
                <label htmlFor='lastname'>Last Name: </label>
                <input type='text' placeholder='Enter Your Last Name...'/>
                <br/>
                <label htmlFor='emailAddress'>Email Address</label>
                <input type='email'/> 
                <br/>
                <label htmlFor='password'>Password</label>
                <input type='password'/> <br/>
                <button>Continue to ChatR</button>
            </form>
            <span>Already have an account?<a href='notworkingyet.html'>Login here</a></span>
        </div>
    )
}

export default Login
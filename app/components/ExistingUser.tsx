import React from 'react';
import type { Dispatch, SetStateAction} from 'react';

const ExistingUser = ({loginPage, setLoginPage, userCreateToggle, setUserCreateToggle} : {loginPage: boolean; setLoginPage:  Dispatch<SetStateAction<boolean>>; userCreateToggle: boolean; setUserCreateToggle:Dispatch<SetStateAction<boolean>>} ) => {

    const goBackToLogin = () => {
        setLoginPage(!loginPage)
        setUserCreateToggle(!userCreateToggle)
    }



    return(
        <div>
            vbb,mbj;kb;bjvgjhcghckghlkg';oh'h'o
            <span>Don't have an account?<button onClick={()=>goBackToLogin()}>Register</button></span>
        </div>
    )
}

export default ExistingUser
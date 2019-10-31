import React from 'react';
import './LoginForm.css';

function LoginForm(){
    return(
        <form className='loginform'>
            <div className='login-input'>
                <label>Username</label>
                <input type='text'
                />
                <label>Password</label>
                <input type='password'/>
            </div>
            <div className='login-buttons'>
                <button>Login</button>
                <button>Cancel</button>
            </div>
            
           
        </form>
    )
}


export default LoginForm;
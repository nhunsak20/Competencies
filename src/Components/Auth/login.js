import React, { useState } from 'react';

import './auth.scss'

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='auth-main'>
            <div className='auth-username-box'>
                <span className='auth-username'>Username</span>
                <input className='auth-username-input' type='text' placeholder='Enter username' onChange={event => setUsername(event.target.value)} />
            </div>
            <div className='auth-password-box'>
                <span className='auth-password'>Password</span>
                <input className='auth-password-input' type='password' placeholder='Enter password' onChange={event => setPassword(event.target.value)}/>
            </div>
            <div className='auth-button-box'>
                <button className='auth-button' onClick={() => props.loginFN(username, password)}>
                    Login
                </button>
            </div>
        </div>
    )
}

export default Login
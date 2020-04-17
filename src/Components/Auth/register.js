import React, { useState } from 'react';

import './auth.scss'

function Register(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='auth-main'>
            <div className='auth-username-box'>
                <span className='auth-username'>Username</span>
                <input className='auth-username-input' type='text' placeholder='Enter username' onChange={event => setUsername(event.target.value)}/>
            </div>
            <div className='auth-password-box'>
                <span className='auth-password'>Password</span>
                <input className='auth-password-input' type='password' placeholder='Enter password' onChange={event => setPassword(event.target.value)}/>
            </div>
            <div className='auth-button-box'>
                <button className='auth-button' onClick={() => props.registerFN(username, password)}>
                    Register
                </button>
            </div>
        </div>
    )
}

export default Register
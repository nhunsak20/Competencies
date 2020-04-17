import React from 'react';

import './auth.scss'

function Logout(props) {
    return (
        <div className='auth-main'>
            <div className='auth-button-box'>
                <button className='auth-button' onClick={() => props.logoutFN()}>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Logout
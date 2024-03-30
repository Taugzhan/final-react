import React, { useState } from 'react'
import axios from 'axios'

const Modal = ({ setLogin }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    console.log(username);
    console.log(password);

    const handleClick = () => {
        axios({
            method: 'POST',
            url: 'https://fakestoreapi.com/auth/login',
            data: JSON.stringify({
                username: username,
                password: password
            }),
            headers:
                { 'Content-Type': 'application/json' }
        })

            .then(({ data }) => setLogin(data))

    }
    return (
        <>
            {<p>You have signed in !</p> &&
                <>
                    <div className='modal'>
                        <h2 className='modal__title'>
                            Sign in
                        </h2>
                        <p className='modal__subtitle'>
                            Sign in to access your account
                        </p>
                        <div>
                            <input className='modal__input' onInput={handleUsername} type="email" name="email" id="email" placeholder="Your Eamil" />
                        </div>
                        <div>
                            <input className='modal__input' onInput={handlePassword} type="password" name="password" id="password" placeholder="Your Password" />
                        </div>
                        <div>
                            <button className='modal__button' onClick={handleClick} type="button" >Sign in</button>
                        </div>
                    </div>
                    <p> type for email -  mor_2314     </p>
                    <p>     type for password -  83r5^_</p>
                </>}
        </>
    )
}

export default Modal
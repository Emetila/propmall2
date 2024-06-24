import style from './style.module.css';
import React, { useState } from 'react';
import { ReactComponent as Image } from '../../assets/images/forgotimg.svg';
import { CustomButton } from '../../components/Button';

export const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleForgotPassword = async (event) => {
        event.preventDefault();

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            success: email === 'kminchelle@gmail.com',
            // method: 'POST',
            // body: JSON.stringify({
            //     email,
            //     password,
            // }),
            // headers: {
            //     'Content-type': 'application/json; charset=UTF-8',
            // },
        });

        if (response.success) {
            setMessage('Password reset link has been sent to your email.');
            setError('');
        } else {
            setError('No account found with that email.');
            setMessage('');
        }
    };

    return (
        <div className={style['forgot-password']}>
            <div>
                <Image className={style.image} />
            </div>
            <div className={style['forgot-password-container']}>
                <div className={style.title}>
                    <h2>Reset Password</h2>
                    <p>Enter your email address for verification code.</p>
                </div>
                <div className={style.forgotbox}>
                    <form onSubmit={handleForgotPassword}>
                        <div className={style['form-group']}>
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        {message && <p className={style.message}>{message}</p>}
                        {error && <p className={style.error}>{error}</p>}
                        <CustomButton className={style.button} onClick={() => { }}>Continue</CustomButton>
                    </form>
                </div>
            </div>
        </div>
    )
}
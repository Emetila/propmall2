import React, {useState} from "react";
import style from './style.module.css';
import { ReactComponent as Image } from '../../assets/images/forgotimg.svg';
import { CustomButton } from '../../components/Button';

export const ForgotPasswordContinue = () => {
    const [email] = useState('');
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
            setMessage('A verification link has been sent to your email.');
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
                    <p>Check your email and enter verification code to continue</p>
                </div>
                <div className={style.forgotbox}>
                    <div onSubmit={handleForgotPassword} className={style.formbox}>
                        <div className={style['form-group']}>
                            <p className={style.check}>
                            Enter verification code
                            </p>
                            <div className={style.container}>
                                <h2>5</h2>
                                <h2>4</h2>
                                <h2>3</h2>
                                <h2>2</h2>
                                <h2>1</h2>
                            </div>
                            {/* <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            /> */}
                        </div>
                        {message && <p className={style.message}>{message}</p>}
                        {error && <p className={style.error}>{error}</p>}
                        <CustomButton className={style.button} onClick={() => { }}><a href="/login">Submit</a></CustomButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
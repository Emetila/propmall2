import React, { useState } from 'react';
import style from './style.module.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { IoKeyOutline } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";
import { CustomButton } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { ReactComponent as Image } from '../../assets/images/loginimg.svg';
import { RxEyeClosed } from "react-icons/rx";
import { RxEyeOpen } from "react-icons/rx";

export const Login = ({ label, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Dummy API call
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        if (response.ok) {
            setIsLoggedIn(true);
        } else {
            setError('Invalid email or password');
        }
    };

    if (isLoggedIn) {
        navigate('/home');
    }

    return (
        <div className={style.signin}>
            <div className={style.leftsigin}>
                <div className={style.title}>
                    <Logo className={style.logo} />
                    <p className={style.intro}>live your dream with smart investments</p>
                </div>

                <div className={style.sigincontainer}>
                    <form className={style.form} onSubmit={handleSubmit}>
                        <div className={style['form-group']}>
                            <label className={style.label}>Email address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                        </div>
                        <div className={style['form-group']}>
                            <label>Password</label>
                            <input type={showPassword ? 'text' : 'password'} className={style['input-field']}
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                            <span
                                className={style['password-eye-icon']}
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <RxEyeOpen size={"1rem"} /> : <RxEyeClosed size={"1rem"} />}
                            </span>
                        </div>
                        {error && <div className="error">{error}</div>}
                        <div className={style.forgot}>
                            <IoKeyOutline className={style.keyicon} />
                            <p className={style.forgottext}>Forgot Password?</p>
                        </div>
                        <div className={style.signedin}>
                            <FaRegCircle className={style.circleicon} />
                            <p className={style.keepme}>Keep me signed in</p>
                        </div>
                        <CustomButton className={style.buttonsignup} onClick={() => { }}>Sign In</CustomButton>
                    </form>
                </div>

                <CustomButton className={style.googlesignin} onClick={() => { }} type="secondary">
                    Contine Using
                    <FcGoogle className={style.google} />
                    <FaApple className={style.apple} />
                </CustomButton>

                <p className={style.new}>Oh, you are new here? <span><a href="/signup">Sign Up</a></span></p>
            </div>

            <div className={style.right}>
                <Image className={style.image} />
                <div className={style.righttext}>
                    <h2>You are back!</h2>
                    <p>Excited to see how well your investment is doing?</p>
                    <a href="/signin">SignIn</a>
                </div>
            </div>
        </div>
    );


}
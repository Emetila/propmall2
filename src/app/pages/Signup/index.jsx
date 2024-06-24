import React, { useState } from 'react';
import style from './style.module.css';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import { IoKeyOutline } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";
import { CustomButton } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { HomePage } from '../LandingPage';

export const Login = () => {
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
            <Logo className={style.logo} />
            <p className={style.intro}>live your dream with smart investments</p>
        </div>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className="form-group">
          <label className={style.label}>Email address</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
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
        <CustomButton className="buttonsignup" onClick={()=>{}}>Sign In</CustomButton>
      </form>
    </div>
  );
  

}
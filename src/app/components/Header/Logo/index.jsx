import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../../assets/logo.svg'; // Path to your logo image
import style from '../LandingPageHeader.css'

export const LogoImage = () => {
  return (
    <div className="logo">
      <Link to="/home">
        <Logo className={style.logo} />
      </Link>
    </div>
  );
};

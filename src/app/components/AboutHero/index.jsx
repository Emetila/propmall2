import React from "react";
import style from './style.module.css';
import {ReactComponent as Image} from '../../assets/images/aboutimg.svg';

export const HeroSection = () => {
    return (
        <div className={style.container}>
           <div className={style.containerbox}>
           <Image className={style.image} />
            <p className={style.text}>Our journey began with a simple yet powerful idea: to make real estate 
            investment accessible, transparent, and profitable for everyone. Our founders, driven by a passion 
            for real estate and a commitment to innovation, set out to create a platform that would revolutionize 
            the way people invest in property. What started as a small team with a big dream that is growing into 
            a thriving company that empowers investors globally.</p>
           </div>
        </div>
    )
}
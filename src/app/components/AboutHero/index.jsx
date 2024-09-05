import React from "react";
import style from './style.module.css';
import { ReactComponent as Image } from '../../assets/images/aboutimg.svg';
import { ReactComponent as Image2 } from '../../assets/images/aboutimage2.svg';

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

            <div className={style.containerbox}>
                <div className={style.leftsection}>
                    <h1>We want to empower your financial future</h1>
                    <p className={style.text2}>We strive to create a platform where investors of all backgrounds
                        can achieve financial freedom through informed decisions and strategic investments. At PropMall,
                        we believe that everyone should have the opportunity to build wealth and secure their future through
                        real estate.</p>
                </div>
                <Image2 className={style.image2} />
            </div>
        </div>
    )
}
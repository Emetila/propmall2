import React from "react";
import style from './style.module.css';
import { CustomButton } from "../Button";
import { TbSeeding } from "react-icons/tb";
import {ReactComponent as Image} from '../../assets/images/connectimg.svg';

export const Community = () => {
    return (
        <div className={style.container}>
            <div className={style.textbox}>
                <h1>Connect, Share, and Grow with Us</h1>
                <p className={style.text}>Join the network of investors who trust us for profitable investments.</p>
                <div className={style.button}>
                <CustomButton className={style.joinbtn} onClick={()=>{}}>Get Started</CustomButton> 
                <TbSeeding className={style.icon} />
                </div>
                
            </div>
            <Image className={style.image} />
        </div>
    )
}
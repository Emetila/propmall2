import React, { useState } from "react";
import style from './style.module.css';
import { CustomButton } from "../Button";
import Counter from "./calculate";

export const Calculator = () => {
    
    return (
        <div className={style.calculator}>
            <div className={style.calc}>
                <p className={style.text}>Enter amount to invest (Naira)</p>
                <p className={style.amount}>5,000,000,000</p>
            </div>

            <div className={style.years}>
                <p className={style.text}>How long would you like to invest? (years)</p>
                <Counter className={style.yearincrease} />
            </div>
            <CustomButton className={style.calcbtn} onClick={()=>{}}>Calculate</CustomButton>
        </div>
    )
}
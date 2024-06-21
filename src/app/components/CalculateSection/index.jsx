import React from "react";
import {ReactComponent as CalcImage} from '../../assets/images/calculateimage.svg';
import style from './style.module.css';
import { Calculator } from "../Calculator";
import { List } from "./list";

export const Calculate = () => {
    return (<section>
        <div className={style.header}>
            <h1 className={style.title}>Let’s calculate your Dream Investment</h1>
            <p className={style.subtitle}>See what your potential returns on your investment look like</p>
        </div>

        <div className={style.calculate}>
            <Calculator />
            <CalcImage className={style.calcimage} />
            <List />
        </div>
    </section>)
}
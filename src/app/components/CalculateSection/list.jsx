import React from "react";
import style from './list.style.module.css'

export const List = () => {
    return (
        <div className={style.items}>
            <ul className={style.item1}>
                <li>Total investment</li>
                <li>Duration</li>
                <li>Rate of returns</li>
                <li>Expected earnings</li>
                <li>Gains</li>
            </ul>
            <ul className={style.item2}>
                <li>N5,000,000</li>
                <li>36 months (3 years)</li>
                <li>12.5%</li>
                <li>N7,119,140.63</li>
                <li>N2,119,140.63</li>
            </ul>
        </div>
    )
}
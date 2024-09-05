import React from "react";
import style from './style.module.css';
import { LuxuryProperties } from "./luxuryproperties";
import { CommercialProperties } from "./commercial";
import { ResidentialProperties } from "./residential";

export const Properties = () => {
    return (
        <div className={style.container}>
            <div className={style.headbox}>
                <h1>Featured Listing</h1>
                <h2>Luxury Apartments in Downtown</h2>
            </div>

            <div>
                <LuxuryProperties />
                <CommercialProperties />
                <ResidentialProperties />
            </div>
        </div>
    )
}
import React from "react";
import style from './style.module.css';
import { SearchComponent } from "./search";


export const PropertyHero = () => {
    return (
        <div className={style['proprty-hero']}>
            <div className={style.title}>
                <h1>Find properties you can own or co-own</h1>
                <p>Explore our curated selection of premium real estate investments designed to maximize your returns.</p>
            </div>

            <SearchComponent />
        </div>
    )
}
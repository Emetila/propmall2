import React from "react";
import style from './style.module.css';
import { LuxuryProducts } from "./product";

export const LuxuryProperties = () => {
    return (
        <div>
            <div className={style.products}>
                {LuxuryProducts.map((LuxuryProducts) => (
                    <div className={style.productbox}>
                        <div>
                            <img className={style.productsimages} src={LuxuryProducts.Image} alt={LuxuryProducts.Image}/>

                        </div>
                        <div className={style.wrap}>
                            <div className={style.name}>
                                <h5 className={style.amount}>{LuxuryProducts.amount}</h5>
                                <p className={style.title}>{LuxuryProducts.title}</p>
                                <div className={style.locationdistancebox}>
                                    <div className={style.locationbox}>
                                        <img className={style.locationicon} src={LuxuryProducts.location} alt={LuxuryProducts.location}/>
                                        <p className={style.locationtext}>{LuxuryProducts.address}</p>
                                    </div>
                                    <div className={style.locationbox}>
                                        <img className={style.locationicon} src={LuxuryProducts.distane} alt={LuxuryProducts.distane}/>
                                        <p className={style.locationtext}>{LuxuryProducts.distancenumber}</p>
                                    </div>
                                </div>
                                <div className={style.slotbox}>
                                    <img className={style.sloticon} src={LuxuryProducts.slot} alt={LuxuryProducts.slot}/>
                                    <p className={style.slottext}>{LuxuryProducts.slotnumber}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
import React from "react";
import style from './style.module.css';
import { ResidentialProduct } from "./product";

export const ResidentialProperties = () => {
    return (
        <div>
            <div className={style.headbox2}>
                <h1>Residential Homes in Suburbs</h1>
            </div>

            <div>
            <div className={style.products}>
                {ResidentialProduct.map((ResidentialProduct) => (
                    <div className={style.productbox}>
                        <div>
                            <img className={style.productsimages} src={ResidentialProduct.Image} alt={ResidentialProduct.Image}/>

                        </div>
                        <div className={style.wrap}>
                            <div className={style.name}>
                                <h5 className={style.amount}>{ResidentialProduct.amount}</h5>
                                <p className={style.title}>{ResidentialProduct.title}</p>
                                <div className={style.locationdistancebox}>
                                    <div className={style.locationbox}>
                                        <img className={style.locationicon} src={ResidentialProduct.location} alt={ResidentialProduct.location}/>
                                        <p className={style.locationtext}>{ResidentialProduct.address}</p>
                                    </div>
                                    <div className={style.locationbox}>
                                        <img className={style.locationicon} src={ResidentialProduct.distane} alt={ResidentialProduct.distane}/>
                                        <p className={style.locationtext}>{ResidentialProduct.distancenumber}</p>
                                    </div>
                                </div>
                                <div className={style.slotbox}>
                                    <img className={style.sloticon} src={ResidentialProduct.slot} alt={ResidentialProduct.slot}/>
                                    <p className={style.slottext}>{ResidentialProduct.slotnumber}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
}
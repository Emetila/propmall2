import React from "react";
import style from './style.module.css';
import { CommercialProduct } from "./product";

export const CommercialProperties = () => {
    return (
        <div className={style.headbox2}>
            <h1>Commercial Spaces for Business</h1>

            <div>
            <div className={style.products} key={CommercialProduct.id}>
                {CommercialProduct.map((CommercialProduct) => (
                    <div className={style.productbox}>
                        <div>
                            <img className={style.productsimages} src={CommercialProduct.Image} alt={CommercialProduct.Image}/>

                        </div>
                        <div className={style.wrap}>
                            <div className={style.name}>
                                <h5 className={style.amount}>{CommercialProduct.amount}</h5>
                                <p className={style.title}>{CommercialProduct.title}</p>
                                <div className={style.locationdistancebox}>
                                    <div className={style.locationbox}>
                                        <img className={style.locationicon} src={CommercialProduct.location} alt={CommercialProduct.location} />
                                        <p className={style.locationtext}>{CommercialProduct.address}</p>
                                    </div>
                                    <div className={style.locationbox}>
                                        <img className={style.locationicon} src={CommercialProduct.distane} alt={CommercialProduct.distane} />
                                        <p className={style.locationtext}>{CommercialProduct.distancenumber}</p>
                                    </div>
                                </div>
                                <div className={style.slotbox}>
                                    <img className={style.sloticon} src={CommercialProduct.slot} alt={CommercialProduct.slot}/>
                                    <p className={style.slottext}>{CommercialProduct.slotnumber}</p>
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
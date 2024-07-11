import React from 'react';
import {ReactComponent as Image1} from '../../assets/images/faqimage1.svg';
import {ReactComponent as Image2} from '../../assets/images/faqimage2.svg';
import style from './style.module.css'

export const FAQHero = () => {
    return (
        <section>
            <div>
            <Image1 className={style.image1} />
            <h1>FAQS</h1>
            <Image2 className={style.image2} />
        </div>
        </section>
    )
}
import React, { useState, useEffect } from "react";
import style from './style.module.css';
import { clientReviews } from "./review";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomButton } from "../Button";

export const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % clientReviews.length);
        }, 4000); // Change testimonials every 4 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + clientReviews.length) % clientReviews.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % clientReviews.length);
    };
    return (<section>
        <div className={style.title}>
            <h1>What our investors say About Us</h1>
            <div className={style.reviewcontainer}>

                <div style={{ transform: `translateX(-${(currentIndex * 25)}%)` }} className={style.reviews}>
                    {clientReviews.map((clientReviews, index) => (
                        <div className={style.reviewitem}>
                            <div key={index} className={style.reviewbox}>
                                <h2 className={style.name}>{clientReviews.name}</h2>
                                <p className={style.occupation}>{clientReviews.occupation}</p>
                                <img className={style.reviewimg} src={clientReviews.Image} />
                            </div>

                            <div className={style.reviewbody}>
                                <FaQuoteLeft className={style.quote} />
                                <p className={style.body}>{clientReviews.text}</p>
                                <FaQuoteRight className={style.quoteright} />
                            </div>

                        </div>

                    ))}
                </div>
                <div className={style.controls}>
                    <CustomButton className={style.previous} onClick={handlePrev}>Previous</CustomButton>
                    <CustomButton className={style.next} onClick={handleNext} type="secondary">Next</CustomButton>
                </div>
            </div>
        </div>
    </section>
    )
}
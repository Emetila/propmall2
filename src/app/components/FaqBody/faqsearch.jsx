import React, { useState } from "react";
import style from './style.module.css';
import { RiSearchLine } from "react-icons/ri";

export const FAQSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <section>
            <div className="faq-container">
                <RiSearchLine />
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>
        </section>
    )
}


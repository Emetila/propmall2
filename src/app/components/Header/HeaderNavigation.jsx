import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

<script src="dropdown.js"></script>

export const HeaderNavigation = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    return (<nav className="navbar">
        <div className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}></div>
        <ul className={props.className}>
            <li>
                <div class="dropdown">
                    <div className="dropbtn">Asset
                        <FaAngleDown className="dropdown-icon" onClick={toggleDropdown} /></div>
                    <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
                        <a href="/featured"><h3>Featured properties</h3>
                            <p>Find your next property buy</p></a>
                        <a href="/option2"><h3>Investments</h3>
                            <p>Explore investment options</p></a>
                    </div>
                    {/* <div class="dropdown-content">
                        <a href="#"><h3>Featured properties</h3>
                        <p>Find your next property buy</p></a>
                        <a href="#"><h3>Investments</h3>
                        <p>Explore investment options</p></a>
                        </div> */}
                </div>
            </li>
            <li>
                <a href="/ourstory">Our Story</a>
            </li>
            <li>
                <div class="dropdown">
                    <div className="dropbtn">Resources
                        <FaAngleDown className="dropdown-icon" /></div>
                    <div class="dropdown-content">
                        <a href="#"><h3>Blog</h3>
                            <p>Discover insights and trends</p></a>
                        <a href="#"><h3>Community</h3>
                            <p>Join our real estate network</p></a>
                        <a href="#"><h3>FAQs</h3>
                            <p>Get answer to your questions</p></a>
                    </div>
                </div>
            </li>
            <li>
                <div class="dropdown">
                    <div className="dropbtn">Support
                        <FaAngleDown className="dropdown-icon" /></div>
                    <div class="dropdown-content">
                        <a href="#"><h3>Live chat</h3>
                            <p>Chat with us in real time</p></a>
                        <a href="#"><h3>Contact us</h3>
                            <p>Reach us for more inquiries</p></a>
                    </div>
                </div>
            </li>
        </ul>
    </nav>
    )
}
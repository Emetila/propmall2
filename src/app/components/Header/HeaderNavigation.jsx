import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { NavLink, Link, useLocation } from "react-router-dom";

export const HeaderNavigation = (props) => {
    const location = useLocation();

  
    const [activeNav, setActiveNav] = useState('/');

    const handleNavClick = (path) => {
        setActiveNav(path);
    };
    const [activeMenu, setActiveMenu] = useState(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        setDropdownVisible(false);
    };

    const handleDropdownClick = () => {
        setDropdownVisible(!dropdownVisible);
    };
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
                {/* Asset
                <FaAngleDown className={`menu-item ${activeMenu === 'services' ? 'active' : ''}`}
                    onClick={handleDropdownClick} />
                {dropdownVisible && (
                    <div className="dropdown">
                        <div
                            className="dropdown-item"
                            onClick={() => handleMenuClick('service1')}
                        >
                            <h3>Featured properties</h3>
                            <p>Find your next property buy</p>
                        </div>
                        <div
                            className="dropdown-item"
                            onClick={() => handleMenuClick('service2')}
                        >
                            <h3>Investments</h3>
                            <p>Explore investment options</p>
                        </div>
                    </div>
                )} */}
                <div class="dropdown">
                    <NavLink to="/asset" onClick={() => handleNavClick('/asset')} className={activeNav === '/asset' ? 'nav-item active' : 'nav-item'}>Asset
                        <FaAngleDown className="dropdown-icon" onClick={toggleDropdown} /></NavLink>
                    <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
                        <Link to="/featured" ><h3>Featured properties</h3>
                            <p>Find your next property buy</p></Link>
                        <a href="/option2"><h3>Investments</h3>
                            <p>Explore investment options</p></a>
                    </div>
                    <div class="dropdown-content">
                        <a href="#"><h3>Featured properties</h3>
                            <p>Find your next property buy</p></a>
                        <a href="#"><h3>Investments</h3>
                            <p>Explore investment options</p></a>
                    </div>
                </div>
            </li>
            <li>
                <Link to="/ourstory" 
                className={`menu-item ${activeMenu === '/ourstory' ? 'active' : ''}`}
                onClick={() => handleMenuClick('/ourstory')}>Our Story</Link>
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
                        <Link to="/faq"><h3>FAQs</h3>
                            <p>Get answer to your questions</p></Link>
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
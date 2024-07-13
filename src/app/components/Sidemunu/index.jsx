import React, { useState } from "react";
import style from './style.module.css';
import { LogoImage } from "../Header/Logo";
import { ReactComponent as CartIcon } from '../../assets/icon/cart.svg';
import { LuLayoutDashboard } from "react-icons/lu";
import { LuWallet } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { LiaUserShieldSolid } from "react-icons/lia";
import { SlSettings } from "react-icons/sl";
import { ReactComponent as SupportIcon } from '../../assets/icon/support.svg';
import { RxQuestionMark } from "react-icons/rx";
import { RiLogoutCircleLine } from "react-icons/ri";

export const SideMenu = () => {
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

    return (
        <aside className={style.sidemenu}>

            <div className={style.menubox}>
                <LogoImage  className={style.logoimage}/>

                <nav>
                    <ul>
                        <li>
                            <NavLink to="/userdashboard"
                                onClick={() => handleNavClick('/dashboard')} className={activeNav === '/dashboard' ? 'nav-item active' : 'nav-item'}>
                                <LuLayoutDashboard className={style.icon} />
                                Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="/wallet"
                                onClick={() => handleNavClick('/wallet')} className={activeNav === '/wallet' ? 'nav-item active' : 'nav-item'}>
                                <LuWallet className={style.icon} />
                                Wallet</NavLink>
                        </li>
                        <li>
                            <NavLink to="/investment"
                                onClick={() => handleNavClick('/investment')} className={activeNav === '/investment' ? 'nav-item active' : 'nav-item'}>
                                <LiaUserShieldSolid className={style.icon} />
                                Investment portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart"
                                onClick={() => handleNavClick('/cart')} className={activeNav === '/cart' ? 'nav-item active' : 'nav-item'}>
                                <CartIcon className={style.icon} />
                                Cart</NavLink>
                        </li>
                        <li>
                            <NavLink to="/setting"
                                onClick={() => handleNavClick('/setting')} className={activeNav === '/setting' ? 'nav-item active' : 'nav-item'}>
                                <SlSettings className={style.icon} />
                                Settings</NavLink>
                        </li>
                        <li>
                            <NavLink to="/support"
                                onClick={() => handleNavClick('/support')} className={activeNav === '/support' ? 'nav-item active' : 'nav-item'}>
                                <SupportIcon className={style.icon} />
                                Support</NavLink>
                        </li>
                        <li>
                            <NavLink to="/faqs"
                                onClick={() => handleNavClick('/faqs')} className={activeNav === '/faqs' ? 'nav-item active' : 'nav-item'}>
                                <RxQuestionMark className={style.icon} />
                                FAQs</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

            <li>
                <NavLink to="/logout"
                    onClick={() => handleNavClick('/logout')} className={activeNav === '/logout' ? 'nav-item active' : 'nav-item'}>
                    <RiLogoutCircleLine className={style.icon} />
                    Log out</NavLink>
            </li>
        </aside>
    )
}
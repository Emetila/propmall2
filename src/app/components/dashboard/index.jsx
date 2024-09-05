import React, { useState } from "react";
import style from './style.module.css';
import { SlSettings } from "react-icons/sl";
import { IoIosNotificationsOutline } from "react-icons/io";
import { ReactComponent as UserIcon } from '../../assets/images/user.svg';
import { RiArrowDropDownLine } from "react-icons/ri";
import { VscEye } from "react-icons/vsc";
import { IoIosAddCircleOutline } from "react-icons/io";
import { ReactComponent as TroyIcon } from '../../assets/icon/troy.svg';
import { CiImageOn } from "react-icons/ci";
import { GoLog } from "react-icons/go";
import { PiChartBarLight } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";

export const DashboardBody = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleMenuClick = (menu) => {
        setDropdownVisible(false);
    };

    const handleDropdownClick = () => {
        setDropdownVisible(!dropdownVisible);
    };
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    return (
        <div className={style.container}>
            <header className={style.header}>
                <h1>Dashboard</h1>
                <nav className={style.navigation}>
                    <SlSettings className={style.setting} />
                    <IoIosNotificationsOutline className={style.notificationicon} />
                    <div className={style.usericonbox}>
                        <UserIcon className={style.usericon} />
                        <p>Tiffany’s profile</p>
                        <RiArrowDropDownLine className={style.dropdown} onClick={toggleDropdown} />
                        <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
                            <Link to="/myportfolio" >
                                <CiImageOn />
                                <p>My portfolio</p></Link>
                            <Link to="/myportfolio" >
                                <GoLog />
                                <p>Transaction History</p></Link>
                            <Link to="/myportfolio" >
                                <PiChartBarLight />
                                <p>Investments</p></Link>
                            <Link to="/myportfolio" >
                                <CiSettings />
                                <p>Settings</p></Link>
                            <Link to="/login">Log out</Link>
                        </div>
                    </div>
                </nav>
            </header>

            <div>
                <div className={style.investwalletbox}>
                    <div className={style.walletbox}>
                        <div className={style.wallethead}>
                            <p>Wallet balance</p>
                            <h1>$4,500,000</h1>
                        </div>
                        <div className={style.investbox}>
                            <div className={style.invest}>
                                <VscEye className={style.eyeicon} />
                                <p>View investment balance</p>
                            </div>
                            <div className={style.addbox}>
                                <IoIosAddCircleOutline className={style.addicon} />
                                <p>Add money</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.investmentbox}>
                        <p className={style.investmentboxtitle}>Your investments</p>
                        <div className={style.investlist}>
                            <div className={style.troybox}>
                                <div className={style.troyiconbox}>
                                    <TroyIcon className={style.troyicon} />
                                    <p>Troy</p>
                                </div>
                                <p className={style.amount}>$200,000.00</p>
                                <p className={style.return}>monthly returns</p>
                                <p className={style.percentage}>+1.68%</p>
                            </div>
                            <div className={style.versacebox}>
                                <div className={style.troyiconbox}>
                                    <TroyIcon className={style.troyicon2} />
                                    <p className={style.tryoyicontext}>Versace</p>
                                </div>
                                <p className={style.amount2}>$55,000.00</p>
                                <p className={style.return2}>monthly returns</p>
                                <p className={style.percentage2}>+1.68%</p>
                            </div>
                            <div className={style.mountbox}>
                                <div className={style.troyiconbox}>
                                    <TroyIcon className={style.troyicon} />
                                    <p>Mount</p>
                                </div>
                                <p className={style.amount}>$273,410.00</p>
                                <p className={style.return}>monthly returns</p>
                                <p className={style.percentage}>+1.68%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
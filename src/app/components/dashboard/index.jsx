import React from "react";
import style from './style.module.css';
import { SlSettings } from "react-icons/sl";
import { IoIosNotificationsOutline } from "react-icons/io";
import { ReactComponent as UserIcon } from '../../assets/images/user.svg';
import { RiArrowDropDownLine } from "react-icons/ri";
import { VscEye } from "react-icons/vsc";
import { IoIosAddCircleOutline } from "react-icons/io";
import { ReactComponent as TroyIcon } from '../../assets/icon/troy.svg';

export const DashboardBody = () => {
    return (
        <div className={style.container}>
            <header className={style.header}>
                <h1>Dashboard</h1>
                <nav>
                    <SlSettings className={style.setting} />
                    <IoIosNotificationsOutline className={style.notificationicon} />
                    <div>
                        <UserIcon className={style.usericon} />
                        <p>Tiffany’s profile</p>
                        <RiArrowDropDownLine className={style.dropdown} />
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
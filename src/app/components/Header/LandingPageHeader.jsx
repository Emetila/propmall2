import './LandingPageHeader.css'
import React from 'react';
import { HeaderNavigation } from './HeaderNavigation';
import { CustomButton } from '../Button';
import { LogoImage } from './Logo';
import { IoMdMenu } from "react-icons/io";

// function useState(initialValue) {
//     let val = initialValue
//     function change(newValue) {
//         val = newValue
//     }

//     return [val, change]
// }
export const LandingPageHeader = () => {
    const [showMenu, setMenu] = React.useState(false);

    const toggleMenu = () => {
        setMenu(showMenu === false)
    }

    return (<header className='headercontainer'>
        <div>
            <LogoImage />
        </div>
        <IoMdMenu className='menu-icon' onClick={toggleMenu} />
        <div className='menu'>
            <HeaderNavigation className={showMenu ? 'mobile' : ''}/>
        </div>
        <div className="button">
            <CustomButton  className="login" onClick={()=>{}} type="secondary"><a href="/login">Login</a></CustomButton>
            <CustomButton className="buttonsignup" onClick={()=>{}}>Sign Up</CustomButton>
        </div>
    </header>)
}



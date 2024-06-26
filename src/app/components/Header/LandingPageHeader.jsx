import './LandingPageHeader.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderNavigation } from './HeaderNavigation';
import { CustomButton } from '../Button';
import { LogoImage } from './Logo';
// import { ReactComponent as Menuicon } from '../../assets/Icons/menu.svg'

// function useState(initialValue) {
//     let val = initialValue
//     function change(newValue) {
//         val = newValue
//     }

//     return [val, change]
// }
export const LandingPageHeader = () => {
    // const [showMenu, setMenu] = React.useState(false);

    // const toggleMenu = () => {
    //     setMenu(showMenu === false)
    // }

    return (<header className='header'>
        <div>
            <LogoImage />
        </div>
        {/* <Menuicon className='menu-icon' onClick={toggleMenu} fill='#57B890' /> */}
        <div className='menu'>
            <HeaderNavigation />
        </div>
        <div className="button">
            <CustomButton className="login" onClick={()=>{}} type="secondary"><a href="/">Login</a></CustomButton>
            <CustomButton className="buttonsignup" onClick={()=>{}}>Sign Up</CustomButton>
        </div>
    </header>)
}



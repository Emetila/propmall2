import './LandingPageHeader.css'
import React from 'react';
// import {ReactComponent as Menuicon} from '../../assets/icons/menu.svg';
import { HeaderNavigation } from './HeaderNavigation';
import { CustomButton } from '../Button';
import {ReactComponent as Logo} from '../../assets/logo.svg'
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
            <Logo className='logo' />
        </div>
        {/* <Menuicon className='menu-icon' onClick={toggleMenu} fill='white' /> */}
        <div className='menu'>
            <HeaderNavigation />
        </div>
        <div className="button">
            <CustomButton className="login" onClick={()=>{}} type="secondary">Login</CustomButton>
            <CustomButton className="buttonsignup" onClick={()=>{}}>Sign Up</CustomButton>
        </div>
    </header>)
}



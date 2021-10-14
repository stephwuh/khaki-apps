import React from 'react';
import sideNav from './sideNav.module.css';

const SideNav = () => {
    return(
        <div className={sideNav.container}>
            {/* <div data-testid='logo'>Logo!</div> */}
            <ul data-testid='menu' className={sideNav.menu}>
                <li className={sideNav.navLinks}>Dashboard</li>
                <li className={sideNav.navLinks}>Job Search</li>
                <li className={sideNav.navLinks}>Profile</li>
                <li className={sideNav.navLinks}>Sign Out</li>
            </ul>
        </div>
    )
}

export default SideNav;
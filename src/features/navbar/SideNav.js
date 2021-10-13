import React from 'react';

const SideNav = () => {
    return(
        <div>
            <div data-testid='logo'>Logo!</div>
            <ul data-testid='menu'>
                <li>Dashboard</li>
                <li>Job Search</li>
                <li>Profile</li>
                <li>Sign Out</li>
            </ul>
        </div>
    )
}

export default SideNav;
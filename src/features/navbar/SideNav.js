import React from 'react';
import sideNav from './sideNav.module.css';

const SideNav = () => {
    return(
    
            
            <nav data-testid='menu' className="nav">
                <a data-testid='logo' className="navbar-brand" href="#">Khaki Apps</a>
                <form>
                    <input type="text" placeholder="Search Job App"/>
                </form>
                <div>
                    
                </div>

            </nav>

    )
}

export default SideNav;
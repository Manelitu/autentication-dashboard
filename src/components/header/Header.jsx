import React from "react";
import './Header.css';
import sunneLogo from './../../assets/img/sunne-logo2.svg';
import DashboardMenu from '../menu-dashboard/MenuDash';
import barsIcon from './../../assets/icons/bars.svg';

const Header = props => {
    return (
        <header>
            <div className="user-info">
                <div style={{textAlign: 'center'}}>
                    <img 
                        className="user-img" 
                        src={sunneLogo} 
                        alt="user icon">
                    </img>
                </div>
                    <nav>
                        <DashboardMenu 
                            icon={barsIcon}
                            option="Profile" 
                            option2="Support" 
                            option3="Logout"/>
                    </nav> 
            </div>
        </header>
    )
}

export default Header;
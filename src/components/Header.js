import React, {useState} from 'react';
import user from '../assets/images/user.png';

// Icons
import DehazeIcon from '@material-ui/icons/Dehaze';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

// moment
import moment from "moment";

const Header = () => {

    
    return (
        <header>
            <div class="left-header">
                <h1>
                    {/* <label for="nav-toggle">
                        <span>
                            <DehazeIcon/>
                        </span>
                    </label> */}
                </h1>
                <div>
                    <h4>
                        Balances
                    </h4>
                    <p>Today, {moment().format("DD-MM-YYYY")}</p>
                </div>
            </div>

            {/* <div class="search-wrapper">
                <span class="las la-search"></span>
                <input type="search" placeholder="Search here..." />
            </div>  */}
        
            <div class="user-wrapper">
                <div class="notification-info">
                    <span>
                        <NotificationsNoneIcon/>
                    </span>
                </div>
                <img class="user-wrapper-img" src={user} alt="" width="31.25" height="37.5" alt="User Icon"/>
                {/* <div>
                    <h4>John Doe</h4>
                    <small>Administrator</small>
                </div> */}
            </div>
        </header>
    )
}

export default Header;

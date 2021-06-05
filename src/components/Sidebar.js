import React from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

// Icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import PeopleIcon from '@material-ui/icons/People';
import TimelineIcon from '@material-ui/icons/Timeline';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupIcon from '@material-ui/icons/Group';
import CallIcon from '@material-ui/icons/Call';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Sidebar = () => {
    return (
        <div>import logo from './logo.png';
            <input type="checkbox" id="nav-toggle"/>
            <div className="sidebar">
                <div className="sidebar-brand">
                    <h2>
                        <span>
                            {/* <img className="logo2" src="img/logo2.png" alt=""> */}
                        </span>
                        <span>
                            <img className="logo" src={logo} alt="Klasha"/>
                        </span>
                    </h2>
                </div>

                <div className="sidebar-menu">
                    <h4>Main Pages</h4>
                    <ul>
                        <li>
                            <a href="" className="active">
                                <span>
                                    <DashboardIcon/>
                                </span>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>
                                    <AccountBalanceWalletIcon/>
                                </span>
                                <span>Balances</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>
                                    <PeopleIcon/>
                                </span>
                                <span>Customers</span>
                        
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>
                                    <TimelineIcon/>
                                </span>
                                <span>Analytics</span>
                            </a>
                        </li>
                    </ul>
                    <h4>General</h4>
                    <ul>
                        <li>
                            <a href="">
                                <span>
                                    <SettingsIcon/>
                                </span>
                                <span>Settings</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>
                                    <GroupIcon/>
                                </span>
                                <span>Team</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>
                                    <CallIcon/>
                                </span>
                                <span>Contact</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>
                                    <ExitToAppIcon/>
                                </span>
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import './dash-sidebar.css';

const DashboardSidebar = () => {
    return (
        <div className="flex flex-col w-60 uni_sidebar_main">
            <div className="flex items-center justify-center"><p>logo</p></div>

            <div className="uni_sidebar_section">
                <NavLink to="/uni-dashboard" className={({ isActive }) => isActive ? 'uni_sidebar_option active' : 'uni_sidebar_option'}>
                    <div className="uni_sidebar_option_left"></div>
                    <div className="uni_sidebar_option_main"><p className="text-sm font-medium">Dashboard</p></div>
                </NavLink>
                <NavLink to="/anlytics" className={({ isActive }) => isActive ? 'uni_sidebar_option active' : 'uni_sidebar_option'}>
                    <div className="uni_sidebar_option_left"></div>
                    <div className="uni_sidebar_option_main"><p className="text-sm font-medium">Analytics</p></div>
                </NavLink>
                <NavLink to="/uni-buddies" className={({ isActive }) => isActive ? 'uni_sidebar_option active' : 'uni_sidebar_option'}>
                    <div className="uni_sidebar_option_left"></div>
                    <div className="uni_sidebar_option_main"><p className="text-sm font-medium">Buddies</p></div>
                </NavLink>
                <NavLink to="/uni-page" className={({ isActive }) => isActive ? 'uni_sidebar_option active' : 'uni_sidebar_option'}>
                    <div className="uni_sidebar_option_left"></div>
                    <div className="uni_sidebar_option_main"><p className="text-sm font-medium">University Page</p></div>
                </NavLink>
                <NavLink to="/inbox" className={({ isActive }) => isActive ? 'uni_sidebar_option active' : 'uni_sidebar_option'}>
                    <div className="uni_sidebar_option_left"></div>
                    <div className="uni_sidebar_option_main"><p className="text-sm font-medium">Inbox</p></div>
                </NavLink>
                <NavLink to="/prospectors" className={({ isActive }) => isActive ? 'uni_sidebar_option active' : 'uni_sidebar_option'}>
                    <div className="uni_sidebar_option_left"></div>
                    <div className="uni_sidebar_option_main"><p className="text-sm font-medium">Prospects</p></div>
                </NavLink>
            </div>

            <div className="uni_sidebar_section">
                <div className="uni_sidebar_heading"><p className="text-xs font-medium">PAGES</p></div>
                <NavLink to="/uni-events" className={({ isActive }) => isActive ? 'uni_sidebar_option active' : 'uni_sidebar_option'}>
                    <div className="uni_sidebar_option_left"></div>
                    <div className="uni_sidebar_option_main"><p className="text-sm font-medium">Events</p></div>
                </NavLink>    
                <NavLink to="/uni-students" className={({ isActive }) => isActive ? 'uni_sidebar_option active' : 'uni_sidebar_option'}>
                    <div className="uni_sidebar_option_left"></div>
                    <div className="uni_sidebar_option_main"><p className="text-sm font-medium">Student List</p></div>
                </NavLink>            
                <NavLink to="/uni-tutorial" className={({ isActive }) => isActive ? 'uni_sidebar_option active' : 'uni_sidebar_option'}>
                    <div className="uni_sidebar_option_left"></div>
                    <div className="uni_sidebar_option_main"><p className="text-sm font-medium">Tutorial</p></div>
                </NavLink>
            </div>

            <div className="uni_sidebar_section">
                <NavLink to="/uni-settings" className={({ isActive }) => isActive ? 'uni_sidebar_option active' : 'uni_sidebar_option'}>
                    <div className="uni_sidebar_option_left"></div>
                    <div className="uni_sidebar_option_main"><p className="text-sm font-medium">Settings</p></div>
                </NavLink>
                <NavLink to="/logout" className={({ isActive }) => isActive ? 'uni_sidebar_option active' : 'uni_sidebar_option'}>
                    <div className="uni_sidebar_option_left"></div>
                    <div className="uni_sidebar_option_main"><p className="text-sm font-medium">Logout</p></div>
                </NavLink>
            </div>
        </div>
    )
}

export default DashboardSidebar;
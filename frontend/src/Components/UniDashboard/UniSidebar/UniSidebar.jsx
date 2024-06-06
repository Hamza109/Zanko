import React from 'react';
import { NavLink } from 'react-router-dom';
import './uni-sidebar.css';

const UniSidebar = () => {
    return (
        <div className="flex flex-col w-60 uni_sidebar_main">
            <div className="flex items-center justify-center"><p>logo</p></div>

            <div className="uni_sidebar_section">
                <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'uni_sidebar_option active' : 'uni_sidebar_option'}>
                    <div className="uni_sidebar_option_left"></div>
                    <div className="uni_sidebar_option_main"><p className="text-sm font-medium">Dashboard</p></div>
                </NavLink>
                <NavLink to="/products" className={({ isActive }) => isActive ? 'uni_sidebar_option active' : 'uni_sidebar_option'}>
                    <div className="uni_sidebar_option_left"></div>
                    <div className="uni_sidebar_option_main"><p className="text-sm font-medium">Products</p></div>
                </NavLink>
                <NavLink to="/favorites" className={({ isActive }) => isActive ? 'uni_sidebar_option active' : 'uni_sidebar_option'}>
                    <div className="uni_sidebar_option_left"></div>
                    <div className="uni_sidebar_option_main"><p className="text-sm font-medium">Favorites</p></div>
                </NavLink>
                <NavLink to="/inbox" className={({ isActive }) => isActive ? 'uni_sidebar_option active' : 'uni_sidebar_option'}>
                    <div className="uni_sidebar_option_left"></div>
                    <div className="uni_sidebar_option_main"><p className="text-sm font-medium">Inbox</p></div>
                </NavLink>
                <NavLink to="/university-lists" className={({ isActive }) => isActive ? 'uni_sidebar_option active' : 'uni_sidebar_option'}>
                    <div className="uni_sidebar_option_left"></div>
                    <div className="uni_sidebar_option_main"><p className="text-sm font-medium">University Lists</p></div>
                </NavLink>
                <NavLink to="/checklists" className={({ isActive }) => isActive ? 'uni_sidebar_option active' : 'uni_sidebar_option'}>
                    <div className="uni_sidebar_option_left"></div>
                    <div className="uni_sidebar_option_main"><p className="text-sm font-medium">Checklists</p></div>
                </NavLink>
            </div>

            <div className="uni_sidebar_section">
                <div className="uni_sidebar_heading"><p className="text-xs font-medium">PAGES</p></div>
                <NavLink to="/events" className={({ isActive }) => isActive ? 'uni_sidebar_option active' : 'uni_sidebar_option'}>
                    <div className="uni_sidebar_option_left"></div>
                    <div className="uni_sidebar_option_main"><p className="text-sm font-medium">Events</p></div>
                </NavLink>
                <NavLink to="/calendar" className={({ isActive }) => isActive ? 'uni_sidebar_option active' : 'uni_sidebar_option'}>
                    <div className="uni_sidebar_option_left"></div>
                    <div className="uni_sidebar_option_main"><p className="text-sm font-medium">Calendar</p></div>
                </NavLink>
                <NavLink to="/todo" className={({ isActive }) => isActive ? 'uni_sidebar_option active' : 'uni_sidebar_option'}>
                    <div className="uni_sidebar_option_left"></div>
                    <div className="uni_sidebar_option_main"><p className="text-sm font-medium">To-do</p></div>
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'uni_sidebar_option active' : 'uni_sidebar_option'}>
                    <div className="uni_sidebar_option_left"></div>
                    <div className="uni_sidebar_option_main"><p className="text-sm font-medium">Contact</p></div>
                </NavLink>
                <NavLink to="/invoice" className={({ isActive }) => isActive ? 'uni_sidebar_option active' : 'uni_sidebar_option'}>
                    <div className="uni_sidebar_option_left"></div>
                    <div className="uni_sidebar_option_main"><p className="text-sm font-medium">Invoice</p></div>
                </NavLink>
                <NavLink to="/statistics" className={({ isActive }) => isActive ? 'uni_sidebar_option active' : 'uni_sidebar_option'}>
                    <div className="uni_sidebar_option_left"></div>
                    <div className="uni_sidebar_option_main"><p className="text-sm font-medium">Statistics</p></div>
                </NavLink>
                <NavLink to="/team" className={({ isActive }) => isActive ? 'uni_sidebar_option active' : 'uni_sidebar_option'}>
                    <div className="uni_sidebar_option_left"></div>
                    <div className="uni_sidebar_option_main"><p className="text-sm font-medium">Team</p></div>
                </NavLink>
                <NavLink to="/table" className={({ isActive }) => isActive ? 'uni_sidebar_option active' : 'uni_sidebar_option'}>
                    <div className="uni_sidebar_option_left"></div>
                    <div className="uni_sidebar_option_main"><p className="text-sm font-medium">Table</p></div>
                </NavLink>
            </div>

            <div className="uni_sidebar_section">
                <NavLink to="/settings" className={({ isActive }) => isActive ? 'uni_sidebar_option active' : 'uni_sidebar_option'}>
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

export default UniSidebar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import './home-header.css';

const HomeHeader = () => {
    
    return(
        <header className="home_header_border">
            <div className="home_header_main">

                <div className="text-white header_logo">
                    logo
                </div>

                <div className="header_right">
                    <div className="header_options">
                        <div className="header_option"><p>Platform</p></div>
                        <div className="header_option"><p>Solutions</p></div>
                <NavLink to='/for-student'  ><div className="header_option"><p>For Students</p></div></NavLink> 
                        <div className="header_option"><p>Pricing</p></div>
                        <div className="header_option"><p>Resources</p></div>                    
                    </div>
                    
                    <div className="home_header_signup_shadow">
                        <div className="home_header_signup_border">
                            <button>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>      
    )
}


export default HomeHeader;
import React from 'react';
import { NavLink } from 'react-router-dom';
import './home-header.css';

const HomeHeader = () => {
    
    return(
        <header className="home_header_border">
            <div className="home_header_main">

                <div className="w-40 bg-white header_logo">
                    logo
                </div>

                <div className="header_right">
                    <div className="header_options">
                        <div className="header_option"><p>Platform</p></div>
                        <div className="header_option"><p>Solutions</p></div>
                        <div className="header_option"><p>For Students</p></div>
                        <div className="header_option"><p>Pricing</p></div>
                        <div className="header_option"><p>Resources</p></div>                    
                    </div>
                
                    <div className="home_header_signup_border">
                        <button>
                            Sign Up
                        </button>
                    </div>
                                        
                    <div className="home_header_hammenu_border">
                        <div className="home_header_hammenu">
                            <i class="ri-menu-line"></i>

                            <div className="home_header_dropdown">

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </header>      
    )
}


export default HomeHeader;
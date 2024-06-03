import React from 'react';
import './home-header.css';

const HomeHeader = () => {
    
    return(
        <header className="header_main">
            <div className="header_logo">
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

                <button>
                    Sign Up
                </button>
            </div>
        </header>      
    )
}


export default HomeHeader;
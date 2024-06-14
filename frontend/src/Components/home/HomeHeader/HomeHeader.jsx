import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import './home-header.css';

const HomeHeader = () => {

    const [dropdown,setDropdown] = useState(false);
    
    return(
        <header className="home_header_border">
            <div className="home_header_main">

                <div className="w-40 bg-white home_header_logo">
                    logo
                </div>

                <div className="home_header_right">
                    <div className="home_header_options">
                        <div className="home_header_option"><p>Platform</p></div>
                        <div className="home_header_option"><p>Solutions</p></div>
                        <NavLink to="/for-students" className={({ isActive }) => isActive ? 'home_header_option active' : 'home_header_option'} ><p>For Students</p></NavLink>
                        <NavLink to="/pricing" className={({ isActive }) => isActive ? 'home_header_option active' : 'home_header_option'} ><p>Pricing</p></NavLink>
                        <div className="home_header_option"><p>Resources</p></div>                    
                    </div>
                
                    <div className="home_header_signup_border">
                        <button>
                            Sign Up
                        </button>
                    </div>
                                        
                    <div className="home_header_hammenu_border">
                        <div className="home_header_hammenu" onClick={()=>{setDropdown(!dropdown)}}>
                            {
                                dropdown?
                                <i class="ri-close-large-line"></i>
                                :
                                <i class="ri-menu-line"></i>
                            }
                        </div>
                    </div>

                    {
                        dropdown?
                            <div className="home_header_dropdown">
                            <div className="home_header_dropdown_option"><p>Platform</p><i class="ri-arrow-right-line"></i></div>
                            <div className="home_header_dropdown_option"><p>Solutions</p><i class="ri-arrow-right-line"></i></div>
                            <div className="home_header_dropdown_option"><p>For Students</p><i class="ri-arrow-right-line"></i></div>
                            <div className="home_header_dropdown_option"><p>Pricing</p><i class="ri-arrow-right-line"></i></div>
                            <div className="home_header_dropdown_option"><p>Resources</p><i class="ri-arrow-right-line"></i></div>
                        </div>
                        :
                        <></>
                    }
                    

                </div>

            </div>
        </header>      
    )
}


export default HomeHeader;
import React from 'react';
import { NavLink } from 'react-router-dom';
import './home-footer.css';

const HomeFooter = () => {
    return(
       <footer className="footer_main">
        <div className="flex justify-center footer_top">
           <div className="footer_section">
               <div className="footer_section_title"><p>Products</p></div>
               <NavLink to="" className="footer_section_option"><p>Platform</p></NavLink>
               <NavLink to="" className="footer_section_option"><p>Chat</p></NavLink>
               <NavLink to="" className="footer_section_option"><p>Discover</p></NavLink>
               <NavLink to="" className="footer_section_option"><p>Events</p></NavLink>
               <NavLink to="" className="footer_section_option"><p>Community</p></NavLink>
               <NavLink to="" className="footer_section_option"><p>Pricing</p></NavLink>
               <NavLink to="" className="footer_section_option"><p>University Log-in</p></NavLink>
               <NavLink to="" className="footer_section_option"><p>Ambassabor Log-in</p></NavLink>
           </div>

           <div className="footer_section">
               <div className="footer_section_title"><p>Solutions</p></div>
               <NavLink to="" className="footer_section_option"><p>Undergrad Admissions</p></NavLink>
               <NavLink to="" className="footer_section_option"><p>Graduate Admissions</p></NavLink>
               <NavLink to="" className="footer_section_option"><p>Internationsl Recruitment</p></NavLink>
               <NavLink to="" className="footer_section_option"><p>For Students</p></NavLink>
           </div>

           <div className="footer_section">
               <div className="footer_section_title"><p>Institutions</p></div>
               <NavLink to="" className="footer_section_option"><p>Private College</p></NavLink>
               <NavLink to="" className="footer_section_option"><p>Public College</p></NavLink>
               <NavLink to="" className="footer_section_option"><p>Ivy Leauge</p></NavLink>
               <NavLink to="" className="footer_section_option"><p>HBCU</p></NavLink>
               <NavLink to="" className="footer_section_option"><p>Community</p></NavLink>
               <NavLink to="" className="footer_section_option"><p>Higher Ed Marketers</p></NavLink>
           </div>

           <div className="footer_section">
               <div className="footer_section_title"><p>Company</p></div>
               <NavLink to="" className="footer_section_option"><p>About</p></NavLink>
               <NavLink to="" className="footer_section_option"><p>Careers</p></NavLink>
               <NavLink to="" className="footer_section_option"><p>Help Center</p></NavLink>
               <NavLink to="" className="footer_section_option"><p>Press</p></NavLink>
               <NavLink to="" className="footer_section_option"><p>Contact</p></NavLink>
           </div>

           <div className="footer_section">
               <div className="footer_section_title"><p>Resources</p></div>
               <NavLink to="" className="footer_section_option"><p>Webinars and Events</p></NavLink>
               <NavLink to="" className="footer_section_option"><p>Guides</p></NavLink>
               <NavLink to="" className="footer_section_option"><p></p></NavLink>
               <NavLink to="" className="footer_section_option"><p></p></NavLink>
               <NavLink to="" className="footer_section_option"><p></p></NavLink>
           </div>

           <div className="footer_section">
               <div className="footer_section_title"><p>Partners</p></div>
               <NavLink to="" className="footer_section_option"><p>Strategic Partners</p></NavLink>
               <NavLink to="" className="footer_section_option"><p>Unibuddy Champions</p></NavLink>
           </div>
        </div>

        <div className="flex justify-center items-center p-5 footer_bottom"><p>© 2024 Untitled UI. All rights reserved.</p></div>
           
       </footer>
    )
}


export default HomeFooter;
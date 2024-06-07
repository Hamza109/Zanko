import React from 'react';
import { Link } from 'react-router-dom';
import './home-footer.css';

const HomeFooter = () => {
    return(
       <footer className="footer_main">
        <div className="flex justify-center footer_top">
           <div className="footer_section">
               <div className="footer_section_title"><p>Products</p></div>
               <div className="footer_section_option"><p>Platform</p></div>
               <div className="footer_section_option"><p><a href='/chat'  style={{color:'black', textDecoration:'none'  }}>Chat</a> </p></div>
               <div className="footer_section_option"><p>Discover</p></div>
               <div className="footer_section_option"><p>Events</p></div>
               <div className="footer_section_option"><p>Community</p></div>
               <div className="footer_section_option"><p>Pricing</p></div>
               <div className="footer_section_option"><p>University Log-in</p></div>
               <div className="footer_section_option"><p>Ambassabor Log-in</p></div>
           </div>

           <div className="footer_section">
               <div className="footer_section_title"><p>Solutions</p></div>
               <div className="footer_section_option"><p>Undergrad Admissions</p></div>
               <div className="footer_section_option"><p>Graduate Admissions</p></div>
               <div className="footer_section_option"><p>Internationsl Recruitment</p></div>
               <div className="footer_section_option"><p>For Students</p></div>
           </div>

           <div className="footer_section">
               <div className="footer_section_title"><p>Institutions</p></div>
               <div className="footer_section_option"><p>Private College</p></div>
               <div className="footer_section_option"><p>Public College</p></div>
               <div className="footer_section_option"><p>Ivy Leauge</p></div>
               <div className="footer_section_option"><p>HBCU</p></div>
               <div className="footer_section_option"><p>Community</p></div>
               <div className="footer_section_option"><p>Higher Ed Marketers</p></div>
           </div>

           <div className="footer_section">
               <div className="footer_section_title"><p>Company</p></div>
               <div className="footer_section_option"><p>About</p></div>
               <div className="footer_section_option"><p>Careers</p></div>
               <div className="footer_section_option"><p>Help Center</p></div>
               <div className="footer_section_option"><p>Press</p></div>
               <div className="footer_section_option"><p>Contact</p></div>
           </div>

           <div className="footer_section">
               <div className="footer_section_title"><p>Resources</p></div>
               <div className="footer_section_option"><p>Webinars and Events</p></div>
               <div className="footer_section_option"><p>Guides</p></div>
               <div className="footer_section_option"><p></p></div>
               <div className="footer_section_option"><p></p></div>
               <div className="footer_section_option"><p></p></div>
           </div>

           <div className="footer_section">
               <div className="footer_section_title"><p>Partners</p></div>
               <div className="footer_section_option"><p>Strategic Partners</p></div>
               <div className="footer_section_option"><p>Unibuddy Champions</p></div>
           </div>
        </div>

        <div className="flex justify-center items-center p-5 footer_bottom"><p>© 2024 Untitled UI. All rights reserved.</p></div>
           
       </footer>
    )
}


export default HomeFooter;
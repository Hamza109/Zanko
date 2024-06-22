import React from "react";
import '../styles/guides.css'
import HomeHeader from "../Components/home/HomeHeader/HomeHeader.jsx"
import HomeFooter from "../Components/home/HomeFooter/HomeFooter.jsx"
import Assurance from "../Components/home/AssuranceSection/Assurance.jsx"
import guides1 from '../assets/guides/guides1.png'
import guides2 from '../assets/guides/guides2.png'
import guides3 from '../assets/guides/guides3.png'
import guides4 from '../assets/guides/guides4.png'
import guides5 from '../assets/guides/guides5.png'
import guides6 from '../assets/guides/guides6.png'
import guides7 from '../assets/guides/guides7.png'
import guides8 from '../assets/guides/guides8.png'
import guides9 from '../assets/guides/guides9.png'




const Guides=()=>{
    
    
    return(
        <div>
            <div className="home_header_container"><HomeHeader /></div>

            <main className="home_main">

                {/* Heading and subheading section */}
                <div className="pb-24 flex flex-col gap-5 items-center home_description">
                    <h2 className="text-center font-semibold home_description_title">“faucibus pulvinar elementum integer”.</h2>
                    <h3 className="font-normal text-center home_description_subtitle">faucibus pulvinar elementum integer enim neque volutpat faucibus pulvinar elementum integer enim neque volutpat</h3>
                    <div className="home_description_bttn" ><button>Book Demo</button></div>
                </div>



                {/* Guides List section */}
                <div className="guides_list">
                    <div className="guides_list_search">
                        <i class="ri-search-line"></i>
                        <input type="text" placeholder="Search for library resources" />
                    </div>
                    <div className="guides_list_main">
                        <a href="#" className="guide_list_main_card">
                            <img src={guides1} />
                            <div className="guide_list_main_card_text"><p>Confidence Counts: Supporting students to journey beyond their...</p></div>
                        </a>
                        <a href="#" className="guide_list_main_card">
                            <img src={guides2} />
                            <div className="guide_list_main_card_text"><p>Confidence Counts: Supporting students to journey beyond their...</p></div>
                        </a>
                        <a href="#" className="guide_list_main_card">
                            <img src={guides3} />
                            <div className="guide_list_main_card_text"><p>Confidence Counts: Supporting students to journey beyond their...</p></div>
                        </a>
                        <a href="#" className="guide_list_main_card">
                            <img src={guides4} />
                            <div className="guide_list_main_card_text"><p>Confidence Counts: Supporting students to journey beyond their...</p></div>
                        </a>
                        <a href="#" className="guide_list_main_card">
                            <img src={guides5} />
                            <div className="guide_list_main_card_text"><p>Confidence Counts: Supporting students to journey beyond their...</p></div>
                        </a>
                        <a href="#" className="guide_list_main_card">
                            <img src={guides6} />
                            <div className="guide_list_main_card_text"><p>Confidence Counts: Supporting students to journey beyond their...</p></div>
                        </a>
                        <a href="#" className="guide_list_main_card">
                            <img src={guides7} />
                            <div className="guide_list_main_card_text"><p>Confidence Counts: Supporting students to journey beyond their...</p></div>
                        </a>
                        <a href="#" className="guide_list_main_card">
                            <img src={guides8} />
                            <div className="guide_list_main_card_text"><p>Confidence Counts: Supporting students to journey beyond their...</p></div>
                        </a>
                        <a href="#" className="guide_list_main_card">
                            <img src={guides9} />
                            <div className="guide_list_main_card_text"><p>Confidence Counts: Supporting students to journey beyond their...</p></div>
                        </a>
                    </div>
                    <div className="w-full flex justify-center guides_list_main_bttn"><button>Load More</button></div>
                </div>



                {/* Assurance Section */}
                <Assurance /> 



                {/* Newsletter Section */}
            <div className="flex flex-col items-center pricing_newsletter_section">
                <div className="pricing_newsletter_section_top">
                    <p className="font-medium pricing_newsletter_section_title">Send us your Mail</p>
                    <p className="font-normal pricing_newsletter_section_subtitle">We will get you a perfect plan</p>
                </div>
                <div className="flex items-center justify-center pricing_newsletter_section_bottom">
                    <div className="flex items-center bg-white pricing_newsletter_section_bottom_main">
                        <div className="pricing_newsletter_section_bottom_logo"><i class="ri-mail-line"></i></div>
                        <input type="text" placeholder="yourmail123@gmail.com" />
                    </div>
                    <button className="pricing_newsletter_bttn"><i class="ri-arrow-right-line"></i></button>
                </div>
            </div>               

            
            </main>

            <HomeFooter/>

        </div>
    )
}

export default Guides;
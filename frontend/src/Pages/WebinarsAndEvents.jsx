import React from "react";
import '../styles/webinars-and-events.css'
import HomeHeader from "../Components/home/HomeHeader/HomeHeader.jsx"
import HomeFooter from "../Components/home/HomeFooter/HomeFooter.jsx"
import Assurance from "../Components/home/AssuranceSection/Assurance.jsx"
import webinar1 from '../assets/webinars/webinar1.png'
import webinar2 from '../assets/webinars/webinar2.png'
import webinar3 from '../assets/webinars/webinar3.png'
import webinar4 from '../assets/webinars/webinar4.png'
import webinar5 from '../assets/webinars/webinar5.png'
import webinar6 from '../assets/webinars/webinar6.png'




const WebinarsAndEvents=()=>{
    
    
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



                {/* Events List section */}
                <div className="webinars_events_list">
                    <div className="webinars_events_list_search">
                        <i class="ri-search-line"></i>
                        <input type="text" placeholder="Search for event videos" />
                    </div>
                    <div className="webinars_events_list_main">
                        <div className="webinars_events_list_main_card">
                            <img src={webinar1} />
                            <div className="webinars_events_list_main_card_text">
                                <p>Confidence Counts: Supporting students to journey beyond their...</p>
                                <a href="#" className="flex items-center py-3 gap-1 text-xs font-semibold"><p>Watch Video</p><i class="ri-arrow-right-line"></i></a>
                            </div>
                        </div>
                        <div className="webinars_events_list_main_card">
                            <img src={webinar2} />
                            <div className="webinars_events_list_main_card_text">
                                <p>Confidence Counts: Supporting students to journey beyond their...</p>
                                <a href="#" className="flex items-center py-3 gap-1 text-xs font-semibold"><p>Watch Video</p><i class="ri-arrow-right-line"></i></a>
                            </div>
                        </div>
                        <div className="webinars_events_list_main_card">
                            <img src={webinar3} />
                            <div className="webinars_events_list_main_card_text">
                                <p>Confidence Counts: Supporting students to journey beyond their...</p>
                                <a href="#" className="flex items-center py-3 gap-1 text-xs font-semibold"><p>Watch Video</p><i class="ri-arrow-right-line"></i></a>
                            </div>
                        </div>
                        <div className="webinars_events_list_main_card">
                            <img src={webinar4} />
                            <div className="webinars_events_list_main_card_text">
                                <p>Confidence Counts: Supporting students to journey beyond their...</p>
                                <a href="#" className="flex items-center py-3 gap-1 text-xs font-semibold"><p>Watch Video</p><i class="ri-arrow-right-line"></i></a>
                            </div>
                        </div>
                        <div className="webinars_events_list_main_card">
                            <img src={webinar5} />
                            <div className="webinars_events_list_main_card_text">
                                <p>Confidence Counts: Supporting students to journey beyond their...</p>
                                <a href="#" className="flex items-center py-3 gap-1 text-xs font-semibold"><p>Watch Video</p><i class="ri-arrow-right-line"></i></a>
                            </div>
                        </div>
                        <div className="webinars_events_list_main_card">
                            <img src={webinar6} />
                            <div className="webinars_events_list_main_card_text">
                                <p>Confidence Counts: Supporting students to journey beyond their...</p>
                                <a href="#" className="flex items-center py-3 gap-1 text-xs font-semibold"><p>Watch Video</p><i class="ri-arrow-right-line"></i></a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="w-full flex justify-center webinars_events_list_main_bttn"><button>Load More</button></div>
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

export default WebinarsAndEvents;
import React from "react";
import '../styles/undergrad-admissions.css'
import HomeHeader from "../Components/home/HomeHeader/HomeHeader.jsx"
import HomeFooter from "../Components/home/HomeFooter/HomeFooter.jsx"
import ScrollSection from '../Components/home/ScrollSection/ScrollSection.jsx';
import Assurance from "../Components/home/AssuranceSection/Assurance.jsx"
import chat_ss from "../assets/undergrad-admissions/chat_ss.png"
import event_ss from "../assets/undergrad-admissions/event_ss.png"





const UndergradAdmissions=()=>{
    
    return(
        <div>
            <HomeHeader />

            <main className="home_main">

                {/* Heading and subheading section */}
                <div className="pb-24 flex flex-col gap-5 items-center home_description">
                    <h2 className="text-center font-semibold home_description_title">“faucibus pulvinar elementum integer”.</h2>
                    <h3 className="font-normal text-center home_description_subtitle">faucibus pulvinar elementum integer enim neque volutpat faucibus pulvinar elementum integer enim neque volutpat</h3>
                    <div className="home_description_bttn" ><button>Book Demo</button></div>
                </div>


                {/* Scroll Section  */}
                <ScrollSection/>

                
                {/* Event section */}
                <div className="ug_adm_event">
                    <div className="ug_adm_event_img"><img src={event_ss} /></div>
                    <div className="ug_adm_event_main">
                        <p className="ug_adm_event_title">Inspire prospective students and create FOMO</p>
                        <p className="ug_adm_event_subtitle">
                            Let current students double as your marketers to provide authentic insights into life at your institution
                            that prospective students can’t get anywhere else. Then monitor those conversations and capture leads seamlessly.
                        </p>
                    </div>
                </div>


                {/* Chat Section */}
                <div className="ug_adm_chat">
                    <div className="ug_adm_chat_main">
                        <p className="ug_adm_chat_title">Chat with student ambassadors</p>
                        <div className="ug_adm_chat_subtitle">
                          <p>Let current students double as your marketers to provide authentic insights into life at your institution that prospective students can’t get anywhere else. Then monitor those conversations and capture leads seamlessly.</p>
                          <p>Let current students double as your marketers to provide authentic insights into life at your institution that prospective students can’t get anywhere else. Then monitor those conversations and capture leads seamlessly.</p>
                        </div>          
                    </div>

                    <div className="ug_adm_chat_img"><img src={chat_ss}/></div>
                </div>


                {/* Assurances section */}
                <Assurance/>


                {/* Customer Stories Section */}
                <div className="ug_adm_cust_stories">
                    <p className="ug_adm_cust_stories_title">See why higher ed institutions love Zanko</p>
                    <p className="ug_adm_cust_stories_subtitle">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque justo, gravida vitae nulla sed, fermentum viverra augue. 
                        Curabitur volutpat scelerisque magna sed vulputate. Duis convallis sit amet enim ut semper. Nunc vel mattis leo. Aenean placerat,
                        nisl vitae rhoncus condimentum, nulla leo dapibus lorem, in rhoncus ligula odio eget lorem”
                    </p>
                    <button className="flex gap-1 ug_adm_cust_stories_bttn"><p>See more customer stories</p><i class="ri-arrow-right-line"></i></button>
                </div>


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

export default UndergradAdmissions;
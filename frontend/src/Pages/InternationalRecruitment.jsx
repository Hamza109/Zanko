import React from "react";
import '../styles/international-recruitment.css'
import HomeHeader from "../Components/home/HomeHeader/HomeHeader.jsx"
import HomeFooter from "../Components/home/HomeFooter/HomeFooter.jsx"
import Assurance from "../Components/home/AssuranceSection/Assurance.jsx"
import ScrollSection from '../Components/home/ScrollSection/ScrollSection.jsx';
import map from "../assets/international-recruitment/map.png"
import lang_map from "../assets/international-recruitment/lang_map.png"





const InternationalRecruitment=()=>{
    
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


                {/* Intro section */}
                <div className="int_rec_intro">
                    <p className="int_rec_intro_title">Global recruitment, reimagined</p>
                    <div className="int_rec_intro_main">
                        <p className="int_rec_intro_subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque justo, gravida vitae nulla sed,
                            fermentum viverra augue. Curabitur volutpat scelerisque magna sed vulputate. 
                        </p>
                        <div className="int_rec_intro_img"><img src={map} /></div>
                    </div>
                </div>


                {/* Languages Section */}
                <div className="int_rec_lang">
                    <p className="int_rec_lang_title">Connecting Minds Across Continents</p>
                    <div className="int_rec_lang_main">
                        <div className="int_rec_lang_img"><img src={lang_map} /></div>
                        <p className="int_rec_lang_subtitle">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque justo, gravida vitae nulla sed,
                           fermentum viverra augue. Curabitur volutpat scelerisque magna sed.
                        </p>
                    </div>
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

export default InternationalRecruitment;
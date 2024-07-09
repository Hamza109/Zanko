import React from "react";
import '../styles/community.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HomeHeader from "../Components/home/HomeHeader/HomeHeader.jsx"
import HomeFooter from "../Components/home/HomeFooter/HomeFooter.jsx"
import Assurance from "../Components/home/AssuranceSection/Assurance.jsx"
import analytics_img from '../assets/community/analytics_img.png'
import user_img from '../assets/community/user_img.png'
import earth from '../assets/community/Earth.png'



const Community=()=>{

    //Settings for carousel of reviews
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    
    return(
        <div>
            <HomeHeader />

            <main className="home_main">

                {/* Heading and subheading section */}
                <div className="pb-24 flex flex-col gap-5 items-center home_description">
                    <h2 className="text-center font-semibold home_description_title">“faucibus pulvinar elementum integer”.</h2>
                    <h3 className="font-normal text-center home_description_subtitle">faucibus pulvinar elementum integer enim neque volutpat faucibus pulvinar elementum integer enim neque volutpat</h3>
                    <div className="home_description_bttn" ><button>Join Community</button></div>
                </div>


                {/* Real time analytics */}
                <div className="flex flex-wrap justify-center items-center bg-black community_analytics">
                    <p className="text-white font-semibold">Get real time analytics on the community engagement</p>
                    <img src={analytics_img} />
                </div>


               {/* Community reviews section   */}
                <div className="community_reviews">
                    <Slider {...settings}>
                        
                        <div className="flex p-5 justify-center items-center h-full">
                            <div className="community_reviews_section">
                                <p className="community_reviews_section_title">Lorem ipsum dolor sit amet consectetur. Justo lorem risus praesent sed tempor diam. Tempor dictum nisl sit at mi tempor. Eu fames quis tincidunt erat mauris enim. </p>
                                <div className="community_reviews_section_main">
                                    <img src={user_img} alt="User" />
                                    <p>
                                        Nunc urna commodo nisl justo vel blandit ultrices. Sollicitudin imperdiet in risus non. Egestas facilisis fermentum elementum fringilla.
                                        Arcu gravida nec nisl turpis id. Vestibulum justo sit malesuada ac. Neque cras proin id amet iaculis sit.
                                    </p>
                                </div>
                            </div>
                        </div> 

                        <div className="flex p-5 justify-center items-center h-full">
                            <div className="community_reviews_section">
                                <p className="community_reviews_section_title">Lorem ipsum dolor sit amet consectetur. Justo lorem risus praesent sed tempor diam. Tempor dictum nisl sit at mi tempor. Eu fames quis tincidunt erat mauris enim. </p>
                                <div className="community_reviews_section_main">
                                    <img src={user_img} alt="User" />
                                    <p>
                                        Nunc urna commodo nisl justo vel blandit ultrices. Sollicitudin imperdiet in risus non. Egestas facilisis fermentum elementum fringilla.
                                        Arcu gravida nec nisl turpis id. Vestibulum justo sit malesuada ac. Neque cras proin id amet iaculis sit.
                                    </p>
                                </div>
                            </div>
                        </div> 

                        <div className="flex p-5 justify-center items-center h-full">
                            <div className="community_reviews_section">
                                <p className="community_reviews_section_title">Lorem ipsum dolor sit amet consectetur. Justo lorem risus praesent sed tempor diam. Tempor dictum nisl sit at mi tempor. Eu fames quis tincidunt erat mauris enim. </p>
                                <div className="community_reviews_section_main">
                                    <img src={user_img} alt="User" />
                                    <p>
                                        Nunc urna commodo nisl justo vel blandit ultrices. Sollicitudin imperdiet in risus non. Egestas facilisis fermentum elementum fringilla.
                                        Arcu gravida nec nisl turpis id. Vestibulum justo sit malesuada ac. Neque cras proin id amet iaculis sit.
                                    </p>
                                </div>
                            </div>
                        </div> 

                    </Slider>
                </div>



                {/* Assurance Section */}
                <Assurance /> 


                {/* FAQ Section */}
                <div className="flex flex-col items-center community_faq">
                    <p className="text-center community_faq_title">Frequently asked Questions</p>

                    <div className="community_faq_section">
                        <div className="community_faq_section_top">
                            <p>What is UX design?</p>
                            <i class="ri-arrow-up-circle-line"></i>
                        </div >
                        <p className="community_faq_bottom">
                            UX design stands for User Experience design.
                           It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.
                        </p>
                    </div>

                    <div className="community_faq_section">
                        <div className="community_faq_section_top">
                            <p>What is UX design?</p>
                            <i class="ri-arrow-up-circle-line"></i>
                        </div >
                        <p className="community_faq_bottom">
                            UX design stands for User Experience design.
                           It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.
                        </p>
                    </div>

                    <div className="community_faq_section">
                        <div className="community_faq_section_top">
                            <p>What is UX design?</p>
                            <i class="ri-arrow-up-circle-line"></i>
                        </div >
                        <p className="community_faq_bottom">
                            UX design stands for User Experience design.
                           It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.
                        </p>
                    </div>

                </div>



                {/* Search University Section */}
                <div className="flex flex-col items-center community_university">
                    <p className="font-medium text-center">Search University to start with</p>
                    <div className="flex items-center bg-white community_university_search">
                        <button><i class="ri-search-line"></i></button>
                        <input type="text" placeholder="University Name" />
                    </div>
                </div>



                {/* Map Section */}
                <div className="community_map">
                    <p className="text-center">Connect with Community across the World </p>
                    <img src={earth} />
                </div>

            
            </main>

            <HomeFooter/>

        </div>
    )
}

export default Community;
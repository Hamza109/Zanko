import React,{useRef,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';
import HomeHeader from "../Components/home/HomeHeader/HomeHeader.jsx"
import HomeFooter from "../Components/home/HomeFooter/HomeFooter.jsx"
import customer_rev1 from "../assets/home/customer_rev1.mp4"
import customer_rev2 from "../assets/home/customer_rev2.mp4"
import customer_rev3 from "../assets/home/customer_rev3.mp4"
import features_vid from "../assets/home/features_vid.mp4"
import unilogo1 from "../assets/home/unilogo1.png"
import unilogo2 from "../assets/home/unilogo2.png"
import unilogo3 from "../assets/home/unilogo3.png"
import unilogo4 from "../assets/home/unilogo4.png"
import unilogo5 from "../assets/home/unilogo5.png"
import unilogo6 from "../assets/home/unilogo6.png"



const Home = () =>{

const navigate = useNavigate();

const customerRevRef1 = useRef();
const customerRevRef2 = useRef();
const customerRevRef3 = useRef();

const featuresVidRef = useRef();

//function and states to handle playing and pausing videos
const [currentVideo, setCurrentVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = (videoRef) => {
    if (currentVideo && currentVideo !== videoRef) {
      currentVideo.pause();
      setIsPlaying(false);
    }

    if (videoRef.paused) {
      videoRef.play();
      setCurrentVideo(videoRef);
      setIsPlaying(true);
    } else {
      videoRef.pause();
      setCurrentVideo(null);
      setIsPlaying(false);
    }
};


    
return (

    <>

    <div className="home_header_container"><HomeHeader /></div>

    <main className="home_main">
        
        {/* Heading and subheading section */}
        <div className="pb-24 home_description">
            <div className="flex justify-center mb-8 home_description_title">
                <h2 className="text-center font-semibold text-5xl">faucibus pulvinar elementum integer enim neque volutpat</h2>
            </div>
            
            <div className="flex justify-center home_description_subtitle">
                <h3 className="text-2xl font-normal text-center">faucibus pulvinar elementum integer enim neque volutpat faucibus pulvinar elementum integer enim neque volutpat</h3>
            </div>

        </div>




        {/* University logos scroll section */}
        <div className="home_uni_logos">
            <div className="home_uni_logo_slider">
                <img src={unilogo1}/>
                <img src={unilogo2}/>
                <img src={unilogo3}/>
                <img src={unilogo4}/>
                <img src={unilogo5}/>
                <img src={unilogo6}/>
            </div>

            <div className="home_uni_logo_slider">
                <img src={unilogo1}/>
                <img src={unilogo2}/>
                <img src={unilogo3}/>
                <img src={unilogo4}/>
                <img src={unilogo5}/>
                <img src={unilogo6}/>
            </div>         
                                         
        </div>



        {/* Customer video reviews section */}
        <div className="py-12 home_video_reviews">
            <div className="flex justify-center mb-5 home_video_reviews_title">
                <p className="font-semibold text-4xl"><span>Over</span> 1000+ <span>people trust us</span></p>
            </div>

            <div className="mb-8 flex justify-center home_video_reviews_subtitle">
                <p className="text-normal text-base text-center">Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.</p>
            </div>

            <div className="flex justify-center mb-3 gap-14 home_video_reviews_main">

               <div className="relative home_reviews_section">
                    <div className="home_review_img"><video src={customer_rev1} ref={customerRevRef1}/></div>
                    <div className="flex justify-between p-5 absolute bottom-0 home_review_content">
                        <div className="home_reviewer_details">
                            <p className="text-base font-medium mb-3 text-white reviewer_name">Albert Flores</p>
                            <p className="text-sm text-white font-extralight reviewer_desig">Professor</p>
                        </div>
                        <div className="home_play_button" onClick={() => handlePlayPause(customerRevRef1.current)}>
                            {isPlaying && currentVideo === customerRevRef1.current ? (
                                <i className="ri-pause-line"></i>
                            ) : (
                                <div className="ml-1"><i className="ri-play-line"></i></div>
                            )}
                        </div>
                    </div>
                    
                </div>

                <div className="relative home_reviews_section">
                    <div className="home_review_img"><video src={customer_rev2} ref={customerRevRef2}/></div>
                    <div className="flex justify-between p-5 absolute bottom-0 home_review_content">
                        <div className="home_reviewer_details">
                            <p className="text-base font-medium mb-3 text-white reviewer_name">Leslie Alexander</p>
                            <p className="text-sm text-white font-extralight reviewer_desig">Student</p>
                        </div>
                        <div className="home_play_button" onClick={() => handlePlayPause(customerRevRef2.current)}>
                            {isPlaying && currentVideo === customerRevRef2.current ? (
                                <i className="ri-pause-line"></i>
                            ) : (
                                <div className="ml-1"><i className="ri-play-line"></i></div>
                            )}
                        </div>
                    </div>
                    
                </div>

                <div className="relative home_reviews_section">
                    <div className="home_review_img"><video src={customer_rev3} ref={customerRevRef3} /></div>
                    <div className="flex justify-between p-5 absolute bottom-0 home_review_content">
                        <div className="home_reviewer_details">
                            <p className="text-base font-medium mb-3 text-white reviewer_name">Courtney Henry</p>
                            <p className="text-sm text-white font-extralight reviewer_desig">Student</p>
                        </div>
                        <div className="home_play_button" onClick={() => handlePlayPause(customerRevRef3.current)}>
                            {isPlaying && currentVideo === customerRevRef3.current ? (
                                <i className="ri-pause-line"></i>
                            ) : (
                                <div className="ml-1"><i className="ri-play-line"></i></div>
                            )}
                        </div>
                    </div>
                    
                </div>

            </div>

            <div className="flex p-5 justify-center items-center cursor-pointer home_all_reviews">
                <p>See all reviews by our customers</p>
                <i class="ri-arrow-right-up-line"></i>
            </div>
        </div>


        {/* Never miss any task */}
        <div className="flex justify-center py-24 gap-24 add_task">
            <div className="max-w-md add_task_left">
                <p className="text-3xl font-semibold mb-10 add_task_title">Never miss any task</p>
                <p className="text-base font-normal mb-5 text-gray-500 add_task_desc">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet pellentesque aliquam enim.</p>
                <button className="py-3 px-5 font-medium text-base text-white rounded-xl bg-black">Add First Task</button>
            </div>

            <div className="rounded-xl pb-5 add_task_right">
                <div className="flex p-3 gap-1.5 add_task_right_head">
                    <div className="h-2.5 w-2.5 rounded-md task_head_option" style={{backgroundColor:"#ff4a4a"}}></div>
                    <div className="h-2.5 w-2.5 rounded-md task_head_option" style={{backgroundColor:"#fdb241"}}></div>
                    <div className="h-2.5 w-2.5 rounded-md task_head_option" style={{backgroundColor:"#6cd929"}}></div>
                </div>

                <p className="p-5 text-xs font-medium add_task_right_title">YOUR TASKS</p>

                <div className="flex justify-between px-5 mb-4 add_task_right_main">
                    <div className="flex gap-2.5 add_task_right_main_left">
                        <div className="add_task_checkbox"></div>
                        <div className="add_task_chat">
                            <p className="add_task_chat_title">Chat with Peers</p>
                            <p className="add_task_chat_date">Dec 19,2021 10:45 PM</p>
                        </div>
                    </div>
                    
                    <div className="add_task_right_main_right"></div>

                </div>

                <div className="flex justify-between px-5 mb-4 add_task_right_main">
                    <div className="flex gap-2.5 add_task_right_main_left">
                        <div className="add_task_checkbox"></div>
                        <div className="add_task_chat">
                            <p className="add_task_chat_title">Chat with University Counsellors</p>
                            <p className="add_task_chat_date">Dec 08,2021 04:10 PM</p>
                        </div>
                    </div>
                    
                    <div className="add_task_right_main_right"></div>

                </div>

                <div className="flex justify-between px-5 mb-4 add_task_right_main">
                    <div className="flex gap-2.5 add_task_right_main_left">
                        <div className="add_task_checkbox"></div>
                        <div className="add_task_chat">
                            <p className="add_task_chat_title">Review the Resume</p>
                            <p className="add_task_chat_date">Dec 04,2021 03:35 PM</p>
                        </div>
                    </div>
                    
                    <div className="add_task_right_main_right"></div>

                </div>

                <div className="flex justify-between px-5 mb-4 add_task_right_main">
                    <div className="flex gap-2.5 add_task_right_main_left">
                        <div className="add_task_checkbox"></div>
                        <div className="add_task_chat">
                            <p className="add_task_chat_title">View the Application progress</p>
                            <p className="add_task_chat_date">Nov 27,2021 1110 PM</p>
                        </div>
                    </div>
                    
                    <div className="add_task_right_main_right"></div>

                </div>


            </div>
        </div>


        {/* Assurances section */}
        <div className="flex justify-center py-20 assurance_main">
            <div className="assurance_section">
                <div className="flex justify-center text-white text-3xl pb-7 assurance_logo"><i class="ri-puzzle-2-fill"></i></div>
                <p className="text-white mb-5 text-base font-medium assurance_title">Connect with Uni in Real Time</p>
                <p className="text-gray-500 text-sm font-normal assurance_desc">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
            </div>

            <div className="w-px bg-gray-500 mx-16 assurance_partition"></div>

            <div className="assurance_section">
                <div className="flex justify-center text-white text-3xl pb-7 assurance_logo"><i class="ri-lock-fill"></i></div>
                <p className="text-white mb-5 text-base font-medium assurance_title">Secured & Safe Messages</p>
                <p className="text-gray-500 text-sm font-normal assurance_desc">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
            </div>

            <div className="w-px bg-gray-500 mx-16 assurance_partition"></div>

            <div className="assurance_section">
                <div className="flex justify-center text-white text-3xl pb-7 assurance_logo"><i class="ri-chat-4-fill"></i></div>
                <p className="text-white mb-5 text-base font-medium assurance_title">24/7 Customer Support</p>
                <p className="text-gray-500 text-sm font-normal assurance_desc">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
            </div>
        </div>


        {/* Features Video Section */}
        <div className="home_features">

            <div className="flex justify-center home_features_video">
                <div className="flex relative justify-center items-center home_features_video_main" onClick={() => handlePlayPause(featuresVidRef.current)}>

                    <video src={features_vid} ref={featuresVidRef}/>

                    {isPlaying && currentVideo === featuresVidRef.current ? (
                            <></>
                    ) : (
                            <>
                                <div className="flex justify-center items-center cursor-pointer home_features_play_button">
                                    <i class="ri-play-line"></i>
                                </div>
                                <p className="text-white absolute text-center font-medium">See how we helped Groover to grow 11x faster</p>
                            </>
                    )}

                </div>

            </div>

            <div className="flex justify-center gap-10 py-12 home_customer_reviews">
                <div className="flex flex-col items-center home_customer_review_section">
                    <p className="text-center text-white font-lg mb-4 home_customer_review">"We love Landingfolio! Our designers were using it for their projects, so clients already knew what Landingfolio was and how to use it."</p>
                    <p className="text-center text-white font-base font-medium home_reviewer">Darlene Robertson</p>
                </div>

                <div className="flex flex-col items-center home_customer_review_section">
                    <p className="text-center text-white font-lg mb-4 home_customer_review">"I didn’t know designing in Webflow could be this individualized. I’d never considered it before, but Landingfolio changed my mind."</p>
                    <p className="text-center text-white font-base font-medium home_reviewer">Bessie Cooper</p>
                </div>

                <div className="flex flex-col items-center home_customer_review_section">
                    <p className="text-center text-white font-lg mb-4 home_customer_review">"We love Landingfolio! Our designers were using it for their projects, so clients already knew what Landingfolio was and how to use it."</p>
                    <p className="text-center text-white font-base font-medium home_reviewer">Arlene McCoy</p>
                </div>
            </div>

        </div>
        
    </main>
    
    <div className="flex items-center justify-center p-10">
        <button onClick={navigate('/uni-dashboard')} className="p-4 bg-black text-white">
            To view the university dashboard
        </button>
    </div>

    <HomeFooter />

    </>
);
};

export default Home;
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
import Assurance from '../Components/home/AssuranceSection/Assurance.jsx';
import chatPage from '../assets/home/chatPage.png'



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
        <div className="pb-24 flex flex-col gap-5 items-center home_description">
            <h2 className="text-center font-semibold home_description_title">faucibus pulvinar elementum integer enim neque volutpat</h2>
            <h3 className="w-full font-normal text-center home_description_subtitle">faucibus pulvinar elementum integer enim neque volutpat faucibus pulvinar elementum integer enim neque volutpat</h3>
            <div className="home_description_bttn" ><button>Book Demo</button></div>
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
        <div className="home_add_task">
                <div className="home_add_task_main">
                    <p className="home_add_task_title">Never miss any Task</p>
                    <p className="home_add_task_desc">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet pellentesque aliquam enim.</p>
                    <div><button>Book Demo</button></div>
                </div>

                <img src={chatPage}/>
        </div>


        {/* Assurances section */}
       <Assurance/>


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

            <div className="flex flex-wrap px-5 justify-center gap-10 py-12 home_customer_reviews">
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
        <button onClick={()=>navigate('/uni-dashboard')} className="p-4 bg-black text-white">
            To view the university dashboard
        </button>
    </div>

    <HomeFooter />

    </>
);
};

export default Home;
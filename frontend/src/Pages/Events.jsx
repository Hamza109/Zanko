import React,{useState,useRef} from "react";
import '../styles/events.css'
import HomeHeader from "../Components/home/HomeHeader/HomeHeader.jsx"
import HomeFooter from "../Components/home/HomeFooter/HomeFooter.jsx"
import Assurance from "../Components/home/AssuranceSection/Assurance.jsx"
import liveEvents from "../assets/events/liveEvents.mp4"
import downloadEvent from "../assets/events/downloadEvent.mp4"
import eventPage from '../assets/home/eventPage.png'
import addEvent from '../assets/events/addEvent.png'

const Events=()=>{


    const liveEventsRef = useRef();
    const downloadEventRef = useRef();
    
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

    return(
        <div>
            <div className="home_header_container"><HomeHeader /></div>

            <main className="events_main">

                {/* Heading and subheading section */}
                <div className="pb-24 flex flex-col gap-5 items-center events_description">
                    <h2 className="text-center font-semibold events_description_title">Make Students explore more options for their career as well as for their Personal Growth</h2>
                    <h3 className="font-normal text-center events_description_subtitle">faucibus pulvinar elementum integer enim neque volutpat faucibus pulvinar elementum integer enim neque volutpat</h3>
                    <div className="events_description_bttn" ><button>Book Demo</button></div>
                </div>



                {/* Live Events section */}
                <div className="bg-black flex flex-col items-center live_events_section">
                    <p className="text-center font-semibold live_events_title">Live Events</p>
                    <p className="text-center live_events_subtitle">Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.</p>
                    <div className="flex flex-col justify-center items-center live_events_main">
                        <div className="live_events_main_video" onClick={() => handlePlayPause(liveEventsRef.current)}>
                            <video src={liveEvents} ref={liveEventsRef}/>
                            {isPlaying && currentVideo === liveEventsRef.current ? (
                                <></>
                            ) : (
                                    <>
                                        <div className="flex justify-center items-center cursor-pointer live_events_play_button">
                                            <i class="ri-play-line"></i>
                                        </div>
                                    </>
                            )}
                            <div className="text-white live_events_comment1">
                                <p>What are the documents needed to start the application ?</p>
                            </div> 
                            <div className="text-white live_events_comment2">
                                <p>May I know the Application deadline for 2024 ?</p>
                            </div>
                            <div className="flex flex-col text-white live_events_video_details">
                                <p className="font-extralight live_events_video_details_desig">Professor</p>
                                <p className="font-light live_events_video_details_name">Mary Jhones - <span>StanDford University</span></p>
                                <div className="flex flex-col items-center justify-center relative live_events_video_details_live"><div className="absolute top-px right-px h-1 w-1 rounded bg-red-500"></div><p>Live</p></div>
                                <div className="flex items-center live_events_video_details_viewers"><i class="ri-group-fill"></i><p>2K Watching</p></div>
                            </div>
                        </div>                
                    </div>
                </div>


                {/* Never miss events section */}
                <div className="flex justify-center flex-wrap events_never_miss">
                    <div className="flex flex-col events_never_miss_main">
                        <p className="events_never_miss_title">Never miss any Event</p>
                        <p className="events_never_miss_desc">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet pellentesque aliquam enim.</p>
                        <div><button>Add Event</button></div>
                    </div>

                    <img src={eventPage}/>
                </div>


                {/* Assurance Section */}
                <Assurance /> 

                {/* Add Event Section */}
                <div className="flex flex-wrap justify-center events_add_event">
                    <img src={addEvent} />

                    <div className="flex flex-col items-center justify-center events_add_event_main">
                        <div className="events_add_event_main_bttn"><button><i class="ri-add-line"></i><p>Add Event</p></button></div>
                        <p className="text-center font-medium events_add_event_main_title">Host Your Own Events, group chats from anywhere at anytime.</p>
                        <p className="text-center events_add_event_main_subtitle">Hussle free experience 24/7</p>
                    </div>
                </div>


                {/* Downloadable events section */}
                <div className="flex flex-col items-center events_download">
                    <p className="font-medium text-center events_download_title">Events now can be downloadable</p>
                    <div className="events_download_video"  onClick={() => handlePlayPause(downloadEventRef.current)}>
                        <video src={downloadEvent} ref={downloadEventRef}/>
                        {isPlaying && currentVideo === downloadEventRef.current ? (
                            <></>
                        ) : (
                                <>
                                    <div className="flex justify-center items-center cursor-pointer live_events_play_button">
                                        <i class="ri-play-line"></i>
                                    </div>
                                </>
                        )} 
                    </div>
                </div>

            
            </main>

            <HomeFooter/>

        </div>
    )
}

export default Events;
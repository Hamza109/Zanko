import React,{useState} from 'react';
import '../../../styles/uni-settings.css'
import UniSidebar from "../../../Components/Dashboard/DashboardSidebar/DashboardSidebar.jsx"
import UniDashboardHeader from "../../../Components/Dashboard/DashboardHeader/DashboardHeader.jsx"
import tap_feed from '../../../assets/uni-tapfeed/tap_feed.mp4'



const UniSettings = () => {

    const [buttonText, setButtonText] = useState(1);
    const text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, maiores id cum eos pariatur, accusantium corrupti quos ut, iste voluptatum consequuntur tempora debitis voluptatem saepe blanditiis minus repellendus quod distinctio?';
    
    const copyToClipboard = () => {
        navigator.clipboard.writeText(text).then(() => {
          setButtonText(0);
          setTimeout(() => {
            setButtonText(1);
          }, 2000);
        });
    };


    return(
        <div className="uni_dashboard_container">
            <UniSidebar />
        
            <UniDashboardHeader />

            <div className="uni_dash_main">
               <p className="tap_feed_title">Tap Feed</p>

                {/* Tap feed description */}
               <div className="flex flex-col gap-2 tap_feed_desc">
                    <p>
                       An iframe (inline frame) is an HTML element used to embed another HTML document within the current document.
                       It allows you to display content like videos, maps, or web pages from other sources on your web page. The `src` 
                       attribute specifies the URL of the embedded content, and additional attributes can control its size, appearance,
                       and functionality.
                    </p>
                    <p>
                       Iframes are versatile and widely used, but it's important to ensure the embedded content is from a trusted source to
                       avoid security risks like cross-site scripting (XSS) attacks.
                    </p>
               </div>

               {/* Steps and video (main) section */}
               <div className="flex flex-wrap justify-center items-center gap-24 tap_feed_main">
                    <div className="flex flex-col gap-3 tap_feed_main_left">
                        <p>Steps</p>
                        <ul>
                            <li>Start with a basic HTML structure</li>
                            <li>Determine where you want to place the iframe in your document.</li>
                            <li>Insert the iframe tag at the desired location in your HTML code.</li>
                            <li>Use the src attribute to specify the URL of the page you want to embed.</li>
                            <li>Use the width and height attributes to define the size of the iframe.</li>
                            <li>Add other attributes like frameborder, allowfullscreen, sandbox, etc., as needed.</li>
                        </ul>
                    </div>

                    <div className="tap_feed_main_partition"></div>

                    <div className="flex flex-col gap-3 tap_feed_main_right">
                        <p className="tap_feed_main_right_title">Or Watch a video</p>
                        <div className="tap_feed_main_video"><video src={tap_feed} controls/></div>
                        <p className="tap_feed_main_right_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
               </div>


               {/* Tap feed code section */}
               <div className="tap_feed_code">
                    <p className="tap_feed_code_title">TAP-hosted  TAP-feed</p>
                    <div className="flex flex-col gap-2 tap_feed_code_main">
                        <div className="flex gap-5">
                            <p className="text-base font-medium">Embed</p>
                            <button onClick={copyToClipboard} >
                                {
                                    buttonText?
                                    <div className="flex gap-1 text-base"><p>Copy</p><i class="ri-file-copy-line"></i></div>
                                    :
                                    <div className="flex gap-1 text-base"><p>Copied</p><i class="ri-check-double-line"></i></div>
                                }
                            </button>
                        </div>
                        <div className="tap_feed_code_text">
                            <p>{text}</p>
                        </div>
                    </div>
               </div>


            </div>
       </div>
    )
}


export default UniSettings;
import React from 'react'
import HomeHeader from '../Components/home/HomeHeader/HomeHeader'
import HomeFooter from '../Components/home/HomeFooter/HomeFooter'
import Assurance from '../Components/home/AssuranceSection/Assurance'
import ApplyButton from '../Components/StudentCard/ApplyButton'
import Dashboard from '../assets/chatScreen/Dashboard.png'
import '../styles/forStudents.css'
import chatPage from '../assets/home/chatPage.png'
import CardSlider from '../assets/chatScreen/CardSlider.png'
import '../styles/community.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import analytics_img from '../assets/community/analytics_img.png'
import user_img from '../assets/community/user_img.png'
import earth from '../assets/community/Earth.png'


const ChatLanding = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    

  return (
<>

<div className="home_header_container"><HomeHeader /></div>

<main className="home_main">
    
    {/* Heading and subheading section */}
    <div className="pb-24 flex flex-col gap-5 items-center forstudents_description">
        <h2 className="text-center font-semibold text-2xl lg:text-5xl forstudents_description_title">Received an Offer letter to study somewhere ?</h2>          
    
        <div className='apply'>
      <ApplyButton  title={'Book Demo'}/>
        </div>
    </div>




    <section className="bg-black text-white py-20">
          <div className=" flex flex-col  md:flex-row items-center">
            {/* Left side: Text content */}
            <div className="md:w-full  w-full text-center  ml-20 ">
              <h2 className="font-bold feature-text-left text-2xl lg:text-5xl   "  >Get real time analytics</h2>
              <h2 className="font-bold feature-text-left text-2xl lg:text-5xl   "> on the chats of</h2>
              <h2 className="font-bold feature-text-left text-2xl lg:text-5xl   ">students engagement</h2>
            </div>
            {/* Right side: Image */}
            <div className="flex  justify-end md:w-1/2  w-full mt-10 md:mt-0 chat-demo">
              <img src={Dashboard} alt="Chatbox" className="md:mr-0 w-1/2 h-1/2 lg:w-full lg:h-full " />
            </div>
          </div>
        </section>



    


    {/* Never miss any task */}
    <div className="flex flex-col flex-col-reverse lg:flex-row justify-center py-24 px-4 gap-10 add_task">
    <div className="home_add_task">
    <img  style={{width: 500}} src={chatPage} />
    </div>
       

        <div className="max-w-md flex items-center justify-center ">
            <p className="text-3xl lg:text-5xl  text-left font-bold  mb-10 add_task_title " style={{fontFamily:'HK Grotesk'}} >Get in touch with your buddies</p>

        </div>
    </div>





    {/* Assurances section */}
   <Assurance />


{/* Faq Section */}

   <section className="py-20 bg-white">

    

   <div className="flex flex-col items-center lg:flex-row justify-center lg:p-20 p-8 gap-10 add_task">

   <div className="md:w-full w-full  lg:w-1/2 text-left justify-center flex   ">
            
              <h2 className="font-bold feature-text-left text-2xl lg:text-5xl ">Chat with Community on Various Topics</h2>
            </div>
    <div className=' w-full lg:w-1/2 justify-center flex ' >
    <img  style={{width: 400}} src={CardSlider} />
    </div>
       

      
    </div>

    </section>


     


{/* Search University Section*/}

    <section className=" flex flex-col  justify-center search-section-container text-center">
      <h2 className="search-header-text text-2xl lg:text-7xl mb-6">Search University to start with</h2>
      <div className="inline-flex items-center bg-white mt-12 rounded-full px-4 py-2 shadow-md mx-auto w-3/4 md:w-1/2">
        <input type="text" className="outline-none px-2 py-1 lg:px-4 lg:py-2 w-full" placeholder="Type University Name" />
        <button className="bg-black text-white  px-2 py-1 lg:px-4 lg:py-2 rounded-full">Search</button>
      </div>
    </section>


      {/* Community reviews section   */}
      <div className="community_reviews">
                    <Slider {...settings}>
                        
                        <div className="flex p-5 justify-center items-center h-full">
                            <div className="community_reviews_section">
                                <div className="flex  justify-center items-center ">
                                <img  src={user_img} width={100} alt="User" />
                                </div>
                       
                                <div className="community_reviews_section_main">
                                   
                                    <p>
                                        Nunc urna commodo nisl justo vel blandit ultrices. Sollicitudin imperdiet in risus non. Egestas facilisis fermentum elementum fringilla.
                                        Arcu gravida nec nisl turpis id. Vestibulum justo sit malesuada ac. Neque cras proin id amet iaculis sit.
                                    </p>
                                </div>
                            </div>
                        </div> 

                        <div className="flex p-5 justify-center items-center h-full">
                            <div className="community_reviews_section">
                                <div className="flex  justify-center items-center ">
                                <img  src={user_img} width={100} alt="User" />
                                </div>
                       
                                <div className="community_reviews_section_main">
                                   
                                    <p>
                                        Nunc urna commodo nisl justo vel blandit ultrices. Sollicitudin imperdiet in risus non. Egestas facilisis fermentum elementum fringilla.
                                        Arcu gravida nec nisl turpis id. Vestibulum justo sit malesuada ac. Neque cras proin id amet iaculis sit.
                                    </p>
                                </div>
                            </div>
                        </div> 
                        <div className="flex p-5 justify-center items-center h-full">
                            <div className="community_reviews_section">
                                <div className="flex  justify-center items-center ">
                                <img  src={user_img} width={100} alt="User" />
                                </div>
                       
                                <div className="community_reviews_section_main">
                                   
                                    <p>
                                        Nunc urna commodo nisl justo vel blandit ultrices. Sollicitudin imperdiet in risus non. Egestas facilisis fermentum elementum fringilla.
                                        Arcu gravida nec nisl turpis id. Vestibulum justo sit malesuada ac. Neque cras proin id amet iaculis sit.
                                    </p>
                                </div>
                            </div>
                        </div> 

                    </Slider>
                </div>
  





</main>




<HomeFooter />

</>
  )
}

export default ChatLanding

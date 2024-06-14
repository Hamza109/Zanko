import React from 'react'
import HomeHeader from '../Components/home/HomeHeader/HomeHeader'
import HomeFooter from '../Components/home/HomeFooter/HomeFooter'
import Assurance from '../Components/home/AssuranceSection/Assurance'
import ApplyButton from '../Components/StudentCard/ApplyButton'
import ChatDemo from '../assets/forStudents/ChatDemo.png'
import '../styles/forStudents.css'
const ForStudents = () => {
  return (
<>

<div className="home_header_container"><HomeHeader /></div>

<main className="home_main">
    
    {/* Heading and subheading section */}
    <div className="pb-24 home_description">
        <div className="flex justify-center items-center mb-8 home_description_title">
            <h2 className="font-semibold text-lg lg:text-7xl sm:text-2xl  "  >Received an Offer letter to study somewhere ?</h2>
        </div>
        <div className='items-center flex justify-center' style={{marginTop:112}}>
        <ApplyButton  title={'Join Community'}/>
        </div>

    </div>



    <section className="bg-black text-white py-20">
          <div className=" flex flex-col  md:flex-row items-center">
            {/* Left side: Text content */}
            <div className="md:w-full  w-full text-center  ml-20 ">
              <h2 className="font-bold feature-text-left text-2xl lg:text-6xl  mb-10 ">Need to know about the Features</h2>
            </div>
            {/* Right side: Image */}
            <div className="flex  justify-end md:w-1/2  w-full mt-10 md:mt-0 chat-demo">
              <img src={ChatDemo} alt="Chatbox" className="md:mr-0 w-1/2 h-1/2 lg:w-full lg:h-full " />
            </div>
          </div>
        </section>



    


    {/* Never miss any task */}
    <div className="flex flex-col flex-col-reverse lg:flex-row justify-center py-24 px-4 gap-24 add_task">
    

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
        <div className="max-w-md flex items-center justify-center ">
            <p className="text-2xl lg:text-5xl text-center font-semibold mb-10 add_task_title ">Get in touch with Community</p>

        </div>
    </div>





    {/* Assurances section */}
   <Assurance />


{/* Faq Section */}

   <section className="py-20 bg-white">
      <div className="container mx-auto text-center px-4">
        <div className='faq-header-container '>
        <h2 className="faq-header-text text-3xl lg:text-7xl  ">Confused?</h2>
        <h2 className="faq-header-text text-3xl lg:text-7xl  mb-10">Ask questions</h2>
        </div>
        <div className="flex flex-col items-center space-y-6">
          {/* Chat bubbles */}
          <div className="flex flex-col items-end space-y-4 w-full md:w-2/3 ">
            <div className="bg-blue-500 text-white  p-2 lg:p-4 rounded-t-lg rounded-br-lg text-left shadow-md max-w-xs">
              <p className="lg:text-lg text-sm">Hi 👋</p>
              <p className="text-xs text-gray-200 mt-2 text-right">11:31 AM</p>
            </div>
            <div className="bg-blue-500 text-white p-2 lg:p-4  rounded-t-lg rounded-br-lg text-left shadow-md max-w-xs">
              <p className="lg:text-lg text-sm">May I know the Application deadline for 2024?</p>
              <p className="text-xs text-gray-200 mt-2 text-right">11:31 AM</p>
            </div>
          </div>


          <div className='gradient-text-container w-full md:w-2/3 items-end flex flex-col ' >
          <h3 className=" text-gradient text-2xl lg:text-7xl ">Get answered</h3>
          </div>

          <div className="flex items-start space-x-4 w-full md:w-2/3 ">
            <img src={''} alt="User Avatar" className="w-10 h-10 rounded-full" />
            <div className="bg-gray-200 mb-20 text-black p-2 lg:p-4  rounded-t-lg rounded-bl-lg text-left shadow-md max-w-xs">
              <p className="lg:text-lg text-sm">Can you provide the official mail to forward the brochure?</p>
              <p className="text-xs text-gray-600 mt-2">11:45 AM</p>
            </div>
          </div>
          
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
  





</main>




<HomeFooter />

</>
  )
}

export default ForStudents

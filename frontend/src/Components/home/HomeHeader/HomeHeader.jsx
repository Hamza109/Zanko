import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./home-header.css";
import Modal from "react-modal";
import Login from "../../Authentication/Login";
import SignUp from "../../Authentication/SignUp";
import "../../Authentication/Authentication.css";
import blogs_logo from '../../../assets/home-header/blogs_logo.png'
import events_logo from '../../../assets/home-header/events_logo.png'
import community_logo from '../../../assets/home-header/community_logo.png'
import chat_logo from '../../../assets/home-header/chat_logo.png'
import webinars_logo from '../../../assets/home-header/webinars_logo.png'
import guides_logo from '../../../assets/home-header/guides_logo.png'
import customerstories_logo from '../../../assets/home-header/customerstories_logo.png'
import * as Components from './Components';
import ApplyButton from "../../StudentCard/ApplyButton";
import Google from '../../../assets/Authentication/Google.png'
import Facebook from '../../../assets/Authentication/Facebook.png'
import Apple from '../../../assets/Authentication/Apple.png'




const HomeHeader = () => {

  // for handling hamburger dropdowns
  const [dropdown, setDropdown] = useState(false);
  const [signIn, toggle] = React.useState(true);

  //0->none 1->Platform 2->Resources 3->solutions
  const [hamburgDropdown,setHamburgDropdown] = useState(0);
  


  //To handle signup and login
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const toggleForm = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setIsAnimating(false);
    }, 500); // Duration of the animation
  };


  return (

    <header className="home_header">
      <div className="home_header_border">
        <div className="home_header_main">

          <div onClick={openModal}  className="w-40 bg-white home_header_logo">
            logo
          </div>
          
          {/* Login/Signup Section */}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Authentication Modal"
            className="modal"
            overlayClassName="overlay"
          >
  <Components.Container>
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Sign Up</Components.Title>
                   
                      <Components.Input type='text' placeholder='username' />
          
                      <Components.Input type='email' placeholder='email' />
                      <Components.Input type='password' placeholder='password' />
                      <Components.Input type='password' placeholder='confirm password' />
                      <ApplyButton title={'Sign Up'} />
                      <div className="flex items-center my-3 px-2">
    <hr className="flex-grow border-t border-gray" />
    <span className="mx-2  text-xs ">or Login with</span>
    <hr className="flex-grow border-t border-gray" />
  </div>
  <div className="social-login flex justify-center space-x-4 my-4">
    <button className="social-btn">
  <img src={Google} width={20} height={20} />
    </button>
    <button className="social-btn">
    <img src={Facebook} width={20} height={20} />
    </button>
    <button className="social-btn">
    <img src={Apple} width={20} height={20} />
    </button>
  </div>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form>
                       <Components.Title>Sign in</Components.Title>
                       <Components.Input type='email' placeholder='Email' />
                       <Components.Input type='password' placeholder='Password' />
                       <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                       <ApplyButton title={'Sign In'} />
                       <div className="flex items-center my-3 px-2">
          <hr className="flex-grow border-t border-gray" />
          <span className="mx-2  text-xs ">or Login with</span>
          <hr className="flex-grow border-t border-gray" />
        </div>
        <div className="social-login flex justify-center space-x-4 my-4">
          <button className="social-btn">
        <img src={Google} width={20} height={20} />
          </button>
          <button className="social-btn">
          <img src={Facebook} width={20} height={20} />
          </button>
          <button className="social-btn">
          <img src={Apple} width={20} height={20} />
          </button>
        </div>
    
    
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                  <Components.Title className="text-gradient">Zanko</Components.Title>
                      <Components.Paragraph>
                      Our platform is always here for you. Access information and assistance seamlessly, anytime, anywhere at Zanko.
                      </Components.Paragraph>
                   <ApplyButton title={'Sign In'} onClick={()=>toggle(true)} />
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title className="text-gradient">Zanko</Components.Title>
                        <Components.Paragraph>
                        Our platform is always here for you. Access information and assistance seamlessly, anytime, anywhere at Zanko.
                        </Components.Paragraph>
                           <ApplyButton title={'Sign Up'} onClick={()=>toggle(false)} />
                           
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
          </Modal>

          {/* Right Section of Home Header */}
          <div className="home_header_right">
            <div className="home_header_options">

              <div className="home_header_drop_option">
                <div className="flex text-white home_header_drop_option_main"><p>Platform</p><i class="ri-arrow-down-s-line"></i></div>
                <div className="home_header_option_dropdown_container">
                  <div className="home_header_option_dropdown_border">
                    <div className="home_header_option_dropdown">
 
                      <NavLink to="/chat" className={({ isActive }) =>isActive ? "home_header_option_dropdown_element active" :"home_header_option_dropdown_element"}> 
                        <div className="flex items-center gap-3 p-2">
                          <div className="w-10 h-10"><img src={chat_logo}/></div>
                          <p className="home_header_option_dropdown_click">Chat</p>
                        </div>
                        <p className="home_header_option_dropdown_element_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </NavLink>

                      <NavLink to="/community" className={({ isActive }) =>isActive ? "home_header_option_dropdown_element active" :"home_header_option_dropdown_element"}> 
                        <div className="flex items-center gap-3 p-2">
                          <div className="w-10 h-10"><img src={community_logo}/></div>
                          <p className="home_header_option_dropdown_click">Community</p>
                        </div>
                        <p className="home_header_option_dropdown_element_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </NavLink>

                      <NavLink to="/events" className={({ isActive }) =>isActive ? "home_header_option_dropdown_element active" :"home_header_option_dropdown_element"}> 
                        <div className="flex items-center gap-3 p-2">
                          <div className="w-10 h-10"><img src={events_logo}/></div>
                          <p className="home_header_option_dropdown_click">Events</p>
                        </div>
                        <p className="home_header_option_dropdown_element_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </NavLink>

                    </div>
                  </div>
                </div>
              </div>

              <div className="home_header_drop_option">
                <div className="flex text-white home_header_drop_option_main"><p>Solutions</p><i class="ri-arrow-down-s-line"></i></div>
                <div className="home_header_option_dropdown_container">
                  <div className="home_header_option_dropdown_border">
                    <div className="home_header_option_dropdown">
 
                      <NavLink to="/undergrad-admissions" className={({ isActive }) =>isActive ? "home_header_option_dropdown_element active" :"home_header_option_dropdown_element"}> 
                        <div className="flex items-center gap-3 p-2">
                          <div className="w-10 h-10"><img src={events_logo}/></div>
                          <p className="home_header_option_dropdown_click">Undergraduate Admissions</p>
                        </div>
                        <p className="home_header_option_dropdown_element_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </NavLink>

                      <NavLink to="/graduate-admissions" className={({ isActive }) =>isActive ? "home_header_option_dropdown_element active" :"home_header_option_dropdown_element"}> 
                        <div className="flex items-center gap-3 p-2">
                          <div className="w-10 h-10"><img src={events_logo}/></div>
                          <p className="home_header_option_dropdown_click">Graduate Admissions</p>
                        </div>
                        <p className="home_header_option_dropdown_element_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </NavLink>

                      <NavLink to="/international-recruitment" className={({ isActive }) =>isActive ? "home_header_option_dropdown_element active" :"home_header_option_dropdown_element"}> 
                        <div className="flex items-center gap-3 p-2">
                          <div className="w-10 h-10"><img src={events_logo}/></div>
                          <p className="home_header_option_dropdown_click">International Recruitment</p>
                        </div>
                        <p className="home_header_option_dropdown_element_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </NavLink>

                    </div>
                  </div>
                </div>
              </div>

              <NavLink to="/for-student" className={({ isActive }) =>isActive ? "home_header_option active" : "home_header_option"}>
                <p>For Students</p>
              </NavLink>

              <NavLink to="/pricing" className={({ isActive }) =>isActive ? "home_header_option active" : "home_header_option"}>
                <p>Pricing</p>
              </NavLink>

              <div className="home_header_drop_option">
                <div className="flex text-white home_header_drop_option_main"><p>Resources</p><i class="ri-arrow-down-s-line"></i></div>

                <div className="home_header_option_dropdown_container">
                  <div className="home_header_option_dropdown_border">
                    <div className="home_header_option_dropdown">
                      <NavLink to="/" className={({ isActive }) =>isActive ? "home_header_option_dropdown_element active" :"home_header_option_dropdown_element"}> 
                        <div className="flex items-center gap-3 p-2">
                          <div className="w-10 h-10"><img src={blogs_logo}/></div>
                          <p className="home_header_option_dropdown_click">Blogs</p>
                        </div>
                        <p className="home_header_option_dropdown_element_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </NavLink>
                      
                      <NavLink to="/" className={({ isActive }) =>isActive ? "home_header_option_dropdown_element active" :"home_header_option_dropdown_element"}> 
                        <div className="flex items-center gap-3 p-2">
                          <div className="w-10 h-10"><img src={customerstories_logo}/></div>
                          <p className="home_header_option_dropdown_click">Customer Stories</p>
                        </div>
                        <p className="home_header_option_dropdown_element_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </NavLink>

                      <NavLink to="/guides" className={({ isActive }) =>isActive ? "home_header_option_dropdown_element active" :"home_header_option_dropdown_element"}> 
                        <div className="flex items-center gap-3 p-2">
                          <div className="w-10 h-10"><img className="w-10 h-10" src={guides_logo}/></div>
                          <p className="home_header_option_dropdown_click">Guides</p>
                        </div>
                        <p className="home_header_option_dropdown_element_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </NavLink>

                      <NavLink to="/webinars" className={({ isActive }) =>isActive ? "home_header_option_dropdown_element active" :"home_header_option_dropdown_element"}> 
                        <div className="flex items-center gap-3 p-2">
                          <div className="w-10 h-10"><img src={webinars_logo}/></div>
                          <p className="home_header_option_dropdown_click">Webinars and Events</p>
                        </div>
                        <p className="home_header_option_dropdown_element_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </NavLink>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="home_header_signup_border">
              <button>Sign Up</button>
            </div>


            {/* Hamburger Menu for Mobile display */}
            <div className="home_header_hammenu_border">
              <div
                className="home_header_hammenu"
                onClick={() => {
                  setDropdown(!dropdown);
                }}
              >
                {dropdown ? (
                  <i className="ri-close-large-line"></i>
                ) : (
                  <i className="ri-menu-line"></i>
                )}
              </div>
            </div>

            {dropdown ? (
              <div className="home_header_dropdown">
                <div className="home_header_dropdown_option" onClick={()=>{setHamburgDropdown(hamburgDropdown === 1 ? 0 : 1)}}>
                  <p>Platform</p>
                  {hamburgDropdown===1?<i class="ri-arrow-down-s-line"></i>:<i class="ri-arrow-up-s-line"></i>}
                </div>
                {
                  hamburgDropdown===1?
                  <div className="flex flex-col gap-2">
                      <NavLink to="/chat" className={({ isActive }) =>isActive ? "home_header_dropdown_sub_option active" : "home_header_dropdown_sub_option"}>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6"><img src={chat_logo}/></div>
                          <p>Chat</p>
                        </div>
                      </NavLink>
                      <NavLink to="/community" className={({ isActive }) =>isActive ? "home_header_dropdown_sub_option active" : "home_header_dropdown_sub_option"}>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6"><img src={community_logo}/></div>
                          <p>Community</p>
                        </div>
                      </NavLink>
                      <NavLink to="/events" className={({ isActive }) =>isActive ? "home_header_dropdown_sub_option active" : "home_header_dropdown_sub_option"}>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6"><img src={events_logo}/></div>
                          <p>Events</p>
                        </div>
                      </NavLink>
                  </div>
                  :
                  <></>
                }
                
                <div className="home_header_dropdown_option" onClick={()=>{setHamburgDropdown(hamburgDropdown === 3 ? 0 : 3)}}>
                  <p>Solutions</p>
                  {hamburgDropdown===3?<i class="ri-arrow-down-s-line"></i>:<i class="ri-arrow-up-s-line"></i>}
                </div>
                {
                  hamburgDropdown===3?
                  <div className="flex flex-col gap-2">
                      <NavLink to="/undergrad-admissions" className={({ isActive }) =>isActive ? "home_header_dropdown_sub_option active" : "home_header_dropdown_sub_option"}>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6"><img src={events_logo}/></div>
                          <p>Undergraduate Admissions</p>
                        </div>
                      </NavLink>
                      <NavLink to="/graduate-admissions" className={({ isActive }) =>isActive ? "home_header_dropdown_sub_option active" : "home_header_dropdown_sub_option"}>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6"><img src={events_logo}/></div>
                          <p>Graduate Admissions</p>
                        </div>
                      </NavLink>
                      <NavLink to="/international-recruitment" className={({ isActive }) =>isActive ? "home_header_dropdown_sub_option active" : "home_header_dropdown_sub_option"}>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6"><img src={events_logo}/></div>
                          <p>International Recruitment</p>
                        </div>
                      </NavLink>
                  </div>
                  :
                  <></>
                }

                <NavLink to="/for-student" className={({ isActive }) =>isActive ? "home_header_dropdown_option active" : "home_header_dropdown_option"}>
                  <p>For Students</p>
                </NavLink>

                <NavLink to="/pricing" className={({ isActive }) =>isActive ? "home_header_dropdown_option active" : "home_header_dropdown_option"}>
                  <p>Pricing</p>
                </NavLink>

                <div className="home_header_dropdown_option" onClick={()=>{setHamburgDropdown(hamburgDropdown === 2 ? 0 : 2)}}>
                  <p>Resources</p>
                  {hamburgDropdown===2?<i class="ri-arrow-down-s-line"></i>:<i class="ri-arrow-up-s-line"></i>}
                </div>
                {
                  hamburgDropdown===2?
                  <div className="flex flex-col gap-2">
                      <NavLink to="/" className={({ isActive }) =>isActive ? "home_header_dropdown_sub_option active" : "home_header_dropdown_sub_option"}>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6"><img src={blogs_logo}/></div>
                          <p>Blogs</p>
                        </div>
                      </NavLink>
                      <NavLink to="/" className={({ isActive }) =>isActive ? "home_header_dropdown_sub_option active" : "home_header_dropdown_sub_option"}>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6"><img src={customerstories_logo}/></div>
                          <p>Customer Stories</p>
                        </div>
                      </NavLink>
                      <NavLink to="/guides" className={({ isActive }) =>isActive ? "home_header_dropdown_sub_option active" : "home_header_dropdown_sub_option"}>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6"><img className="w-6 h-6" src={guides_logo}/></div>
                          <p>Guides</p>
                        </div>
                      </NavLink>
                      <NavLink to="/webinars" className={({ isActive }) =>isActive ? "home_header_dropdown_sub_option active" : "home_header_dropdown_sub_option"}>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6"><img src={webinars_logo}/></div>
                          <p>Webinars and Events</p>
                        </div>
                      </NavLink>
                  </div>
                  :
                  <></>
                }
              </div>
            ) : (
              <></>
            )}
            
          </div>


        </div>
      </div>
    </header>
  );
};

export default HomeHeader;

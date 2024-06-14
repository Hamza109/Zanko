import React from 'react'
import StudentSection from '../Components/StudentCard/StudentSection'
import ApplyButton from '../Components/StudentCard/ApplyButton'
import uniBackground from '../assets/chatScreen/uniBackground.png'
import '../styles/chatScreen.css'

const ChatScreen = () => {
  return (
    <div className='chat-container' >

{/* <header className="header ">
      <div>
<p className='header-text'>Zanko</p>
      </div>
    </header>

    <section className="hero-section">
      <img src={uniBackground} alt="University" />
    </section> */}

        <StudentSection/>
       
        <div className='apply'>
        <ApplyButton title={'Apply'}/>
        </div>
 
    </div>
  )
}

export default ChatScreen
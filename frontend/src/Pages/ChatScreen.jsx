import React from 'react'
import StudentSection from '../Components/StudentCard/StudentSection'
import ApplyButton from '../Components/StudentCard/ApplyButton'
import uniBackground from '../assets/chatScreen/uniBackground.png'
import '../styles/chatScreen.css'
import Groups from '../Components/chat/ChatLanding/Groups/Groups'
import SearchBar from '../Components/chat/ChatLanding/Search/SearchBar'
import Filters from '../Components/chat/ChatLanding/Filters/Filters'
import Navbar from '../Components/chat/ChatLanding/Navbar/Navbar'


const ChatScreen = () => {

  




  return (
    <div className='chat-container' >

 


<div className="p-20">
<Navbar />
  
<div className=" font-semibold text-4xl my-10 md:block ml-12 ">
      Lets Chat
        </div>
        <div className=" font-light text-xl  my-10 md:block ml-12 ">
        Start a chat with our friendly ambassadors now!
        </div>

<div className='search-section'>




<div className="bar" style={{flex:2}}>
<SearchBar/>
</div>


<div className='search-button'  >
  <button>Search</button>
</div>

</div>

<div className="filter-section">
  <Filters />
</div>

</div>



        <StudentSection/>
       
   
 
    </div>
  )
}

export default ChatScreen
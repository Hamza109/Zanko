import React,{useEffect, useState} from 'react'
import ChatWindow from '../Components/chat/chatWindow/ChatWindow';
import Sidebar from '../Components/chat/Sidebar';
import ChatHeader from '../Components/chat/chatHeader/ChatHeader';
import Inbox from '../Components/chat/inbox/Inbox';
import '../styles/chatWindowScreen.css'
import { useDispatch,useSelector } from 'react-redux';
import { headerData } from '../Redux/Slice/HeaderSlice';
import { useLocation } from 'react-router';
import ChatWindow2 from '../Components/chat/chatWindow/ChatWindow2';
const ChatWindowScreen = () => {
  const location=useLocation()
  const {toChat,user}=location.state||{}
    const [showUserList, setShowUserList] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
   const dispatch=useDispatch()
    const headerText = useSelector((state) => state.header.headerText);



    const handleUserClick = (user) => {
      setSelectedUser(user);
    };
  

  const handleChatBubbleClick = () => {
    setShowUserList(true);
    setSelectedUser(null);
    dispatch(headerData('Inbox'))
  };

useEffect(()=>{
  if(toChat){

    setSelectedUser(user)
   
  }
},[])

    return (
        <div className="flex h-screen bg-black p-5 ">
              <div className='logo'>
<p className='logo-text'>Zanko</p>
      </div>

      <Sidebar onChatBubbleClick={handleChatBubbleClick} />

          <div className="flex flex-col flex-grow">
          <ChatHeader header={headerText} onUserClick={handleUserClick} />
          {selectedUser ? (
            <>
          <ChatWindow  />
          <ChatWindow2 />
          </>
        ) : (
          <Inbox onUserClick={handleUserClick} />
        )}
          
           
            {/* <ChatWindow /> */}
          </div>
        </div>
      );
}

export default ChatWindowScreen
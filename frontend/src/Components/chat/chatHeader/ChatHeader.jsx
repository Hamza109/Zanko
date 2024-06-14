// Header.js
import React from 'react';
import Menu from '../../../assets/chatScreen/threeDots.png'
import BackButton from '../../../assets/chatScreen/arrow-left.png'
import { IoMdMail } from "react-icons/io";
import './ChatHeader.css'
import { useDispatch } from 'react-redux';
import { headerData } from '../../../Redux/Slice/HeaderSlice';

const ChatHeader = ({header,onUserClick}) => {
  const dispatch=useDispatch()
  const backHandler=()=>{
    onUserClick(null)
    dispatch(headerData('Inbox'))

  }
  return (
    <div className=" border-gradient  ">
      <div className="inner-content justify-between text-white p-4 flex items-center">
        {header=='Inbox'?<IoMdMail className='text-3xl ml-2'/>:
      <button className="text-2xl ml-2" onClick={backHandler} ><img src={BackButton} width={50}  height={50}/></button>
        }
      <div className="flex items-center space-x-4">
        {header=='Inbox'?null:
        <img
          src="profile-pic-url" // Replace with actual URL
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />}
        <div>
          <div className="font-bold">{header=='Inbox'?header:header.name}</div>
          <div className="text-sm">{header=='Inbox'?null:`Last seen 15 minutes ago`}</div>
        </div>
      </div>
      <button className="text-2xl"><img src={Menu}width={7} height={7} className='mr-8' /></button>
      </div>
    </div>
  );
};

export default ChatHeader;

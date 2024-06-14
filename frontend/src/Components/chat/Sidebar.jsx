import React from 'react';
import ChatBubble from '../../assets/chatScreen/chatBubble.png';
import Favourite from '../../assets/chatScreen/favourites.png';
import Setting from '../../assets/chatScreen/settings.png';
import './Sidebar.css';

const Sidebar = ({ onChatBubbleClick }) => {
  return (
    <div className="bg-black text-white w-20 sidebar flex mr-4 flex-col items-center py-4 sidebar-shadow">
      <div className="flex flex-col justify-between h-screen items-center mt-8">
        <div className="space-y-8 items-center flex flex-col">
          <div className="items-center">
            <img
              src={ChatBubble}
              width={40}
              height={40}
              alt="Chats"
              onClick={onChatBubbleClick}
              className="cursor-pointer"
            />
            <div>
              <p className="icon-text ml-1">Chats</p>
            </div>
          </div>
          <div className="items-center">
            <img
              src={Favourite}
              width={50}
              height={50}
              alt="Favourites"
            />
            <div>
              <p className="icon-text">Favourites</p>
            </div>
          </div>
        </div>
        <div className="mb-8 items-center">
          <img
            src={Setting}
            width={40}
            height={40}
            alt="Settings"
          />
          <div>
            <p className="icon-text ml-1">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

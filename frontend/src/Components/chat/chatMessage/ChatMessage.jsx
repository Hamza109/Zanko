// ChatMessage.js
import React from 'react';

const ChatMessage = ({ message, isSender }) => {
  return (
    <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isSender && (
        <img
          src="sender-pic-url" // Replace with actual URL
          alt="Sender"
          className="w-8 h-8 rounded-full mr-2"
        />
      )}
      <div className={`${isSender ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} rounded-lg p-2 max-w-xs`}>
        <p>{message.message}</p>
        <span className="text-xs text-gray-500 mt-1 block text-right">{message.time}</span>
      </div>
    </div>
  );
};

export default ChatMessage;

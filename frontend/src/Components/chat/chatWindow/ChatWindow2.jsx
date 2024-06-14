import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from '../chatMessage/ChatMessage';
import Microphone from '../../../assets/chatScreen/microphone.png';
import { useParams } from 'react-router-dom';
import socket from '../../socket/socket';
import './ChatWindow.css';

const ChatWindow2 = () => {
  const { userId } = useParams();
  const currentUserId = 2; // Set the current user's ID
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Fetch initial messages (optional, depending on your backend implementation)
    // socket.emit('fetchMessages', { userId });

    // Listen for incoming messages
    socket.on('message', (message) => {
      console.log('Message received:', message);
      if (message.sender_id !== currentUserId) {
        setMessages((prevMessages) => [...prevMessages, message]);
      }
    });

    // Clean up the effect
    return () => {
      socket.off('message');
    };
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const message = {
      sender_id: currentUserId, // ID of the current user sending the message
      receiver_id: 1, // ID of the receiver (you can adjust this as needed)
      message: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    // Log the message before sending it
    console.log('Sending message:', message);

    // Send the message to the server
    socket.emit('sendMessage', message);

    // Optimistically add the message to the local state
    setMessages([...messages, message]);
    setNewMessage('');
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="flex flex-col justify-between h-full p-4 bg-white chat-window">
      <div className="overflow-y-auto">
        <ul id="messages">
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} isSender={msg.sender_id === currentUserId} />
          ))}
        </ul>
        <div ref={messagesEndRef} />
      </div>
      <div className="flex items-center mt-4">
        <form id="sendMessageForm" onSubmit={handleSendMessage} className="flex-grow flex">
          <button className="text-2xl">+</button>
          <input
            id="messageInput"
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-grow mx-4 p-4 input-text"
          />
          <button className="text-2xl" type="submit">
            <img src={Microphone} width={40} height={40} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow2;

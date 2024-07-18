import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from '../chatMessage/ChatMessage';
import Microphone from '../../../assets/chatScreen/microphone.png';
import { useParams } from 'react-router-dom';
import socket from '../../socket/socket';
import './ChatWindow.css';

const ChatWindow = ({userMessages}) => {
  const { userId } = useParams();
  const currentUserId = 1; // Set the current user's ID
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);
  

  useEffect(() => {
    // Fetch previous messages
    setMessages(userMessages)


    const messageListener = (message) => {
      console.log('Message received:', message);
      if (message.sender_id !== currentUserId) {
        setMessages((prevMessages) => [...prevMessages, message]);
      }
    };

    // Add the message listener
    socket.on('message', messageListener);

    // Clean up the effect
    return () => {
      socket.off('message', messageListener);
    };
  }, [currentUserId]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const message = {
      sender_id: currentUserId, // ID of the current user sending the message
      receiver_id: 2, // ID of the receiver (you can adjust this as needed)
      message: newMessage,
      sender_type: null,
    };

    try {
      const response = await fetch('http://93.127.167.88:5000/api/chat/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Response data:', data);
    } catch (err) {
      console.log('Fetch error:', err);
    }
    // Log the message before sending it
    console.log('Sending message:', message);

    // Send the message to the server
    socket.emit('sendMessage', message);

    // Optimistically add the message to the local state
    setMessages((prevMessages) => [...prevMessages, message]);
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
          {Array.isArray(messages) && messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} isSender={msg.sender_id === currentUserId} />
          ))}
        </ul>
        <div ref={messagesEndRef} />
      </div>
      <div className="flex items-center mt-4">
        <form id="sendMessageForm" onSubmit={handleSendMessage} className="flex-grow flex">
          <button type="button" className="text-2xl">+</button>
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

export default ChatWindow;

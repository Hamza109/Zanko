import React from 'react';
import studentImage from '../../assets/chatScreen/student.png';
import './StudentCard.css'; // Import the custom CSS file
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import { headerData } from '../../Redux/Slice/HeaderSlice';
import { useDispatch } from 'react-redux';

const StudentCard = ({ name, major, hometown, qualification, about }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate hook

  const handleChatClick = async () => {
    const user = { name: name };
    dispatch(headerData(user));

    try {
      const response = await fetch('http://93.127.167.88:5000/api/chat/messages/1/2');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      // Ensure data is an array
      const messages = Array.isArray(data) ? data : [];
      
      console.log('Response data:', data);

      // Navigate to chat window with messages
      navigate('/chat-window', {
        state: { toChat: true, user: name, userMessages: messages },
      });
    } catch (err) {
      console.log('Fetch error:', err);
    }
  };

  return (
    <div className="white-shadow border rounded-lg max-w-sm mx-auto mb-6 sm:mb-8 md:mb-10">
      <div className="inner-content">
        <div className="bg-black h-12 rounded-t-lg"></div> {/* Black bar at the top */}
        <div className="flex justify-center -mt-8">
          <img src={studentImage} alt={`${name}`} className="rounded-full border-solid border-white border-2 w-24 h-24 object-cover" />
        </div>
        <div className="text-center px-6 py-4">
          <h3 className="text-xl font-semibold">{name}</h3>
          <div className="mb-8" style={{ borderRadius: 50 }}>
            <button
              className="chat-button text-white"
              style={{ borderRadius: 50 }}
              onClick={handleChatClick}
            >
              Chat with {name}
            </button>
          </div>
          <div className="mt-4 text-left">
            <p className="font-bold">Major(s)</p>
            <p>{major}</p>
            <p className="font-bold">Hometown</p>
            <p>{hometown}</p>
            <p className="font-bold">Previous Qualification</p>
            <p>{qualification}</p>
            <p className="font-bold">About me</p>
            <p>{about}</p>
            <a href="#" className=" mt-4 inline-block">Read more about {name}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;

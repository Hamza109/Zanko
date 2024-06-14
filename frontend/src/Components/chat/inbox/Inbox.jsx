import React from 'react';
import './Inbox.css';
import { useDispatch } from 'react-redux';
import { headerData } from '../../../Redux/Slice/HeaderSlice';

const users = [
  { id: 1, name: 'Mary', message: 'Can you provide the official mail to forward the brochure ?', time: '11:45 AM', imgSrc: 'https://via.placeholder.com/48', isOnline: true },
  { id: 2, name: 'Emily', message: 'Hi 👋', time: '11:00 AM', imgSrc: 'https://via.placeholder.com/48', isOnline: true },
  { id: 3, name: 'Michel', message: 'Hi 👋', time: '10:49 AM', imgSrc: 'https://via.placeholder.com/48', isOnline: true },
  { id: 4, name: 'John', message: 'Hi 👋', time: '10:45 AM', imgSrc: 'https://via.placeholder.com/48', isOnline: true },
];

const Inbox = ({onUserClick}) => {


  const dispatch = useDispatch();

  const handleUserClick = (user) => {
  onUserClick(user)
    dispatch(headerData(user));
  };



  return (
    <div className="flex flex-col space-y-4 sidebar-shadow inbox">
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center justify-between p-4 bg-black shadow-md users cursor-pointer"
          onClick={() => handleUserClick(user)}
        >
          <div className="flex items-center space-x-4">
            <img src={user.imgSrc} alt={user.name} className="w-12 h-12 rounded-full" />
            <div>
              <div className="text-white text-lg font-semibold flex items-center">
                {user.name}
                {user.isOnline && <span className="ml-2 w-2 h-2 bg-green-500 rounded-full"></span>}
              </div>
              <div className="text-gray-400 text-sm">{user.message}</div>
            </div>
          </div>
          <div className="text-gray-400 text-sm">{user.time}</div>
        </div>
      ))}
    </div>
  );
};

export default Inbox;

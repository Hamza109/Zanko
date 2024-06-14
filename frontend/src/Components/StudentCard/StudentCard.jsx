import React from 'react';
import studentImage from '../../assets/chatScreen/student.png';
import './StudentCard.css'; // Import the custom CSS file
import ApplyButton from './ApplyButton';
import { NavLink } from 'react-router-dom';
import { headerData } from '../../Redux/Slice/HeaderSlice';
import { useDispatch } from 'react-redux';

const StudentCard = ({ name, major, hometown, qualification, about }) => {
 const user={name:name}
 const dispatch=useDispatch()
  return (
    <div className="white-shadow border rounded-lg max-w-sm mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14">
      <div className="inner-content">
        <div className="bg-black h-12 rounded-t-lg"></div> {/* Black bar at the top */}
        <div className="flex justify-center -mt-8">
          <img src={studentImage} alt={`${name}`} className="rounded-full border-solid border-white border-2 w-24 h-24 object-cover" />
        </div>
        <div className="text-center px-6 py-4">
          <h3 className="text-xl font-semibold">{name}</h3>
          <div className="mb-8" style={{borderRadius:50}}>
     <NavLink to={'/chat-window'} state={{toChat:true,user:name}}  ><button className="chat-button text-white" style={{borderRadius:50}} onClick={()=>{dispatch(headerData(user))}}  >Chat with {name}</button></NavLink> 
    </div>
          <div className="mt-4 text-left ">
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

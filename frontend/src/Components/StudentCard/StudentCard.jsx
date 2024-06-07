import React from 'react';
import studentImage from '../../assets/chatScreen/student.png';
import './StudentCard.css'; // Import the custom CSS file
import ApplyButton from './ApplyButton';

const StudentCard = ({ name, major, hometown, qualification, about }) => {
  return (
    <div className="gradient-border purple-shadow max-w-sm mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14">
      <div className="inner-content">
        <div className="bg-black h-12 rounded-t-lg"></div> {/* Black bar at the top */}
        <div className="flex justify-center -mt-8">
          <img src={studentImage} alt={`${name}`} className="rounded-full border-solid border-white border-2 w-24 h-24 object-cover" />
        </div>
        <div className="text-center px-6 py-4">
          <h3 className="text-xl font-semibold">{name}</h3>
          <div className="gradient-button-container purple-shadow mb-8" style={{borderRadius:50}}>
      <button className="gradient-button " style={{borderRadius:50}}>Chat with {name}</button>
    </div>
          <div className="mt-4 text-left text-white">
            <p className="font-bold">Major(s)</p>
            <p>{major}</p>
            <p className="font-bold">Hometown</p>
            <p>{hometown}</p>
            <p className="font-bold">Previous Qualification</p>
            <p>{qualification}</p>
            <p className="font-bold">About me</p>
            <p>{about}</p>
            <a href="#" className="text-white  mt-4 inline-block">Read more about {name}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;

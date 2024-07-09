import React from "react";


const AmbassadorCard = ({ name, image, majors, hometown, qualification, about }) => {
    return (
      <div className="ambassador-card">
        <img src={image} alt={`${name}'s profile`} />
        <h3>{name}</h3>
        <button>Chat with {name}</button>
        <p>Majors: {majors}</p>
        <p>Hometown: {hometown}</p>
        <p>Previous Qualification: {qualification}</p>
        <p>About me: {about}</p>
        <a href="#">Read more about {name}</a>
      </div>
    );
  };
  
  export default AmbassadorCard;
  
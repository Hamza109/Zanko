import React from 'react';
import './ApplyButton.css';

const ApplyButton = ({title}) => {
  return (
    <div className="gradient-button-container w-full purple-shadow mb-8">
      <button className="gradient-button w-full ">{title}</button>
    </div>
  );
};

export default ApplyButton;



import React from 'react';
import './ApplyButton.css';

const ApplyButton = ({title}) => {
  return (
    <div className="gradient-button-container purple-shadow mb-8">
      <button className="gradient-button  ">{title}</button>
    </div>
  );
};

export default ApplyButton;



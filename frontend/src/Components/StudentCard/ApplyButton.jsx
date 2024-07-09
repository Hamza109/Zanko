import React from 'react';
import './ApplyButton.css';

const ApplyButton = ({title ,onClick}) => {
  return (
    <div className="gradient-button-container my-8">
      <button onClick={onClick} className="gradient-button w-full ">{title}</button>
    </div>
  );
};

export default ApplyButton;



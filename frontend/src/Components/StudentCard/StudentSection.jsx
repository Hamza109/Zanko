import React from 'react';
import StudentCard from './StudentCard';
import './StudentSection.css';

const StudentSection = () => {
  const students = [
    {
      name: 'Travis',
      major: 'Business Administration, Marketing',
      hometown: 'Apex, NC, USA',
      qualification: 'American high School Diploma',
      about: 'Hey! My name Travis, I\'m currently pursuing a double major in business and marketing while minoring in communications. I love all things...',
      imageUrl: '../../assets/chatScreen/student.png',
    },
    {
        name: 'Travis',
        major: 'Business Administration, Marketing',
        hometown: 'Apex, NC, USA',
        qualification: 'American high School Diploma',
        about: 'Hey! My name Travis, I\'m currently pursuing a double major in business and marketing while minoring in communications. I love all things...',
        imageUrl: '../../assets/chatScreen/student.png',
      },
      {
        name: 'Travis',
        major: 'Business Administration, Marketing',
        hometown: 'Apex, NC, USA',
        qualification: 'American high School Diploma',
        about: 'Hey! My name Travis, I\'m currently pursuing a double major in business and marketing while minoring in communications. I love all things...',
        imageUrl: '../../assets/chatScreen/student.png',
      },
    // Add more students here if needed
  ];

  return (
    <section className="student-section">
      
          <div className=" font-semibold text-center text-4xl my-10 md:block ml-12 ">
      Ambassadors
      </div>
    
     
      <div className="student-cards">
        {students.map((student, index) => (
          <StudentCard key={index} {...student} />
        ))}
      </div>
    </section>
  );
};

export default StudentSection;

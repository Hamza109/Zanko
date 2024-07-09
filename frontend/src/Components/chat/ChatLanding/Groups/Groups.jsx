import React from "react";
import GroupsCard from "./GroupCard";
import '../../../StudentCard/StudentCard.css'; 

const Groups= () => {
    const students = [
      {
        university: 'University of Texas',
        name: 'Computer Science Students ',
        members: '6 Ambassadors',
        qualification: 'American high School Diploma',
        about: 'Hey! My name Travis, I\'m currently pursuing a double major in business and marketing while minoring in communications. I love all things...',
        imageUrl: '../../../../assets/chatScreen/student.png',
      },
      {
        university: 'University of Texas',
        name: 'Computer Science Students ',
        members: '6 Ambassadors',
          qualification: 'American high School Diploma',
          about: 'Hey! My name Travis, I\'m currently pursuing a double major in business and marketing while minoring in communications. I love all things...',
          imageUrl: '../../../../assets/chatScreen/student.png',
        },
        {
            name: 'University of Texas',
          major: 'Business Administration, Marketing',
          members: '6 Ambassadors',
          qualification: 'American high School Diploma',
          about: 'Hey! My name Travis, I\'m currently pursuing a double major in business and marketing while minoring in communications. I love all things...',
          imageUrl: '../../../../assets/chatScreen/student.png',
        },
      // Add more students here if needed
    ];
  
    return (
      <section className="student-section">
        
            <div className=" font-semibold text-4xl text-center  my-10  md:block ml-12 ">
       Groups
        </div>
      
       
       
        <div className="student-cards">
          {students.map((student, index) => (
            <GroupsCard key={index} {...student} />
          ))}
        </div>
      </section>
    );
  };
  
  export default Groups;
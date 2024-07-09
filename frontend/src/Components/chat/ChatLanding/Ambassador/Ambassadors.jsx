import React from "react";
import AmbassadorCard from "./AmbassadorCard";
const Ambassadors = () => {
    const ambassadors = [
      { name: 'Travis', image: 'travis.jpg', majors: 'Business Administration, Marketing', hometown: 'Apex, NC, USA', qualification: 'America High School Diploma', about: 'Hey! My name Travis, I’m currently pursuing a double major in business and marketing while minoring in communications. I love all things' },
      { name: 'Mary', image: 'mary.jpg', majors: 'Business Administration, Marketing', hometown: 'Apex, NC, USA', qualification: 'America High School Diploma', about: 'Hey! My name Mary, I’m currently pursuing a double major in business and marketing while minoring in communications. I love all things' },
      { name: 'John', image: 'john.jpg', majors: 'Business Administration, Marketing', hometown: 'Apex, NC, USA', qualification: 'America High School Diploma', about: 'Hey! My name John, I’m currently pursuing a double major in business and marketing while minoring in communications. I love all things' },
    ];
  
    return (
      <div className="ambassadors">
        <h2>Ambassadors</h2>
        <div className="ambassador-list">
          {ambassadors.map((ambassador) => (
            <AmbassadorCard key={ambassador.name} {...ambassador} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Ambassadors;
  
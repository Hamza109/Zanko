import React from 'react'
import '../styles/buddies.css';
import UniSidebar from "../Components/UniDashboard/UniSidebar/UniSidebar.jsx"
import UniDashboardHeader from "../Components/UniDashboard/UniDashboardHeader/UniDashboardHeader.jsx"


const Buddies = () => {
  return (
    <div className="uni_dashboard_container">
        <UniSidebar />
        <div className="uni_dash_main_content">
            <UniDashboardHeader />
            Buddies
            - add Buddies
            -View Buddeis
        </div>
    </div>
  )
};

export default Buddies;

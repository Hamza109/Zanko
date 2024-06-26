import React from 'react';
import '../../styles/uni-dashboard.css'
import UniSidebar from "../../Components/UniDashboard/UniSidebar/UniSidebar.jsx"
import UniDashboardHeader from "../../Components/UniDashboard/UniDashboardHeader/UniDashboardHeader.jsx"
import uni_dashboard_header_bell from '../../assets/uni-dashboard/uni_dashboard_header_bell.png'


const UniversityDashboard = () => {
    return(
        <div className="uni_dashboard_container">
            <UniSidebar />
        
            <UniDashboardHeader />
            
            {/* Stat Cards Section */}
            <div className="uni_dash_main">
                <div className="flex gap-5 uni_dash_stat_cards">

                    <div className="flex flex-col items-center uni_dash_stat_card_">
                        <div className="flex items-center justify-between w-full mb-5 uni_dash_stat_card_top">
                            <div className="uni_dash_stat_card_top_left">
                                <p className="uni_dash_stat_card_users_title">Total Users</p>
                                <p className="uni_dash_stat_card_users">40,689</p>
                            </div>

                            <div className="flex items-center justify-center uni_dash_stat_card_logo" style={{color: '#8280ff',backgroundColor: '#e5e4ff'}}><i class="ri-group-fill"></i></div>
                        </div>

                        <div className="uni_dash_stat_card_bottom" style={{color: '#00B69B'}}>
                            <i class="ri-arrow-right-up-fill"></i>
                            <p>8.5%<span> Up from yesterday</span></p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center uni_dash_stat_card_">
                        <div className="flex items-center justify-between w-full mb-5 uni_dash_stat_card_top">
                            <div className="uni_dash_stat_card_top_left">
                                <p className="uni_dash_stat_card_users_title">Total Students</p>
                                <p className="uni_dash_stat_card_users">10293</p>
                            </div>

                            <div className="flex items-center justify-center uni_dash_stat_card_logo" style={{color: '#fcbe2d',backgroundColor: '#fff3d6'}}><i class="ri-group-fill"></i></div>
                        </div>

                        <div className="uni_dash_stat_card_bottom" style={{color: '#00B69B'}}>
                            <i class="ri-arrow-right-up-fill"></i>
                            <p>1.3%<span> Up from past week</span></p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center uni_dash_stat_card_">
                        <div className="flex items-center justify-between w-full mb-5 uni_dash_stat_card_top">
                            <div className="uni_dash_stat_card_top_left">
                                <p className="uni_dash_stat_card_users_title">Total Profit</p>
                                <p className="uni_dash_stat_card_users">₹89,000</p>
                            </div>

                            <div className="flex items-center justify-center uni_dash_stat_card_logo" style={{color: '#4ad991',backgroundColor: '#d9f7e8'}}><i class="ri-line-chart-line"></i></div>
                        </div>

                        <div className="uni_dash_stat_card_bottom" style={{color: '#00B69B'}}>
                            <i class="ri-arrow-right-up-fill"></i>
                            <p>1.3%<span> Up from past week</span></p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center uni_dash_stat_card_">
                        <div className="flex items-center justify-between w-full mb-5 uni_dash_stat_card_top">
                            <div className="uni_dash_stat_card_top_left">
                                <p className="uni_dash_stat_card_users_title">Events coming soon</p>
                                <p className="uni_dash_stat_card_users">23</p>
                            </div>

                            <div className="flex items-center justify-center uni_dash_stat_card_logo" style={{color: '#ff9871',backgroundColor: '#ffded1'}}><i class="ri-history-line"></i></div>
                        </div>

                        <div className="uni_dash_stat_card_bottom" style={{color: '#00B69B'}}>
                            <i class="ri-arrow-right-up-fill"></i>
                            <p>8.5%<span> Up from yesterday</span></p>
                        </div>
                    </div>

                </div>


                {/* Events Section */}
                <div className="uni_dash_event_section">
                    <div className="flex justify-between items-center uni_dash_event_title_section">
                        <p className="text-2xl font-semibold">Event Details</p>
                        <div className="flex items-center uni_dash_event_month">
                            <p>October</p>
                            <i class="ri-arrow-drop-down-line"></i>
                        </div>
                    </div>

                    <div className="uni_dash_event_section_head" >
                        <p>Event Name</p>
                        <p>Location</p>
                        <p>Date - Time</p>
                        <p>Total Tickets</p>
                        <p>Amount per Ticket</p>
                        <p className="text-center">Status</p>
                    </div>

                    <div className="uni_dash_event_section_main" >
                    <div className="flex items-center gap-3"><img src={uni_dashboard_header_bell} className="h-9 w-9 rounded-xl"/><p>Student Community</p></div>
                        <p>Delhi</p>
                        <p>12.07.2024 - 12:53 PM</p>
                        <p>243</p>
                        <p className="font-medium">₹1200</p>
                        <div className="flex justify-center uni_event_status"><div className="uni_event_status_tag" style={{backgroundColor:'#00B69B'}}><p>Confirmed</p></div></div>
                    </div>

                    <div className="uni_dash_event_section_main" >
                        <div className="flex items-center gap-3"><img src={uni_dashboard_header_bell} className="h-9 w-9 rounded-xl"/><p>Engineering Facts</p></div>
                        <p>Mumbai</p>
                        <p>12.06.2024 - 12:53 PM</p>
                        <p>700</p>
                        <p className="font-medium">₹799</p>
                        <div className="flex justify-center uni_event_status"><div className="uni_event_status_tag" style={{backgroundColor:'#FCBE2D'}}><p>Pending</p></div></div>
                    </div>

                    <div className="uni_dash_event_section_main" >
                    <div className="flex items-center gap-3"><img src={uni_dashboard_header_bell} className="h-9 w-9 rounded-xl"/><p>Medical Need</p></div>
                        <p>Pune</p>
                        <p>12.09.2024 - 12:53 PM</p>
                        <p>900</p>
                        <p className="font-medium">₹3999</p>
                        <div className="flex justify-center uni_event_status"><div className="uni_event_status_tag" style={{backgroundColor:'#FCBE2D'}}><p>Pending</p></div></div>
                    </div>


                </div>
            </div>
       </div>
    )
}


export default UniversityDashboard;
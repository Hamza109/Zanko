import React from 'react';
import './dash-header.css'
import uni_dashboard_header_bell from '../../../assets/uni-dashboard/uni_dashboard_header_bell.png'


const DashboardHeader = () => {
    return(
       <div className="flex justify-between items-center uni_dash_header">
            <div className="flex items-center justify-center uni_dash_header_search">
                <i class="ri-search-line"></i>
                <input type="text" placeholder="Search" />
            </div>

            <div className="flex items-center uni_dash_header_right">
                <div className="flex items-center uni_dash_header_right_left">
                    <div className="flex uni_dash_header_bell">
                        <img src={uni_dashboard_header_bell}/>
                        <div className="flex justify-center items-center uni_dash_header_noti"><p>6</p></div>
                    </div>
                    <div className="flex items-center uni_dash_header_lang">
                        <p>English</p>
                        <i class="ri-arrow-down-s-line"></i>
                    </div>
                </div>

                <div className="flex items-center justify-center uni_dash_header_right_right">
                    <div className="uni_dash_header_dp"><img src={uni_dashboard_header_bell}/></div>

                    <div className="uni_dash_header_name">
                        <p className="text-sm">Admin</p>
                        <p className="text-xs">Admin</p>
                    </div>

                    <div className="flex items-center justify-center uni_dash_header_dropdown">
                        <i class="ri-arrow-down-s-line"></i>
                    </div>
                </div>

            </div>
       </div>
    )
}


export default DashboardHeader;
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../styles/uni-students.css'
import UniSidebar from "../../../Components/Dashboard/DashboardSidebar/DashboardSidebar.jsx"
import UniDashboardHeader from "../../../Components/Dashboard/DashboardHeader/DashboardHeader.jsx"
import user from '../../../assets/uni-students/user.png'
import docu from '../../../assets/uni-students/docu.png'



const UniStudents = () => {
    return(
        <div className="uni_dashboard_container">
            <UniSidebar />
        
            <UniDashboardHeader />

            <div className="uni_dash_main"> 

                {/* Students List    */}
                <div className="student_list">
                    
                    <div className="uni_student_list_section">
                        <div className="flex justify-between items-center uni_student_list_title_section">
                            <p className="text-2xl font-semibold">Student List Details</p>
                            <div className="flex items-center uni_student_list_month">
                                <p>October</p>
                                <i class="ri-arrow-drop-down-line"></i>
                            </div>
                        </div>

                        <div className="uni_student_list_section_head" >
                            <p className="text-left">Student Name</p>
                            <p>Email</p>
                            <p>Applied Date</p>
                            <p>Applied Course</p>
                            <p>View Documents</p>
                            <p className="text-center">Status</p>
                        </div>

                        <div className="uni_student_list_section_main" >
                            <div className="flex items-center gap-3"><img src={user} className="h-9 w-9 rounded-xl"/><p>John Mathew</p></div>
                            <p>johnmathew@gmail.com</p>
                            <p>12.07.2024</p>
                            <p>B.E. - Computer Science and Engineering</p>
                            <NavLink to="/uni-students/wuburbfuger" className="flex justify-center uni_student_list_docu_img"><img src={docu} /></NavLink>
                            <div className="flex justify-center uni_student_list_status"><div className="uni_student_list_status_tag" style={{backgroundColor:'#00B69B'}}><p>Confirmed</p></div></div>
                        </div>

                        <div className="uni_student_list_section_main" >
                            <div className="flex items-center gap-3"><img src={user} className="h-9 w-9 rounded-xl"/><p>John Mathew</p></div>
                            <p>johnmathew@gmail.com</p>
                            <p>12.07.2024</p>
                            <p>B.E. - Computer Science and Engineering</p>
                            <NavLink to="/uni-students/wuburbfuger" className="flex justify-center uni_student_list_docu_img"><img src={docu} /></NavLink>
                            <div className="flex justify-center uni_student_list_status"><div className="uni_student_list_status_tag" style={{backgroundColor:'#00B69B'}}><p>Confirmed</p></div></div>
                        </div>

                    </div>

                </div>           
            </div>
       </div>
    )
}


export default UniStudents;
import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../../../styles/uni-student-details.css'
import UniSidebar from "../../../Components/Dashboard/DashboardSidebar/DashboardSidebar.jsx"
import UniDashboardHeader from "../../../Components/Dashboard/DashboardHeader/DashboardHeader.jsx"
import user from '../../../assets/uni-students/user.png'
import docu from '../../../assets/uni-students/docu.png'
import file from '../../../assets/uni-students/file.png'


const UniStudentDetails = () => {

    const [selectedStatus, setSelectedStatus] = useState('');

    const handleStatus = (event) => {
        setSelectedStatus(event.target.value);
    };


    return(
        <div className="uni_dashboard_container">
            <UniSidebar />
        
            <UniDashboardHeader />

            <div className="uni_dash_main"> 

                {/* Student details main */}
                <div className="uni_student_list_section">
                    <div className="flex justify-between items-center uni_student_list_title_section">
                        <p className="text-2xl font-semibold"> Student List Details &gt; View Documents</p>
                        <div className="flex items-center uni_student_list_month">
                            <p>October</p>
                            <i class="ri-arrow-drop-down-line"></i>
                        </div>
                    </div>

                    <div className="py-5 font-medium cursor-pointer" style={{color: '#8692A6'}}><NavLink to='/uni-students'>&lt; back</NavLink></div>

                    <div className="uni_student_list_section_head" >
                        <p className="text-left">Student Name</p>
                        <p>Email</p>
                        <p>Applied Date</p>
                        <p>Applied Course</p>
                        <p>Parents Income/annum</p>
                        <p className="text-center">Status</p>
                    </div>

                    <div className="uni_student_list_section_main" >
                        <div className="flex items-center gap-3"><img src={user} className="h-9 w-9 rounded-xl"/><p>John Mathew</p></div>
                        <p>johnmathew@gmail.com</p>
                        <p>12.07.2024</p>
                        <p>B.E. - Computer Science and Engineering</p>
                        <p>100000</p>
                        <div className="flex justify-center uni_student_list_status"><div className="uni_student_list_status_tag" style={{backgroundColor:'#00B69B'}}><p>Confirmed</p></div></div>
                    </div>
                    
                    {/* Documenyts Section */}
                    <div className="uni_student_documents">
                        <div className="flex gap-1 items-center uni_student_documents_title">
                            <div className="uni_student_documents_title_img"><img src={docu} /></div>
                            <p>Student Documents</p>
                        </div>

                        <div className="flex justify-between flex-wrap uni_student_documents_main">
                            <div className="flex flex-col justify-center gap-3 uni_student_documents_element">
                                <p className="uni_student_documents_element_title">Transcript Documents</p>
                                <div className="flex items-center gap-2 uni_student_documents_element_main">
                                    <div className="uni_student_documents_element_img"><img src={file} /></div>
                                    <p>Transcript.pdf</p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center gap-3 uni_student_documents_element">
                                <p className="uni_student_documents_element_title">Resume</p>
                                <div className="flex items-center gap-2 uni_student_documents_element_main">
                                    <div className="uni_student_documents_element_img"><img src={file} /></div>
                                    <p>Resume.pdf</p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center gap-3 uni_student_documents_element">
                                <p className="uni_student_documents_element_title">Cover Letter</p>
                                <div className="flex items-center gap-2 uni_student_documents_element_main">
                                    <div className="uni_student_documents_element_img"><img src={file} /></div>
                                    <p>CoverLetter.pdf</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                    {/* Change Status Section */}
                    <div className="flex items-center gap-5 uni_student_status">
                        <p className="font-medium uni_student_status_title">Change status to</p>
                        <select 
                            id="simple-dropdown" 
                            value={selectedStatus} 
                            onChange={handleStatus} 
                        >
                            <option value="" disabled>Select a status</option>
                            <option value="Review">Under Review</option>
                            <option value="Offer">Send Offer Letter</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </div>

                    {/* Save Button */}
                    <div className="flex justify-end uni_student_status_save">
                        <button>SAVE CHANGES</button>
                    </div>
                </div>
                   
            </div>
       </div>
    )
}


export default UniStudentDetails;
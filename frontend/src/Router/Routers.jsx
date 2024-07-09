import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './../Pages/Home';
import ChatScreen from '../Pages/ChatScreen';
import ChatWindowScreen from '../Pages/ChatWindowScreen';
import Pricing from '../Pages/Pricing';
import ForStudents from '../Pages/ForStudents';
import Events from '../Pages/Events';
import ChatLanding from '../Pages/ChatLanding';
import Community from '../Pages/Community';
import Guides from '../Pages/Guides';
import WebinarsAndEvents from '../Pages/WebinarsAndEvents';
import GraduateAdmissions from '../Pages/GraduateAdmissions';
import UndergradAdmissions from '../Pages/UndergradAdmissions';
import InternationalRecruitment from '../Pages/InternationalRecruitment';
import UniversityDashboard from '../Pages/Dashboard/UniversityDashboard/UniversityDashboard';
import UniBuddies from '../Pages/Dashboard/UniversityDashboard/UniBuddies';
import UniEvents from '../Pages/Dashboard/UniversityDashboard/UniEvents';
import UniTutorial from '../Pages/Dashboard/UniversityDashboard/UniTutorial';
import UniSettings from '../Pages/Dashboard/UniversityDashboard/UniSettings';
import UniStudents from '../Pages/Dashboard/UniversityDashboard/UniStudents';
import UniStudentDetails from '../Pages/Dashboard/UniversityDashboard/UniStudentDetails';
import UniversityPage from '../Pages/Dashboard/AdminDashboard/UniversityPage';
import Blogs from '../Pages/Blogs';
import Stories from '../Pages/Stories';





const Routers = () =>{
return (
    <Routes>
        {/* Landing Pages */}
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/customer-stories' element={<Stories />} />
        <Route path='/chat'  element={<ChatScreen />} />
        <Route path='/chat-window' element={<ChatWindowScreen />} />
        <Route path='/for-student' element={<ForStudents />} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/events'  element={<Events/>} />  
        <Route path='/community'  element={<Community/>} />   
        <Route path='/guides'  element={<Guides/>} />   
        <Route path='/webinars'  element={<WebinarsAndEvents/>} />
        <Route path='/graduate-admissions'  element={<GraduateAdmissions/>} /> 
        <Route path='/undergrad-admissions'  element={<UndergradAdmissions/>} /> 
        <Route path='/international-recruitment'  element={<InternationalRecruitment/>} />

        {/* Dashboard Pages */}
        <Route path='/uni-dashboard' element={<UniversityDashboard />} />
        <Route path='/uni-events'  element={<UniEvents/>} /> 
        <Route path='/uni-buddies'  element={<UniBuddies/>} />
        <Route path='/uni-tutorial'  element={<UniTutorial/>} />
        <Route path='/uni-page'  element={<UniversityPage/>} /> 
        <Route path='/uni-settings'  element={<UniSettings/>} />
        <Route path='/uni-students'  element={<UniStudents/>} />  
        <Route path='/uni-students/:id'  element={<UniStudentDetails/>} />  

                 
    </Routes>
);
};

export default Routers;
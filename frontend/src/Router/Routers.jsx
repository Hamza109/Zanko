import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './../Pages/Home';
import ChatScreen from '../Pages/ChatScreen';
import UniversityDashboard from '../Pages/UniversityDashboard/UniversityDashboard'
import ChatWindowScreen from '../Pages/ChatWindowScreen';
import UniBuddies from '../Pages/UniversityDashboard/UniBuddies';
import Pricing from '../Pages/Pricing';
import ForStudents from '../Pages/ForStudents';
import Events from '../Pages/Events';
import Community from '../Pages/Community';
import Guides from '../Pages/Guides';
import WebinarsAndEvents from '../Pages/WebinarsAndEvents';
import UniEvents from '../Pages/UniversityDashboard/UniEvents';
import GraduateAdmissions from '../Pages/GraduateAdmissions';
import UndergradAdmissions from '../Pages/UndergradAdmissions';
import InternationalRecruitment from '../Pages/InternationalRecruitment';



const Routers = () =>{
return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/uni-dashboard' element={<UniversityDashboard />} />
        <Route path='/chat'  element={<ChatScreen />} />
        <Route path='/chat-window' element={<ChatWindowScreen />} />
        <Route path='/for-student' element={<ForStudents />} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/events'  element={<Events/>} />  
        <Route path='/uni-buddies'  element={<UniBuddies/>} />
        <Route path='/community'  element={<Community/>} />   
        <Route path='/guides'  element={<Guides/>} />   
        <Route path='/webinars'  element={<WebinarsAndEvents/>} />
        <Route path='/uni-events'  element={<UniEvents/>} /> 
        <Route path='/graduate-admissions'  element={<GraduateAdmissions/>} /> 
        <Route path='/undergrad-admissions'  element={<UndergradAdmissions/>} /> 
        <Route path='/international-recruitment'  element={<InternationalRecruitment/>} />         
    </Routes>
);
};

export default Routers;
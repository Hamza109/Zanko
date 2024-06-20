import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './../Pages/Home';
import ChatScreen from '../Pages/ChatScreen';
import UniversityDashboard from '../Pages/UniversityDashboard'
import ChatWindowScreen from '../Pages/ChatWindowScreen';
import Buddies from '../Pages/Buddies';
import Pricing from '../Pages/Pricing';
import ForStudents from '../Pages/ForStudents';
import Events from '../Pages/Events';
import Community from '../Pages/Community';



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
        <Route path='/buddies'  element={<Buddies/>} />
        <Route path='/community'  element={<Community/>} />   
            
    </Routes>
);
};

export default Routers;
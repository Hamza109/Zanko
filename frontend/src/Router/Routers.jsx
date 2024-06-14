import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './../Pages/Home';
import ChatScreen from '../Pages/ChatScreen';
import UniversityDashboard from '../Pages/UniversityDashboard'
import ChatWindowScreen from '../Pages/ChatWindowScreen';
import ForStudents from '../Pages/ForStudents';



const Routers = () =>{
return (
    <Routes>

        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/uni-dashboard' element={<UniversityDashboard />} />
        <Route path='/chat'  element={<ChatScreen />} />
        <Route path='/chat-window' element={<ChatWindowScreen />} />
        <Route path='/for-student' element={<ForStudents />} />
            
    </Routes>
);
};

export default Routers;
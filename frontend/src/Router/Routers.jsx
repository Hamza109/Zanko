import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './../Pages/Home';
import ChatScreen from '../Pages/ChatScreen';
import Buddies from '../Pages/Buddies';
import UniversityDashboard from './../Pages/UniversityDashboard';
import Pricing from '../Pages/Pricing';
import ForStudents from '../Pages/ForStudents';



const Routers = () =>{
return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/for-students' element={<ForStudents/>} />
        <Route path='/uni-dashboard' element={<UniversityDashboard />} />
        <Route path='/chat'  element={<ChatScreen/>} />
        <Route path='/buddies'  element={<Buddies/>} />   
    </Routes>
);
};

export default Routers;
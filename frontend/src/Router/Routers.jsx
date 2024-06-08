import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './../Pages/Home';
import UniversityDashboard from './../Pages/UniversityDashboard';



const Routers = () =>{
return (
    <Routes>

        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/uni-dashboard' element={<UniversityDashboard />} />
            
    </Routes>
);
};

export default Routers;
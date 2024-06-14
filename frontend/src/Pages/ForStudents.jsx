import React from 'react';
import '../styles/for-students.css'
import HomeHeader from "../Components/home/HomeHeader/HomeHeader.jsx"
import HomeFooter from "../Components/home/HomeFooter/HomeFooter.jsx"
import Assurance from "../Components/home/AssuranceSection/Assurance.jsx"


const ForStudents = ()=>{
    return (
        <div>
            <div className="home_header_container"><HomeHeader /></div>

            <main className="forstudents_main">
                {/* Heading and subheading section same as home section*/}
                <div className="pb-24 home_description">
                    <div className="flex justify-center mb-8 home_description_title">
                        <h2 className="text-center font-semibold">faucibus pulvinar elementum integer enim neque volutpat</h2>
                    </div>
                
                    <div className="flex justify-center home_description_subtitle">
                        <h3 className="font-normal text-center">faucibus pulvinar elementum integer enim neque volutpat faucibus pulvinar elementum integer enim neque volutpat</h3>
                    </div>
                </div>

                {/* continue code here */}
            </main>

            <HomeFooter/>
        </div>
    )
}

export default ForStudents;
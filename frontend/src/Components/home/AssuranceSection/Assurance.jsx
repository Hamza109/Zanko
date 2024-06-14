import React from 'react'
import './assurance.css'


const Assurance = ()=>{
    return (
        <div className="flex justify-center items-center py-20 flex-wrap assurance_main">
            <div className="assurance_section">
                <div className="flex justify-center text-white text-3xl pb-7 assurance_logo"><i class="ri-puzzle-2-fill"></i></div>
                <p className="text-white mb-5 text-base font-medium assurance_title">Connect with Uni in Real Time</p>
                <p className="text-gray-500 text-sm font-normal assurance_desc">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
            </div>

            <div className="w-px bg-gray-500 mx-32 assurance_partition"></div>

            <div className="assurance_section">
                <div className="flex justify-center text-white text-3xl pb-7 assurance_logo"><i class="ri-lock-fill"></i></div>
                <p className="text-white mb-5 text-base font-medium assurance_title">Secured & Safe Messages</p>
                <p className="text-gray-500 text-sm font-normal assurance_desc">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
            </div>

            <div className="w-px bg-gray-500 mx-16 assurance_partition"></div>

            <div className="assurance_section">
                <div className="flex justify-center text-white text-3xl pb-7 assurance_logo"><i class="ri-chat-4-fill"></i></div>
                <p className="text-white mb-5 text-base font-medium assurance_title">24/7 Customer Support</p>
                <p className="text-gray-500 text-sm font-normal assurance_desc">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
            </div>
        </div>
    )
}

export default Assurance;
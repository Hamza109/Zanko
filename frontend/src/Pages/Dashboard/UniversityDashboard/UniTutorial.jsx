import React from 'react';
import '../../../styles/uni-tutorial.css'
import UniSidebar from "../../../Components/Dashboard/DashboardSidebar/DashboardSidebar.jsx"
import UniDashboardHeader from "../../../Components/Dashboard/DashboardHeader/DashboardHeader.jsx"
import addEvents from '../../../assets/uni-tutorial/addEvents.mp4'
import chatCustomization from '../../../assets/uni-tutorial/chatCustomization.mp4'
import addAmbassador from '../../../assets/uni-tutorial/addAmbassador.mp4'


const UniTutorial = () => {
    return(
        <div className="uni_dashboard_container">
            <UniSidebar />
        
            <UniDashboardHeader />

            <div className="uni_dash_main">

                <div className="flex flex-col gap-10 uni_tutorial">
                    <p className="uni_tutorial_title">Video Tutorial Page</p>

                    <div className='flex flex-wrap gap-14 justify-center uni_tutorial_main'>

                        <div className="uni_tutorial_card">
                            <div className="uni_tutorial_card_video"><video src={addEvents} controls/></div>
                            <div className="flex flex-col gap-3 p-3">
                                <p className="font-semibold uni_tutorial_card_title">Add Events</p>
                                <p className="uni_tutorial_card_subtitle">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque justo, gravida vitae nulla sed,
                                   fermentum viverra augue. Curabitur volutpat scelerisque magna sed.
                                </p>
                            </div>
                        </div>

                        <div className="uni_tutorial_card">
                            <div className="uni_tutorial_card_video"><video src={addAmbassador} controls/></div>
                            <div className="flex flex-col gap-3 p-3">
                                <p className="font-semibold uni_tutorial_card_title">Add Ambassador</p>
                                <p className="uni_tutorial_card_subtitle">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque justo, gravida vitae nulla sed,
                                   fermentum viverra augue. Curabitur volutpat scelerisque magna sed.
                                </p>
                            </div>
                        </div>

                        <div className="uni_tutorial_card">
                            <div className="uni_tutorial_card_video"><video src={chatCustomization} controls/></div>
                            <div className="flex flex-col gap-3 p-3">
                                <p className="font-semibold uni_tutorial_card_title">Chat Customization</p>
                                <p className="uni_tutorial_card_subtitle">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque justo, gravida vitae nulla sed,
                                   fermentum viverra augue. Curabitur volutpat scelerisque magna sed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
       </div>
    )
}


export default UniTutorial;
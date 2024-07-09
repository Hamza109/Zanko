import React,{useState,useEffect} from 'react'
import '../../../styles/uni-events.css'
import UniSidebar from "../../../Components/Dashboard/DashboardSidebar/DashboardSidebar.jsx"
import UniDashboardHeader from "../../../Components/Dashboard/DashboardHeader/DashboardHeader.jsx"
import uni_dashboard_header_bell from '../../../assets/uni-dashboard/uni_dashboard_header_bell.png'


const UniEvents =()=>{
    
    // To toggle add and view all section
    const [allEvents,setAllEvents] = useState(true);
    const [addEvents,setAddEvents] = useState(0);


    // To Store the event input details
    const [formData, setFormData] = useState({
        eventName: '',
        eventLocation: '',
        eventDate: '',
        eventTime: '',
        tickets: '',
        ticketPrice: '',
        eventDetails: null,
        eventBanner: null
    });


    //To check if all the details are filled
    const [isFormValid, setIsFormValid] = useState(false);
    useEffect(() => {
        const { eventName, eventLocation, eventDate, eventTime, tickets, ticketPrice } = formData;
        setIsFormValid(
            eventName && eventLocation && eventDate && eventTime && tickets && ticketPrice
        );
    }, [formData]);

    
    //To handle changes in the form
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({ ...formData, [name]: files ? files[0] : value });
    };


    //Handle submit 
    const handleSubmit = () => {

         //Call the API here

        setAddEvents(3);
        //done message (1sec)
        setTimeout(() => {
            window.location.reload();
        }, 1000);
        
    };
    



    return (
        <div className="uni_dashboard_container">
            <UniSidebar />
            
            <UniDashboardHeader />
            
            <div className="uni_dash_main">

                {/* Buttons Section */}
                <div className="flex gap-5 uni_events_bttns">
                    <button className={allEvents? "uni_events_all_bttn_active" : "uni_events_all_bttn" } onClick={()=>{setAddEvents(0);setAllEvents(true);}}>All Events</button>
                    <button className={addEvents? "uni_events_add_bttn_active" : "uni_events_add_bttn" } onClick={()=>{setAddEvents(1);setAllEvents(false);}}>Add Event</button>
                </div>

                {/* Add Event Section */}
                {   
                    addEvents?
                    <div className="py-12 flex justify-center">
                        {/* STEP 1 */}
                        {
                        addEvents===1?

                        <div className="uni_events_add">
                            <p className="text-center uni_events_add_title">Kindly provide the Event Details</p>
                            <div className="flex justify-end"><p className="uni_events_add_step">STEP 01/02</p></div>
                            <div className="uni_events_add_main">
                                <div className="uni_events_add_section">
                                    <label htmlFor="eventName"><p>Event Name<span style={{color: 'red'}}>*</span></p></label>
                                    <input type="text" id="eventName" name="eventName" placeholder='Enter the Event Name' value={formData.eventName} onChange={handleChange}/>
                                </div>
                                <div className="uni_events_add_section">
                                    <label htmlFor="eventLocation"><p>Event Location<span style={{color: 'red'}}>*</span></p></label>
                                    <input type="text" id="eventLocation" name="eventLocation"  placeholder='Enter the Event Location'  value={formData.eventLocation} onChange={handleChange}/>
                                </div>
                                <div className="uni_events_add_section">
                                    <label htmlFor="eventDate"><p>Event Date<span style={{color: 'red'}}>*</span></p></label>
                                    <input type="date" id="eventDate" name="eventDate" value={formData.eventDate} onChange={handleChange}/>
                                </div>
                                <div className="uni_events_add_section">
                                    <label htmlFor="eventTime"><p>Event Time<span style={{color: 'red'}}>*</span></p></label>
                                    <input type="time" id="eventTime" name="eventTime"  value={formData.eventTime} onChange={handleChange}/>
                                </div>
                                <div className="uni_events_add_section">
                                    <label htmlFor="tickets"><p>Total No of Tickets<span style={{color: 'red'}}>*</span></p></label>
                                    <input type="number" id="tickets" name="tickets" placeholder='Enter no of tickets for the Event'  value={formData.tickets} onChange={handleChange}/>
                                </div>
                                <div className="uni_events_add_section">
                                    <label htmlFor="ticketPrice"><p>Ticket Price<span style={{color: 'red'}}>*</span></p></label>
                                    <input type="number" id="ticketPrice" name="ticketPrice" placeholder='Enter the price of each ticket'  value={formData.ticketPrice} onChange={handleChange}/>
                                </div>
                                <div className="flex justify-center pt-5 uni_events_add_section_bttn"><button disabled={!isFormValid} style={{ opacity: isFormValid ? 1 : 0.5 }} onClick={()=>setAddEvents(2)}>Continue</button></div>
                            </div>
                        </div>
                        :
                        <></>
                        }

                        {/* STEP 2 */}
                        {
                            addEvents===2?
                            <div className="uni_events_add">
                                <p className="text-center uni_events_add_title">Kindly provide the Event Details</p>
                                <div className="flex justify-between">
                                    <div className="flex uni_events_add_step cursor-pointer" onClick={()=>{setAddEvents(1)}}><i class="ri-arrow-left-s-line"></i><p>Back</p></div>
                                    <p className="uni_events_add_step">STEP 02/02</p>
                                </div>
                                <div className="uni_events_add_main">
                                    <div className="uni_events_add_section">
                                        <label htmlFor="eventDetails">Event Details</label>
                                        <input type="file" id="eventDetails" name="eventDetails" onChange={handleChange} />
                                    </div>
                                    <div className="uni_events_add_section">
                                        <label htmlFor="eventBanner">Event Banner</label>
                                        <input type="file" id="eventBanner" name="eventBanner" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="flex justify-center pt-5 uni_events_add_section_bttn"><button onClick={handleSubmit}>REGISTER EVENT</button></div>
                            </div>
                            :
                            <></>
                        }

                        {/* Success Message */}
                        {
                            addEvents===3?
                            <div className="flex flex-col items-center gap-8 uni_events_add_success">
                                <div className="flex items-center justify-center uni_events_add_success_tick"><i class="ri-check-line"></i></div>
                                <p className="font-medium">Event Registered Successfully</p>
                            </div>
                            :
                            <></>
                        }
                        
                    </div>
                    :
                    <></>
                }

                
                {/* ALL Events Section */}
                {
                    allEvents?
                    <div className="uni_event_list_section">
                        <div className="flex justify-between items-center uni_event_list_title_section">
                            <p className="text-2xl font-semibold">Event Details</p>
                            <div className="flex items-center uni_event_list_month">
                                <p>October</p>
                                <i class="ri-arrow-drop-down-line"></i>
                            </div>
                        </div>

                        <div className="uni_event_list_section_head" >
                            <p className="text-left">Event Name</p>
                            <p>Location</p>
                            <p>Date - Time</p>
                            <p>Total Tickets</p>
                            <p>Amount per Ticket</p>
                            <p className="text-center">Status</p>
                        </div>

                        <div className="uni_event_list_section_main" >
                        <div className="flex items-center gap-3"><img src={uni_dashboard_header_bell} className="h-9 w-9 rounded-xl"/><p>Student Community</p></div>
                            <p>Delhi</p>
                            <p>12.07.2024 - 12:53 PM</p>
                            <p>243</p>
                            <p className="font-medium">₹1200</p>
                            <div className="flex justify-center uni_event_list_status"><div className="uni_event_list_status_tag" style={{backgroundColor:'#00B69B'}}><p>Confirmed</p></div></div>
                        </div>

                        <div className="uni_event_list_section_main" >
                            <div className="flex items-center gap-3"><img src={uni_dashboard_header_bell} className="h-9 w-9 rounded-xl"/><p>Engineering Facts</p></div>
                            <p>Mumbai</p>
                            <p>12.06.2024 - 12:53 PM</p>
                            <p>700</p>
                            <p className="font-medium">₹799</p>
                            <div className="flex justify-center uni_event_list_status"><div className="uni_event_list_status_tag" style={{backgroundColor:'#FCBE2D'}}><p>Pending</p></div></div>
                        </div>

                        <div className="uni_event_list_section_main" >
                        <div className="flex items-center gap-3"><img src={uni_dashboard_header_bell} className="h-9 w-9 rounded-xl"/><p>Medical Need</p></div>
                            <p>Pune</p>
                            <p>12.09.2024 - 12:53 PM</p>
                            <p>900</p>
                            <p className="font-medium">₹3999</p>
                            <div className="flex justify-center uni_event_list_status"><div className="uni_event_list_status_tag" style={{backgroundColor:'#FCBE2D'}}><p>Pending</p></div></div>
                        </div>

                    </div>
                    :
                    <></>
                }
                
            </div>
           
       </div>
    )
}


export default UniEvents;
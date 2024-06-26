import React,{useState,useEffect} from 'react'
import '../../styles/uni-buddies.css'
import UniSidebar from "../../Components/UniDashboard/UniSidebar/UniSidebar.jsx"
import UniDashboardHeader from "../../Components/UniDashboard/UniDashboardHeader/UniDashboardHeader.jsx"
import uni_dashboard_header_bell from '../../assets/uni-dashboard/uni_dashboard_header_bell.png'


const UniBuddies =()=>{
    
    // To toggle add and view all section
    const [allAmbassadors,setAllAmbassadors] = useState(true);
    const [addAmbassador,setAddAmbassador] = useState(0);


    // To Store the event input details
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        country: '',
        email: '',
        phone: '',
        currentDesignation: '',
        role: '',
    });


    //To check if all the details are filled
    const [isFormValid, setIsFormValid] = useState(false);
    useEffect(() => {
        const { firstName,lastName,country,email,phone,currentDesignation,role } = formData;
        setIsFormValid(
            firstName && lastName && country && email && phone && currentDesignation && role
        );
    }, [formData]);

    
    //To handle changes in the form
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({ ...formData, [name]: files ? files[0] : value });
    };


    //Handle submit 
    const handleSubmit = () => {
        setAddAmbassador(2);

        //Call the API here

        //done message (5sec)
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
                    <button className={allAmbassadors? "uni_events_all_bttn_active" : "uni_events_all_bttn" } onClick={()=>{setAddAmbassador(0);setAllAmbassadors(true);}}>All Ambassadors</button>
                    <button className={addAmbassador? "uni_events_add_bttn_active" : "uni_events_add_bttn" } onClick={()=>{setAddAmbassador(1);setAllAmbassadors(false);}}>Add Ambassador</button>
                </div>

                {/* Add Ambassador Section */}
                {   
                    addAmbassador?
                    <div className="py-12 flex justify-center">
                        {/* STEP 1 */}
                        {
                        addAmbassador===1?

                        <div className="uni_events_add">
                            <p className="text-center uni_events_add_title">Kindly provide the Details of Ambassador</p>
                            <div className="flex justify-end"><p className="uni_events_add_step">STEP 01/01</p></div>
                            <div className="uni_events_add_main">
                                <div className="uni_events_add_section">
                                    <label htmlFor="firstName"><p>First Name<span style={{color: 'red'}}>*</span></p></label>
                                    <input type="text" id="firstName" name="firstName" placeholder='Enter the First Name' value={formData.firstName} onChange={handleChange}/>
                                </div>
                                <div className="uni_events_add_section">
                                    <label htmlFor="middleName">Middle Name</label>
                                    <input type="text" id="middleName" name="middleName" placeholder='Enter the Middle Name' value={formData.middleName} onChange={handleChange}/>
                                </div>
                                <div className="uni_events_add_section">
                                    <label htmlFor="lastName"><p>Last Name<span style={{color: 'red'}}>*</span></p></label>
                                    <input type="text" id="lastName" name="lastName" placeholder='Enter the Last Name' value={formData.lastName} onChange={handleChange}/>
                                </div>
                                <div className="uni_events_add_section">
                                    <label htmlFor="country"><p>Country<span style={{color: 'red'}}>*</span></p></label>
                                    <input type="text" id="country" name="country" placeholder='Enter Country' value={formData.country} onChange={handleChange}/>
                                </div> 
                                <div className="uni_events_add_section">
                                    <label htmlFor="email"><p>Email<span style={{color: 'red'}}>*</span></p></label>
                                    <input type="email" id="email" name="email" placeholder='Enter Email' value={formData.email} onChange={handleChange}/>
                                </div> 
                                <div className="uni_events_add_section">
                                    <label htmlFor="phone"><p>Phone<span style={{color: 'red'}}>*</span></p></label>
                                    <input type="number" id="phone" name="phone" placeholder='Enter Phone Number' value={formData.phone} onChange={handleChange}/>
                                </div> 
                                <div className="uni_events_add_section">
                                    <label htmlFor="designation"><p>Current Designation<span style={{color: 'red'}}>*</span></p></label>
                                    <input type="text" id="designation" name="currentDesignation" placeholder='Enter Current Designation' value={formData.currentDesignation} onChange={handleChange}/>
                                </div>    
                                <div className="uni_events_add_section">
                                    <label htmlFor="role"><p>Role<span style={{color: 'red'}}>*</span></p></label>
                                    <input type="text" id="role" name="role" placeholder='Enter Current Role' value={formData.role} onChange={handleChange}/>
                                </div>                                                              
                                <div className="flex justify-center pt-5 uni_events_add_section_bttn"><button disabled={!isFormValid} style={{ opacity: isFormValid ? 1 : 0.5 }} onClick={handleSubmit}>ADD</button></div>
                            </div>
                        </div>
                        :
                        <></>
                        }


                        {/* Success Message */}
                        {
                            addAmbassador===2?
                            <div className="flex flex-col items-center gap-8 uni_events_add_success">
                                <div className="flex items-center justify-center uni_events_add_success_tick"><i class="ri-check-line"></i></div>
                                <p className="font-medium">Added Ambassador Successfully</p>
                            </div>
                            :
                            <></>
                        }
                        
                    </div>
                    :
                    <></>
                }

                
                {/* ALL Ambassadors Section */}
                {
                    allAmbassadors?
                    <div className="uni_buddies_view_ambas">
                    <p className="text-2xl font-semibold mb-5 uni_buddies_view_ambas_title">List of Ambassadors</p>

                    <div className="uni_buddies_view_ambas_main">
                        <div className="uni_buddies_view_ambas_section">
                            <div className="uni_buddies_view_ambas_section_row">
                                <div className="uni_buddies_view_ambas_section_element" style={{backgroundColor: '#F0F0F0'}}><p className="font-medium">Name</p></div>
                                <div className="uni_buddies_view_ambas_section_element" style={{backgroundColor: '#F0F0F0'}}><p className="font-medium">Number of Courses</p></div>
                                <div className="uni_buddies_view_ambas_section_element" style={{backgroundColor: '#F0F0F0'}}><p className="font-medium">Country</p></div>
                                <div className="uni_buddies_view_ambas_section_element" style={{backgroundColor: '#F0F0F0'}}><p className="font-medium">Date Applied</p></div>
                                <div className="uni_buddies_view_ambas_section_element" style={{backgroundColor: '#F0F0F0'}}><p className="font-medium">Applied By</p></div>
                                <div className="uni_buddies_view_ambas_section_element" style={{backgroundColor: '#F0F0F0'}}><p className="font-medium">Status</p></div>
                                <div className="uni_buddies_view_ambas_section_element" style={{backgroundColor: '#F0F0F0'}}><p className="font-medium">Intake Applied in</p></div>
                                <div className="flex justify-between px-5 uni_buddies_view_ambas_section_element" style={{backgroundColor: '#F0F0F0'}}><p className="font-medium">Edit</p><p className="font-medium">Delete</p></div>
                            </div>
                            
                            
                            <div className="uni_buddies_view_ambas_section_row">
                                <div className="uni_buddies_view_ambas_section_element"><p>John Doe</p></div>
                                <div className="uni_buddies_view_ambas_section_element"><p>1</p></div>
                                <div className="uni_buddies_view_ambas_section_element"><p>Israel</p></div>
                                <div className="uni_buddies_view_ambas_section_element"><p>02/02/2024</p></div>
                                <div className="uni_buddies_view_ambas_section_element"><p>Self</p></div>
                                <div className="uni_buddies_view_ambas_section_element"><p>Doccuments Submitted</p></div>
                                <div className="uni_buddies_view_ambas_section_element"><p>Winter 2024</p></div>
                                <div className="flex justify-between px-5 cursor-pointer text-lg uni_buddies_view_ambas_section_element"><i class="ri-pencil-fill"></i><i class="ri-delete-bin-6-line"></i></div>
                            </div>
                                    
                            <div className="uni_buddies_view_ambas_section_row">
                                <div className="uni_buddies_view_ambas_section_element"><p>John Doe</p></div>
                                <div className="uni_buddies_view_ambas_section_element"><p>1</p></div>
                                <div className="uni_buddies_view_ambas_section_element"><p>Israel</p></div>
                                <div className="uni_buddies_view_ambas_section_element"><p>02/02/2024</p></div>
                                <div className="uni_buddies_view_ambas_section_element"><p>Self</p></div>
                                <div className="uni_buddies_view_ambas_section_element"><p>Doccuments Submitted</p></div>
                                <div className="uni_buddies_view_ambas_section_element"><p>Winter 2024</p></div>
                                <div className="flex justify-between px-5 cursor-pointer text-lg uni_buddies_view_ambas_section_element"><i class="ri-pencil-fill"></i><i class="ri-delete-bin-6-line"></i></div>
                            </div>

                            <div className="uni_buddies_view_ambas_section_row">
                                <div className="uni_buddies_view_ambas_section_element"><p>John Doe</p></div>
                                <div className="uni_buddies_view_ambas_section_element"><p>1</p></div>
                                <div className="uni_buddies_view_ambas_section_element"><p>Israel</p></div>
                                <div className="uni_buddies_view_ambas_section_element"><p>02/02/2024</p></div>
                                <div className="uni_buddies_view_ambas_section_element"><p>Self</p></div>
                                <div className="uni_buddies_view_ambas_section_element"><p>Doccuments Submitted</p></div>
                                <div className="uni_buddies_view_ambas_section_element"><p>Winter 2024</p></div>
                                <div className="flex justify-between px-5 cursor-pointer text-lg uni_buddies_view_ambas_section_element"><i class="ri-pencil-fill"></i><i class="ri-delete-bin-6-line"></i></div>
                            </div>
                            
                        </div>


                    </div>
                </div>
                :
                <></>
                }
                
            </div>
       </div>
    )
}


export default UniBuddies;
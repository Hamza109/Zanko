import React,{useState,useEffect} from "react"
import {Multiselect} from 'multiselect-react-dropdown'
import '../../../styles/university-page.css'
import UniSidebar from "../../../Components/Dashboard/DashboardSidebar/DashboardSidebar.jsx"
import UniDashboardHeader from "../../../Components/Dashboard/DashboardHeader/DashboardHeader.jsx"
import uni_dashboard_header_bell from '../../../assets/uni-dashboard/uni_dashboard_header_bell.png'


const UniversityPage =()=>{

    // To toggle add and view all section
    const [allUniversities,setAllUniversities] = useState(true);
    const [addUniversity,setAddUniversity] = useState(0);


    // To Store the event input details
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        noOfDepts: '',
        username: '',
        password: '',
        canView: true,
        canModify: true,
        degreeTypes: []
    });


    //To check if all the details are filled for step 1
    const [isFormValid, setIsFormValid] = useState(false);
    useEffect(() => {
        const { name,email,address,noOfDepts,degreeTypes} = formData;
        setIsFormValid(
            name && email && address && noOfDepts && degreeTypes.length>0
        );
    }, [formData]);

      //To check if all the details are filled for step 2
      const [isFormValid2, setIsFormValid2] = useState(false);
      useEffect(() => {
          const {username,password} = formData;
          setIsFormValid2(
             username && password
          );
      }, [formData]);

    
    //To handle changes in the form
    const handleChange = (e) => {
        const { name, value, files, options, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: checked
            }));
        }else{
            setFormData({ ...formData, [name]: files ? files[0] : value });
        }
     
    };

    // To handle multi-select changes
    const handleMultiSelectChange = (selectedList) => {
        setFormData({ ...formData, degreeTypes: selectedList.map(option => option.name) });
    };


    //Handle submit 
    const handleSubmit = () => {
        setAddUniversity(3);

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
                    <button className={allUniversities? "uni_events_all_bttn_active" : "uni_events_all_bttn" } onClick={()=>{setAddUniversity(0);setAllUniversities(true);}}>All Universtities</button>
                    <button className={addUniversity? "uni_events_add_bttn_active" : "uni_events_add_bttn" } onClick={()=>{setAddUniversity(1);setAllUniversities(false);}}>Add University</button>
                </div>

                
                {/* Add Event Section */}
                {   
                    addUniversity?
                    <div className="py-12 flex justify-center">
                        {/* STEP 1 */}
                        {
                        addUniversity===1?

                        <div className="uni_events_add">
                            <p className="text-center uni_events_add_title">UNIVERSITY REGISTRATION</p>
                            <div className="flex justify-end"><p className="uni_events_add_step">STEP 01/02</p></div>
                            <div className="uni_events_add_main">
                                <div className="uni_events_add_section">
                                    <label htmlFor="name"><p>University Name<span style={{color: 'red'}}>*</span></p></label>
                                    <input type="text" id="name" name="name" placeholder='Enter the University Name' value={formData.name} onChange={handleChange}/>
                                </div>
                                <div className="uni_events_add_section">
                                    <label htmlFor="address"><p>University Address<span style={{color: 'red'}}>*</span></p></label>
                                    <input type="text" id="address" name="address"  placeholder='Enter the University Address'  value={formData.address} onChange={handleChange}/>
                                </div>
                                <div className="uni_events_add_section">
                                    <label htmlFor="noOfDepts"><p>No of Departments<span style={{color: 'red'}}>*</span></p></label>
                                    <input type="number" id="noOfDepts" name="noOfDepts" placeholder='Enter the No of Departments' value={formData.noOfDepts} onChange={handleChange}/>
                                </div>
                                <div className="uni_events_multi_dropdown_add_section">
                                   
                                </div>
                                <div className="uni_events_multidropdown_add_section">
                                    <label><p>Degree Types</p><span style={{color: 'red'}}>*</span></label>
                                    <Multiselect
                                        options={[
                                            { name: "UG", id: 1 },
                                            { name: "PG", id: 2 },
                                            { name: "PHD", id: 3 }
                                        ]}
                                        selectedValues={formData.degreeTypes.map(type => ({ name: type }))}
                                        onSelect={handleMultiSelectChange}
                                        onRemove={handleMultiSelectChange}
                                        displayValue="name"
                                        style={{
                                            multiselectContainer: { width: '300px' },
                                            searchBox: {
                                                background: '#F7F7F7', 
                                                borderRadius: '5px',
                                                
                                            }
                                        }}
                                    />
                                </div>
                                <div className="uni_events_add_section">
                                    <label htmlFor="email"><p>University Email<span style={{color: 'red'}}>*</span></p></label>
                                    <input type="email" id="email" name="email" placeholder='Enter the University Email' value={formData.email} onChange={handleChange}/>
                                </div>
                               
                                <div className="flex justify-center pt-5 uni_events_add_section_bttn"><button disabled={!isFormValid} style={{ opacity: isFormValid ? 1 : 0.5 }} onClick={()=>setAddUniversity(2)}>Continue</button></div>
                            </div>
                        </div>
                        :
                        <></>
                        }

                        {/* STEP 2 */}
                        {
                            addUniversity===2?
                            <div className="uni_events_add">
                                <p className="text-center uni_events_add_title">UNIVERSITY REGISTRATION</p>
                                <div className="flex justify-between">
                                    <div className="flex uni_events_add_step cursor-pointer" onClick={()=>{setAddUniversity(1)}}><i class="ri-arrow-left-s-line"></i><p>Back</p></div>
                                    <p className="uni_events_add_step">STEP 02/02</p>
                                </div>
                                <div className="uni_events_add_main">
                                    <div className="uni_events_add_section">
                                        <label htmlFor="username"><p>University Admin Username<span style={{color: 'red'}}>*</span></p></label>
                                        <input type="text" id="username" name="username" placeholder='Enter the University Admin Username' value={formData.username} onChange={handleChange} />
                                    </div>
                                    <div className="uni_events_add_section">
                                        <label htmlFor="password"><p>University Admin Password<span style={{color: 'red'}}>*</span></p></label>
                                        <input type="password" id="password" name="password" placeholder='Enter the University Admin Password' value={formData.password} onChange={handleChange} />
                                    </div>
                                    <div className="uni_events_add_checkbox_section">
                                        <label className="uni_events_add_checkbox_section_main">
                                            <p>Manage Admin Access</p>
                                        </label>
                                        <div className="flex gap-5">
                                            <div className="flex items-center gap-2 font-medium">
                                                <input type="checkbox" id="canView" name="canView" checked={formData.canView} onChange={handleChange} />
                                                <label htmlFor="canView">can View</label>
                                            </div>
                                            <div className="flex items-center gap-2 font-medium">
                                                <input type="checkbox" id="canModify" name="canModify" checked={formData.canModify} onChange={handleChange} />
                                                <label htmlFor="canModify">can Modify</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center pt-5 uni_events_add_section_bttn"><button disabled={!isFormValid2} style={{ opacity: isFormValid2 ? 1 : 0.5 }} onClick={handleSubmit}>REGISTER EVENT</button></div>
                            </div>
                            :
                            <></>
                        }

                        {/* Success Message */}
                        {
                            addUniversity===3?
                            <div className="flex flex-col items-center gap-8 uni_events_add_success">
                                <div className="flex items-center justify-center uni_events_add_success_tick"><i class="ri-check-line"></i></div>
                                <p className="font-medium">University Registered Successfully</p>
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
                    allUniversities?
                    <div className="uni_page_list_section">
                        <div className="flex items-center uni_page_list_title_section">
                            <p className="text-2xl font-semibold">University Details</p>
                        </div>

                        <div className="uni_page_list_section_head" >
                            <p className="text-left">University Name</p>
                            <p>Location</p>
                            <p>Degree Types</p>
                            <p>No of Departments</p>
                            <p>University Email</p>
                        </div>

                        <div className="uni_page_list_section_main" >
                            <div className="flex items-center gap-3"><img src={uni_dashboard_header_bell} className="h-9 w-9 rounded-xl"/><p>Student Community</p></div>
                            <p>Delhi</p>
                            <p>12.07.2024 - 12:53 PM</p>
                            <p>243</p>
                            <p>₹1200</p>
                        </div>

                        <div className="uni_page_list_section_main" >
                            <div className="flex items-center gap-3"><img src={uni_dashboard_header_bell} className="h-9 w-9 rounded-xl"/><p>Engineering Facts</p></div>
                            <p>Mumbai</p>
                            <p>12.06.2024 - 12:53 PM</p>
                            <p>700</p>
                            <p>₹799</p>
                        </div>

                        <div className="uni_page_list_section_main" >
                        <div className="flex items-center gap-3"><img src={uni_dashboard_header_bell} className="h-9 w-9 rounded-xl"/><p>Medical Need</p></div>
                            <p>Pune</p>
                            <p>12.09.2024 - 12:53 PM</p>
                            <p>900</p>
                            <p>₹3999</p>
                        </div>

                    </div>
                    :
                    <></>
                }

            </div>
        </div>
    )
}


export default UniversityPage;
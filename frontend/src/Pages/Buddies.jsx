import React from 'react'
import '../styles/buddies.css';
import UniSidebar from "../Components/UniDashboard/UniSidebar/UniSidebar.jsx"
import UniDashboardHeader from "../Components/UniDashboard/UniDashboardHeader/UniDashboardHeader.jsx"


const Buddies = () => {
  return (
    <div className="uni_dashboard_container">
        <UniSidebar />
        <div className="uni_dash_main_content">
            <UniDashboardHeader />
            
            {/* Section to add an ambassador */}
            <div className="uni_buddies_add_ambas">
              <p className="text-2xl font-semibold my-5 uni_buddies_add_ambas_title">Add Ambassador</p>
              
              <div className="uni_buddies_add_ambas_main">
                  
                      <div className="uni_buddies_add_ambas_section">
                          <label htmlFor="">First Name</label>
                          <input type="text" id="" name="" />
                      </div>
                      <div className="uni_buddies_add_ambas_section">
                          <label htmlFor="">Middle Name</label>
                          <input type="text" id="" name="" />
                      </div>
                      <div className="uni_buddies_add_ambas_section">
                          <label htmlFor="">Last Name</label>
                          <input type="text" id="" name="" />
                      </div>
                      <div className="uni_buddies_add_ambas_section">
                          <label htmlFor="">Country</label>
                          <input type="text" id="" name="" />
                      </div>
                      <div className="uni_buddies_add_ambas_section">
                          <label htmlFor="">Email</label>
                          <input type="text" id="" name="" />
                      </div>
                      <div className="uni_buddies_add_ambas_section">
                          <label htmlFor="">Phone</label>
                          <input type="text" id="" name="" />
                      </div>
                      <div className="uni_buddies_add_ambas_section">
                          <label htmlFor="">Current Designation</label>
                          <input type="text" id="" name="" />
                      </div>              
                      <div className="uni_buddies_add_ambas_section">
                          <label htmlFor="">Role</label>
                          <input type="text" id="" name="" />
                      </div>
                      <div className="uni_buddies_add_ambas_section">
                          <label htmlFor="">Supervisor</label>
                          <input type="text" id="" name="" />
                      </div>

                      <div className="uni_buddies_add_ambas_bttn">
                          <button className="uni_buddies_add_ambas_bttn_save">Save</button>
                          <button className="uni_buddies_add_ambas_bttn_clear">Clear</button>
                      </div>     
              </div>
            </div>


            {/* List of ambassadors Section */}
            <div className="uni_buddies_view_ambas">
                <p className="text-2xl font-semibold my-5 uni_buddies_view_ambas_title">List of Ambassadors</p>

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

        </div>
    </div>
  )
};

export default Buddies;

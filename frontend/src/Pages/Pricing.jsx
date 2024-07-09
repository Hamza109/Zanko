import React from 'react';
import '../styles/pricing.css';
import HomeHeader from "../Components/home/HomeHeader/HomeHeader.jsx"
import HomeFooter from "../Components/home/HomeFooter/HomeFooter.jsx"
import Assurance from "../Components/home/AssuranceSection/Assurance.jsx"
import chatPage from '../assets/home/chatPage.png'


const Pricing = ()=>{
    return (
        
    <div>
        <HomeHeader />

        <main className="home_main">

            {/* Heading and subheading section */}
            <div className="pb-24 flex flex-col gap-5 items-center home_description">
                <h2 className="text-center font-semibold home_description_title">faucibus pulvinar elementum integer enim neque volutpat</h2>          
                <h3 className="font-normal text-center home_description_subtitle">faucibus pulvinar elementum integer enim neque volutpat faucibus pulvinar elementum integer enim neque volutpat</h3>
                <div className="home_description_bttn" ><button>Book Demo</button></div>
            </div>


            {/* Plans Section */}
            <div className="bg-black flex flex-col items-center pricing_plans_section">
                <p className="text-center font-semibold pricing_plans_title">Choose the plan you trust</p>
                <p className="text-center pricing_plans_subtitle">Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.</p>
                <div className="flex flex-wrap justify-center items-center pricing_plans_main">
                    {/* Card 1 */}
                    <div className="p-7 pricing_plan_card" style={{backgroundColor: '#fff'}}>
                        <div className="pricing_plan_card_top" style={{ borderBottom: '1px solid #D5D5D5' }}>
                            <p className="font-semibold text-3xl" style={{color: '#4D4D4D'}}>Personal</p>
                            <p className="text-xs" style={{color: '#AEAEAE'}}>₹ <span className="text-lg font-medium" style={{color: '#4D4D4D'}}>1200</span> /user</p>
                        </div>
                        <div className="pricing_plan_card_bottom">
                            <div className="pricing_plan_card_bottom_element">
                                <i class="ri-checkbox-circle-fill" style={{color: '#4D4D4D'}}></i>
                                <p>create personal dashboard</p>
                            </div>
                            <div className="pricing_plan_card_bottom_element">
                                <i class="ri-checkbox-circle-fill" style={{color: '#4D4D4D'}}></i>
                                <p>organize your notes and <span style={{color: '#4D4D4D'}}>workflows</span></p>
                            </div>
                            <div className="pricing_plan_card_bottom_element">
                                <i class="ri-checkbox-circle-fill" style={{color: '#4D4D4D'}}></i>
                                <p><span style={{color: '#4D4D4D'}}>5GB</span> of space</p>
                            </div>                            
                        </div>
                        <button className="pricing_plan_card_bttn">Book Demo</button>
                    </div>

                    {/* Card 2 */}
                    <div className="pricing_plan_card" style={{backgroundColor: '#1E1E1E'}}>
                        <div className="pricing_plan_card_top" style={{ borderBottom: '1px solid #3F3F3F' }}>
                            <div className="rounded p-1" style={{backgroundColor: '#6557FF'}}><p className="text-white">-30%</p></div>
                            <p className="font-semibold text-3xl" style={{color: '#fff'}}>Personal</p>
                            <p className="text-xs" style={{color: '#AEAEAE'}}>₹ <span className="text-lg font-medium" style={{color: '#fff'}}>1200</span> /user</p>
                        </div>
                        <div className="pricing_plan_card_bottom">
                            <div className="pricing_plan_card_bottom_element">
                                <i class="ri-checkbox-circle-fill" style={{color: '#fff'}}></i>
                                <p>All features in <span style={{color: '#fff'}}>Personal</span></p>
                            </div>
                            <div className="pricing_plan_card_bottom_element">
                                <i class="ri-checkbox-circle-fill" style={{color: '#fff'}}></i>
                                <p>Unlock <span style={{color: '#fff'}}>Teams</span> to create a work group</p>
                            </div>
                            <div className="pricing_plan_card_bottom_element">
                                <i class="ri-checkbox-circle-fill" style={{color: '#fff'}}></i>
                                <p><span style={{color: '#fff'}}>20GB</span> of shared space</p>
                            </div>                            
                        </div>
                        <button className="pricing_plan_card_bttn">Book Demo</button>
                    </div>

                    {/* Card 3 */}
                    <div className="pricing_plan_card" style={{backgroundColor: '#fff'}}>
                        <div className="pricing_plan_card_top" style={{ borderBottom: '1px solid #D5D5D5' }}>
                            <p className="font-semibold text-3xl" style={{color: '#4D4D4D'}}>Enterprise</p>
                            <p className="text-xs" style={{color: '#AEAEAE'}}>₹ <span className="text-lg font-medium" style={{color: '#4D4D4D'}}>5400</span> /user</p>
                        </div>
                        <div className="pricing_plan_card_bottom">
                            <div className="pricing_plan_card_bottom_element">
                                <i class="ri-checkbox-circle-fill" style={{color: '#4D4D4D'}}></i>
                                <p>All features in <span style={{color: '#4D4D4D'}}>Pro Plan</span></p>
                            </div>
                            <div className="pricing_plan_card_bottom_element">
                                <i class="ri-checkbox-circle-fill" style={{color: '#4D4D4D'}}></i>
                                <p>Unlock <span style={{color: '#4D4D4D'}}>Database</span> to manage your data</p>
                            </div>
                            <div className="pricing_plan_card_bottom_element">
                                <i class="ri-checkbox-circle-fill" style={{color: '#4D4D4D'}}></i>
                                <p><span style={{color: '#4D4D4D'}}>500GB</span> / 5 shared spaces</p>
                            </div>                            
                        </div>
                        <button className="pricing_plan_card_bttn">Book Demo</button>
                    </div>
                </div>
            </div>


            {/* personal exp section */}
            <div className="flex justify-center flex-wrap pricing_personalexp">
                <div className="flex flex-col pricing_personalexp_main">
                    <p className="pricing_exp_title">Stunning <span>pricing</span> for your Personal experience.</p>
                    <p className="pricing_exp_desc">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet pellentesque aliquam enim.</p>
                    <div><button>Book Demo</button></div>
                </div>

                <img src={chatPage}/>
            </div>


            {/* Assurance Section */}
            <Assurance /> 


            {/* Plan description section */}
            <div className="flex flex-wrap justify-center pricing_plan_desc">
                <div className="pricing_plan_desc_card">
                    <p className="pricing_plan_desc_card_title">Personal Plan</p>
                    <div className="pricing_plan_desc_card_element">
                        <i class="ri-checkbox-circle-fill"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="pricing_plan_desc_card_element">
                        <i class="ri-checkbox-circle-fill"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="pricing_plan_desc_card_element">
                        <i class="ri-checkbox-circle-fill"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>                    
                </div>

                <div className="pricing_plan_desc_card">
                    <p className="pricing_plan_desc_card_title">Pro Plan</p>
                    <div className="pricing_plan_desc_card_element">
                        <i class="ri-checkbox-circle-fill"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="pricing_plan_desc_card_element">
                        <i class="ri-checkbox-circle-fill"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="pricing_plan_desc_card_element">
                        <i class="ri-checkbox-circle-fill"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>                    
                </div>

                <div className="pricing_plan_desc_card">
                    <p className="pricing_plan_desc_card_title">Enterprise Plan</p>
                    <div className="pricing_plan_desc_card_element">
                        <i class="ri-checkbox-circle-fill"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="pricing_plan_desc_card_element">
                        <i class="ri-checkbox-circle-fill"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="pricing_plan_desc_card_element">
                        <i class="ri-checkbox-circle-fill"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>                    
                </div>
            </div>


            {/* Newsletter Section */}
            <div className="flex flex-col items-center pricing_newsletter_section">
                <div className="pricing_newsletter_section_top">
                    <p className="font-medium pricing_newsletter_section_title">Send us your Mail</p>
                    <p className="font-normal pricing_newsletter_section_subtitle">We will get you a perfect plan</p>
                </div>
                <div className="flex items-center justify-center pricing_newsletter_section_bottom">
                    <div className="flex items-center bg-white pricing_newsletter_section_bottom_main">
                        <div className="pricing_newsletter_section_bottom_logo"><i class="ri-mail-line"></i></div>
                        <input type="text" placeholder="yourmail123@gmail.com" />
                    </div>
                    <button className="pricing_newsletter_bttn"><i class="ri-arrow-right-line"></i></button>
                </div>
            </div>


        </main>

        <HomeFooter/>
    </div>

    )
}

export default Pricing;
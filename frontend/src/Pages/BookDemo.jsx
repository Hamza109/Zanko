import React, { useState } from 'react';
import '../styles/book-demo.css';
import { Form, FormGroup, Button } from 'reactstrap';
import user from '../assets/book-demo/user.png';

const BookDemo = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        institution: '',
        country: '',
        jobrole: '',
        priorities: []
    });

    const [agreePrivacyPolicy, setAgreePrivacyPolicy] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox' && name !== 'agreePrivacyPolicy') {
            setFormData((prevData) => {
                if (checked) {
                    return {
                        ...prevData,
                        priorities: [...prevData.priorities, value]
                    };
                } else {
                    return {
                        ...prevData,
                        priorities: prevData.priorities.filter((priority) => priority !== value)
                    };
                }
            });
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleCheckboxChange = (e) => {
        setAgreePrivacyPolicy(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!agreePrivacyPolicy) {
            alert('You must agree with the privacy policy to proceed.');
            return;
        }
        console.log(formData); 
    };

    return (
        <div className="book_demo_main">
            {/* Left Section */}
            <div className="flex flex-col items-start book_demo_left">
                <p className="book_demo_zanko">Zanko</p>
                <p className="book_demo_title">Lorem ipsum dolor sit amet, consectetur adipiscingJusto lorem risus praesent</p>
                <p className="book_demo_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing Justo lorem risus praesent</p>
                <div className="flex w-full justify-center">
                    <div className="flex flex-col items-center gap-2 p-3 book_demo_review_card">
                        <div className="flex book_demo_review_img"><img src={user} alt="user" /></div>
                        <p className="text-center book_demo_review_desc">Lorem ipsum dolor sit amet consectetur. Justo lorem risus praesent sed tempor diam. Tempor dictum nisl sit at mi tempor. Eu fames quis tincidunt erat mauris enim. Nunc urna commodo nisl justo vel blandit ultrices. Sollicitudin imperdiet in risus non.</p>
                        <div className="flex gap-2 book_demo_review_rating">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-center book_demo_right">
                <p className="book_demo_form_title">Book a Demo</p>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 book_demo_form">
                    <div className="book_demo_form_container">
                        <div className="book_demo_form_element">
                            <label htmlFor='firstname'>First Name</label>
                            <input type="text" required id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} />                        
                        </div>

                        <div className="book_demo_form_element">
                            <label htmlFor='lastname'>Last Name</label>
                            <input type="text" required id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} />                        
                        </div>
                    </div>
                    
                    <div className="book_demo_form_container">
                        <div className="book_demo_form_element">
                            <label htmlFor='email'>Email</label>
                            <input type="email" required id="email" name="email" value={formData.email} onChange={handleChange} />                        
                        </div>

                        <div className="book_demo_form_element">
                            <label htmlFor='institution'>Institution Name</label>
                            <input type="text" required id="institution" name="institution" value={formData.institution} onChange={handleChange} />                        
                        </div>
                    </div>

                    <div className="book_demo_form_element_2">
                        <label htmlFor='country'>Country</label>
                        <input type="text" required id="country" name="country" value={formData.country} onChange={handleChange} />                        
                    </div>

                    <div className="book_demo_form_element_2">
                        <label htmlFor='jobrole'>Job Role</label>
                        <input type="text" required id="jobrole" name="jobrole" value={formData.jobrole} onChange={handleChange} />                        
                    </div>

                    <div className="book_demo_priorities">
                        <div className="book_demo_priorities_title">
                            <label>What are your current priorities?</label>
                        </div>
                        <div className="flex flex-col gap-3 book_demo_priorities_main">
                            <div className="flex items-center gap-3 book_demo_priorities_element">
                                <input
                                type="checkbox"
                                id="priority1"
                                name="priority"
                                value="Engaging Leads"
                                onChange={handleChange}
                                />
                                <label htmlFor="priority1">Engaging Leads</label><br />
                            </div>
                            <div className="flex items-center gap-3 book_demo_priorities_element">
                                <input
                                type="checkbox"
                                id="priority2"
                                name="priority"
                                value="Increasing Applicants"
                                onChange={handleChange}
                                />
                                <label htmlFor="priority2">Increasing Applicants</label><br />
                            </div>
                            <div className="flex items-center gap-3 book_demo_priorities_element">
                                <input
                                type="checkbox"
                                id="priority3"
                                name="priority"
                                value="Driving Acceptances"
                                onChange={handleChange}
                                />
                                <label htmlFor="priority3">Driving Acceptances</label><br />
                            </div>
                            <div className="flex items-center gap-3 book_demo_priorities_element">
                                <input
                                type="checkbox"
                                id="priority4"
                                name="priority"
                                value="Increasing Deposits Enrollments"
                                onChange={handleChange}
                                />
                                <label htmlFor="priority4">Increasing Deposits Enrollments</label><br />
                            </div>
                            <div className="flex items-center gap-3 book_demo_priorities_element">
                                <input
                                type="checkbox"
                                id="priority5"
                                name="priority"
                                value="Retaining Students"
                                onChange={handleChange}
                                />
                                <label htmlFor="priority5">Retaining Students</label><br />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center book_demo_privacy">
                        <div className="flex items-center gap-2 book_demo_privacy_main">
                            <input
                                type="checkbox"
                                id="agreePrivacyPolicy"
                                name="agreePrivacyPolicy"
                                checked={agreePrivacyPolicy}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="agreePrivacyPolicy">I agree with the Privacy Policy and Terms of Use</label>
                        </div>
                    </div>

                    <div className="flex justify-center mt-2 book_demo_form_bttn">
                        <button type="submit">Next</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BookDemo;

import React from 'react'
import HomeHeader from '../Components/home/HomeHeader/HomeHeader'
import HomeFooter from '../Components/home/HomeFooter/HomeFooter'

import ApplyButton from '../Components/StudentCard/ApplyButton'
import Assurance from '../Components/home/AssuranceSection/Assurance'
import Story_1 from '../assets/stories/story_1.png'
import Card1 from '../assets/blog/blog_3.png'
import '../styles/blog.css'

const Stories = () => {


    const blogs = [
        { id: 1, imgSrc: Card1, text: 'Lorem ipsum dolor sit amet, consectetur\nInteger' },
        { id: 2, imgSrc: Card1, text: 'Lorem ipsum dolor sit amet, consectetur\nInteger' },
        { id: 3, imgSrc: Card1, text: 'Lorem ipsum dolor sit amet, consectetur\nInteger' },
       
      ];
  return (
  <>

<div className="home_header_container"><HomeHeader /></div>

<main className="home_main">

<div className="pb-20 flex flex-col  items-center forstudents_description">
        <h2 className="text-center font-semibold text-2xl  lg:text-4xl forstudents_description_title">Lorem ipsum dolor sit, amet </h2>   
        <h2 className="text-center font-semibold text-2xl  lg:text-4xl  forstudents_description_title">consectetur adipisicing elit.</h2>       
        <h2 className="text-center font-semibold text-2xl  lg:text-4xl  forstudents_description_title">Numquam, veritatis repudiandae. </h2>          
      <p className='lg:text-lg font-light text-center my-10 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <div className='apply '>
      <ApplyButton  title={'Book Demo'}/>
        </div>
    </div>


    <section className="blog-section bg-black p-10 mx-auto my-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Customer Stories</h2>
      <div className="blog-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-10  ">
        {blogs.map(blog => (
          <div key={blog.id}  className="blog-card bg-black rounded-xl  overflow-hidden">
            <img src={blog.imgSrc} alt={`Blog ${blog.id}`} className="rounded-xl"  />
            <div className="w-full p-1 mt-2 "  >
              <p className="lg:text-xl text-white " >{blog.text}</p>
            </div>
            <div className="w-full p-1 "  >
              <p className="lg:text-md text-white " >Read More </p>
            </div>
          </div>
        ))}
      </div>

    </section>




  {/* Never miss any task */}
 
<div className="flex flex-col justify-center items-center  ">
    
<div className="container w-5/6">
<h2 className="text-center font-semibold text-2xl  lg:text-4xl forstudents_description_title">University of Michigan’s Journey to a 70% Application Increase with Slate CRM</h2>   
</div>

  <div className="flex flex-col flex-col-reverse lg:flex-row justify-center gap-10 add_task">
    <div className="home_add_task">
    <img  style={{width: 500}} src={Story_1} />
    </div>
       

        <div className="max-w-md flex items-center ">
            <p className="text-xl lg:text-2xl  text-left  mb-10 add_task_title "  >University of Michigan Sees 70% Increase in Applications With Zanko, Enhancing Student Engagement, Streamlining Admissions Processes, and Improving Overall Recruitment Efficiency"</p>

        </div>
    </div>
    </div>


       {/* Assurances section */}
       <Assurance />


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


            <HomeFooter/>


</main>
  </>
  )
}

export default Stories
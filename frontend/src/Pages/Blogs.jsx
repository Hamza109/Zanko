import React from 'react'
import HomeHeader from '../Components/home/HomeHeader/HomeHeader'
import HomeFooter from '../Components/home/HomeFooter/HomeFooter'
import Blog1 from '../assets/blog/blog_1.png'
import Blog2 from '../assets/blog/blog_2.png'
import Blog3 from '../assets/blog/blog_3.png'
import Blog4 from '../assets/blog/blog_4.png'
import ApplyButton from '../Components/StudentCard/ApplyButton'
import Assurance from '../Components/home/AssuranceSection/Assurance'
import Card1 from '../assets/blog/card_1.png'
import '../styles/blog.css'

const Blogs = () => {

    const blogs = [
        { id: 1, imgSrc: Card1, text: 'Lorem ipsum dolor sit amet, consectetur\nInteger' },
        { id: 2, imgSrc: Card1, text: 'Lorem ipsum dolor sit amet, consectetur\nInteger' },
        { id: 3, imgSrc: Card1, text: 'Lorem ipsum dolor sit amet, consectetur\nInteger' },
        { id: 4, imgSrc: Card1, text: 'Lorem ipsum dolor sit amet, consectetur\nInteger' },
        { id: 5, imgSrc: Card1, text: 'Lorem ipsum dolor sit amet, consectetur\nInteger' },
        { id: 6, imgSrc: Card1, text: 'Lorem ipsum dolor sit amet, consectetur\nInteger' },
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


{/* Most Recent Blogs */}

    <section className="blog-section bg-black p-10 mx-auto my-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Most recent blogs</h2>
      <div className="blog-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-10  ">
        {blogs.map(blog => (
          <div key={blog.id} style={{background:blog.id===2||blog.id===5?'#333':'#fff'}} className="blog-card bg-white rounded-xl  overflow-hidden">
            <img src={blog.imgSrc} alt={`Blog ${blog.id}`} className="w-full" />
            <div className="w-full p-6 "  >
              <p className="lg:text-xl" style={{color:blog.id===2||blog.id===5?'#fff':'#333'}} >{blog.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex  justify-center items-center  px-1 mt-20">
       <ApplyButton title={'Load more'} />
      </div>
    </section>


    <section className="popular-blogs p-10 lg:p-0  mx-auto my-8">
      <h2 className="lg:text-3xl  text-xl lg:w-full  font-bold text-center mb-8">Popular blogs</h2>
      <div className="flex items-center justify-center   rounded-lg overflow-hidden">
        <img src={Blog4} alt="Popular Blog" className="rounded-xl" />
        
      </div>
    </section>

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

export default Blogs
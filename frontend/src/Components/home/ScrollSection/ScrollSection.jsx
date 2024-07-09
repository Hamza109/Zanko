import React from "react";
import './scroll-section.css'
import unilogo1 from "../../../assets/home/unilogo1.png"
import unilogo2 from "../../../assets/home/unilogo2.png"
import unilogo3 from "../../../assets/home/unilogo3.png"
import unilogo4 from "../../../assets/home/unilogo4.png"
import unilogo5 from "../../../assets/home/unilogo5.png"
import unilogo6 from "../../../assets/home/unilogo6.png"


const ScrollSection=()=>{
    
    return(
        <div className="home_uni_logos">
            <div className="home_uni_logo_slider">
                <img src={unilogo1}/>
                <img src={unilogo2}/>
                <img src={unilogo3}/>
                <img src={unilogo4}/>
                <img src={unilogo5}/>
                <img src={unilogo6}/>
            </div>

            <div className="home_uni_logo_slider">
                <img src={unilogo1}/>
                <img src={unilogo2}/>
                <img src={unilogo3}/>
                <img src={unilogo4}/>
                <img src={unilogo5}/>
                <img src={unilogo6}/>
            </div>         
                                         
        </div>
    )
}

export default ScrollSection;
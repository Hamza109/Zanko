import React from 'react'
import studentImage from '../../../../assets/chatScreen/student.png';
import '../../../StudentCard/StudentCard.css'; // Import the custom CSS file

import { NavLink } from 'react-router-dom';
import { headerData } from '../../../../Redux/Slice/HeaderSlice';
import { useDispatch } from 'react-redux';

const GroupsCard = ({ university, name, members, qualification, about }) => {
    const user={name:name}
    const dispatch=useDispatch()
     return (
       <div className="white-shadow border rounded-lg max-w-sm mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14">
         <div className="inner-content">
           <div className="bg-black h-12 rounded-t-lg"></div> {/* Black bar at the top */}
         
           <div className="text-center px-6 py-4 ">
             <h3 className="text-xl font-semibold my-2 ">{university}</h3>
             <h3 className="text-xl font-light ">{name}</h3>
         
             <div className="mt-4  ">
          <div className="flex  flex-row  mt-8">
             <img src={studentImage} alt={`${name}`} className="rounded-full border-solid border-white border-2 w-24 h-24 object-cover" />
             <img src={studentImage} alt={`${name}`} className="rounded-full border-solid border-white border-2 w-24 h-24 object-cover" />
             <img src={studentImage} alt={`${name}`} className="rounded-full border-solid border-white border-2 w-24 h-24 object-cover" />
           </div>
           <h3 className="text-sm font-light mt-3">{members}</h3>
  <div className="my-8" style={{borderRadius:50}}>
        <NavLink to={'/chat-window'} state={{toChat:true,user:name}}  ><button className="chat-button text-white" style={{borderRadius:50}} onClick={()=>{dispatch(headerData(user))}}  >Join Group</button></NavLink> 
       </div>

             </div>
           </div>
         </div>
       </div>
     );
   };
   
   export default GroupsCard;
   
  
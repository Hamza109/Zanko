import React from "react";
import './filters.css'
const Filters = () => {
    return (
      <div className="filters">
        <div className="label">
            <h2>Universities</h2>
        <select>
          <option>Search for universities</option>
        </select>
        </div>
      <div className="label">
      <h2>Profile Type</h2>
      <select>
          <option>Search for profile</option>
        </select>
      </div>
      
        <div className="label">
        <h2>Key Topics</h2>
        <select>
          <option>Search for topics</option>
        </select>
        </div>
        
      </div>
    );
  };
  
  export default Filters;
  
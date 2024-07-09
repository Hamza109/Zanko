import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="search-bar-input w-full">
        <input type="text" placeholder="Search for ambassadors" />
      </div>
      <div className="search-bar-select">
        <select>
          <option value="student">Student</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="search-bar-button">
     
      </div>
    </div>
  );
};

export default SearchBar;

import React from 'react';
import home from '../../../../assets/chatScreen/home.png'
import user from '../../../../assets/chatScreen/user.png'
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><img src={home} />  <a href="#">Home</a></li>
      </ul>
      <button className="login-button">Login</button>
    </nav>
  );
};

export default Navbar;

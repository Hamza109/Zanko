import React from 'react';

import ApplyButton from '../StudentCard/ApplyButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Google from '../../assets/Authentication/Google.png'
import Facebook from '../../assets/Authentication/Facebook.png'
import Apple from '../../assets/Authentication/Apple.png'


const Login = ({ toggleForm }) => {
  return (
    <div className="form-box w-full  text-white purple-shadow  border-login">
          <div className="inner-content-login bg-black">
          <h2 className="text-3xl font-bold mb-2">Login</h2>
        <hr className="border-t-4 border-white mb-6" style={{width:95}} />
      <form className="space-y-4">
        <div className="input-box relative">
          <input type="text" required className="w-full p-2 bg-gray-800 border-none text-white rounded-md" />
          <label className="absolute top-0 left-0 p-2 text-white transform translate-y-1/2 transition-all">
            Username
          </label>
        </div>
        <div className="input-box relative">
          <input type="password" required className="w-full p-2 bg-gray-800 border-none text-white rounded-md" />
          <label className="absolute top-0 left-0 p-2 text-white transform translate-y-1/2 transition-all">
            Password
          </label>
        </div>
        </form>
        <div className="forgot-password text-right">
          <a href="#" className="text-white text-xs mr-1">Forgot password?</a>
        </div>
<div className="flex justify-center px-1 mt-6">
    <ApplyButton title={'Login'} />
</div>
<div className="flex items-center my-3 px-2">
          <hr className="flex-grow border-t border-gray-400" />
          <span className="mx-2 text-white text-xs ">or Login with</span>
          <hr className="flex-grow border-t border-gray-400" />
        </div>
        <div className="social-login flex justify-center space-x-4 my-4">
          <button className="social-btn">
        <img src={Google} width={20} height={20} />
          </button>
          <button className="social-btn">
          <img src={Facebook} width={20} height={20} />
          </button>
          <button className="social-btn">
          <img src={Apple} width={20} height={20} />
          </button>
        </div>
      <p className=" text-center login-footer text-gray-400 my-4">
        New to Zanko? <span onClick={toggleForm} className="text-white font-semibold  cursor-pointer">Join now</span>
      </p>
      </div>
    </div>
  );
};

export default Login;

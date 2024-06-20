import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./home-header.css";
import Modal from "react-modal";
import Login from "../../Authentication/Login";
import SignUp from "../../Authentication/SignUp";
import "../../Authentication/Authentication.css";

const HomeHeader = () => {
  const [dropdown, setDropdown] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const toggleForm = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setIsAnimating(false);
    }, 500); // Duration of the animation
  };

  return (
    <header className="home_header_border">
      <div className="home_header_main">
        <div onClick={openModal} className="w-40 bg-white home_header_logo">
          logo
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Authentication Modal"
          className="modal"
          overlayClassName="overlay"
        >
          <div
            className={`modal-content flex `}
          >
            <div
              className={`modal-left w-1/2 p-8 text-white flex flex-col justify-evenly ${
                isLogin ? "show" : "hide"
              } `}
            >
              <div className="text-content text-left">
                <h1 className="text-6xl font-bold text-gradient mb-4">Zanko</h1>
              </div>
              <div className="text-content text-left">
                <p className="text-2xl  leading-relaxed">
                  Our platform is always here for you. Access information and
                  assistance seamlessly, anytime, anywhere at Zanko.
                </p>
              </div>
            </div>
            <div
              className={`modal-right w-1/2 p-8 text-white flex flex-col  justify-evenly  ${
                isLogin ? "hide" : "show"
              }`}
            >
              <div className="text-content text-left">
                <h1 className="text-6xl font-bold text-gradient mb-4">Zanko</h1>
              </div>
              <div className="text-content text-left">
                <p className="text-2xl leading-relaxed">
                  Our platform is always here for you. Access information and
                  assistance seamlessly, anytime, anywhere at Zanko.
                </p>
              </div>
            </div>
            <div className="form-container w-1/2 flex items-center justify-center">
              {isLogin ? (
                <Login toggleForm={toggleForm} />
              ) : (
                <SignUp toggleForm={toggleForm} />
              )}
            </div>
          </div>
        </Modal>

        <div className="home_header_right">
          <div className="home_header_options">
            <div className="home_header_option">
              <p>Platform</p>
            </div>
            <div className="home_header_option">
              <p>Solutions</p>
            </div>
            <NavLink
              to="/for-student"
              className={({ isActive }) =>
                isActive ? "home_header_option active" : "home_header_option"
              }
            >
              <p>For Students</p>
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive ? "home_header_option active" : "home_header_option"
              }
            >
              <p>Pricing</p>
            </NavLink>
            <div className="home_header_option">
              <p>Resources</p>
            </div>
          </div>

          <div className="home_header_signup_border">
            <button>Sign Up</button>
          </div>

          <div className="home_header_hammenu_border">
            <div
              className="home_header_hammenu"
              onClick={() => {
                setDropdown(!dropdown);
              }}
            >
              {dropdown ? (
                <i className="ri-close-large-line"></i>
              ) : (
                <i className="ri-menu-line"></i>
              )}
            </div>
          </div>

          {dropdown ? (
            <div className="home_header_dropdown">
              <div className="home_header_dropdown_option">
                <p>Platform</p>
                <i className="ri-arrow-right-line"></i>
              </div>
              <div className="home_header_dropdown_option">
                <p>Solutions</p>
                <i className="ri-arrow-right-line"></i>
              </div>
              <div className="home_header_dropdown_option">
                <p>For Students</p>
                <i className="ri-arrow-right-line"></i>
              </div>
              <div className="home_header_dropdown_option">
                <p>Pricing</p>
                <i className="ri-arrow-right-line"></i>
              </div>
              <div className="home_header_dropdown_option">
                <p>Resources</p>
                <i className="ri-arrow-right-line"></i>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;

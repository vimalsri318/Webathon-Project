import React from 'react';
import './Navbar.css'
import  insta from './Navbar_asset/instagram-2-1-logo-svgrepo-com.svg'
import ln from './Navbar_asset/linkedin-linked-in-svgrepo-com.svg'
import twer from './Navbar_asset/twitter-x-logo-42560.png'
import sr from './Heo_assets/search.png'
import im from './Welcome_assets/Screenshot 2024-03-17 at 3.11.45 PM.png';
import about from './Welcome_assets/Screenshot 2024-03-17 at 3.37.29 PM.png';
import jl from './Welcome_assets/Screenshot 2024-03-17 at 3.43.20 PM.png';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav className="navbar1">
      <div className="left">
        <span className='em'> vimalsrinivasansn@gmail.com</span>
      </div>
      <div className="right">
        <a href="https://www.instagram.com/vimal_s_ted_318/" className="social-icon"><img src={insta} alt="Facebook" /></a>
        <a href="https://www.linkedin.com/in/vimal-srinivasan-764aa6219/" className="social-icon"><img src={ln}alt="Twitter" /></a>
        <a href="#" className="social-icon"><img src={twer} alt="LinkedIn" /></a>
      </div>
    </nav>

     <nav className="navbar">
        <div className="logo-container">
          <img src="logo.png" alt="Logo" className="logo" />
        </div>
        <div className="search-container">
          <input type="text" className="search-bar" placeholder="Search..."/>
          <button className="search-btn"><img className='si' src={sr} alt="Search" /></button>
        </div>
        <button className="publish-btn"><img src="" alt=''/>Publish</button>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Journals</a>
        </div>
        <div className="profile-container">
          <button className="profile-btn"><img src="profile-icon.png" alt="Profile" /></button>
        </div>
      </nav>
      <div className="container">
      <img className="imgs" src={im} alt='' />
      <Link to='/login'><button className="bt">Start Exploring</button></Link>
      <div>
        <img className="imgs" src={about} alt='' />
      </div>
      <div className="scroll-container">
        <h2 className='pj'>Popular Journals</h2>
        
        <div>
            
            <div className="pro4d">
            <p className="pro4m"> <p /> </p> 
      <div className="pro4m"> <img className="prom4i"src={jl} alt="This is my image." /> </div> 
     <div className="pro4m"> <img className="prom4i"src={jl} alt="This is my image." /> </div> 
     
     
     
     </div>
            </div>
            <div>
            <footer class="footer">
  <div class="footer-links">
    <a href="#">Home</a>
    <a href="#">About Us</a>
    <a href="#">Contact</a>
  </div>
  <div class="copy">
    &copy; 2024 Your Company Name. All rights reserved.
  </div>
</footer>

            </div>
      </div>
    </div>
      </>
  );
}

export default Navbar;

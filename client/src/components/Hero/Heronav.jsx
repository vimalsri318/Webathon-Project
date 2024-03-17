/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Hero.css'
import sr from './Heo_assets/search.png'
const Heronav = () => {
  return (
    <div>
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
    </div>
  );
}

export default Heronav;


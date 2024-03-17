import React from 'react';
import im from './Welcome_assets/Screenshot 2024-03-17 at 3.11.45 PM.png';
import about from './Welcome_assets/Screenshot 2024-03-17 at 3.37.29 PM.png';
import jl from './Welcome_assets/Screenshot 2024-03-17 at 3.43.20 PM.png';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="container">
      <img className="imgs" src={im} alt='' />
      <button className="bt">Start Exploring</button>
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
  );
}

export default Welcome;

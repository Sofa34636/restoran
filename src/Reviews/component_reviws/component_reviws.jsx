import React from 'react';
import './component_reviws.css';
import ComponentOtz from './component_otz/component_otz';
import Q from './img-1.jpg';
import QQ from './img-2.jpg';
import QQQ from './img-3.jpg';


function ComponentReviws() {
  return (
    <div className='top1'>
      <div className='header1'></div>
        <div className='container1'>
        <div className='header-block__titl1'>
               
              </div>
      
              <body>
                <div className='body1'>
    <div class="wrapper1">
      <i id="left" class="fa-solid fa-angle-left"></i>
      <ul class="carousel">
        <li class="card">
          <div class="img"><img src={Q} alt="img" draggable="false"></img></div>
          <h2>Blanche Pearson</h2>
          <span>Sales Manager</span>
        </li>
        <li class="card">
          <div class="img"><img src={QQ} alt="img" draggable="false"></img></div>
          <h2>Joenas Brauers</h2>
          <span>Web Developer</span>
        </li>
        <li class="card">
          <div class="img"><img src={QQQ} alt="img" draggable="false"></img></div>
          <h2>Lariach French</h2>
          <span>Online Teacher</span>
        </li>
        <li class="card">
          <div class="img"><img src="images/img-4.jpg" alt="img" draggable="false"></img></div>
          <h2>James Khosravi</h2>
          <span>Freelancer</span>
        </li>
        <li class="card">
          <div class="img"><img src="images/img-5.jpg" alt="img" draggable="false"></img></div>
          <h2>Kristina Zasiadko</h2>
          <span>Bank Manager</span>
        </li>
        <li class="card">
          <div class="img"><img src="images/img-6.jpg" alt="img" draggable="false"></img></div>
          <h2>Donald Horton</h2>
          <span>App Designer</span>
        </li>
      </ul>
      <i id="right" class="fa-solid fa-angle-right"></i>
    </div>
    </div>
  </body>


    </div>
    </div>
  );
}

export default ComponentReviws;
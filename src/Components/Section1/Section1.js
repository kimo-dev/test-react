import React from 'react';
import thumb1 from '../../images/thumb-1.png';
import Navbar from '../Navbar/Navbar';
import './Section1.css';

const Section1 = () => {
  return (
    <>
      <div className='container-section1'>
        <div className='body-section1'>
          <div className='right-section1'>
            <h1>
                Creative way to<br />
                Showcase your<br />
                App
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum,
              has been the industry's standard dummy text ever since the 1500s,<br /> when an unknown
              text ever since the 1500s
            </p>
            <button className='button'>Get Started</button>
          </div>
          <div className='left-section1'>
            <img src={thumb1} alt="thumb1" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Section1
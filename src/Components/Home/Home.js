import React, {useState, useEffect} from 'react';
import Navbar from '../Navbar/Navbar';
import Section1 from '../Section1/Section1';
import Section2 from '../section2/Section2';
import Section3 from '../section3/Section3';
import Section4 from '../Section4/Section4';
import Section5 from '../Section5/Section5';
import Section6 from '../Section6/Section6';
import Section7 from '../Section7/Section7';
import Section8 from '../Section8/Section8';
import Section9 from '../Section9/Section9';
import './Home.css';

const Home = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  
    const Toggle = () => {
      const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setShowTopBtn(true);
        } else if(scrolled <= 300){
            setShowTopBtn(false);
        }
    };

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  };
  window.addEventListener('scroll', Toggle);
  return (
    <>
      <div className='top-section'>
        <div className='navbar polygon'>
          <Navbar />
        </div>
        <div className='section1'>
          <Section1 /> 
          <Section2 /> 
          <Section3 /> 
          <Section4 />
          <Section5 /> 
          <Section6 />
          <Section7 />  
          <Section8 />  
          <Section9 />
          <div style={{textAlign:'right', marginTop: '40px'}}>
            {showTopBtn && (
                <button onClick={goToTop}>Scroll to top</button>
            )}
          </div> 
        </div>
      </div>
    </>
  )
}

export default Home
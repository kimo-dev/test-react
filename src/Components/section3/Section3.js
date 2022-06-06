import React from 'react';
import thumb from '../../images/thumb-2 (1).png';
import checkbox from '../../images/check-box.svg';
import './Section3.css';
import video from '../../images/video.svg';


const Section3 = () => {
  return (
      <>
        <div className='main-container'>
            <div className='main-box'>
                <img src={thumb} alt="thumb2" />
            </div>
            <div className='main-box'>
                <div>
                    <h1 style={{textAlign: 'left'}}>Work Faster with<br />powerful tools</h1>
                </div>
                <div className='main'>
                    <div className='list'>
                        <img src={checkbox} alt="checkbox" />
                        <p>
                            Lorem ipsum sit amet,
                            consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div className='main'>
                    <div className='list'>
                        <img src={checkbox} alt="checkbox" />
                        <p>
                            Lorem ipsum sit amet,
                            consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div className='main'>
                    <div className='list'>
                        <img src={checkbox} alt="checkbox" />
                        <p>
                            Lorem ipsum sit amet,
                            consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div className='main'>
                    <div className='list'>
                        <img src={checkbox} alt="checkbox" />
                        <p>
                            Lorem ipsum sit amet,
                            consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div className='main'>
                    <div className='list'>
                        <img src={checkbox} alt="checkbox" />
                        <p>
                            Lorem ipsum sit amet,
                            consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div className='list-svg'>
                    <img className='svg' src={video} alt="home" />
                    <img className='svg' src={video} alt="phone" />
                    <img className='svg' src={video} alt="mail" />
                </div>
            </div>
        </div>
      </>
    
  )
}

export default Section3
import React from 'react';
import './Section4.css';
import thumb from '../../images/thumb-2.png';
import checkbox from '../../images/check-box.svg';

const Section4 = () => {
  return (
    <>
        <div className='container'>
            <div className='box'>
                <div className='header'>
                    <h1>
                        Share your photos<br />
                        With friends easily</h1>
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
                    <button className='button'>Learn more</button>
                </div>
            </div>
            <div className='box'>
                <img src={thumb} alt="thumb2" />
            </div>
        </div>
    </>
  )
}

export default Section4
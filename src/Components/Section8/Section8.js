import React from 'react';
import './Section8.css';

const Section8 = () => {
  return (
    <>
        <div className='container-section8'>
            <div className='header-section8'>
                <h1>Subscribe to get update</h1>
                <p style={{textAlign: 'center'}}>
                    By subscribing you will get newsletter, promotions adipisicing elit. Architecto beatae,
                    asperiores tempore repudiandae saepe aspernatur unde valuptate sapente quia ex
                </p>
            </div>
            <div className='body-section8'>
                <input type="text" placeholder="Enter Your email" />
                <button className='subs-button'>Subscribe</button>
            </div>
        </div>
    </>
  )
}

export default Section8
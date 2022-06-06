import React from 'react';
import './Section6.css';
import bike from '../../images/bike.png';

const Section6 = () => {
  return (
    <>
        <div className='container-section6'>
            <div className='header-section6'>
                <h1 className='text-color6 text-bold6'>Basma Co<span className='title-section6'>de</span>Challenge</h1>
                <div>
                    <p className='text-color6'>
                        Lorem ipsum sit amet,consectetur adipisicing elit. Veritatis
                        culpa expedita dignissimos quae quo iste ipsum officiis deleniti asperiores sit.
                    </p>
                </div>
            </div>
            <div className='card-section'>
                <div className='card'>
                    <div className='card-header'>
                        <div><img className='bike-img' src={bike} alt='bike' /></div>
                        <h1 className='text-color6'>Basic</h1>
                        <div>
                            <h1 className='price'>$49</h1>
                        </div>
                    </div>
                    <div className='card-body'>
                        <h1>5GB Linux Web Space</h1><hr />
                        <h1>5 MySQL Databases</h1><hr />
                        <h1>24/7 texh support</h1><hr />
                        <h1>Daily Backups</h1><hr />
                    </div>
                    <button className='border-Button'>Sign Up</button>
                </div>
                <div className='card'>
                    <div className='card-header'>
                        <div><img className='bike-img' src={bike} alt='bike' /></div>
                        <h1 className='text-color6'>Basic</h1>
                        <div>
                            <h1 className='price'>$49</h1>
                        </div>
                    </div>
                    <div className='card-body'>
                        <h1>5GB Linux Web Space</h1><hr />
                        <h1>5 MySQL Databases</h1><hr />
                        <h1>24/7 texh support</h1><hr />
                        <h1>Daily Backups</h1><hr />
                    </div>
                    <button className='border-Button'>Sign Up</button>
                </div>
                    {/* <h1 className='container-footer'>Not sure what to choose? <span>contact us</span></h1> */}
            </div>
        </div>
    </>
  )
}

export default Section6;
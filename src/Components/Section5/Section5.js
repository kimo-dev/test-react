import React from 'react';
import './Section5.css';
import download from '../../images/download.png';
import setting from '../../images/settings.png';
import appP from '../../images/app.png';
import arrow from '../../images/arrow-right.svg';

const Section5 = () => {
  return (
    <>
        <div className='container-section5'>
            <div className='header-section5'>
                <h1 className='text-color'>Code <span className='title-section5'>Cha</span>llenge</h1>
                <div>
                    <p className='text-color'>
                        Lorem ipsum sit amet,consectetur adipisicing elit. Veritatis
                        culpa expedita dignissimos
                    </p>
                </div>
            </div>
            <div className='main-container-section5'>
                <div className='flex-box'>
                    <div><img className='img' src={download} alt='Fully Functional' /></div>
                    <h1 className='text-color'>Fully Functional</h1>
                    <div>
                        <p className='text-color'>
                            Lorem ipsum sit amet,<br />
                            consectetur adipisicing elit. Veritatis<br />
                            culpa expedita dignissimos
                        </p>
                    </div>
                </div>
                <img src={arrow} alt="arrow" />
                <div className='flex-box'>
                    <div><img className='img' src={setting} alt='Fully Functional' /></div>
                    <h1 className='text-color'>Setup your profile</h1>
                    <div>
                        <p className='text-color'>
                            Lorem ipsum sit amet,<br />
                            consectetur adipisicing elit. Veritatis<br />
                            culpa expedita dignissimos
                        </p>
                    </div>
                </div>
                <img src={arrow} alt="arrow" />
                <div className='flex-box'>
                    <div><img className='img' src={appP} alt='Fully Functional' /></div>
                    <h1 className='text-color'>Enjoy The Features</h1>
                    <div>
                        <p className='text-color'>
                            Lorem ipsum sit amet,<br />
                            consectetur adipisicing elit. Veritatis<br />
                            culpa expedita dignissimos
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Section5
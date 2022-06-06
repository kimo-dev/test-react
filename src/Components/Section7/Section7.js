import React from 'react';
import './Section7.css';
import googlePlay from '../../images/google-play.png';
import appStore from '../../images/app-store.png';

const Section7 = () => {
  return (
    <>
        <div className='container-section7'>
            <div className='header-section7'>
            <h1>BASMA is available on all devices</h1>
            <p>
                sApp is available for al devices, consecteur adipisicing elit. itaque at harum quam explicabo.Aliquam
                option,delectus,dolorem quod neque eos totam. Delectus quae animi teneter volupatets doloribus
                commadi dicta modi maliquid deserunt, quis maioris nesciunt autem, aperiam natus
            </p>
            </div>
            <div className='main-container-section7'>
                <div className='box-section7'>
                    <img src={googlePlay} alt="Google Play" />
                </div>
                <div className='box-section7'>
                    <img src={appStore} alt="App Store" />
                </div>
            </div>
            <div className='footer-section7'>
                <h1>* Available on iPhone, iPad and all android devoices</h1>
            </div>
        </div>
        

    </>
  )
}

export default Section7
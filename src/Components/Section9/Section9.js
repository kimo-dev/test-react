import React from 'react';
import './Section9.css';
import pointer from '../../images/pointer-top.svg';
import formhouse from '../../images/form-house.svg';
import formphone from '../../images/form-phone.svg';
import formmail from '../../images/form-mail.svg';

const Section9 = () => {
  return (
    <>
        <div className='container-section9'>
            <div className='header-section9'>
                <h1>Stay<span> Tu</span>ned</h1>
                <p style={{textAlign: "center"}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos<br />
                    quae quo ad iste ipsum officiis deleniti asperiores sit.
                </p>
            </div>
            <div className='body-section9'>
                <div className='body-left'>
                    <p>
                        Contrary to popular belief, Lorem ipsum is not simply<br />
                        random text. it  has roots in a peice of classical latin<br />
                        literature from 45 BC, making it over 2000 years old
                    </p>
                    <div className='body-list'>
                        <div className='list-item'>
                            <img style={{width: '30px', height: '30px'}} src={formhouse} alt="form-house" />
                            <p>Vestibulum nulla libero, convallis, tincidunt<br />suscipit diam, DC 2000</p>
                        </div>
                        <div className='list-item'>
                            <img style={{width: '30px', height: '30px'}} src={formphone} alt="form-phone" />
                            <p>+1 230 456 789-012 345 6789</p>
                        </div>
                        <div className='list-item'>
                            <img style={{width: '30px', height: '30px'}} src={formmail} alt="form-mail" />
                            <p>exampledomain@domain.com</p>
                        </div>
                    </div>
                </div>
                <div className='body-right'>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder='Message'></textarea>
                    <button><img src={pointer} style={{width: '20px', height: '30px', paddingRight: '10px'}} alt="pointer" />Send Message</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Section9
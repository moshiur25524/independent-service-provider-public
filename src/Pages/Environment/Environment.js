import React from 'react';
import environment1 from '../../Images/environment1.jpg'
import environment2 from '../../Images/environment2.jpg'
import environment3 from '../../Images/environment3.jpg'
import environment4 from '../../Images/environment4.jpg'
import './Environment.css'

const Environment = () => {
    return (
        <div >
            <h1 style={{textAlign: 'center'}}>My Environment</h1>
            <div className='all-environments container'>
                <div className='single-environment'>
                    <img src={environment1} alt="" />
                    <h3>Garden</h3>
                  
                </div>
                <div className='single-environment'>
                <img src={environment2} alt="" />
                    <h3>Library</h3>
                   
                </div>
                <div className='single-environment'>
                <img src={environment3} alt="" />
                    <h3>Computer Lab</h3>
                  
                </div>
                <div className='single-environment'>
                <img src={environment4} alt="" />
                    <h3>Common Room</h3>
                </div>
            </div>
        </div>
    );
};

export default Environment;
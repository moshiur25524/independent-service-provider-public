import React from 'react';
import NotFoundPage from '../../Images/404page.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='missing'>
            <h1 style={{textAlign:'center'}}>The Page You Are Looking isn't Found</h1>
            <img src={NotFoundPage} alt="" />
        </div>
    );
};

export default NotFound;
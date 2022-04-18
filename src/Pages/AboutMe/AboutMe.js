import React from 'react';
import './AboutMe.css'
import image from '../../Images/239909995_3058198827788946_8227483718259351115_n.jpg'

const AboutMe = () => {
    return (
        <div className='profile container'>
            <img src={image} alt="" />
            <h1>Md. Moshiur Rahman</h1>
            <h3>My Goal</h3>
            <p>In Life, It is my last , full and final attempt to do something for my better future. That's why, I enroll in the programming hero community. They are enough helpful to make a lazy guy a dedicated , active web Programmer. And I am one of them. But in forward, I want to be a full stack web developer and want to build a strong carrier for take me alive.</p>
        </div>
    );
};

export default AboutMe;
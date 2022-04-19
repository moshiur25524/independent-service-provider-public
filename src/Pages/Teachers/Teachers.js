import React from 'react';
import teacher1 from '../../Images/teacher1.jpg'
import teacher2 from '../../Images/teacher2.jpg'
import teacher3 from '../../Images/teacher3.jpg'
import teacher4 from '../../Images/teacher4.jpg'
import './Teachers.css'

const Teachers = () => {
    return (
        <div >
            <h1 style={{textAlign: 'center'}}>My Environment</h1>
            <div className='all-teachers container'>
                <div className='single-teacher'>
                    <img src={teacher1} alt="" />
                    <h3>Moshiur Rahman</h3>
                    <p>subject: Mathematics and Physics</p>
                </div>
                <div className='single-teacher'>
                <img src={teacher2} alt="" />
                    <h3>Sayma Akter</h3>
                    <p>subject: Biology</p>
                </div>
                <div className='single-teacher'>
                <img src={teacher3} alt="" />
                    <h3>Osman Goni</h3>
                    <p>subject: Chemistry</p>
                </div>
                <div className='single-teacher'>
                <img src={teacher4} alt="" />
                    <h3>Pinky Akter</h3>
                    <p>subject: English</p>
                </div>
            </div>
        </div>
    );
};

export default Teachers;
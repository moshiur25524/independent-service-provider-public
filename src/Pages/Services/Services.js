import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <h1>This is Services Page : {services.length}</h1>
        </div>
    );
};

export default Services;
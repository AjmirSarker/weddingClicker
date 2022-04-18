import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('act.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='container mt-5'>

           <div class="row row-cols-1 row-cols-md-3 g-4">
               {
                   services.map(service=>
                       <Service key={service.id} service={service}></Service>
                   )
               }
        </div>
        </div>
    );
};

export default Services;
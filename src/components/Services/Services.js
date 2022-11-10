
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceCard from '../ServiceCard/ServiceCard';

const Places = () => {
    useTitle('Services')
    
    const services = useLoaderData()
    return (
        <div className='container mx-auto grid gap-3 justify-items-center grid-cols-3  '>
            
            {
                services.map(service => <ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
            }
            
            
        </div>
    );
};

export default Places;
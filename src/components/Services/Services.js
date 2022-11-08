
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Places = () => {
    
    const services = useLoaderData()
    return (
        <div className='container mx-auto grid gap-3 justify-items-center grid-cols-3'>
            
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
import React from 'react';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useNavigate } from 'react-router-dom';


const HomeSectionCarousel = ({data, SectionName}) => {

 

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 4 },
        1400: { items: 5 },
    };
    
    
    const items = data.slice(0,10).map((item) => <HomeSectionCard product={item} />)

    const navigate = useNavigate();
    const handleProductDetails = (() => {
        navigate('/product/productId');
    });
    


    return (
        <div>
        <h2 className='text-2xl font-bold'>{SectionName}</h2>
        <div  className='border cursor-pointer'>
            <div onClick={handleProductDetails} className='relative p-5 '>
                <AliceCarousel
                onClick={handleProductDetails}
                items={items}
                autoPlay
                autoPlayInterval={1000}
                disableButtonsControls
                disableDotsControls
                responsive={responsive}
                mouseTracking
                 />
                
            </div>
        </div>
        </div>
    );
};

export default HomeSectionCarousel;

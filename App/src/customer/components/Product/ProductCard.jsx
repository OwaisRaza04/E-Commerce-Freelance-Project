import React from 'react'
import './Product.css'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
    
    const navigate = useNavigate();
    const handleProductDetails = (() => {
        navigate('/product/productId');
    });
  return (
  
        <div onClick={handleProductDetails} className='product-card w-[15rem] transition-all cursor-pointer m-3'>
            <div className='h-[20rem]'>
                <img className='object-cover object-left-top w-full h-full ' src={product.imageUrl}alt='product' />
            </div>
            <div className='p-3 transition-all bg-white product-card__info'>
                <div>
                    <p className='font-bold opacity-60'>{product.brand}</p>
                    <p className='text-#212121'>{product.title}</p>
                </div>
            
                <div className='flex items-center space-x-2'>
                    <p className='font-semibold'>₹{product.discountedPrice}</p>
                    <p className='line-through opacity-60'>₹{product.price}</p>
                    <p className='font-semibold text-green-600'>{product.discountPersent}% off</p>
                </div>
            </div>
        </div>
   
  )
}

export default ProductCard

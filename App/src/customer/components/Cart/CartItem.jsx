import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from "react-router-dom";

const CartItem = () => {
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const step = searchParams.get("step");
    
  return (
    <div className='p-5 m-5 border rounded-md shadow-lg'>
        <div>
            <div className='flex items-center space-x-4'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className='object-cover object-top w-full h-full' src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70" alt="" />
                </div>

                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'>Men Solid Cotton Blend Straight Kurta</p>
                    <p className='opacity-70'>Size: M,White</p>
                    <p className='mt-2 opacity-70'>Seller: FOLGEN</p>

                    <div className='flex items-center space-x-2 text-gray-900' style={{marginTop: '16px'}}>
                        <p className='font-semibold'>₹385</p>
                        <p className='line-through opacity-50'>₹1299</p>
                        <p className='font-semibold text-green-600'>70% Off</p>
                    </div>
                </div>
            </div>
            {/* rgb(79 70 229 / var(--tw-bg-opacity)) */}
            { step != 3 && <div className='items-center pt-6 lg:flex lg:space-x-10'>
                <div className='flex items-center justify-center space-x-4'>
                    <RemoveCircleOutlineIcon sx={{color: '#9155fd'}}/>
                    <span className='py-1 border rounded-sm px-7 '>3</span>
                    <AddCircleOutlineIcon sx={{color: '#9155fd'}}/>
                    <div>
                        <button className='ml-10 font-semibold' style={{color: '#9155fd'}}>Remove</button>
                    </div>
                    
                </div>
            </div>}
            
        </div>
    </div>
  )
}

export default CartItem

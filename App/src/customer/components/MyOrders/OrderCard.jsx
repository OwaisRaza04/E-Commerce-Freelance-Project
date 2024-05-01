import React from 'react'
import { Button, Grid } from "@mui/material";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';




const OrderCard = () => {
  const navigate = useNavigate();

  const handleOrderDetails = (() => {

    
    navigate('/orderdetails/:id')
  })
  
  return (
    <div onClick={handleOrderDetails} className='p-5 mb-5 border shadow-md cursor-pointer hover:shadow-2xl' >
      <div className='flex justify-center'>
        <div className='object-cover object-left-top w-[5rem] h-[5rem] mr-5'>
            <img className='object-cover object-left-top w-full h-full ' src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/1/h/g/m-pw333-purshottam-wala-original-imag8zf6ybkmhehy-bb.jpeg?q=70" alt="" />
        </div>
        
        <Grid container spacing={2}>
            
            <Grid item xs={4} sm={4}>
                <div>
                    <p className='font-semibold'>Women Maxi Blue Dress</p>
                    <p className='mt-2 opacity-70'>Size: M</p>
                    <p className='text-sm opacity-70'>Color: blue</p>
                </div>
            </Grid>

            <Grid item xs={4} sm={4}>
                <p className='font-semibold opacity-80'>₹341</p>
            </Grid>
            
            <Grid item xs={4} sm={4}>
                <div>
                    <p className='font-semibold'><AdjustIcon sx={{width: '15px', height: '15px'}} className='mr-2 text-sm text-green-600'/>Expected Delivery On Mar 03</p>
                    <p className='text-sm opacity-90'>Your item has been delivered</p>
                </div>
                
            </Grid>
        </Grid>
        
        
      </div>
    </div>
  )
}

export default OrderCard

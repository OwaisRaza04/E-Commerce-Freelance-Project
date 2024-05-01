import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Grid } from '@mui/material'
import CartItem from '../Cart/CartItem'


const OrderSummary = () => {
  
  
  return (
    
    <div>
      <div className='p-5 mt-5 mb-10 border shadow-lg rounded-s-md'>
        <AddressCard />
      </div>
        
       
      <div  className='ml-4' >
        <Grid container spacing={4}>
          
          <Grid  xs={12} sm={8}>
            <CartItem />
            <CartItem />
          </Grid>

          <Grid  xs={12} sm={4}>
          <div className='top-0 mt-5  lg:mt-5'>
                <div className='p-4 border shadow-lg'>
                    <p className='pb-4 font-bold text-black opacity-60'>PRICE DETAILS</p>
                    
                    <hr />
                    
                    <div className='flex items-center justify-between mt-4 font-semibold'>
                        <p>Price (3 items)</p>
                        <p>₹4697</p>
                    </div>
                    
                    <div className='flex items-center justify-between mt-2 font-semibold'>
                        <p>Discount</p>
                        <p className='text-green-600 opacity-80'>-₹3419</p>
                    </div>
                    
                    <div className='flex items-center justify-between mt-2 mb-4 font-semibold'>
                        <p>Delivery Charge</p>
                        <p className='text-green-600 opacity-80'>Free</p>
                    </div>
                    
                    <hr />
                    
                    <div className='flex items-center justify-between'>
                        <p className='mt-4 font-bold text-black '>Total Amount</p>
                        <p className='font-semibold text-green-600'>₹1278</p>
                    </div>

                    <button className='w-full mt-8 h-[2.5rem] rounded-sm text-white font-semibold' style={{backgroundColor: '#9155fd'}}>Payment</button>
                </div>
            </div>
          </Grid>
          
        </Grid>
        </div>
        
    </div>
      

    
  )
}

export default OrderSummary

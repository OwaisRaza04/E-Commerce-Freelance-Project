import React from 'react'
import { useEffect } from 'react';
import AddressCard from '../AddressCard/AddressCard'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import OrderTracker from './OrderTracker';
import OrderCard from './OrderCard';


const OrderTrack = () => {

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

const steps = ['Placed', 'Order Confirmed', 'Shipped', 'Out for Delivery', 'Delivered'];
  return (
    <>
    <div className='p-5 m-5 border shadow-md'>
        <p className='mb-3 text-lg font-bold'>Delivery Address</p>
      <AddressCard />
    </div>

    <div className='p-5 m-5 border shadow-md'>
      <OrderTracker />
    </div>
    
    <div>
      {[1,1,1,1,1].map(() => <OrderCard />) }
    </div>
    </>
  )
}

export default OrderTrack

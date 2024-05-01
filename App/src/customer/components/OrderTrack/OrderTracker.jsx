import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Placed',
  'Order Confirmed',
  'Shipped',
  'Out For Delivery',
  'Delivered',
];

export default function OrderTracker() {
  return (
    <div className='flex items-center justify-between'>
        <Box sx={{ width: '80%' }}>
            <Stepper activeStep={1} alternativeLabel>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
         </Box>

         <button className='text-sm font-semibold text-red-500'>CANCEL ORDER</button>
    </div>
    
  );
}

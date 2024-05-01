import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';

const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];

export default function Checkout() {

  
  const navigate = useNavigate(); 

  const searchParams = new URLSearchParams(location.search);

  const step = searchParams.get('step');
  const query = searchParams.toString();
  navigate({search: `?${query}`});

   
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = (value) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('step', value);

    const query = searchParams.toString();
    navigate({search: `?${query}`});
  };

  const handleBack = (value) => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const searchParams = new URLSearchParams(location.search);
    searchParams.set('step', value);

    const query = searchParams.toString();
    navigate({search: `?${query}`});
    
  };

  
//   const handleReset = () => {
//     setActiveStep(0);
//   };

  return (
    <div className='p-10 lg:px-20'>
        <Box sx={{ width: '100%' }}>
        <Stepper activeStep={step} >
            {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
                <Step key={label} {...stepProps} >
                <StepLabel {...labelProps} >{label}</StepLabel>
                </Step>
            );
            })}
        </Stepper>
        {activeStep === steps.length ? (
            <React.Fragment>
            {/* <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
            </Typography> */}
            {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Reset</Button>
            </Box> */}
            </React.Fragment>
        ) : (
            <React.Fragment>
            {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                {/* { step > '2' && <Button
                color="inherit"
                // disabled={activeStep === 0}
                // onClick={() => handleBack(step-1)}
                sx={{ mr: 1 }}
                >
                Back
                </Button>} */}
                <Box sx={{ flex: '1 1 auto' }} />
                {/* {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                </Button>
                )} */}

                {/* <Button onClick={() => handleNext(step + 1)}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button> */}
            </Box>

            <div>
                {step === '2' && <DeliveryAddressForm />}
                {step === '3' && <OrderSummary /> }
            </div>
            </React.Fragment>
        )}
        </Box>
    </div>
  );
}

import React from 'react'
import { Grid, Box, TextField, Button } from '@mui/material'
import AddressCard from '../AddressCard/AddressCard'

const DeliveryAddressForm = () => {

  
  
  const handleAddressForm = (e) => {
    e.preventDefault();
    
    const data = new FormData(e.currentTarget);
    
    const address = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      address: data.get('address'),
      city: data.get('city'),
      state: data.get('state'),
      zip: data.get('zip'),
      phone: data.get('phone'),
    }

    console.log(address);
    
      
    
  } 
  return (
    <div className='mt-10'>
      <Grid container spacing={4} className='flex justify-center'>
          <Grid
          item
          xs={12} sm={5}
          >
            <div className='p-5 overflow-y-scroll border shadow-md py-7 h-[30rem]'>
              <AddressCard /> 
              <AddressCard />  
            </div>
             

          </Grid>

          <Grid item xs={12} sm={7}>
            <Box className='p-5 border shadow-md rounded-s-md'>
              <form onClick={handleAddressForm}>
                <Grid container spacing={3}>
                  <Grid xs={12} sm={6} item>
                    <TextField
                    
                    required
                    id='firstName'
                    name='firstName'
                    label='First Name'
                    fullWidth
                    autoComplete='given'
                    >
                      
                    </TextField>
                  </Grid>

                  <Grid xs={12} sm={6} item>
                    <TextField
                    required
                    id='lastName'
                    name='lastName'
                    label='Last Name'
                    fullWidth
                    autoComplete='given'
                    >
                      
                    </TextField>
                  </Grid>
                  
                  <Grid xs={12} sm={12} item>
                    <TextField
                    required
                    id='address'
                    name='address'
                    label='Address'
                    fullWidth
                    autoComplete='given'
                    rows={4}
                    >
                      
                    </TextField>
                  </Grid>
                  
                  <Grid xs={12} sm={6} item>
                    <TextField
                    required
                    id='city'
                    name='city'
                    label='City'
                    fullWidth
                    autoComplete='given'
                    >
                      
                    </TextField>
                  </Grid>

                  <Grid xs={12} sm={6} item>
                    <TextField
                    required
                    id='state'
                    name='state'
                    label='State/Region'
                    fullWidth
                    autoComplete='given'
                    >
                      
                    </TextField>
                  </Grid>

                  <Grid xs={12} sm={6} item>
                    <TextField
                    required
                    id='zip'
                    name='zip'
                    label='Zip/Postal code'
                    fullWidth
                    autoComplete='given'
                    >
                      
                    </TextField>
                  </Grid>

                  <Grid xs={12} sm={6} item>
                    <TextField
                    required
                    id='phone'
                    name='phone'
                    label='Phone Number'
                    fullWidth
                    autoComplete='given'
                    >
                      
                    </TextField>
                  </Grid>
                </Grid>
                <Button sx={{bgcolor:'RGB(145 85 253)', color:'white', mt:5, ":hover": {bgcolor: 'RGB(145 85 253)'}}}
                variant='contained'
                size='large'
                type='submit'
                onClick={handleAddressForm}
                
                >
                  Deliver Here
                </Button>
              </form>
            </Box>
          </Grid>

      </Grid>
    </div>
  )
}

export default DeliveryAddressForm

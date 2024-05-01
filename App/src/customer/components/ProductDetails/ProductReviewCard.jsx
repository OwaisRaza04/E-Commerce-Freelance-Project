import React from 'react'
import { Grid, Box, Avatar, Rating } from '@mui/material'


const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        
        <Grid item xs={1}>
            <Box>
                <Avatar className='text-white' sx={{width:56,height:56, bgcolor:"#9155fd"}}>R</Avatar>
            </Box>
        </Grid>

        <Grid item xs={9}>
            <div className='space-y-2'>
                <div>
                    <p className='text-lg font-semibold'>Raju</p>
                    <p className='opacity-70'>April 5, 2022</p>
                </div>

                <Rating value={4.5} name='half-rating' precision={.5} readOnly/>
                <p>Nice Product</p>
            </div>
            
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductReviewCard

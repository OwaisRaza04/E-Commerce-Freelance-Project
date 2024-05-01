import React from 'react'
import OrderFilter from './OrderFilter'
import OrderCard from './OrderCard'
import { Button, Grid } from "@mui/material";

const MyOrders = () => {
  return (
    <div className='m-5 '>
        {/*  */}
        {/*  */}

        <Grid container spacing={4}>

          <Grid item xs={12} sm={3}>
            <OrderFilter />
          </Grid>

          <Grid item xs={12} sm={9}>
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </Grid>

        </Grid>
    </div>
  )
}

export default MyOrders

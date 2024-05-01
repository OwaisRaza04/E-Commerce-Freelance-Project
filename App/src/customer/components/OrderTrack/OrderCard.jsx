import React from 'react'

const OrderCard = () => {
    return (
    <div className='flex items-center p-5 m-5 border shadow-md'>
        <div className='object-cover object-left-top w-[5rem] h-[5rem] mr-10'>
            <img className='object-cover object-left-top w-full h-full' src="https://rukminim1.flixcart.com/image/612/612/k4d27ww0/shirt/q/w/t/l-el024-el-senor-original-imafnadnjp5pq6tg.jpeg?q=70" alt="" />
        </div>

        <div>
            <h1 className='font-semibold'>Men Slim Rise Black Jeans</h1>

            <div className='flex items-center gap-5 mb-3 text-sm opacity-70'>
                <p>Color: pink</p>
                <p>Size: M</p>
            </div>

            <p>Seller: Linaria</p>
            <p>&#8377;1099</p>
        </div>

        <div className='m-auto mr-0'>
            <a href=""><p className='text-indigo-600 cursor-pointer hover:text-indigo-800'>★ Rate Review Product</p></a>
        </div>
    </div>
    )
}

export default OrderCard

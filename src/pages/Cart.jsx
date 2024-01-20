import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {
        cart.length > 0
          ?
          (<div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
            <div className="w-[100%] md:w-[60%] flex flex-col p-2">
              {
                cart.map((item, index) => (
                  <CartItem key={item.id} item={item} itemIndex={index} />
                ))
              }
            </div>

            <div className="w-[100%] md:w-[40%] mt-5 flex flex-col">
              <div className="flex flex-col p-5 gap-5 my-14 h-[100%] justify-between">
                <div className="flex flex-col gap-5">
                  <p className="font-semibold text-xl text-green-800 ">Your Cart</p>
                  <h1 className="font-semibold text-5xl text-green-700  -mt-5">Summary</h1>
                  <p className="text-xl text-gray-700 font-semibold">Total Items: {cart.length}</p>
                </div>
              </div>

              <div className="flex flex-col mb-[70px]">
                <p className='text-gray-700 font-bold text-xl'>Total Amount: <span className='text-2xl'>${totalAmount}</span></p>
                <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">Checkout Now</button>
              </div>
            </div>
          </div>)
          :
          (<div className='flex flex-col justify-center items-center mt-[120px] gap-y-6'>
            <p className='font-semibold text-2xl text-[#374151]'>Your cart is empty!</p>
            <NavLink to="/">
              <button className='bg-[#16a34a] uppercase text-white border-2 tracking-wider border-green-600 text-base hover:text-green-700 font-bold p-[12px_36px] rounded-lg hover:bg-purple-50 transition duration-300 ease-linear'>Shop Now</button>
            </NavLink>
          </div >)
      }
    </div >
  )
}

export default Cart


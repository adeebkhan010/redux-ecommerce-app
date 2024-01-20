import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const { cart } = useSelector((state) => state);
  return (
    <div className='h-20 bg-slate-900 w-full'>
      <nav className='flex justify-between items-center max-w-6xl mx-auto h-20'>
        <NavLink to="/">
          <div className='ml-5'>
            <img className='h-14' src='../public/logo.png' />
          </div>
        </NavLink>

        <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
          <NavLink to="/">
            <p className='text-lg font-medium'>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className='relative'>
              <FaShoppingCart className='text-2xl' />
              {
                cart.length > 0 &&
                <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce
                rounded-full text-white'>{cart.length}</span>
              }
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
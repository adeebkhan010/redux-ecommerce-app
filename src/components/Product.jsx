import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../redux/slices/CartSlice';
import { toast } from 'react-toastify';

function Product({ post }) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  function addToCart() {
    dispatch(add(post));
    toast.success("Item Added!");
  }

  function removeFromCart() {
    dispatch(remove(post.id));
    toast.error("Item Removed");
  }

  return (
    <div className='flex flex-col items-center justify-between hover:scale-110 shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transition duration-300 ease-in 
    gap-3 p-4 mt-10 ml-5 rounded-xl'>
      <div>
        <p className='text-gray-700 font-bold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[11px] text-left'>{post.description.split(" ").slice(0, 10).join(" ") + `...`}</p>
      </div>
      <div className='h-[180px]'>
        <img src={post.image} className='h-full w-full' />
      </div>

      <div className='flex justify-between gap-12 items-center w-full mt-5'>
        <div>
          <p className='text-green-600 font-bold'>${post.price}</p>
        </div>
        {
          cart.some((p) => p.id === post.id)
            ?
            <button className='text-gray-700 border-2 border-gray-700 rounded-full uppercase font-bold 
            text-[12px] p-1 px-3 hover:bg-gray-700 hover:text-white transition duration-300 ease-in' onClick={removeFromCart}>Remove Item</button>
            :
            <button className='text-gray-700 border-2 border-gray-700 rounded-full uppercase font-bold 
            text-[12px] p-1 px-3 hover:bg-gray-700 hover:text-white transition duration-300 ease-in' onClick={addToCart}>Add to cart</button>

        }
      </div>
    </div>
  )
}

export default Product
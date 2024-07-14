import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';

const Cart = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch()
  console.log(cart);

  const handleDeleteFromCart = (product) => {
    dispatch({type: 'DELETE_FROM_CART', payload: product})
  };

  return (
    <div>
      {cart && cart.length > 0 ? (
        <div className="bg-[#1e293b]">
          <div className='max-w-[1200px] mx-auto py-10'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-8'>
              {cart.map((product) => (
                <div key={product.id} className='bg-white p-4 rounded-lg'>
                  <Link to={`/single-product/${product.id}`}>
                    <img title={product.title} src={product.image} alt={product.title} className='w-full h-[300px] object-contain rounded-lg mb-4' />
                  </Link>
                  <h2 className='text-[18px] font-medium text-[#1e293b] line-clamp-1'>{product.title}</h2>
                  <p className="text-[14px] leading-4 line-clamp-2 text-[#1e293b]">{product.description}</p>
                  <div className="flex justify-between mt-5">
                    <p className='text-lg font-semibold text-[#1e293b]'>${product.price}</p>
                    <p className="flex gap-1 items-center text-[#1e293b]"><AiFillStar className="text-yellow-500" /> {product.rating.rate}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleDeleteFromCart(product)} className="bg-transparent border-2 transition border-[#1e293b] text-[#1e293b] py-1 px-4 rounded-md mt-5 w-full justify-center flex gap-1 text-nowrap items-center">Delete from Cart <SlBasket /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className='h-screen flex justify-center items-center text-3xl '>Your cart is empty !!!</div>
      )}
    </div>
  );
};

export default Cart;

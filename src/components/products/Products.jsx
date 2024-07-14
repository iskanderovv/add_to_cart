import { AiFillStar } from "react-icons/ai";
import React from 'react'
import useFetch from '../../hooks/useFetch'
import { Link } from "react-router-dom";
import Loader from 'rsuite/Loader';
import 'rsuite/Loader/styles/index.css';
import { SlBasket } from "react-icons/sl";
import { useDispatch } from "react-redux";

const Products = () => {
  const { data, error, loading } = useFetch('/products');
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    console.log(product);
  }

  console.log(data);
  return (
    <>
      {loading ? <Loader className="w-full h-screen bg-[#f1f3f6] absolute z-20" content="Loading..." center vertical size="md" /> : <div className="bg-[#1e293b]">
        <div className='max-w-[1200px] mx-auto py-10'>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-8 '>
            {data?.map((product) => (
              <div key={product.id} className='bg-white p-4 rounded-lg'>
                <Link to={`/single-product/${product.id}`}>
                  <img title={product.title} src={product.image} alt={product.image} className='w-full h-[300px] object-contain rounded-lg mb-4' />
                </Link>
                <h2 className='text-[18px] font-medium text-[#1e293b] line-clamp-1'>{product.title}</h2>
                <p className="text-[14px] leading-4 line-clamp-2 text-[#1e293b] ">{product.description}</p>
                <div className="flex justify-between mt-5">
                  <p className='text-lg font-semibold text-[#1e293b]'>${product.price}</p>
                  <p className="flex gap-1 items-center text-[#1e293b]"><AiFillStar className="text-yellow-500" /> {product.rating.rate}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleAddToCart(product)} className="bg-transparent border-2 transition border-[#1e293b] text-[#1e293b] py-1 px-4 rounded-md mt-5 w-full justify-center flex gap-1 text-nowrap items-center">Add to Cart <SlBasket /></button>
                </div>
              </div>
            ))}
          </div>
        </div >
      </div>}
    </>
  )
}

export default Products

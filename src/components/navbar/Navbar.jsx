import { SlBasket } from "react-icons/sl"; 
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-[#1e293b]'>
      <nav className='flex justify-between max-w-[1200px] mx-auto items-center h-20'>
        <Link to='/' className='text-2xl text-[#f1f3f6] font-mono '>Ai.Dev</Link>
        <div className="flex gap-8">
          <Link to='/cart' className="flex gap-2 items-center text-[18px] text-[#f1f3f6]">
            <SlBasket />
            Cart <span>0</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

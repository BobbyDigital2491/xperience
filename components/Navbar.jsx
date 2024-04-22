import React, {useState} from 'react';
import { AiOutlineMenu,  AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillSaveFill } from 'react-icons/bs';
import {TbCoffee} from 'react-icons/tb'
import {FaUserFriends} from 'react-icons/fa'
import { MdBrunchDining,MdHeadphones, MdQuestionAnswer,} from 'react-icons/md'
import Link from 'next/link';


const Navbar = () => {
const [nav, setNav] = useState(false)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          The <span className='font-bold text-orange-500'>Xperience </span>
        </h1>
        
      </div>

      {/* Search Input */}
      {/*<div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search items'
        />
      </div>*/}
      {/* Food Menu button */}
      <Link href="https://order.toasttab.com/online/the-xperience-1454-rockaway-parkway" className='bg-black text-white text-right hidden md:flex items-center py-2 w-32 rounded-full'>
        <button className='bg-black text-white text-right hidden md:flex items-center py-2 w-32 rounded-full'>
        <TbCoffee size={22} className=' ml-3' />Order Now</button>
      </Link>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      

      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          The <span className='font-bold text-orange-400'>Xperience</span>
        </h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
            <a href="/About"><li className='text-xl py-4 flex'><TbCoffee size={25} className='mr-4' />About Us</li></a>
            <a href="https://order.toasttab.com/online/the-xperience-1454-rockaway-parkway"><li className='text-xl py-4 flex'><MdBrunchDining size={25} className='mr-4' />Dining Xperience</li></a>
                <li className='text-xl py-4 flex'><MdHeadphones size={25} className='mr-4' /> Podcasting Room</li>
                <li className='text-xl py-4 flex'><MdQuestionAnswer size={25} className='mr-4' /> Help</li>
                <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

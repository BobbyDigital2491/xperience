/* eslint-disable @next/next/no-img-element */
import React from 'react';

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Our Story</p>
          <p className='px-2'>The First Coffee shop in Canarsie</p>
          <button className='border-white bg-orange-500 text-black rounded-sm mx-2 absolute bottom-4'>Read More</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://lh5.googleusercontent.com/p/AF1QipMOxcvboHhW_bT1x2AvYJqQDxahi_Uf_MPoWe5Y=w223-h373-n-k-no-nu'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Podcasting Room</p>
          <p className='px-2'>We have all the tools for your podcasting needs.</p>
          <button className='border-white bg-orange-500 rounded-sm text-black mx-2 absolute bottom-4'>Book Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://i.ytimg.com/vi/VYioMQX-OTM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAPihl3NKAYwzIexSUPJFf_u2RJYg'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Book with Us</p>
          <p className='px-2'>Whether its a business event or afterhours dining, we got you covered.</p>
          <button className='border-white bg-orange-500 rounded-sm text-black mx-2 absolute bottom-4'>Book Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://media.licdn.com/dms/image/D4E03AQGTOXFqlXgQng/profile-displayphoto-shrink_800_800/0/1690862014980?e=2147483647&v=beta&t=LDCloRL1ppJkJ-hdoO-cew5V9OuFHGtSJ1qpasY97us'
          alt='/'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;

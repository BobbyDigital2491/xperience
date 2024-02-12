import React from 'react'
import Head from 'next/head';
import Hero from '../components/Hero';
import HeadlineCards from '../components/HeadlineCards';
import Food from '../components/Food';
import Category from '../components/Category';
import Navbar from '../components/Navbar';




export default function Home() {
  return (
    <div>
      <Head>
        <title> The Xperience Coffee House & Juice Bar</title>
        <meta name='The Xperience Coffee House & Juice Bar' content='The Official Xperience Coffee House & Juice Bar' />
        <link rel='icon' href='ShopLogo.png' />
      </Head>
      <Navbar />
     <Hero />
     <HeadlineCards />
     <Food />
     <Category />
    </div>
  );
}

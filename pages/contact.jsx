import React from 'react'
import Head from 'next/head'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const contact = () => {
  return (
    <div>
      <Head>
        <title>World of Roamers - Contact Us</title>
        <meta name='World of Roamers' content='The Official World of Roamers Website - Contact Us' />
        <link rel='icon' href='/nobg.png' />
      </Head>
      <br/><br/><br/><br/>
        <Hero heading='Contact' message='Submit the form below for more work and quotes.' />
        <Contact />
        <Footer />
    </div>
  )
}

export default contact
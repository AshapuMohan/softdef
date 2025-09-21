import React from 'react'
import Image from 'next/image'
import { ShoppingBag,Facebook,Twitter } from 'lucide-react'
const Footer = () => {
  return (
    <div className='bg-[#BCDDFE] px-10'>
      <div className='grid grid-cols-3 gap-50 justify-around py-20'>
        <div className='flex flex-col justify-center gap-3'>
          <div className='flex items-center'>
            <ShoppingBag size={25} color="#40BFFF" />
            <h1 className='text-xl font-bold'>E-Comm</h1> 
          </div>
          <p className='text-sm'>A web app showcasing NBA-branded shoes with full product details, including price, ratings, colors, and images.</p>
        </div>
        <div className='flex flex-col justify-center gap-3'>
          <h1 className='text-xl font-bold'>Follow Us</h1>
          <p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
          <div className='flex gap-4'>
            <Facebook className='text-blue-600'/>
            <Twitter className='text-blue-400'/>            
          </div>
        </div>
        <div className='flex flex-col justify-center gap-3'>
          <h1 className='text-xl font-bold'>Contact Us</h1>
          <p>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-20 justify-around pb-10'>
        <div>
          <h1 className='text-xl font-bold pb-3'>Information</h1>
          <ul className='list-none'>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h1 className='text-xl font-bold pb-3'>Services</h1>
          <ul className='list-none'>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h1 className='text-xl font-bold pb-3'>My Account</h1>
          <ul className='list-none'>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h1 className='text-xl font-bold pb-3'>Our Offers</h1>
          <ul className='list-none'>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <div className='bg-white w-[98%] h-[1.08px]'/>
      <div className='flex items-center justify-around py-5'>
        <p className='text-gray-200'>© 2018 Ecommerce theme by www.bisenbaev.com</p>
        <div className='flex gap-5'>
          <Image src="/we-ii.png" alt='we' width={35} height={35}/>
          <Image src="/master.png" alt='master' width={35} height={35}/>
          <Image src="/paypal.png" alt='paypal' width={35} height={35}/>
          <Image src="/visa.png" alt='visa' width={35} height={35}/>
        </div>
      </div>
    </div>
  )
}

export default Footer
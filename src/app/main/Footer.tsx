import React from 'react';
import Image from 'next/image';
import { ShoppingBag, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-3 sm:px-4 lg:px-8'>
        <div className='grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8 py-6 xs:py-8 sm:py-12'>
          <div className='col-span-1 sm:col-span-2 lg:col-span-1'>
            <div className='flex items-center space-x-2 mb-4'>
              <div className='w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-lg flex items-center justify-center'>
                <ShoppingBag size={20} className='sm:w-6 sm:h-6 text-white' />
              </div>
              <span className='text-lg sm:text-xl font-bold'>E-Comm</span>
            </div>
            <p className='text-gray-400 text-xs xs:text-sm mb-4 xs:mb-6 leading-relaxed'>
              Your premier destination for premium footwear. Discover the latest trends in sneakers and lifestyle footwear.
            </p>
            <div className='flex space-x-4'>
              <a href='#' className='text-gray-400 hover:text-blue-400 transition-colors'>
                <Facebook size={18} className='sm:w-5 sm:h-5' />
              </a>
              <a href='#' className='text-gray-400 hover:text-blue-400 transition-colors'>
                <Twitter size={18} className='sm:w-5 sm:h-5' />
              </a>
              <a href='#' className='text-gray-400 hover:text-pink-400 transition-colors'>
                <Instagram size={18} className='sm:w-5 sm:h-5' />
              </a>
              <a href='#' className='text-gray-400 hover:text-red-400 transition-colors'>
                <Youtube size={18} className='sm:w-5 sm:h-5' />
              </a>
            </div>
          </div>

          <div>
            <h3 className='text-sm xs:text-base sm:text-lg font-semibold mb-3 xs:mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li><a href='#' className='text-gray-400 hover:text-white transition-colors text-xs xs:text-sm'>About Us</a></li>
              <li><a href='#' className='text-gray-400 hover:text-white transition-colors text-sm'>Our Story</a></li>
              <li><a href='#' className='text-gray-400 hover:text-white transition-colors text-sm'>Careers</a></li>
              <li><a href='#' className='text-gray-400 hover:text-white transition-colors text-sm'>Press</a></li>
              <li><a href='#' className='text-gray-400 hover:text-white transition-colors text-sm'>Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className='text-sm xs:text-base sm:text-lg font-semibold mb-3 xs:mb-4'>Customer Service</h3>
            <ul className='space-y-2'>
              <li><a href='#' className='text-gray-400 hover:text-white transition-colors text-sm'>Contact Us</a></li>
              <li><a href='#' className='text-gray-400 hover:text-white transition-colors text-sm'>Shipping Info</a></li>
              <li><a href='#' className='text-gray-400 hover:text-white transition-colors text-sm'>Returns</a></li>
              <li><a href='#' className='text-gray-400 hover:text-white transition-colors text-sm'>Size Guide</a></li>
              <li><a href='#' className='text-gray-400 hover:text-white transition-colors text-sm'>FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className='text-sm xs:text-base sm:text-lg font-semibold mb-3 xs:mb-4'>Get in Touch</h3>
            <div className='space-y-3'>
              <div className='flex items-center space-x-3'>
                <MapPin size={14} className='text-gray-400 flex-shrink-0' />
                <span className='text-gray-400 text-xs xs:text-sm'>4578 Marmora Road, Glasgow D04 89GR</span>
              </div>
              <div className='flex items-center space-x-3'>
                <Phone size={14} className='text-gray-400 flex-shrink-0' />
                <span className='text-gray-400 text-sm'>+1 (555) 123-4567</span>
              </div>
              <div className='flex items-center space-x-3'>
                <Mail size={14} className='text-gray-400 flex-shrink-0' />
                <span className='text-gray-400 text-sm'>support@e-comm.com</span>
              </div>
            </div>
            
            <div className='mt-3 xs:mt-4 sm:mt-6'>
              <h4 className='text-sm font-semibold mb-2'>Newsletter</h4>
              <div className='flex w-full max-w-full xs:max-w-xs'>
                <input 
                  type='email' 
                  placeholder='Enter your email'
                  className='flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                  suppressHydrationWarning
                />
                <button className='px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-md transition-colors' suppressHydrationWarning>
                  <Mail size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 py-3 xs:py-4 sm:py-6'>
          <div className='flex flex-col xs:flex-col sm:flex-row justify-between items-center space-y-2 xs:space-y-3 sm:space-y-0 gap-2 xs:gap-3'>
            <p className='text-gray-400 text-xs sm:text-sm text-center sm:text-left'>
              © 2024 E-Comm. All rights reserved. | Privacy Policy | Terms of Service
            </p>
            
            <div className='flex flex-col xs:flex-row items-center space-y-2 xs:space-y-0 xs:space-x-4'>
              <span className='text-gray-400 text-xs'>We accept:</span>
              <div className='flex space-x-2'>
                <div className='w-6 h-4 sm:w-8 sm:h-5 bg-white rounded flex items-center justify-center'>
                  <Image src='/visa.png' alt='Visa' width={20} height={12} className='object-contain' />
                </div>
                <div className='w-6 h-4 sm:w-8 sm:h-5 bg-white rounded flex items-center justify-center'>
                  <Image src='/master.png' alt='Mastercard' width={20} height={12} className='object-contain' />
                </div>
                <div className='w-6 h-4 sm:w-8 sm:h-5 bg-white rounded flex items-center justify-center'>
                  <Image src='/paypal.png' alt='PayPal' width={20} height={12} className='object-contain' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react'
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Copyright } from 'lucide-react';
const Footer = () => {
  return (
    <div className='h-[40vh] w-[100vw] bg-[#D2D2D2] mt-10 flex items-center justify-center gap-12 flex-col'>
     <div className='flex items-center justify-center gap-10 cursor-pointer'>
     <Instagram className='hover:scale-125 transition-transform duration-200 ease-in-out'/>
      <Facebook className='hover:scale-125 transition-transform duration-200 ease-in-out'/>
      <Twitter className='hover:scale-125 transition-transform duration-200 ease-in-out'/>
     </div>

      <div className='flex items-center justify-center'>
      <Copyright/>
      <h1 
       style={{ fontFamily: 'Futura Now Headline',
         
        }}
      className='text-black ml-1'>All rights reserved 2024</h1>
      </div>
    </div>
  )
}

export default Footer

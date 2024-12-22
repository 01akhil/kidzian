

import React from 'react'
import Headings from './Headings'
import Marquee from './Marquee'

const FeaturedWork = ({featuredLine, description}) => {
  return (
    <div className='mt-[20vh] sm:mt-[25vh] lg:mt-[30vh]  h-auto'>
      <Headings  featuredLine={featuredLine} description={description}/>

      <div className='h-auto w-full mt-10 sm:mt-12 md:mt-16'>
        <Marquee />
      </div>
    </div>
  )
}

export default FeaturedWork

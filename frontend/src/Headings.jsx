import React from 'react'

const Headings = ({featuredLine, description}) => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center gap-3 w-[100vw] pr-16'>
     <h1
      style={{ fontFamily: 'Futura Now Headline',
        WebkitTextStroke: '4px #363737', 
        }}
      className='uppercase text-[#363737] text-5xl'>{featuredLine}</h1>

      <h1 className='text-[#5d5f5d]'
       
       style={{ fontFamily: 'FuturaNowHeadlineThin',
         WebkitTextStroke: '1px #5d5f5d', 
         }}
         >
        {description}
      </h1>
     </div>
    </div>
  )
}

export default Headings

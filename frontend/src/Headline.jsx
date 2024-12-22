// import React from 'react'

// const Headline = () => {
//   return (
//     <div className=' w-[55vw] h-[28vh] text-[#c8c9c9] flex items-center justify-center flex-col text-7xl uppercase text-tighter overflow-y-hidden'>
//       <h1  style={{ fontFamily: 'Futura Now Headline',
//         WebkitTextStroke: '6px #c8c9c9', 
//         }}>Code,</h1>
//       <h1
//        style={{ fontFamily: 'Futura Now Headline',
//         WebkitTextStroke: '6px #c8c9c9', 
//         }}>Create & Conquer</h1>
//     </div>
//   )
// }

// export default Headline






import React from 'react'

const Headline = () => {
  return (
    <div className='w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[55vw] h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[28vh] text-[#c8c9c9] flex items-center justify-center flex-col text-center overflow-y-hidden'>
      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-tighter"
        style={{
          fontFamily: 'Futura Now Headline',
          WebkitTextStroke: '4px #c8c9c9', 
        }}
      >
        Code,
      </h1>
      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-tighter"
        style={{
          fontFamily: 'Futura Now Headline',
          WebkitTextStroke: '4px #c8c9c9', 
        }}
      >
        Create & Conquer
      </h1>
    </div>
  )
}

export default Headline







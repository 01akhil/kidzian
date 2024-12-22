// import React from 'react'

// const Header = ({address,email}) => {
//   return (
//     <div className='w-[100vw] h-[10vh]  flex items-center justify-center flex-col bg-[#fefffe] gap-1'>
//       <h3 className='font-semibold uppercase text-xs'  style={{ fontFamily: 'Futura Now Headline', }}>{address}</h3>
//       <h1 className='font-light uppercase text-xs text-[#ded5d4]' style={{ fontFamily: 'Futura Now Headline' }}>{email}</h1>
//     </div>
//   )
// }

// export default Header


import React from 'react';

const Header = ({ address, email }) => {
  return (
    <div className='w-full h-[10vh] flex items-center justify-center flex-col bg-[#fefffe] gap-2 px-4 sm:px-6 md:px-8 lg:px-12'>
      <h3
        className='font-semibold uppercase text-xs sm:text-sm md:text-base lg:text-lg'
        style={{ fontFamily: 'Futura Now Headline' }}
      >
        {address}
      </h3>
      <h1
        className='font-light uppercase text-xs text-[#ded5d4] sm:text-sm md:text-base lg:text-lg'
        style={{ fontFamily: 'Futura Now Headline' }}
      >
        {email}
      </h1>
    </div>
  );
};

export default Header;

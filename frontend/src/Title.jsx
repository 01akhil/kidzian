// import React from 'react'

// const Title = ({title}) => {
//   return (
//     <div>
//       <h1 className=' text-7xl font-extrabold uppercase tracking-tight text-[#363737]'
//        style={{ fontFamily: 'Futura Now Headline',
//         WebkitTextStroke: '2px #363737', 
//         }}
//       >{title}</h1>
//     </div>
//   )
// }

// export default Title


import React from 'react';

const Title = ({ title }) => {
  return (
    <div className="text-center">
      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold uppercase tracking-tight text-[#363737]"
        style={{
          fontFamily: 'Futura Now Headline',
          WebkitTextStroke: '2px #363737',
        }}
      >
        {title}
      </h1>
    </div>
  );
};

export default Title;

// import React from 'react';

// const Marquee = () => {
//   const courses = [
//     {
//       title: 'Course 1',
//       imageUrl: 'https://cdn.sanity.io/images/3vte03iz/production/3934c5000d7d4a36a249cd915464ead82672804b-2381x2381.jpg?auto=format&w=500&h=500',
//     },
//     {
//       title: 'Course 2',
//       imageUrl: 'https://cdn.sanity.io/images/3vte03iz/production/c9e0c0332346ea0e8031e53baa38cc69d44cb21f-2711x2711.png?auto=format&w=500&h=500',
//     },
//     {
//       title: 'Course 3',
//       imageUrl: 'https://cdn.sanity.io/images/3vte03iz/production/fdcb516c840afca7e81dd9c22280046858bab0e4-1500x1500.jpg?auto=format&w=500&h=500',
//     },
//   ];

//   return (
//     <div className="h-[85vh] rounded-md">
//       <div className="flex gap-20 overflow-x-auto scroll-smooth scrollbar-hidden no-scrollbar overflow-y-hidden items-center justify-center">
//         {courses.map((course, index) => (
//           <div key={index} className="text-center">
//             <img
//               className="rounded-lg h-[75vh] w-[38vw] object-cover mt-[10vh]"
//               src={course.imageUrl}
//               alt={course.title}
//             />
//             <div
//               style={{ fontFamily: 'Futura Now Headline' }}
//               className="text-lg mt-2 font-bold"
//             >
//               {course.title}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Marquee;


import React from 'react';

const Marquee = () => {
  const courses = [
    {
      title: 'Course 1',
      imageUrl: 'https://cdn.sanity.io/images/3vte03iz/production/3934c5000d7d4a36a249cd915464ead82672804b-2381x2381.jpg?auto=format&w=500&h=500',
    },
    {
      title: 'Course 2',
      imageUrl: 'https://cdn.sanity.io/images/3vte03iz/production/c9e0c0332346ea0e8031e53baa38cc69d44cb21f-2711x2711.png?auto=format&w=500&h=500',
    },
    {
      title: 'Course 3',
      imageUrl: 'https://cdn.sanity.io/images/3vte03iz/production/fdcb516c840afca7e81dd9c22280046858bab0e4-1500x1500.jpg?auto=format&w=500&h=500',
    },
  ];

  return (
    <div className="h-auto rounded-md">
      {/* Flex container for larger screens, column layout for small screens */}
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-20 overflow-x-auto scroll-smooth scrollbar-hidden no-scrollbar items-center justify-center">
        {courses.map((course, index) => (
          <div key={index} className="text-center">
            <img
              className="rounded-lg h-[35vh] sm:h-[65vh] md:h-[28vh] lg:h-[30vh] w-[80vw] sm:w-[30vw] md:w-[25vw] lg:w-[25vw] xl:h-[75vh] xl:w-[25vw] object-cover mt-8 sm:mt-6 md:mt-4"
              src={course.imageUrl}
              alt={course.title}
            />
            <div
              style={{ fontFamily: 'Futura Now Headline' }}
              className="text-lg mt-2 font-bold"
            >
              {course.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;

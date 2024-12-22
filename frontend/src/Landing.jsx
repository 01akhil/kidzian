// import React from 'react'
// import Header from './Header';
// import Title from './Title';
// import Hero from './Hero';
// import Headline from './Headline';
// import FeaturedWork from './FeaturedWork';
// import Courses from './Courses';
// import Footer from './Footer';
// import { Register } from './Register';

// const address='Karnataka, India';
// const email='info@kidzians.com';
// const title="KidZian"
// const description="Select our most selling courses"
// const featuredLine="Featured Courses"

// const coursesLine="Explore Courses"
// const coursesDescription="Take a scroll, stay a while"
// const Landing = () => {
//   return (
//     <div className='flex flex-col items-center justify-center overflow-y-hidden no-scrollbar'>
//       <Header address={address} email={email}/>
//         <Title title={title}/>
//         <Hero/>
//         <Register/>
//         <Headline/>

//         <FeaturedWork featuredLine={featuredLine} description={description}/>

//         <Courses coursesLine={coursesLine} coursesDescription={coursesDescription}/>

//         <Footer/>
//     </div>
//   )
// }

// export default Landing


import React from 'react';
import Header from './Header';
import Title from './Title';
import Hero from './Hero';
import Headline from './Headline';
import FeaturedWork from './FeaturedWork';
import Courses from './Courses';
import Footer from './Footer';
import { Register } from './Register';

const address = 'Karnataka, India';
const email = 'info@kidzians.com';
const title = "KidZian";
const description = "Select our most selling courses";
const featuredLine = "Featured Courses";

const coursesLine = "Explore Courses";
const coursesDescription = "Take a scroll, stay a while";

const Landing = () => {
  return (
    <div className='flex flex-col items-center justify-center overflow-y-hidden no-scrollbar'>
      <Header address={address} email={email} />
      <Title title={title} />
      <Hero />
      <Register />
      <Headline />
      
      <FeaturedWork featuredLine={featuredLine} description={description} />

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <Courses coursesLine={coursesLine} coursesDescription={coursesDescription} />
      </div>

      <Footer />
    </div>
  );
};

export default Landing;

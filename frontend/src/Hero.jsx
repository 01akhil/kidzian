// import React, { useState, useRef } from "react";

// const Hero = () => {
//   const containerRef = useRef(null); 
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [hoveredImageIndex, setHoveredImageIndex] = useState(null); 
//   const [isHovered, setIsHovered] = useState(false); 

//   // Track mouse movement
//   const handleMouseMove = (e) => {
//     if (!containerRef.current) return;

//     const rect = containerRef.current.getBoundingClientRect();
//     setMousePos({
//       x: e.clientX - rect.left, 
//       y: e.clientY - rect.top,
//     });
//   };

//   const handleMouseEnter = () => {
//     setIsHovered(true); 
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//     setHoveredImageIndex(null); 
//   };

 
//   const getTransformStyle = (index) => {
//     if (!containerRef.current) return "none"; 

//     const rect = containerRef.current.getBoundingClientRect();
//     const containerCenterX = rect.width / 2;
//     const containerCenterY = rect.height / 2;

//     const distX = mousePos.x - containerCenterX;
//     const distY = mousePos.y - containerCenterY;

//     const movementFactor = hoveredImageIndex === index ? 0.65 : 0.15; 

//     const offsetX = distX * movementFactor;
//     const offsetY = distY * movementFactor;

//     return `translate(${offsetX}px, ${offsetY}px)`; 
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="w-[50vw] h-[50vh] mt-1 flex items-center justify-center gap-2 relative overflow-hidden "
//       onMouseMove={handleMouseMove} 
//       onMouseEnter={handleMouseEnter} 
//       onMouseLeave={handleMouseLeave} 
//     >
//       {/* Image 1 */}
//       <div
//         className="w-[13vw] rounded-md h-[12vw] object-cover transition-transform duration-100 ease-in-out"
//         onMouseEnter={() => setHoveredImageIndex(0.95)}
//         onMouseLeave={() => setHoveredImageIndex(null)} 
//         style={{
//           transform: isHovered ? getTransformStyle(0.95) : "translate(0px, 0px)",
//         }}
//       >
//         <img
//           className="w-full h-full rounded-2xl"
//           src="https://cdn.sanity.io/images/3vte03iz/production/88c89d0adf606ef4e2e5a06b2d1fe94e8e11ef37-1800x1800.png?auto=format&w=300&h=300"
//           alt="image 1"
//         />
//       </div>

//       {/* Image 2 */}
//       <div
//         className="w-[13vw] -rotate-3 rounded-md h-[12vw] z-10 -ml-8 mb-10 transition-transform duration-100 ease-in-out"
//         onMouseEnter={() => setHoveredImageIndex(1)} 
//         onMouseLeave={() => setHoveredImageIndex(null)} 
//         style={{
//           transform: isHovered ? getTransformStyle(1) : "translate(0px, 0px)", 
//         }}
//       >
//         <img
//           className="w-full h-full rounded-2xl"
//           src="https://cdn.sanity.io/images/3vte03iz/production/f52e1a998c6e4b34773ef48ea18f8c9b8472efbc-2989x2989.png?auto=format&w=300&h=300"
//           alt="image 2"
//         />
//       </div>

//       {/* Image 3 */}
//       <div
//         className="w-[13vw] rounded-md h-[12vw] -ml-24 rotate-6 mb-6 z-20 transition-transform duration-100 ease-in-out"
//         onMouseEnter={() => setHoveredImageIndex(2)} 
//         onMouseLeave={() => setHoveredImageIndex(null)} 
//         style={{
//           transform: isHovered ? getTransformStyle(2) : "translate(0px, 0px)",
//         }}
//       >
//         <img
//           className="w-full h-full rounded-2xl"
//           src="https://cdn.sanity.io/images/3vte03iz/production/c6b80d2852d439cb1eae43d8d9ef5044bab1b3ce-3000x3000.png?auto=format&w=300&h=300"
//           alt="image 3"
//         />
//       </div>

//       {/* Image 4 */}
//       <div
//         className="w-[13vw] rounded-md h-[12vw] -ml-24 -rotate-6 mb-6 z-30 transition-transform duration-100 ease-in-out"
//         onMouseEnter={() => setHoveredImageIndex(3)} 
//         onMouseLeave={() => setHoveredImageIndex(null)} 
//         style={{
//           transform: isHovered ? getTransformStyle(3) : "translate(0px, 0px)", 
//         }}
//       >
//         <img
//           className="w-full h-full rounded-2xl"
//           src="https://cdn.sanity.io/images/3vte03iz/production/8326e452ed0f33067c42aabed5c18dfdd3d3be8f-2048x2048.png?auto=format&w=200&h=200"
//           alt="image 4"
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;



import React, { useState, useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null); 
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null); 
  const [isHovered, setIsHovered] = useState(false); 

  // Track mouse movement
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left, 
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true); 
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredImageIndex(null); 
  };

  const getTransformStyle = (index) => {
    if (!containerRef.current) return "none"; 

    const rect = containerRef.current.getBoundingClientRect();
    const containerCenterX = rect.width / 2;
    const containerCenterY = rect.height / 2;

    const distX = mousePos.x - containerCenterX;
    const distY = mousePos.y - containerCenterY;

    const movementFactor = hoveredImageIndex === index ? 0.65 : 0.15; 

    const offsetX = distX * movementFactor;
    const offsetY = distY * movementFactor;

    return `translate(${offsetX}px, ${offsetY}px)`; 
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-[50vh] md:h-[60vh] mt-4 flex items-center justify-center gap-4 relative overflow-hidden"
      onMouseMove={handleMouseMove} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
    >
      {/* Image 1 */}
      <div
        className="w-[25vw] sm:w-[20vw] md:w-[15vw] rounded-md h-[25vw] sm:h-[20vw] md:h-[15vw] object-cover transition-transform duration-100 ease-in-out"
        onMouseEnter={() => setHoveredImageIndex(0.95)}
        onMouseLeave={() => setHoveredImageIndex(null)} 
        style={{
          transform: isHovered ? getTransformStyle(0.95) : "translate(0px, 0px)",
        }}
      >
        <img
          className="w-full h-full rounded-2xl"
          src="https://cdn.sanity.io/images/3vte03iz/production/88c89d0adf606ef4e2e5a06b2d1fe94e8e11ef37-1800x1800.png?auto=format&w=300&h=300"
          alt="image 1"
        />
      </div>

      {/* Image 2 */}
      <div
        className="w-[25vw] sm:w-[20vw] md:w-[15vw] -rotate-3 rounded-md h-[25vw] sm:h-[20vw] md:h-[15vw] z-10 -ml-8 mb-10 transition-transform duration-100 ease-in-out"
        onMouseEnter={() => setHoveredImageIndex(1)} 
        onMouseLeave={() => setHoveredImageIndex(null)} 
        style={{
          transform: isHovered ? getTransformStyle(1) : "translate(0px, 0px)", 
        }}
      >
        <img
          className="w-full h-full rounded-2xl"
          src="https://cdn.sanity.io/images/3vte03iz/production/f52e1a998c6e4b34773ef48ea18f8c9b8472efbc-2989x2989.png?auto=format&w=300&h=300"
          alt="image 2"
        />
      </div>

      {/* Image 3 */}
      <div
        className="w-[25vw] sm:w-[20vw] md:w-[15vw] rounded-md h-[25vw] sm:h-[20vw] md:h-[15vw] -ml-24 rotate-6 mb-6 z-20 transition-transform duration-100 ease-in-out"
        onMouseEnter={() => setHoveredImageIndex(2)} 
        onMouseLeave={() => setHoveredImageIndex(null)} 
        style={{
          transform: isHovered ? getTransformStyle(2) : "translate(0px, 0px)",
        }}
      >
        <img
          className="w-full h-full rounded-2xl"
          src="https://cdn.sanity.io/images/3vte03iz/production/c6b80d2852d439cb1eae43d8d9ef5044bab1b3ce-3000x3000.png?auto=format&w=300&h=300"
          alt="image 3"
        />
      </div>

      {/* Image 4 */}
      <div
        className="w-[25vw] sm:w-[20vw] md:w-[15vw] rounded-md h-[25vw] sm:h-[20vw] md:h-[15vw] -ml-24 -rotate-6 mb-6 z-30 transition-transform duration-100 ease-in-out"
        onMouseEnter={() => setHoveredImageIndex(3)} 
        onMouseLeave={() => setHoveredImageIndex(null)} 
        style={{
          transform: isHovered ? getTransformStyle(3) : "translate(0px, 0px)", 
        }}
      >
        <img
          className="w-full h-full rounded-2xl"
          src="https://cdn.sanity.io/images/3vte03iz/production/8326e452ed0f33067c42aabed5c18dfdd3d3be8f-2048x2048.png?auto=format&w=200&h=200"
          alt="image 4"
        />
      </div>
    </div>
  );
};

export default Hero;



// import { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';

// const WhatWeOffer = () => {
//   const navigate = useNavigate();
//   const [hasScrolled, setHasScrolled] = useState(false);
//   const [showArrow, setShowArrow] = useState(false);
//   const [isRotating, setIsRotating] = useState(false);

//   const sectionRef = useRef(null);

//    useEffect(() => {
//     setTimeout(() => {
//       setShowArrow(true);
//       setIsRotating(true);
//     }, 500);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Handle circle rotation
//       if (sectionRef.current) {
//         const rect = sectionRef.current.getBoundingClientRect();
//         const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
//         if (isVisible && !hasScrolled) {
//           setHasScrolled(true);
//           setIsRotating(true);
//           setShowArrow(true);
          
//           setTimeout(() => {
//             setShowArrow(false);
//           }, 1500);
          
//           setTimeout(() => {
//             setIsRotating(false);
//           }, 1000);
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
    
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [hasScrolled]);

//   const services = [
//     {
//       title: 'WEBSITES',
//       tagline: 'Beautiful. Fast. Purpose-Driven.',
//       description: 'We build websites that not only look stunning but perform seamless across devices. Our focus is on:',
//       features: [
//         'Pixel-perfect UI',
//         'High-performance builds',
//         'SEO-friendly structure',
//         'Smooth animations + interactions'
//       ]
//     },
//     {
//       title: 'APPLICATIONS',
//       tagline: 'Smart, intuitive apps that solve real problems.',
//       description: 'We design and develop web & mobile applications tailored to your business needs—simple to use, scalable to grow. We deliver:',
//       features: [
//         'User-centric UX',
//         'Clean, maintainable code',
//         'Feature-rich interfaces',
//         'Future-ready architecture'
//       ]
//     },
//     {
//       title: 'DESIGN SUPPORT',
//       tagline: 'Your on-demand design partner.',
//       description: 'We help brands elevate every digital touchpoint with consistent, modern, and meaningful design. Our design support includes:',
//       features: [
//         'UI/UX design',
//         'Brand identity',
//         'Component libraries',
//         'Product design'
//       ]
//     },
//     {
//       title: 'TESTING',
//       tagline: 'Quality assurance you can trust.',
//       description: 'We ensure your products work flawlessly through rigorous testing. Our services cover:',
//       features: [
//         'Automated testing',
//         'Manual QA processes',
//         'Performance optimization',
//         'Bug tracking & resolution'
//       ]
//     }
//   ];

//   const handleNavigation = () => {
//     navigate('/services');
//   };

//   return (
//     <div className="w-full bg-white">
//       <div className="relative w-full bg-[#0F2E2E] rounded-3xl px-6 sm:px-10 md:px-14 py-12 sm:py-16 md:py-20 mt-10 max-w-7xl mx-auto transition-all duration-500 shadow-lg">

//       <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14 min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px]">
        
//         {/* Left Text */}
//         <div className="flex-1">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#A7F3D0] mb-4 leading-tight">
//             What we offer
//           </h2>

//           <p className="text-[#A7F3D0] text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-xl">
//             We provide clients with <br />
//             Tech Solutions developed with <br />
//             <span className="font-semibold">Skill & Passion</span>
//           </p>
//         </div>

//         {/* Right Rotating Circle */}
//         <div className="relative flex justify-center items-center">
//           <div
//             onClick={handleNavigation}
//             className={`relative border-2 border-dashed border-white/70 rounded-full cursor-pointer transition-all duration-700 hover:scale-110 flex justify-center items-center ${
//               isRotating ? "animate-spin-slow" : ""
//             }`}
//             style={{
//               width: "210px",
//               height: "210px",
//             }}
//           >
//             {/* Text - Top */}
//             <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xs sm:text-sm font-semibold tracking-wide">
//               SEE ALL SERVICES
//             </span>

//             {/* Text - Bottom Rotated */}
//             <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-180 text-white text-xs sm:text-sm font-semibold tracking-wide">
//               SEE ALL SERVICES
//             </span>

//             {/* Arrow in Center */}
//             <svg
//               className={`absolute w-8 h-8 sm:w-10 sm:h-10 text-white transition-all duration-500 ${
//                 showArrow ? "opacity-100 scale-100" : "opacity-0 scale-75"
//               }`}
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2.5}
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//             </svg>
//           </div>
//         </div>

//       </div>
//     </div>

//       {/* Service Cards Section */}
// <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
//   <div className="max-w-7xl mx-auto">
    
//     <div className="space-y-10 md:space-y-14 lg:space-y-16">
//       {services.map((service, index) => (
//         <div key={index} className="w-full md:flex md:gap-6 lg:gap-10">

//           {/* Left Card - Gray with Details */}
//           <div className="flex-1 bg-gray-700 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] p-6 sm:p-8 md:p-10 lg:p-12 
//                           min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex flex-col justify-center mb-6 md:mb-0">
            
//             <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 leading-relaxed">
//               {service.description}
//             </p>

//             <ul className="space-y-2 sm:space-y-3">
//               {service.features.map((feature, idx) => (
//                 <li key={idx} className="flex items-start text-white text-sm sm:text-base md:text-lg lg:text-xl">
//                   <span className="w-2 h-2 rounded-full bg-white mr-3 mt-2 flex-shrink-0"></span>
//                   <span>{feature}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Right Card - Blue with Title */}
//           <div className="flex-1 bg-[#A9D2FF] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] 
//                           p-6 sm:p-8 md:p-10 lg:p-12 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] 
//                           flex flex-col justify-center text-center md:text-left">
            
//             <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-4 sm:mb-6">
//               {service.title}
//             </h3>

//             <p className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
//               {service.tagline}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>

//   </div>
// </div>
// </div>

//   );
// };

// export default WhatWeOffer;

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
 
const WhatWeOffer = () => {
  const navigate = useNavigate();
  const [hasScrolled, setHasScrolled] = useState(false);
 
  const [hoverIndex, setHoverIndex] = useState(null);
 
  const sectionRef = useRef(null);
 
  useEffect(() => {
    setTimeout(() => {
      setShowArrow(true);
      setIsRotating(true);
    }, 500);
  }, []);
 
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
 
        if (isVisible && !hasScrolled) {
          setHasScrolled(true);
          setIsRotating(true);
          setShowArrow(true);
 
          setTimeout(() => setShowArrow(false), 1500);
          setTimeout(() => setIsRotating(false), 1000);
        }
      }
    };
 
    window.addEventListener("scroll", handleScroll);
    handleScroll();
 
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);
 
  const services = [
    {
      title: "WEBSITES",
      tagline: "Beautiful. Fast. Purpose-Driven.",
      description:
        "We build websites that not only look stunning but perform seamless across devices. Our focus is on:",
      features: [
        "Pixel-perfect UI",
        "High-performance builds",
        "SEO-friendly structure",
        "Smooth animations + interactions",
      ],
      bgImage:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      title: "APPLICATIONS",
      tagline: "Smart, intuitive apps that solve real problems.",
      description:
        "We design and develop web & mobile applications tailored to your business needs—simple to use, scalable to grow. We deliver:",
      features: [
        "User-centric UX",
        "Clean, maintainable code",
        "Feature-rich interfaces",
        "Future-ready architecture",
      ],
      bgImage:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    },
    {
      title: "DESIGN SUPPORT",
      tagline: "Your on-demand design partner.",
      description:
        "We help brands elevate every digital touchpoint with consistent, modern, and meaningful design. Our design support includes:",
      features: [
        "UI/UX design",
        "Brand identity",
        "Component libraries",
        "Product design",
      ],
      bgImage:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
    },
    {
      title: "TESTING",
      tagline: "Quality assurance you can trust.",
      description:
        "We ensure your products work flawlessly through rigorous testing. Our services cover:",
      features: [
        "Automated testing",
        "Manual QA processes",
        "Performance optimization",
        "Bug tracking & resolution",
      ],
      bgImage:
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
  ];
 
  const handleNavigation = () => navigate("/services");
 
  return (
    <div className="pt-[90px] px-6">
<div className="w-full bg-white">
      {/* TOP SECTION */}
      
<div className="relative w-full bg-[#0F2E2E] rounded-3xl px-6 sm:px-10 md:px-14 py-12 sm:py-16 md:py-20 mt-10 max-w-7xl mx-auto shadow-lg transition-all duration-500">
<div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14 min-h-[350px]">
<div className="flex-1">
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#A7F3D0] mb-4 leading-tight">
              What we offer
</h2>
<p className="text-[#A7F3D0] text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-xl">
              We provide clients with <br />
              Tech Solutions developed with <br />
<span className="font-semibold">Skill & Passion</span>
</p>
</div>
 
          {/* Rotating Circle */}

</div>
</div>
 
      {/* SERVICE SECTIONS */}
<div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
<div className="max-w-7xl mx-auto space-y-20">
          {services.map((service, index) => (
<div
              key={index}
              className={`w-full md:flex md:gap-8 transition-all duration-700 ease-out ${
                hoverIndex === index
                  ? "translate-x-6 opacity-100 scale-[1.02]"
                  : hoverIndex !== null
                  ? "-translate-x-10 opacity-40"
                  : "opacity-100"
              }`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
>
              {/* LEFT CARD */}
<div className="flex-1 bg-gray-700 rounded-[40px] p-10 min-h-[350px] flex flex-col justify-center shadow-xl">
<p className="text-white text-xl mb-6">{service.description}</p>
<ul className="space-y-3">
                  {service.features.map((feature, i) => (
<li key={i} className="flex items-start text-white text-lg">
<span className="w-2 h-2 rounded-full bg-white mr-3 mt-2"></span>
                      {feature}
</li>
                  ))}
</ul>
</div>
 
              {/* RIGHT IMAGE CARD */}
<div
                className="flex-1 rounded-[40px] p-10 min-h-[350px] flex flex-col justify-center text-center md:text-left relative overflow-hidden shadow-xl"
                style={{
                  backgroundImage: `url(${service.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
>
<div className="absolute inset-0 bg-black/40"></div>
<div className="relative z-10">
<h3 className="text-5xl font-bold text-white mb-4">
                    {service.title}
</h3>
<p className="text-white text-2xl font-medium">
                    {service.tagline}
</p>
</div>
</div>
</div>
          ))}
</div>
</div>
</div>
</div>
  );
};
 
export default WhatWeOffer;
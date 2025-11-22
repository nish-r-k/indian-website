// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Hero = () => {
//   const navigate = useNavigate();
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     // Trigger animation after component mounts
//     setTimeout(() => setIsLoaded(true), 100);
//   }, []);

//   const navItems = [
//     { text: 'Our services', color: 'bg-blue-300', route: '/services' },
//     { text: 'Work', color: 'bg-transparent', route: '/work' },
//     { text: 'About us', color: 'bg-gray-800', route: '/about' },
//     { text: 'Contact', color: 'bg-green-200', route: '/contact' },
//     { text: 'Career', color: 'bg-purple-200', route: '/career' },
//   ];

//   const handleNavigation = (route) => {
//     navigate(route);
//   };

//   return (
//     <div className="relative min-h-screen w-full bg-white flex items-center justify-center overflow-hidden">
//       {/* Main Heading with 3D Animation */}
//       <div className="absolute inset-0 flex items-center justify-center z-10">
//         <h1
//           className={`text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tight transition-all duration-1000 ease-out ${
//             isLoaded
//               ? 'text-black transform translate-y-0 opacity-100'
//               : 'text-gray-600 transform -translate-y-20 opacity-0 scale-110'
//           }`}
//           style={{
//             textShadow: isLoaded
//               ? 'none'
//               : '0 10px 30px rgba(0,0,0,0.3), 0 0 0 rgba(0,0,0,0.5)',
//             transform: isLoaded
//               ? 'translateY(0) scale(1)'
//               : 'translateY(-80px) scale(1.2) perspective(1000px) rotateX(15deg)',
//           }}
//         >
//           Sisuni Tech
//         </h1>
//       </div>

//       {/* Navigation Cards */}
//       <div className="relative z-20 w-full max-w-7xl mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
//           {/* Top Row */}
//           <div className="flex flex-col md:flex-row md:col-span-3 gap-4 md:gap-6">
//             {/* Our Services Card */}
//             <div
//               onClick={() => handleNavigation(navItems[0].route)}
//               className={`${navItems[0].color} rounded-2xl p-6 cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 flex items-center justify-between`}
//             >
//               <span className="text-white text-xl md:text-2xl font-semibold">
//                 {navItems[0].text}
//               </span>
//               <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-45">
//                 <svg
//                   className="w-6 h-6 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </button>
//             </div>

//             {/* Work Card - Transparent */}
//             <div
//               onClick={() => handleNavigation(navItems[1].route)}
//               className="rounded-2xl p-6 cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 flex items-center justify-between border-2 border-transparent hover:border-gray-200"
//             >
//               <span className="text-black text-xl md:text-2xl font-semibold">
//                 {navItems[1].text}
//               </span>
//               <button className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-45">
//                 <svg
//                   className="w-6 h-6 text-black"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </button>
//             </div>

//             {/* About Us Card */}
//             <div
//               onClick={() => handleNavigation(navItems[2].route)}
//               className={`${navItems[2].color} rounded-2xl p-6 cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 flex items-center justify-between`}
//             >
//               <span className="text-white text-xl md:text-2xl font-semibold">
//                 {navItems[2].text}
//               </span>
//               <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-45">
//                 <svg
//                   className="w-6 h-6 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Bottom Row */}
//           <div className="flex flex-col md:flex-row md:col-span-3 gap-4 md:gap-6 mt-4 md:mt-6">
//             {/* Contact Card */}
//             <div
//               onClick={() => handleNavigation(navItems[3].route)}
//               className={`${navItems[3].color} rounded-2xl p-6 cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 flex items-center justify-between flex-1`}
//             >
//               <span className="text-gray-800 text-xl md:text-2xl font-semibold">
//                 {navItems[3].text}
//               </span>
//               <button className="w-10 h-10 rounded-full bg-white/30 hover:bg-white/40 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-45">
//                 <svg
//                   className="w-6 h-6 text-gray-800"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </button>
//             </div>

//             {/* Career Card */}
//             <div
//               onClick={() => handleNavigation(navItems[4].route)}
//               className={`${navItems[4].color} rounded-2xl p-6 cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 flex items-center justify-between flex-1`}
//             >
//               <span className="text-gray-800 text-xl md:text-2xl font-semibold">
//                 {navItems[4].text}
//               </span>
//               <button className="w-10 h-10 rounded-full bg-white/30 hover:bg-white/40 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-45">
//                 <svg
//                   className="w-6 h-6 text-gray-800"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const navItems = [
    { text: 'Our services', color: 'bg-blue-300', textColor: 'text-white', route: '/services' },
    { text: 'Work', color: 'bg-gray-100', textColor: 'text-black', route: '/work' },
    { text: 'About us', color: 'bg-gray-800', textColor: 'text-white', route: '/about' },
    { text: 'Contact', color: 'bg-green-200', textColor: 'text-gray-800', route: '/contact' },
    { text: 'Career', color: 'bg-purple-200', textColor: 'text-gray-800', route: '/career' },
  ];

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="relative min-h-screen w-full bg-white flex items-center justify-center overflow-hidden">
      {/* Main Heading with 3D Animation */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <h1
          className={`text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tight transition-all duration-1000 ease-out ${
            isLoaded
              ? 'text-black transform translate-y-0 opacity-100'
              : 'text-gray-600 transform -translate-y-20 opacity-0 scale-110'
          }`}
          style={{
            textShadow: isLoaded
              ? 'none'
              : '0 10px 30px rgba(0,0,0,0.3), 0 0 0 rgba(0,0,0,0.5)',
            transform: isLoaded
              ? 'translateY(0) scale(1)'
              : 'translateY(-80px) scale(1.2) perspective(1000px) rotateX(15deg)',
          }}
        >
          Sisuni Tech
        </h1>
      </div>

      {/* Square Container with Navigation Cards */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 py-8">
        <div className="aspect-square max-w-4xl mx-auto grid grid-cols-3 grid-rows-3 gap-4 md:gap-6 p-4 md:p-6">
          {/* Top Left - Our Services */}
          <div
            onClick={() => handleNavigation(navItems[0].route)}
            className={`${navItems[0].color} rounded-2xl p-4 md:p-6 cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between`}
          >
            <span className={`${navItems[0].textColor} text-lg md:text-xl lg:text-2xl font-semibold`}>
              {navItems[0].text}
            </span>
            <button className={`w-10 h-10 rounded-full ${navItems[0].textColor === 'text-white' ? 'bg-white/20 hover:bg-white/30' : 'bg-black/10 hover:bg-black/20'} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-45 self-end mt-2`}>
              <svg
                className={`w-6 h-6 ${navItems[0].textColor}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Top Center - Work */}
          <div
            onClick={() => handleNavigation(navItems[1].route)}
            className={`${navItems[1].color} rounded-2xl p-4 md:p-6 cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between border border-gray-200`}
          >
            <span className={`${navItems[1].textColor} text-lg md:text-xl lg:text-2xl font-semibold`}>
              {navItems[1].text}
            </span>
            <button className="w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-45 self-end mt-2">
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Top Right - About Us */}
          <div
            onClick={() => handleNavigation(navItems[2].route)}
            className={`${navItems[2].color} rounded-2xl p-4 md:p-6 cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between`}
          >
            <span className={`${navItems[2].textColor} text-lg md:text-xl lg:text-2xl font-semibold`}>
              {navItems[2].text}
            </span>
            <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-45 self-end mt-2">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Middle Left - Empty or can be used for spacing */}
          <div className="hidden md:block"></div>

          {/* Middle Center - This space is for "Sisuni Tech" text (handled by absolute positioning) */}
          <div className="hidden md:block"></div>

          {/* Middle Right - Empty or can be used for spacing */}
          <div className="hidden md:block"></div>

          {/* Bottom Left - Contact */}
          <div
            onClick={() => handleNavigation(navItems[3].route)}
            className={`${navItems[3].color} rounded-2xl p-4 md:p-6 cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between`}
          >
            <span className={`${navItems[3].textColor} text-lg md:text-xl lg:text-2xl font-semibold`}>
              {navItems[3].text}
            </span>
            <button className="w-10 h-10 rounded-full bg-white/30 hover:bg-white/40 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-45 self-end mt-2">
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Bottom Center - Empty or can be used for spacing */}
          <div className="hidden md:block"></div>

          {/* Bottom Right - Career */}
          <div
            onClick={() => handleNavigation(navItems[4].route)}
            className={`${navItems[4].color} rounded-2xl p-4 md:p-6 cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between`}
          >
            <span className={`${navItems[4].textColor} text-lg md:text-xl lg:text-2xl font-semibold`}>
              {navItems[4].text}
            </span>
            <button className="w-10 h-10 rounded-full bg-white/30 hover:bg-white/40 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-45 self-end mt-2">
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
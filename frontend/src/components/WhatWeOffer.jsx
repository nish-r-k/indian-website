

import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const WhatWeOffer = () => {
  const navigate = useNavigate();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

   useEffect(() => {
    setTimeout(() => {
      setShowArrow(true);
      setIsRotating(true);
    }, 500);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Handle circle rotation
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && !hasScrolled) {
          setHasScrolled(true);
          setIsRotating(true);
          setShowArrow(true);
          
          setTimeout(() => {
            setShowArrow(false);
          }, 1500);
          
          setTimeout(() => {
            setIsRotating(false);
          }, 1000);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  const services = [
    {
      title: 'WEBSITES',
      tagline: 'Beautiful. Fast. Purpose-Driven.',
      description: 'We build websites that not only look stunning but perform seamless across devices. Our focus is on:',
      features: [
        'Pixel-perfect UI',
        'High-performance builds',
        'SEO-friendly structure',
        'Smooth animations + interactions'
      ]
    },
    {
      title: 'APPLICATIONS',
      tagline: 'Smart, intuitive apps that solve real problems.',
      description: 'We design and develop web & mobile applications tailored to your business needs—simple to use, scalable to grow. We deliver:',
      features: [
        'User-centric UX',
        'Clean, maintainable code',
        'Feature-rich interfaces',
        'Future-ready architecture'
      ]
    },
    {
      title: 'DESIGN SUPPORT',
      tagline: 'Your on-demand design partner.',
      description: 'We help brands elevate every digital touchpoint with consistent, modern, and meaningful design. Our design support includes:',
      features: [
        'UI/UX design',
        'Brand identity',
        'Component libraries',
        'Product design'
      ]
    },
    {
      title: 'TESTING',
      tagline: 'Quality assurance you can trust.',
      description: 'We ensure your products work flawlessly through rigorous testing. Our services cover:',
      features: [
        'Automated testing',
        'Manual QA processes',
        'Performance optimization',
        'Bug tracking & resolution'
      ]
    }
  ];

  const handleNavigation = () => {
    navigate('/services');
  };

  return (
    <div className="w-full bg-white">
      <div className="relative w-full bg-[#0F2E2E] rounded-3xl px-6 sm:px-10 md:px-14 py-12 sm:py-16 md:py-20 mt-10 max-w-7xl mx-auto transition-all duration-500 shadow-lg">

      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14 min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px]">
        
        {/* Left Text */}
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

        {/* Right Rotating Circle */}
        <div className="relative flex justify-center items-center">
          <div
            onClick={handleNavigation}
            className={`relative border-2 border-dashed border-white/70 rounded-full cursor-pointer transition-all duration-700 hover:scale-110 flex justify-center items-center ${
              isRotating ? "animate-spin-slow" : ""
            }`}
            style={{
              width: "210px",
              height: "210px",
            }}
          >
            {/* Text - Top */}
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xs sm:text-sm font-semibold tracking-wide">
              SEE ALL SERVICES
            </span>

            {/* Text - Bottom Rotated */}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-180 text-white text-xs sm:text-sm font-semibold tracking-wide">
              SEE ALL SERVICES
            </span>

            {/* Arrow in Center */}
            <svg
              className={`absolute w-8 h-8 sm:w-10 sm:h-10 text-white transition-all duration-500 ${
                showArrow ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

      </div>
    </div>

      {/* Service Cards Section */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative transition-all duration-700 ease-out"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Collapsed State - Stacked Cards (Default) */}
                <div
                  className={`relative ml-4 sm:ml-8 md:ml-12 transition-all duration-700 ease-out ${
                    hoveredCard === index ? 'opacity-0 scale-95 absolute' : 'opacity-100 scale-100'
                  }`}
                >
                  {/* Dark Gray Shadow Layer */}
                  <div className="absolute top-2 left-2 w-full h-full bg-gray-700 rounded-[30px] sm:rounded-[40px]"></div>
                  
                  {/* Light Blue Top Layer */}
                  <div className="relative bg-[#A9D2FF] rounded-[30px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 lg:p-12 min-h-[120px] sm:min-h-[140px] md:min-h-[160px] flex items-center justify-center">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Expanded State - Side by Side (On Hover) */}
                <div
                  className={`transition-all duration-700 ease-out ${
                    hoveredCard === index
                      ? 'opacity-100 scale-100 md:flex md:gap-6 lg:gap-8'
                      : 'opacity-0 scale-95 absolute pointer-events-none'
                  }`}
                >
                  {/* Left Card - Gray with Details */}
                  <div className="flex-1 bg-gray-700 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] p-6 sm:p-8 md:p-10 lg:p-12 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex flex-col justify-center mb-4 md:mb-0">
                    <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 sm:space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-white text-sm sm:text-base md:text-lg lg:text-xl">
                          <span className="w-2 h-2 rounded-full bg-white mr-3 mt-2 flex-shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Card - Blue with Title */}
                  <div className="flex-1 bg-[#A9D2FF] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] p-6 sm:p-8 md:p-10 lg:p-12 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex flex-col justify-center text-center md:text-left">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-4 sm:mb-6">
                      {service.title}
                    </h3>
                    <p className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
                      {service.tagline}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default WhatWeOffer;
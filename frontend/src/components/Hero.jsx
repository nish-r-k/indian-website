

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [cardsLoaded, setCardsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
    setTimeout(() => setCardsLoaded(true), 600);
  }, []);

  const handleNavigation = (route) => navigate(route);

  return (
    <div className="relative w-full min-h-screen bg-white flex items-center justify-center overflow-hidden px-4">

      {/* ---- Center Title ---- */}
      
      <h1
  className={`
    absolute top-1/2 -translate-y-1/2 text-center z-10 
    text-6xl md:text-[110px] font-semibold
    transition-all duration-[2600ms] ease-[cubic-bezier(0.22, 1, 0.36, 1)]
    ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
  `}
  style={{ transitionDelay: "500ms" }}
>
  Sisuni Tech
</h1>


      {/* ---- Card Grid ---- */}
      <div className="relative w-full h-full max-w-7xl">

        {/* Top Left - Our Services (Bigger Square Blue) */}
        <div
          onClick={() => handleNavigation("/services")}
          className={`absolute left-10 top-20 bg-[#9CCBFF] rounded-[40px] p-6 cursor-pointer group transition-all duration-500 ${
            cardsLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } hover:scale-110 hover:shadow-2xl`}
          style={{ width: "280px", height: "260px" }}
        >
          <p className="text-black text-2xl font-medium">Our services</p>
          <div className="mt-20 w-10 h-10 rounded-full bg-white/40 flex items-center justify-center transition-all group-hover:rotate-45">
            ➜
          </div>
        </div>

        {/* Top Middle - Work (TEXT only) */}
        {/* <div
          onClick={() => handleNavigation("/work")}
          className={`absolute left-1/2 -translate-x-1/2 top-40 text-2xl font-medium cursor-pointer transition-all duration-500 ${
            cardsLoaded ? "opacity-100" : "opacity-0"
          } hover:scale-110`}
        >
          Work ➜
        </div> */}

        {/* Top Right - About Us (Black Square) */}
        <div
          onClick={() => handleNavigation("/about")}
          className={`absolute right-10 top-[-50px] bg-[#2F3338] rounded-[40px] p-6 cursor-pointer text-white group transition-all duration-500 ${
            cardsLoaded ? "opacity-100" : "opacity-0"
          } hover:scale-110 hover:shadow-2xl`}
          style={{ width: "240px", height: "200px" }}
        >
          <p className="text-xl">About us</p>
          <div className="mt-12 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition-all group-hover:rotate-45">
            ➜
          </div>
        </div>

        {/* Middle Right small purple square (Career) */}
        <div
          onClick={() => handleNavigation("/career")}
          className={`absolute right-10 top-[190px] bg-[#C6B7FF] rounded-[40px] p-6 cursor-pointer group transition-all duration-500 ${
            cardsLoaded ? "opacity-100" : "opacity-0"
          } hover:scale-110 hover:shadow-2xl`}
          style={{ width: "220px", height: "180px" }}
        >
          <p className="text-lg">Career</p>
          <div className="mt-8 w-10 h-10 rounded-full bg-white/30 flex items-center justify-center transition-all group-hover:rotate-45">
            ➜
          </div>
        </div>

        {/* Bottom Right Rectangle - Contact */}
        <div
          onClick={() => handleNavigation("/contact")}
          className={`absolute right-10 bottom-[100px] bg-[#CDE5FF] rounded-[40px] p-6 cursor-pointer group transition-all duration-500 ${
            cardsLoaded ? "opacity-100" : "opacity-0"
          } hover:scale-110 hover:shadow-2xl`}
          style={{ width: "420px", height: "220px" }}
        >
          <p className="text-lg text-gray-800">Contact us</p>
          <div className="mt-20 w-10 h-10 rounded-full bg-white/40 flex items-center justify-center transition-all group-hover:rotate-45">
            ➜
          </div>
        </div>

        {/* Bottom Left Long Green Card */}
        <div
          className={`absolute left-10 bottom-[1px] bg-[#D6FFF3] rounded-[40px] p-6 transition-all duration-500 ${
            cardsLoaded ? "opacity-100" : "opacity-0"
          } hover:scale-110 hover:shadow-2xl cursor-pointer`}
          style={{ width: "240px", height: "340px" }}>
            <p className="text-lg text-gray-800">Our Work</p>
            <div className="mt-20 w-10 h-10 rounded-full bg-white/40 flex items-center justify-center transition-all group-hover:rotate-45">
            ➜
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

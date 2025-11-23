// import React, { useState } from "react";
// import { ArrowUpRight } from "lucide-react";
// import { motion } from "framer-motion";

// const jobCards = [
//   { title: "UI/UX DESIGNER", gradient: "from-[#E7E9EC] to-[#D7DADE]" },
//   { title: "REACT DEVELOPER", gradient: "from-[#DCD4E8] to-[#CBBEDC]" },
//   { title: "DEVOPS ENGINEER", gradient: "from-[#EFEFEF] to-[#E3E1DD]" },
//   { title: "MARKETING LEAD", gradient: "from-[#EBDFEC] to-[#D7C9DA]" },
//   { title: "FULL-STACK DEVELOPER", gradient: "from-[#F5F5F6] to-[#E5E5E6]" },
//   { title: "GRAPHIC DESIGNER", gradient: "from-[#DCE1EA] to-[#C8CDD7]" },
//   { title: "FULL-STACK PHP DEVELOPER", gradient: "from-[#EBDFEC] to-[#D7C9DA]" },
//   { title: "CLOUD DEVELOPER", gradient: "from-[#DCE1EA] to-[#C7CDD7]" },
//   { title: "APP DEVELOPER", gradient: "from-[#E6DDED] to-[#D3C5DA]" },
//   { title: "FULL-STACK AI DEVELOPER", gradient: "from-[#FFFFFF] to-[#E8E8E8]" },
// ];

// const CareerDetails = () => {
//   const [selectedCard, setSelectedCard] = useState(null);

//   const handleSelect = (index) => {
//     setSelectedCard(index);
//   };

//   return (
//     <div className="w-full px-10 py-16">

//       {/* TOP BAR */}
//       <motion.div
//         className="flex items-center justify-between mb-12"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="px-6 py-3 bg-gray-100 border border-gray-300 rounded-xl text-gray-800 font-semibold text-xl shadow-sm">
//           Careers
//         </div>

//         <div className="flex gap-4">
//           {["Our services", "About us", "Work", "Contact Us"].map((item, i) => (
//             <motion.button
//               key={i}
//               className="px-6 py-3 bg-black text-white rounded-lg"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {item}
//             </motion.button>
//           ))}
//         </div>
//       </motion.div>

//       {/* HEADER TEXT */}
//       <motion.h1
//         className="text-5xl font-bold leading-tight max-w-3xl"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         Your ideas matter—let them grow.
//       </motion.h1>

//       <motion.p
//         className="mt-4 text-gray-600 max-w-2xl"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, delay: 0.2 }}
//       >
//         At Sisuni Tech, we’re building technology that powers tomorrow—and we want
//         talented people who are ready to create it with us.
//       </motion.p>

//       {/* MAIN GRID */}
//       <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">

//         {/* LEFT PURPLE BOX */}
//         <motion.div
//           className="rounded-3xl p-10 flex flex-col justify-between"
//           style={{ backgroundColor: "#3B1F4C" }}
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           whileHover={{ scale: 1.02 }}
//         >
//           <div className="relative h-24">
//             <svg
//               className="absolute top-3 left-0 opacity-70"
//               width="180"
//               height="60"
//               viewBox="0 0 180 60"
//             >
//               <path
//                 d="M 0 40 Q 50 10 100 40 T 180 40"
//                 stroke="#C9A3E8"
//                 strokeWidth="3"
//                 strokeDasharray="6 8"
//                 fill="none"
//               />
//             </svg>

//             <motion.div
//               className="relative text-4xl ml-36"
//               style={{ color: "#C9A3E8" }}
//               animate={{ y: [0, -8, 0] }}
//               transition={{ repeat: Infinity, duration: 3 }}
//             >
//               ✈
//             </motion.div>
//           </div>

//           <h2
//             className="text-4xl font-semibold mt-10 leading-tight"
//             style={{ color: "#C9A3E8" }}
//           >
//             Our Core <br /> Values
//           </h2>
//         </motion.div>

//         {/* RIGHT IMAGES WITH ZOOM-IN ANIMATION */}
//         <motion.div
//           className="md:col-span-2 space-y-6"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
//           }}
//         >
//           <div className="grid grid-cols-2 gap-6">
//             {[
//               "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
//               "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
//             ].map((src, i) => (
//               <motion.img
//                 key={i}
//                 src={src}
//                 className="rounded-xl w-full h-56 object-cover cursor-pointer"
//                 whileHover={{ scale: 1.04 }}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6 }}
//               />
//             ))}
//           </div>

//           <div className="grid grid-cols-3 gap-6">
//             {[
//               "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
//               "https://images.unsplash.com/photo-1551434678-e076c223a692",
//               "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
//             ].map((src, i) => (
//               <motion.img
//                 key={i}
//                 src={src}
//                 className="rounded-xl w-full h-40 object-cover cursor-pointer"
//                 whileHover={{ scale: 1.04 }}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6 }}
//               />
//             ))}
//           </div>
//         </motion.div>
//       </div>

//       {/* JOB CARDS */}
//       <motion.div
//         className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: {},
//           visible: { transition: { staggerChildren: 0.12 } },
//         }}
//       >
//         {jobCards.map((job, i) => (
//           <motion.div
//             key={i}
//             className={`p-8 rounded-2xl shadow-sm border bg-gradient-to-br ${job.gradient}`}
//             variants={{
//               hidden: { opacity: 0, y: 40 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             transition={{ duration: 0.6 }}
//             whileHover={{ scale: 1.03 }}
//           >
//             <h3 className="text-lg font-semibold mb-4">{job.title}</h3>

//             <ul className="text-sm text-gray-600 mb-8 space-y-2">
//               <li>• Lorem ipsum dolor sit amet, consectetur</li>
//               <li>• Lorem ipsum dolor sit amet, consectetur</li>
//               <li>• Lorem ipsum dolor sit amet, consectetur</li>
//             </ul>

            
//             <motion.button
//               onClick={() => handleSelect(i)}
//               className={`w-full flex items-center justify-between px-6 py-3 rounded-xl border text-sm font-medium transition 
//                 ${selectedCard === i 
//                   ? "bg-blue-600 text-white border-blue-700" 
//                   : "bg-white text-black hover:bg-gray-50"
//                 }`}
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Reach Out To Us
//               <ArrowUpRight size={16} />
//             </motion.button>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* JOB CARDS (dynamic content, same UI) */}


//     </div>
//   );
// };

// export default CareerDetails ;














import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";


// Backend API
const API = import.meta.env.VITE_BACKEND_URL + "/jobs";


// Gradient palette
const gradients = [
  "from-[#E7E9EC] to-[#D7DADE]",
  "from-[#DCD4E8] to-[#CBBEDC]",
  "from-[#EFEFEF] to-[#E3E1DD]",
  "from-[#EBDFEC] to-[#D7C9DA]",
  "from-[#F5F5F6] to-[#E5E5E6]",
  "from-[#DCE1EA] to-[#C8CDD7]",
  "from-[#EBDFEC] to-[#D7C9DA]",
  "from-[#DCE1EA] to-[#C7CDD7]",
  "from-[#E6DDED] to-[#D3C5DA]",
  "from-[#FFFFFF] to-[#E8E8E8]",
];

const CareerDetails = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [jobs, setJobs] = useState([]);

  const handleSelect = (index) => {
    setSelectedCard(index);
  };


// Load jobs from backend
  const loadJobs = async () => {
    try {
      const res = await axios.get(API);
      setJobs(res.data);
    } catch (err) {
      console.error("Error loading jobs:", err);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);


  return (
    <div className="w-full px-10 py-16">

      {/* TOP BAR */}
      <motion.div
        className="flex items-center justify-between mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        
        
      </motion.div>

      {/* HEADER TEXT */}
      <motion.h1
        className="text-5xl font-bold leading-tight max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Your ideas matter—let them grow.
      </motion.h1>

      <motion.p
        className="mt-4 text-gray-600 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        At Sisuni Tech, we’re building technology that powers tomorrow—and we want
        talented people who are ready to create it with us.
      </motion.p>

      {/* MAIN GRID (unchanged UI) */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* LEFT PURPLE BOX */}
        <motion.div
          className="rounded-3xl p-10 flex flex-col justify-between"
          style={{ backgroundColor: "#3B1F4C" }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative h-24">
            <svg
              className="absolute top-3 left-0 opacity-70"
              width="180"
              height="60"
              viewBox="0 0 180 60"
            >
              <path
                d="M 0 40 Q 50 10 100 40 T 180 40"
                stroke="#C9A3E8"
                strokeWidth="3"
                strokeDasharray="6 8"
                fill="none"
              />
            </svg>

            <motion.div
              className="relative text-4xl ml-36"
              style={{ color: "#C9A3E8" }}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              ✈
            </motion.div>
          </div>

          <h2
            className="text-4xl font-semibold mt-10 leading-tight"
            style={{ color: "#C9A3E8" }}
          >
            Our Core <br /> Values
          </h2>
        </motion.div>

        {/* RIGHT IMAGES */}
        <motion.div
          className="md:col-span-2 space-y-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          <div className="grid grid-cols-2 gap-6">
            {[
              "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
              "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
            ].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                className="rounded-xl w-full h-56 object-cover cursor-pointer"
                whileHover={{ scale: 1.04 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
              "https://images.unsplash.com/photo-1551434678-e076c223a692",
              "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
            ].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                className="rounded-xl w-full h-40 object-cover cursor-pointer"
                whileHover={{ scale: 1.04 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            ))}
          </div>
        </motion.div>

      </div>

      {/* JOB CARDS (dynamic content + same UI) */}
      <motion.div
        className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {jobs.map((job, index) => (
          <motion.div
            key={job._id}
            className={`p-8 rounded-2xl shadow-sm border bg-gradient-to-br ${gradients[index % gradients.length]}`}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-lg font-semibold mb-4 uppercase">
              {job.title}
            </h3>

            <ul className="text-sm text-gray-600 mb-8 space-y-2">
              <li>• {job.overview || "Role overview not provided"}</li>
              <li>• {job.responsibilities || "Responsibilities TBD"}</li>
              <li>• {job.requirements || "Requirements TBD"}</li>
            </ul>

            <motion.button
              onClick={() => handleSelect(index)}
              className={`w-full flex items-center justify-between px-6 py-3 rounded-xl border text-sm font-medium transition 
                ${selectedCard === index 
                  ? "bg-blue-600 text-white border-blue-700" 
                  : "bg-white text-black hover:bg-gray-50"
                }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              Reach Out To Us
              <ArrowUpRight size={16} />
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
};

export default CareerDetails;






// import React, { useState, useEffect } from "react";
// import { ArrowUpRight } from "lucide-react";
// import { motion } from "framer-motion";
// import axios from "axios";

// const API = import.meta.env.VITE_BACKEND_URL + "/jobs";

// const CareerDetails = () => {
//   const [jobs, setJobs] = useState([]);
//   const [selectedCard, setSelectedCard] = useState(null);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const res = await axios.get(API);
//         setJobs(res.data);
//       } catch (error) {
//         console.error("Failed to load jobs:", error);
//       }
//     };

//     fetchJobs();
//   }, []);

//   const handleSelect = (index) => {
//     setSelectedCard(index);
//   };

//   return (
//     <div className="w-full px-10 py-16">

//       {/* TOP BAR */}
//       <motion.div
//         className="flex items-center justify-between mb-12"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="px-6 py-3 bg-gray-100 border border-gray-300 rounded-xl text-gray-800 font-semibold text-xl shadow-sm">
//           Careers
//         </div>

//         <div className="flex gap-4">
//           {["Our services", "About us", "Work", "Contact Us"].map((item, i) => (
//             <motion.button
//               key={i}
//               className="px-6 py-3 bg-black text-white rounded-lg"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {item}
//             </motion.button>
//           ))}
//         </div>
//       </motion.div>

//       {/* HEADER TEXT */}
//       <motion.h1
//         className="text-5xl font-bold leading-tight max-w-3xl"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         Your ideas matter—let them grow.
//       </motion.h1>

//       <motion.p
//         className="mt-4 text-gray-600 max-w-2xl"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, delay: 0.2 }}
//       >
//         At Sisuni Tech, we’re building technology that powers tomorrow—and we want
//         talented people who are ready to create it with us.
//       </motion.p>

//       {/* MAIN GRID (unchanged) */}
//       {/* KEEP YOUR UI EXACTLY AS IT IS */}

//       {/* JOB CARDS (Now dynamic) */}
//       <motion.div
//         className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: {},
//           visible: { transition: { staggerChildren: 0.12 } },
//         }}
//       >
//         {jobs.map((job, index) => (
//           <motion.div
//             key={job._id}
//             className="p-8 rounded-2xl shadow-sm border bg-gradient-to-br from-[#E7E9EC] to-[#D7DADE]"
//             variants={{
//               hidden: { opacity: 0, y: 40 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             transition={{ duration: 0.6 }}
//             whileHover={{ scale: 1.03 }}
//           >
//             <h3 className="text-lg font-semibold mb-4">{job.title}</h3>

//             <ul className="text-sm text-gray-600 mb-8 space-y-2">
//               <li>• {job.overview || "No overview added"}</li>
//               <li>• {job.responsibilities || "No responsibilities added"}</li>
//               <li>• {job.requirements || "No requirements added"}</li>
//             </ul>

//             <motion.button
//               onClick={() => handleSelect(index)}
//               className={`w-full flex items-center justify-between px-6 py-3 rounded-xl border text-sm font-medium transition 
//                 ${selectedCard === index ? "bg-blue-600 text-white" : "bg-white text-black hover:bg-gray-50"}`}
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Reach Out To Us
//               <ArrowUpRight size={16} />
//             </motion.button>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default CareerDetails;

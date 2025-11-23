// import React from "react";
// import { ArrowUpRight } from "lucide-react";

// const jobCards = [
//   {
//     title: "UI/UX DESIGNER",
//     gradient: "from-[#E7E9EC] to-[#D7DADE]",
//   },
//   {
//     title: "REACT DEVELOPER",
//     gradient: "from-[#DCD4E8] to-[#CBBEDC]",
//   },
//   {
//     title: "DEVOPS ENGINEER",
//     gradient: "from-[#EFEFEF] to-[#E3E1DD]",
//   },
//   {
//     title: "MARKETING LEAD",
//     gradient: "from-[#EBDFEC] to-[#D7C9DA]",
//   },
//   {
//     title: "FULL-STACK DEVELOPER",
//     gradient: "from-[#F5F5F6] to-[#E5E5E6]",
//   },
//   {
//     title: "GRAPHIC DESIGNER",
//     gradient: "from-[#DCE1EA] to-[#C8CDD7]",
//   },
//   {
//     title: "FULL-STACK PHP DEVELOPER",
//     gradient: "from-[#EBDFEC] to-[#D7C9DA]",
//   },
//   {
//     title: "CLOUD DEVELOPER",
//     gradient: "from-[#DCE1EA] to-[#C7CDD7]",
//   },
//   {
//     title: "APP DEVELOPER",
//     gradient: "from-[#E6DDED] to-[#D3C5DA]",
//   },
//   {
//     title: "FULL-STACK AI DEVELOPER",
//     gradient: "from-[#FFFFFF] to-[#E8E8E8]",
//   },
// ];

// const Career = () => {
//   return (
//     <div className="w-full px-10 py-16">

//       {/* TOP BAR */}
//       <div className="flex items-center justify-between mb-12">
//         <div className="px-6 py-3 bg-gray-100 border border-gray-300 rounded-xl text-gray-800 font-semibold text-xl shadow-sm">
//           Careers
//         </div>

//         <div className="flex gap-4">
//           <button className="px-6 py-3 bg-black text-white rounded-lg">Our services</button>
//           <button className="px-6 py-3 bg-black text-white rounded-lg">About us</button>
//           <button className="px-6 py-3 bg-black text-white rounded-lg">Work</button>
//           <button className="px-6 py-3 bg-black text-white rounded-lg">Contact Us</button>
//         </div>
//       </div>

//       {/* HEADER */}
//       <h1 className="text-5xl font-bold leading-tight max-w-3xl">
//         Your ideas matter—let them grow.
//       </h1>

//       <p className="mt-4 text-gray-600 max-w-2xl">
//         At Sisuni Tech, we’re building technology that powers tomorrow—and we want talented
//         people who are ready to create it with us.
//       </p>

//       {/* MAIN GRID */}
//       <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">

//         {/* LEFT BOX */}
//         <div
//           className="rounded-3xl p-10 flex flex-col justify-between"
//           style={{ backgroundColor: "#3B1F4C" }}
//         >
//           <div className="relative h-24">
//           {/* dotted squiggly line */}
//           <svg
//             className="absolute top-3 left-0 opacity-70"
//             width="180"
//             height="60"
//             viewBox="0 0 180 60"
//           >
//             <path
//               d="M 0 40 Q 50 10 100 40 T 180 40"
//               stroke="#C9A3E8"
//               strokeWidth="3"
//               strokeDasharray="6 8"
//               fill="none"
//             />
//           </svg>

//           {/* plane icon */}
//           <div className="relative text-4xl ml-36" style={{ color: "#C9A3E8" }}>
//             ✈
//           </div>
//         </div>

//           {/* Heading */}
//           <h2
//             className="text-4xl font-semibold mt-10 leading-tight"
//             style={{ color: "#C9A3E8" }}
//           >
//             Our Core <br /> Values
//           </h2>
//         </div>

//         {/* RIGHT IMAGES */}
//         <div className="md:col-span-2 space-y-6">
//           <div className="grid grid-cols-2 gap-6">
//             <img
//               src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
//               alt="Team work"
//               className="rounded-xl w-full h-56 object-cover cursor-pointer"
//             />
//             <img
//               src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
//               alt="Technology"
//               className="rounded-xl w-full h-56 object-cover cursor-pointer"
//             />
//           </div>

//           <div className="grid grid-cols-3 gap-6">
//             <img
//               src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
//               alt="Innovation"
//               className="rounded-xl w-full h-40 object-cover cursor-pointer"
//             />
//             <img
//               src="https://images.unsplash.com/photo-1551434678-e076c223a692"
//               alt="Culture"
//               className="rounded-xl w-full h-40 object-cover cursor-pointer"
//             />
//             <img
//               src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
//               alt="Workplace"
//               className="rounded-xl w-full h-40 object-cover cursor-pointer"
//             />
//           </div>
//         </div>
//       </div>

//       {/* JOB CARDS SECTION */}
//       <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

//         {jobCards.map((job, i) => (
//           <div
//             key={i}
//             className={`p-8 rounded-2xl shadow-sm border bg-gradient-to-br ${job.gradient}`}
//           >
//             <h3 className="text-lg font-semibold mb-4">{job.title}</h3>

//             <ul className="text-sm text-gray-600 mb-8 space-y-2">
//               <li>• Lorem ipsum dolor sit amet, consectetur</li>
//               <li>• Lorem ipsum dolor sit amet, consectetur</li>
//               <li>• Lorem ipsum dolor sit amet, consectetur</li>
//             </ul>

//             <button className="w-full flex items-center justify-between px-6 py-3 bg-white rounded-xl border text-sm font-medium hover:bg-gray-50 transition">
//               Reach Out To Us
//               <ArrowUpRight size={16} />
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Career;



// import React from "react";
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

// const Career = () => {
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
//               className="w-full flex items-center justify-between px-6 py-3 bg-white rounded-xl border text-sm font-medium hover:bg-gray-50 transition"
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

// export default Career;





import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const jobCards = [
  { title: "UI/UX DESIGNER", gradient: "from-[#E7E9EC] to-[#D7DADE]" },
  { title: "REACT DEVELOPER", gradient: "from-[#DCD4E8] to-[#CBBEDC]" },
  { title: "DEVOPS ENGINEER", gradient: "from-[#EFEFEF] to-[#E3E1DD]" },
  { title: "MARKETING LEAD", gradient: "from-[#EBDFEC] to-[#D7C9DA]" },
  { title: "FULL-STACK DEVELOPER", gradient: "from-[#F5F5F6] to-[#E5E5E6]" },
  { title: "GRAPHIC DESIGNER", gradient: "from-[#DCE1EA] to-[#C8CDD7]" },
  { title: "FULL-STACK PHP DEVELOPER", gradient: "from-[#EBDFEC] to-[#D7C9DA]" },
  { title: "CLOUD DEVELOPER", gradient: "from-[#DCE1EA] to-[#C7CDD7]" },
  { title: "APP DEVELOPER", gradient: "from-[#E6DDED] to-[#D3C5DA]" },
  { title: "FULL-STACK AI DEVELOPER", gradient: "from-[#FFFFFF] to-[#E8E8E8]" },
];

const CareerDetails = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSelect = (index) => {
    setSelectedCard(index);
  };

  return (
    <div className="w-full px-10 py-16">

      {/* TOP BAR */}
      <motion.div
        className="flex items-center justify-between mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="px-6 py-3 bg-gray-100 border border-gray-300 rounded-xl text-gray-800 font-semibold text-xl shadow-sm">
          Careers
        </div>

        <div className="flex gap-4">
          {["Our services", "About us", "Work", "Contact Us"].map((item, i) => (
            <motion.button
              key={i}
              className="px-6 py-3 bg-black text-white rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.button>
          ))}
        </div>
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

      {/* MAIN GRID */}
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

        {/* RIGHT IMAGES WITH ZOOM-IN ANIMATION */}
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

      {/* JOB CARDS */}
      <motion.div
        className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {jobCards.map((job, i) => (
          <motion.div
            key={i}
            className={`p-8 rounded-2xl shadow-sm border bg-gradient-to-br ${job.gradient}`}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-lg font-semibold mb-4">{job.title}</h3>

            <ul className="text-sm text-gray-600 mb-8 space-y-2">
              <li>• Lorem ipsum dolor sit amet, consectetur</li>
              <li>• Lorem ipsum dolor sit amet, consectetur</li>
              <li>• Lorem ipsum dolor sit amet, consectetur</li>
            </ul>

            {/* BUTTON WITH BLUE ACTIVE STATE */}
            <motion.button
              onClick={() => handleSelect(i)}
              className={`w-full flex items-center justify-between px-6 py-3 rounded-xl border text-sm font-medium transition 
                ${selectedCard === i 
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

export default CareerDetails ;








// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";

// const jobList = [
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

// const Career = () => {
//   return (
//     <div className="w-full px-10 py-16 bg-gradient-to-b from-gray-50 to-white">
//       {/* TOP BAR */}
//       <div className="flex items-center justify-between mb-12">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="px-8 py-4 bg-gray-100 border border-gray-300 rounded-xl text-gray-800 font-semibold text-xl shadow-md tracking-wide"
//         >
//           Careers
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="flex gap-4"
//         >
//           {["Our Services", "About Us", "Work", "Contact Us"].map((item, i) => (
//             <button
//               key={i}
//               className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
//             >
//               {item}
//             </button>
//           ))}
//         </motion.div>
//       </div>

//       {/* HEADER */}
//       <motion.h1
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-5xl font-bold leading-tight max-w-3xl"
//       >
//         Your ideas matter—let them grow.
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//         className="mt-4 text-gray-600 max-w-2xl"
//       >
//         At Sisuni Tech, we’re building technology that powers tomorrow—and we want talented people who are ready to create it with us.
//       </motion.p>

//       {/* MAIN GRID */}
//       <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
//         {/* LEFT BOX */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="bg-[#2D0C4E] text-white rounded-xl p-8 flex flex-col justify-between shadow-xl"
//         >
//           <div className="text-6xl">✈</div>
//           <h2 className="text-4xl font-semibold mt-10">Our Core Values</h2>
//         </motion.div>
        

//         {/* RIGHT IMAGES */}
//         <div className="md:col-span-2 space-y-6">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="grid grid-cols-2 gap-6"
//           >
//             <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df" className="rounded-xl w-full h-56 object-cover shadow-lg hover:scale-[1.02] transition" />
//             <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" className="rounded-xl w-full h-56 object-cover shadow-lg hover:scale-[1.02] transition" />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="grid grid-cols-3 gap-6"
//           >
//             <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" className="rounded-xl w-full h-40 object-cover shadow-lg hover:scale-[1.02] transition" />
//             <img src="https://images.unsplash.com/photo-1551434678-e076c223a692" className="rounded-xl w-full h-40 object-cover shadow-lg hover:scale-[1.02] transition" />
//             <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70" className="rounded-xl w-full h-40 object-cover shadow-lg hover:scale-[1.02] transition" />
//           </motion.div>
//         </div>
//       </div>

//       {/* JOB CARDS SECTION */}
//       <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {jobList.map((job, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: i * 0.05 }}
//             className={`p-8 rounded-2xl shadow-md border bg-gradient-to-br ${job.gradient}`}
//           >
//             <h3 className="text-lg font-semibold mb-4">{job.title}</h3>
//             <ul className="text-sm text-gray-700 mb-8 space-y-2">
//               <li>• Lorem ipsum dolor sit amet, consectetur</li>
//               <li>• Lorem ipsum dolor sit amet, consectetur</li>
//               <li>• Lorem ipsum dolor sit amet, consectetur</li>
//             </ul>

//             <button className="w-full flex items-center justify-between px-6 py-3 bg-white rounded-xl border text-sm font-medium hover:bg-gray-50 transition">
//               Reach Out To Us
//               <ArrowUpRight size={16} />
//             </button>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Career;

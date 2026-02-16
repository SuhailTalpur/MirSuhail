import React from "react";
import { motion } from "framer-motion";

// Asset imports
import reactLogo from "../assets/images/react-2.svg";
import nodeLogo from "../assets/images/nodejs-3.svg";
import mongoLogo from "../assets/images/mongodb-icon-1.svg";
import expressLogo from "../assets/images/express-109.svg";
import tailwindLogo from "../assets/images/tailwind-css-2.svg";
import jsLogo from "../assets/images/javascript-1.svg";
import htmlLogo from "../assets/images/html-1.svg";
import cssLogo from "../assets/images/css-3.svg";

const techs = [
  { name: "React", img: reactLogo },
  { name: "Node.js", img: nodeLogo },
  { name: "Express.js", img: expressLogo },
  { name: "MongoDB", img: mongoLogo },
  { name: "Tailwind CSS", img: tailwindLogo },
  { name: "JavaScript", img: jsLogo },
  { name: "HTML", img: htmlLogo },
  { name: "CSS", img: cssLogo },
];

const Technologies = () => {
  return (
    <section className="relative bg-[#030303] py-20 overflow-hidden">
      {/* Background Section Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Powering Projects with <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-cyan-400">Modern Tech</span>
        </motion.h2>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative flex overflow-hidden group">
        {/* Left & Right Glass Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#030303] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#030303] to-transparent z-10" />

        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 25, 
            repeat: Infinity 
          }}
        >
          {/* Combined list for seamless looping */}
          {[...techs, ...techs].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-10 min-w-[120px]"
            >
              <div className="relative group/icon mb-4">
                {/* Glow behind icon */}
                <div className="absolute inset-0 bg-white/5 blur-xl rounded-full scale-0 group-hover/icon:scale-150 transition-transform duration-500" />
                
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="w-14 h-14 md:w-16 md:h-16 object-contain relative z-10 transition-all duration-300 grayscale group-hover/icon:grayscale-0 group-hover/icon:scale-110"
                />
              </div>
              
              <p className="text-gray-500 font-semibold text-sm tracking-wide uppercase group-hover/icon:text-white transition-colors duration-300">
                {tech.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Background Decorative Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Technologies;
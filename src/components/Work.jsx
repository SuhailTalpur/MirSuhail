import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";

import project1 from "../assets/images/project1.PNG";
import project2 from "../assets/images/project2.PNG";
import project3 from "../assets/images/project3.PNG";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project51.PNG";
import project6 from "../assets/images/project61.PNG";

const projects = [
  {
    id: 1,
    title: "AI Chat App",
    img: project1,
    shortDesc: "A modern AI chat app built using the MERN stack and Gemini API.",
    tags: ["MERN", "AI", "Gemini"],
  },
  {
    id: 2,
    title: "E-Commerce Website",
    img: project2,
    shortDesc: "Full-stack online store with authentication and admin dashboard.",
    tags: ["React", "Node", "MongoDB"],
  },
  {
    id: 3,
    title: "AI Image Generator",
    img: project4,
    shortDesc: "A Solana staking platform with PNFT and escrow contract support.",
    tags: ["Solana", "Web3", "Next.js"],
  },
  {
    id: 4,
    title: "Restaurant Website",
    img: project3,
    shortDesc: "A real-time restaurant web app displaying menu items and reservations.",
    tags: ["UX", "Frontend", "API"],
  },
    {
    id: 5,
    title: "NFT Launchpad",
    img: project5,
    shortDesc: "A platform for launching and managing NFT collections in Blockchain.",
    tags: ["Web3", "React", "Solidity"],
  },
    {
    id: 6,
    title: "Stakify",
    img: project6,
    shortDesc: "A staking platform for Etherium-based tokens.",
    tags: ["Solidity", "Web3", "React"],
  },
];

const Work = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/project/${id}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative bg-[#030303] text-white py-24 px-6 md:px-16 overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-cyan-400 text-xs font-medium uppercase tracking-widest"
          >
            <Sparkles size={14} /> My Creative Space
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black"
          >
            Selected <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400">Works</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 text-lg max-w-xl mx-auto"
          >
            A collection of projects where design meets high-performance engineering.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              onClick={() => handleCardClick(project.id)}
              className="group cursor-pointer relative bg-white/5 rounded-3xl border border-white/10 overflow-hidden hover:border-purple-500/30 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                   <div className="p-3 bg-white/10 rounded-full border border-white/20">
                      <ExternalLink className="text-white" size={24} />
                   </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                   <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight size={20} className="text-gray-500 group-hover:text-white transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.shortDesc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {project.tags?.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-purple-400/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Glow Effect */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
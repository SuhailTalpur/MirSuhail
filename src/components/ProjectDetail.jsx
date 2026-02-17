import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowLeft, ArrowRight, X, ChevronLeft, Sparkles, Maximize2 } from "lucide-react";

// Asset imports (same as provided)
import img1 from "../assets/images/project1.PNG";
import img2 from "../assets/images/project11.PNG";
import img3 from "../assets/images/project12.PNG";
import img4 from "../assets/images/project2.PNG";
import img5 from "../assets/images/project21.PNG";
import img6 from "../assets/images/project23.PNG";
import img7 from "../assets/images/project3.PNG";
import img8 from "../assets/images/project32.PNG";
import img9 from "../assets/images/project33.PNG";
import img10 from "../assets/images/project4.png";
import img11 from "../assets/images/project51.PNG";
import img12 from "../assets/images/project52.PNG";
import img13 from "../assets/images/project53.PNG";
import img14 from "../assets/images/project61.PNG";
import img15 from "../assets/images/project62.PNG";
import img16 from "../assets/images/project63.PNG";
import img17 from "../assets/images/project64.PNG";
import img18 from "../assets/images/project65.PNG";

const projectData = {
  1: {
    title: "AI Chat App",
    images: [img1, img2, img3],
    desc: "This AI Chat App is powered by Google Gemini API and MERN stack. It allows users to sign in, chat with AI, and store their chat history securely.",
    github: "https://github.com/SuhailTalpur/AI-CHat-App.git",
    tech: ["MERN Stack", "Gemini API", "Tailwind CSS"],
  },
  2: {
    title: "E-Commerce Website",
    images: [img4, img5, img6],
    desc: "A responsive e-commerce platform with product management, user authentication, and secure payment integration.",
    github: "https://github.com/SuhailTalpur/MERN-Stack-E-connerce-website.git",
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
  3: {
    title: "AI Image Generator",
    images: [img10],
    desc: "An AI-powered image generator that creates unique images based on user prompts using advanced machine learning models.",
    github: "https://github.com/SuhailTalpur/AI-Image-Generator-App.git",
    tech: ["MongoDB", "AI API", "React"],
  },
  4: {
    title: "Restaurant Website",
    images: [img7, img8, img9],
    desc: "A full-stack restaurant website with menu management, online reservations, and customer reviews.",
    github: "#",
    tech: ["Frontend", "Firebase", "Motion"],
  },
  5: {
    title: "NFT Launchpad",
    images: [img11, img12, img13],
    desc: "A platform for launching and managing NFT collections in Blockchain.",
    github: "#",
    liveDemo: "https://mintifyx.live/",
    tech: ["Web3", "React", "Solidity"],
  },
  6: {
    title: "Stakify",
    images: [img14, img15, img16, img17, img18],
    desc: "A staking platform for Etherium-based tokens.",
    github: "#",
    liveDemo: "https://stakify.tech/",
    tech: ["Web3", "React", "Solidity"],
  },

};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData[id];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#030303] flex items-center justify-center text-white">
        <p className="text-xl font-medium opacity-50">Project not found.</p>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative bg-[#030303] min-h-screen text-white py-20 px-6 md:px-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="group mb-10 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10">
            <ChevronLeft size={20} />
          </div>
          <span className="font-medium">Return to Portfolio</span>
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Interactive Carousel */}
          <div className="space-y-6">
            <motion.div
              layoutId={`img-${id}`}
              className="relative aspect-video rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden group shadow-2xl"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={project.images[currentIndex]}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                />
              </AnimatePresence>

              {/* Action Overlays */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="absolute top-4 right-4 p-3 rounded-xl bg-black/40 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Maximize2 size={20} />
              </button>

              {/* Navigation Arrows */}
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="p-3 rounded-full bg-black/50 text-white backdrop-blur-md pointer-events-auto hover:bg-purple-600 transition-all opacity-0 group-hover:opacity-100"
                >
                  <ArrowLeft size={20} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="p-3 rounded-full bg-black/50 text-white backdrop-blur-md pointer-events-auto hover:bg-cyan-600 transition-all opacity-0 group-hover:opacity-100"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>

            {/* Thumbnail Strip */}
            <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative shrink-0 w-24 aspect-video rounded-xl overflow-hidden border-2 transition-all ${idx === currentIndex ? "border-purple-500 scale-105" : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-xs font-bold uppercase tracking-widest">
                <Sparkles size={14} /> Case Study
              </div>
              <h1 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-linear-to-r from-white via-white to-gray-500">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {project.tech?.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-gray-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-purple-500/30 pl-6">
              {project.desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Show GitHub button for projects 1, 2, 3, 4 */}
              {["1", "2", "3", "4"].includes(id) && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-linear-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-2xl font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all"
                >
                  <Github size={20} /> View Source Code
                </motion.a>
              )}
              {/* Show Live Demo button for projects 5, 6 */}
              {["5", "6"].includes(id) && project.liveDemo && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all"
                >
                  Visit Site
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-100 flex items-center justify-center p-4 md:p-12"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors"
            >
              <X size={40} />
            </button>

            <div className="relative w-full max-w-7xl flex items-center justify-center">
              <button
                onClick={prevImage}
                className="absolute left-0 text-white/30 hover:text-white transition-colors hidden md:block"
              >
                <ArrowLeft size={60} />
              </button>

              <motion.img
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={project.images[currentIndex]}
                className="max-h-[85vh] max-w-full object-contain rounded-xl"
              />

              <button
                onClick={nextImage}
                className="absolute right-0 text-white/30 hover:text-white transition-colors hidden md:block"
              >
                <ArrowRight size={60} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectDetail;
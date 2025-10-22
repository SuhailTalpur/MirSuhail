import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaGithub, FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";

// Example images
import img1 from "../assets/images/project1.png";
import img2 from "../assets/images/project11.png";
import img3 from "../assets/images/project12.png";
import img4 from "../assets/images/project2.png";
import img5 from "../assets/images/project21.png";
import img6 from "../assets/images/project23.png";
import img7 from "../assets/images/project3.png";
import img8 from "../assets/images/project32.png";
import img9 from "../assets/images/project33.png";
import img10 from "../assets/images/project4.png";

const projectData = {
  1: {
    title: "AI Chat App",
    images: [img1, img2, img3],
    desc: "This AI Chat App is powered by Google Gemini API and MERN stack. It allows users to sign in, chat with AI, and store their chat history securely.",
    github: "https://github.com/SuhailTalpur/AI-CHat-App.git",
  },
  2: {
    title: "E-Commerce Website",
    images: [img4, img5, img6],
    desc: "A responsive e-commerce platform with product management, user authentication, and secure payment integration.",
    github: "https://github.com/SuhailTalpur/MERN-Stack-E-connerce-website.git",
  },
  3: {
    title: "AI Image Generator",
    images: [img10],
    desc: "An AI-powered image generator that creates unique images based on user prompts using advanced machine learning models.",
    github: "https://github.com/SuhailTalpur/AI-Image-Generator-App.git",
  },
  4: {
    title: "Restaurant Website",
    images: [img7, img8, img9],
    desc: "A full-stack restaurant website with menu management, online reservations, and customer reviews.",
    github: "#",
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData[id];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!project) {
    return (
      <div className="text-center py-20 text-gray-700">
        <p>Project not found.</p>
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
    <section className="bg-gray-100 min-h-screen py-5 px-6 md:px-20 relative">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-700 transition flex items-center gap-2 cursor-pointer"
      >
        <IoChevronBack size={17} /> Back
      </button>

      <h2 className="text-4xl font-bold text-gray-900 mb-6">
        {project.title}
      </h2>

      {/* Carousel */}
      <div className="relative w-full max-w-3xl mx-auto mb-8">
        <div
          className="overflow-hidden rounded-2xl shadow-lg cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={project.images[currentIndex]}
            alt={project.title}
            className="w-full h-[400px] object-cover transition-all duration-500"
          />
        </div>

        {/* Arrows */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 -translate-y-1/2 left-4 bg-black/50 text-white p-3 rounded-full hover:bg-black transition cursor-pointer"
        >
          <FaArrowLeft size={18} />
        </button>

        <button
          onClick={nextImage}
          className="absolute top-1/2 -translate-y-1/2 right-4 bg-black/50 text-white p-3 rounded-full hover:bg-black transition cursor-pointer"
        >
          <FaArrowRight size={18} />
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {project.images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                index === currentIndex ? "bg-black" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-lg max-w-2xl mb-8">{project.desc}</p>

      {/* GitHub Button */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition"
      >
        <FaGithub className="mr-2 text-xl" /> View on GitHub
      </a>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <button
            className="absolute top-6 right-6 text-white bg-black/50 p-3 rounded-full hover:bg-black transition cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          >
            <FaTimes size={22} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-8 text-white bg-black/50 p-4 rounded-full hover:bg-black transition cursor-pointer"
          >
            <FaArrowLeft size={20} />
          </button>

          <img
            src={project.images[currentIndex]}
            alt="Project preview"
            className="max-h-[80vh] max-w-[90vw] object-contain rounded-2xl shadow-lg"
          />

          <button
            onClick={nextImage}
            className="absolute right-8 text-white bg-black/50 p-4 rounded-full hover:bg-black transition cursor-pointer"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectDetail;

import React from "react";
import { useNavigate } from "react-router-dom";

import project1 from "../assets/images/project1.PNG";
import project2 from "../assets/images/project2.PNG";
import project3 from "../assets/images/project3.PNG";
import project4 from "../assets/images/project4.png";

const projects = [
  {
    id: 1,
    title: "AI Chat App",
    img: project1,
    shortDesc: "A modern AI chat app built using the MERN stack and Gemini API.",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    img: project2,
    shortDesc: "Full-stack online store with authentication and admin dashboard.",
  },
  {
    id: 3,
    title: "AI Image Generator",
    img: project4,
    shortDesc: "A Solana staking platform with PNFT and escrow contract support.",
  },
  {
    id: 4,
    title: "Restaurant Website",
    img: project3,
    shortDesc: "A real-time restaurant web app displaying menu items and reservations.",
  },
];

const Work = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <section className="bg-[#190019] text-white py-16 px-6 md:px-16 text-center">
      <h2 className="text-4xl font-bold text-white mb-2">Portfolio</h2>
      <p className="text-lg text-gray-200 mb-12">Check My Work</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleCardClick(project.id)}
            className="cursor-pointer p-1 bg-white rounded-2xl shadow-md shadow-gray-300/50 hover:shadow-2xl transition-transform transform ease-in-out hover:-translate-y-2"
          >
            <img
              src={project.img}
              alt={project.title}
              className="rounded-2xl h-48 w-full object-cover"
            />
            <div className="p-5 text-left">
              <h3 className="text-xl font-semibold mb-2 text-black">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.shortDesc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;

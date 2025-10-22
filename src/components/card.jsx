import React from "react";
import { FaPaintBrush, FaCode, FaRobot } from "react-icons/fa";

const Card = () => {
  const skills = [
    {
      title: "Web Design",
      icon: <FaPaintBrush className="text-4xl text-pink-500 mb-4" />,
      desc: "Creating visually stunning, user-friendly designs with a focus on modern UI/UX trends.",
    },
    {
      title: "Web Development",
      icon: <FaCode className="text-4xl text-blue-500 mb-4" />,
      desc: "Building fast, secure, and scalable web applications using the MERN stack and Tailwind CSS.",
    },
    {
      title: "AI Web Application",
      icon: <FaRobot className="text-4xl text-green-500 mb-4" />,
      desc: "Integrating AI tools and APIs to create intelligent and automated web experiences.",
    },
  ];

  return (
    <section className="bg-[#190019] py-16 px-6 md:px-16 text-center">
      <h2 className="text-4xl font-bold mb-12 text-white">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#FBE4D8] shadow-lg shadow-[#FBE4D8]/30 rounded-2xl p-8 hover:shadow-2xl transition-transform transform hover:-translate-y-2"
          >
            <div className="flex flex-col items-center">
              {skill.icon}
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">{skill.title}</h3>
              <p className="text-gray-600 text-base">{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;

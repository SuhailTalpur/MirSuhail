import React from "react";
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
    <section className="bg-[#190019] text-white py-16 text-center overflow-hidden">
      <h2 className="text-4xl font-bold mb-10">Technologies I Use</h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll">
          {/* duplicate list for seamless infinite loop */}
          {[...techs, ...techs].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-8 min-w-[150px]"
            >
              <img
                src={tech.img}
                alt={tech.name}
                className="w-16 h-16 object-contain mb-3"
              />
              <p className="text-gray-300 font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;

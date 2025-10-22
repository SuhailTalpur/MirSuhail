import React from "react";



const Footer = () => {

  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };


  return (
    <footer className="relative bg-white text-gray-800">
      {/* Wavy Top Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-10"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 150"
        >
          <path
            d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z"
            fill="#190019"
          ></path>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left - Name */}
        <h2 className="text-2xl font-bold mb-4 md:mb-0">Portfolio.Suhail</h2>

        {/* Right - Links */}
        <ul className="flex space-x-6 text-gray-600 font-medium">
          <li><a href="#home" onClick={(e) => handleScroll(e, "home")} className="hover:text-[#190019]">Home</a></li>
          <li><a href="#about" onClick={(e) => handleScroll(e, "about")} className="hover:text-[#190019]">Skills</a></li>
          <li><a href="#services" onClick={(e) => handleScroll(e, "services")} className="hover:text-[#190019]">Projects</a></li>
          <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="hover:text-[#190019]">Contact</a></li>
        </ul>
      </div>

      {/* Bottom - Copyright */}
      <div className="text-center text-gray-500 text-sm border-t border-gray-200 py-4">
        © {new Date().getFullYear()} Muhammad.Suhail. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

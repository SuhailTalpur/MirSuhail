import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowUp, Code, Heart } from "lucide-react";

const Footer = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030303] text-white pt-20 border-t border-white/5 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-linear-to-t from-purple-900/10 to-transparent blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-5">
          {/* Left - Brand Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="p-1.5 bg-linear-to-br from-purple-600 to-cyan-500 rounded-lg shadow-lg">
                <Code size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400">
                Portfolio.Suhail
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs text-center md:text-left">
              Building digital experiences with precision, passion, and modern technologies.
            </p>
          </div>

          {/* Center - Navigation Links */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-400">
              <li>
                <a href="#home" onClick={(e) => handleScroll(e, "home")} className="hover:text-cyan-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#skills" onClick={(e) => handleScroll(e, "skills")} className="hover:text-purple-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleScroll(e, "projects")} className="hover:text-blue-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Right - Social & Back to Top */}
          <div className="flex items-center gap-4">
            <motion.a whileHover={{ y: -3 }} href="https://github.com/SuhailTalpur" target="_blank" className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/50 hover:text-purple-400 transition-all">
              <Github size={18} />
            </motion.a>
            <motion.a whileHover={{ y: -3 }} href="https://www.linkedin.com/in/mir-suhail-talpur/" target="_blank" className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all">
              <Linkedin size={18} />
            </motion.a>
            <motion.button
              whileHover={{ y: -3 }}
              onClick={(e) => handleScroll(e, "home")}
              className="p-2 rounded-full bg-linear-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/20"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>

        {/* Bottom - Copyright Section */}
        <div className="border-t border-white/5 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs tracking-wider uppercase">
            © {currentYear} <span className="text-gray-400">Muhammad Suhail</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[10px] text-gray-700 font-bold tracking-widest uppercase">
            <span>Designed with</span>
            <div className="text-red-500"><Heart size={13}/> </div>
            <span>Built with React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
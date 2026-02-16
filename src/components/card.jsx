import React from "react";
import { motion } from "framer-motion";
import { Paintbrush, Code2, Bot, Sparkles } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      title: "Web Design",
      icon: <Paintbrush className="w-8 h-8 text-purple-400" />,
      desc: "Creating visually stunning, user-friendly designs with a focus on modern UI/UX trends and accessibility.",
      gradient: "from-purple-500/20 to-transparent",
    },
    {
      title: "Web Development",
      icon: <Code2 className="w-8 h-8 text-blue-400" />,
      desc: "Building fast, secure, and scalable web applications using the MERN stack and Tailwind CSS.",
      gradient: "from-blue-500/20 to-transparent",
    },
    {
      title: "AI Web Application",
      icon: <Bot className="w-8 h-8 text-cyan-400" />,
      desc: "Integrating AI tools and LLM APIs to create intelligent, automated, and predictive web experiences.",
      gradient: "from-cyan-500/20 to-transparent",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-[#030303] py-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-purple-400 text-xs font-medium uppercase tracking-widest"
          >
            <Sparkles size={14} /> My Expertise
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Specialized <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-cyan-400">Skills</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Leveraging cutting-edge technologies to transform your ideas into 
            high-performing digital realities.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
            >
              {/* Card Gradient Hover Effect */}
              <div className={`absolute inset-0 bg-linear-to-b ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-purple-500/50 transition-all duration-500">
                  {skill.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                  {skill.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {skill.desc}
                </p>
              </div>

              {/* Decorative Corner Light */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-white/5 blur-2xl rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
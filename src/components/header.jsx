import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Code, Sparkles, ChevronRight, Github, Linkedin, Twitter } from "lucide-react";
import headerImg from "../assets/images/myimg.jpeg"; // Your image path

const PremiumHeaderHero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = ["Home", "Skills", "Projects", "Contact"];

    // Animation Variants
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const fadeInUp = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <div className="relative min-h-screen bg-[#030303] text-white overflow-hidden selection:bg-cyan-500/30">
            {/* --- BACKGROUND EFFECTS --- */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-cyan-600/10 blur-[120px] rounded-full" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
            </div>

            {/* --- NAVBAR --- */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 w-full z-50 px-4 py-6"
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="p-1.5 bg-linear-to-br from-purple-600 via-blue-500 to-cyan-500 rounded-lg shadow-lg">
                            <Code size={20} className="text-white" />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400">
                            Suhail.
                        </span>
                    </div>

                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase()}`} className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden md:flex items-center gap-3">
                        <motion.a whileHover={{ scale: 1.1 }} href="https://github.com/SuhailTalpur" target="_blank" className="p-2 text-gray-400 hover:text-white"><Github size={18} /></motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 bg-linear-to-r from-purple-600 to-blue-600 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg"
                        >
                            Contact
                        </motion.a>
                    </div>

                    <button className="md:hidden p-2 text-gray-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* --- HERO SECTION --- */}
            <main className="relative z-10 container mx-auto px-6 pt-32 lg:pt-48 pb-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    {/* Left Side: Content */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="flex-1 text-center lg:text-left space-y-8"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-cyan-400 text-xs font-medium backdrop-blur-md">
                            <Sparkles size={14} /> Available for new projects
                        </motion.div>

                        <motion.div variants={fadeInUp} className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-medium text-gray-400">Hello Mate, I'm</h2>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-none">
                                Mir <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-blue-500 to-cyan-400">Suhail</span>
                            </h1>
                            <h3 className="text-2xl md:text-4xl font-semibold text-gray-300">A Full-Stack Web Developer</h3>
                        </motion.div>

                        <motion.p variants={fadeInUp} className="max-w-xl mx-auto lg:mx-0 text-gray-400 text-lg leading-relaxed">
                            I specialize in the MERN Stack, building high-performance web applications
                            with seamless user interfaces and robust backend architectures.
                        </motion.p>

                        {/* <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <button className="px-8 py-4 bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full font-bold shadow-[0_0_25px_-5px_rgba(147,51,234,0.5)] hover:scale-105 transition-all flex items-center gap-2">
                                Hire Me <ArrowRight size={18} />
                            </button>
                            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold backdrop-blur-sm hover:bg-white/10 transition-all">
                                View Projects
                            </button>
                        </motion.div> */}
                    </motion.div>

                    {/* Right Side: Image with Decorative Elements */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative flex-1 flex justify-center lg:justify-end"
                    >
                        {/* Animated Ring Decor */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-[320px] h-[320px] md:w-[450px] md:h-[450px] rounded-full border border-white/5 animate-[spin_20s_linear_infinite]" />
                            <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-dashed border-white/10 animate-[spin_30s_linear_infinite_reverse]" />
                        </div>

                        {/* Profile Image Container */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-cyan-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative">
                                <img
                                    src={headerImg}
                                    alt="Mir Suhail"
                                    className="w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] object-cover rounded-full border-4 border-white/10 p-2 grayscale hover:grayscale-0 transition-all duration-700"
                                />

                                {/* Floating Social Icons */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 3 }}
                                    className="absolute -top-4 right-8 p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl"
                                >
                                    <Linkedin size={24} className="text-blue-400" />
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
                                    className="absolute bottom-10 -left-4 p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl"
                                >
                                    <Twitter size={24} className="text-cyan-400" />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* --- MOBILE MENU --- */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        className="fixed inset-0 z-[60] bg-black/95 flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-10 text-white"><X size={32} /></button>
                        {navLinks.map((link) => (
                            <a key={link} href="#" onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold hover:text-cyan-400 transition-colors">
                                {link}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PremiumHeaderHero;
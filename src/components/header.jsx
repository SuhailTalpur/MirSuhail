import React from "react";
import headerImg from "../assets/images/myimg.jpeg"; // replace with your image path

const Header = () => {
    const handleScroll = (e, id) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <header className="bg-[#190019] text-white min-h-screen flex flex-col">
            {/* Navbar */}
            <nav className="flex items-center justify-between px-15 py-4">
                <div className="flex items-center space-x-3">
                    <h1 className="text-2xl font-bold text-[#FBE4D8]">Suhail.</h1>
                </div>
                <ul className="hidden md:flex space-x-8 text-lg font-medium">
                    <li><a href="#home" onClick={(e) => handleScroll(e, "home")} className="hover:text-gray-200">Home</a></li>
                    <li><a href="#about" onClick={(e) => handleScroll(e, "about")} className="hover:text-gray-200">Skills</a></li>
                    <li><a href="#services" onClick={(e) => handleScroll(e, "services")} className="hover:text-gray-200">Projects</a></li>
                    <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="hover:text-gray-200">Contact</a></li>
                </ul>
                <button className="md:hidden text-3xl">&#9776;</button>
            </nav>

            {/* Main Section */}
            <div className="flex flex-col md:flex-row items-center justify-between flex-1 px-8 md:px-30">
                <div className="text-center md:text-left max-w-xl">
                    <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-[#FBE4D8]">
                        Hello Mate
                    </h2>
                    <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-[#FBE4D8]">
                        I'm Mir Suhail
                    </h2>
                    <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-[#FBE4D8]">
                        A Web Developer
                    </h2>
                    <p className="text-lg text-gray-100 my-4">
                        I am a skilled MERN Stack Web Developer dedicated to crafting exceptional web experiences.
                    </p>

                    <button className="bg-[#DFB6B2] text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
                        Contact
                    </button>
                </div>

                <div className="mt-10 md:mt-0">
                    <img
                        src={headerImg}
                        alt="Header Illustration"
                        className="w-80 md:w-[400px] drop-shadow-2xl rounded-full border-4 border-[#DFB6B2] p-1"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
